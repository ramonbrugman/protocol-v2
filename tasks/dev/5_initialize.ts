import {task} from '@nomiclabs/buidler/config';
import {
  deployLendingPoolCollateralManager,
  deployMockFlashLoanReceiver,
  deployWalletBalancerProvider,
  deployAaveProtocolTestHelpers,
  deployWETHGateway,
} from '../../helpers/contracts-deployments';
import {
  ConfigNames,
  getReservesConfigByPool,
  getWethAddress,
  loadPoolConfig,
} from '../../helpers/configuration';

import {tEthereumAddress, AavePools, eContractid} from '../../helpers/types';
import {waitForTx, filterMapBy} from '../../helpers/misc-utils';
import {
  enableReservesToBorrowByHelper,
  enableReservesAsCollateralByHelper,
  initReservesByHelper,
} from '../../helpers/init-helpers';
import {getAllTokenAddresses} from '../../helpers/mock-helpers';
import {ZERO_ADDRESS} from '../../helpers/constants';
import {getAllMockedTokens, getLendingPoolAddressesProvider} from '../../helpers/contracts-getters';
import {insertContractAddressInDb} from '../../helpers/contracts-helpers';

task('dev:initialize-lending-pool', 'Initialize lending pool configuration.')
  .addFlag('verify', 'Verify contracts at Etherscan')
  .addParam('pool', `Pool name to retrieve configuration, supported: ${Object.values(ConfigNames)}`)
  .setAction(async ({verify, pool}, localBRE) => {
    await localBRE.run('set-bre');
    const poolConfig = loadPoolConfig(pool);

    const mockTokens = await getAllMockedTokens();
    const allTokenAddresses = getAllTokenAddresses(mockTokens);

    const addressesProvider = await getLendingPoolAddressesProvider();

    const protoPoolReservesAddresses = <{[symbol: string]: tEthereumAddress}>(
      filterMapBy(allTokenAddresses, (key: string) => !key.includes('UNI_'))
    );

    const testHelpers = await deployAaveProtocolTestHelpers(addressesProvider.address, verify);

    const reservesParams = getReservesConfigByPool(AavePools.proto);

    const admin = await addressesProvider.getAaveAdmin();

    await initReservesByHelper(reservesParams, protoPoolReservesAddresses, admin, ZERO_ADDRESS);
    await enableReservesToBorrowByHelper(
      reservesParams,
      protoPoolReservesAddresses,
      testHelpers,
      admin
    );
    await enableReservesAsCollateralByHelper(
      reservesParams,
      protoPoolReservesAddresses,
      testHelpers,
      admin
    );

    const collateralManager = await deployLendingPoolCollateralManager(verify);
    await waitForTx(
      await addressesProvider.setLendingPoolCollateralManager(collateralManager.address)
    );

    const mockFlashLoanReceiver = await deployMockFlashLoanReceiver(
      addressesProvider.address,
      verify
    );
    await insertContractAddressInDb(
      eContractid.MockFlashLoanReceiver,
      mockFlashLoanReceiver.address
    );

    await deployWalletBalancerProvider(addressesProvider.address, verify);

    await insertContractAddressInDb(eContractid.AaveProtocolTestHelpers, testHelpers.address);

    const lendingPoolAddress = await addressesProvider.getLendingPool();
    const wethAddress = await getWethAddress(poolConfig);
    await deployWETHGateway([wethAddress, lendingPoolAddress]);
  });