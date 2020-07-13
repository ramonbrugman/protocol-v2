/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {Contract, Signer} from 'ethers';
import {Provider} from 'ethers/providers';

import {IPriceOracle} from './IPriceOracle';

export class IPriceOracleFactory {
  static connect(address: string, signerOrProvider: Signer | Provider): IPriceOracle {
    return new Contract(address, _abi, signerOrProvider) as IPriceOracle;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_asset',
        type: 'address',
      },
    ],
    name: 'getAssetPrice',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_asset',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_price',
        type: 'uint256',
      },
    ],
    name: 'setAssetPrice',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];