/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {Contract, Signer} from 'ethers';
import {Provider} from 'ethers/providers';

import {ILendingPoolAddressesProvider} from './ILendingPoolAddressesProvider';

export class ILendingPoolAddressesProviderFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ILendingPoolAddressesProvider {
    return new Contract(address, _abi, signerOrProvider) as ILendingPoolAddressesProvider;
  }
}

const _abi = [
  {
    inputs: [],
    name: 'getFeeProvider',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getLendingPool',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getLendingPoolConfigurator',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getLendingPoolLiquidationManager',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getLendingPoolManager',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getLendingRateOracle',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getPriceOracle',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getTokenDistributor',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_feeProvider',
        type: 'address',
      },
    ],
    name: 'setFeeProviderImpl',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_configurator',
        type: 'address',
      },
    ],
    name: 'setLendingPoolConfiguratorImpl',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_pool',
        type: 'address',
      },
    ],
    name: 'setLendingPoolImpl',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_manager',
        type: 'address',
      },
    ],
    name: 'setLendingPoolLiquidationManager',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_lendingPoolManager',
        type: 'address',
      },
    ],
    name: 'setLendingPoolManager',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_lendingRateOracle',
        type: 'address',
      },
    ],
    name: 'setLendingRateOracle',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_priceOracle',
        type: 'address',
      },
    ],
    name: 'setPriceOracle',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_tokenDistributor',
        type: 'address',
      },
    ],
    name: 'setTokenDistributor',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];