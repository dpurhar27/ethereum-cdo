/**
 * This file is auto-generated using abi-gen. Don't edit directly.
 * Templates can be found at https://github.com/0xProject/0x.js/tree/development/packages/abi-gen-templates.
 */
// tslint:disable-next-line:no-unused-variable
import { TxData, TxDataPayable } from "../common";
import { promisify } from "@0xproject/utils";
import { classUtils } from "../common";
import { BigNumber } from "bignumber.js";
import * as fs from "fs-extra";
import * as Web3 from "web3";

import { BaseContract } from "../base_contract";

export class DummyContractContract extends BaseContract {
  public SECOND_SET = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<string> {
      const self = this as DummyContractContract;
      const result = await promisify<string>(
        self.web3ContractInstance.SECOND_SET.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public revokeInFirstSet = {
    async sendTransactionAsync(
      agent: string,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as DummyContractContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.revokeInFirstSet.estimateGasAsync.bind(self, agent)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.revokeInFirstSet,
        self.web3ContractInstance
      )(agent, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      agent: string,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as DummyContractContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.revokeInFirstSet.estimateGas,
        self.web3ContractInstance
      )(agent, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(agent: string, txData: TxData = {}): string {
      const self = this as DummyContractContract;
      const abiEncodedTransactionData = self.web3ContractInstance.revokeInFirstSet.getData();
      return abiEncodedTransactionData;
    }
  };
  public getSecondSetAuthorizedAgents = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<string[]> {
      const self = this as DummyContractContract;
      const result = await promisify<string[]>(
        self.web3ContractInstance.getSecondSetAuthorizedAgents.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public isAuthorizedInSecondSet = {
    async callAsync(
      agent: string,
      defaultBlock?: Web3.BlockParam
    ): Promise<boolean> {
      const self = this as DummyContractContract;
      const result = await promisify<boolean>(
        self.web3ContractInstance.isAuthorizedInSecondSet.call,
        self.web3ContractInstance
      )(agent);
      return result;
    }
  };
  public revokeInSecondSet = {
    async sendTransactionAsync(
      agent: string,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as DummyContractContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.revokeInSecondSet.estimateGasAsync.bind(self, agent)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.revokeInSecondSet,
        self.web3ContractInstance
      )(agent, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      agent: string,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as DummyContractContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.revokeInSecondSet.estimateGas,
        self.web3ContractInstance
      )(agent, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(agent: string, txData: TxData = {}): string {
      const self = this as DummyContractContract;
      const abiEncodedTransactionData = self.web3ContractInstance.revokeInSecondSet.getData();
      return abiEncodedTransactionData;
    }
  };
  public getFirstSetAuthorizedAgents = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<string[]> {
      const self = this as DummyContractContract;
      const result = await promisify<string[]>(
        self.web3ContractInstance.getFirstSetAuthorizedAgents.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public authorizeInSecondSet = {
    async sendTransactionAsync(
      agent: string,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as DummyContractContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.authorizeInSecondSet.estimateGasAsync.bind(self, agent)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.authorizeInSecondSet,
        self.web3ContractInstance
      )(agent, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      agent: string,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as DummyContractContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.authorizeInSecondSet.estimateGas,
        self.web3ContractInstance
      )(agent, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(agent: string, txData: TxData = {}): string {
      const self = this as DummyContractContract;
      const abiEncodedTransactionData = self.web3ContractInstance.authorizeInSecondSet.getData();
      return abiEncodedTransactionData;
    }
  };
  public authorizeInFirstSet = {
    async sendTransactionAsync(
      agent: string,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as DummyContractContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.authorizeInFirstSet.estimateGasAsync.bind(self, agent)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.authorizeInFirstSet,
        self.web3ContractInstance
      )(agent, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      agent: string,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as DummyContractContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.authorizeInFirstSet.estimateGas,
        self.web3ContractInstance
      )(agent, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(agent: string, txData: TxData = {}): string {
      const self = this as DummyContractContract;
      const abiEncodedTransactionData = self.web3ContractInstance.authorizeInFirstSet.getData();
      return abiEncodedTransactionData;
    }
  };
  public isAuthorizedInFirstSet = {
    async callAsync(
      agent: string,
      defaultBlock?: Web3.BlockParam
    ): Promise<boolean> {
      const self = this as DummyContractContract;
      const result = await promisify<boolean>(
        self.web3ContractInstance.isAuthorizedInFirstSet.call,
        self.web3ContractInstance
      )(agent);
      return result;
    }
  };
  public FIRST_SET = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<string> {
      const self = this as DummyContractContract;
      const result = await promisify<string>(
        self.web3ContractInstance.FIRST_SET.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  async deploy(...args: any[]): Promise<any> {
    const wrapper = this;
    const rejected = false;

    return new Promise((resolve, reject) => {
      wrapper.web3ContractInstance.new(
        wrapper.defaults,
        (err: string, contract: Web3.ContractInstance) => {
          if (err) {
            reject(err);
          } else if (contract.address) {
            wrapper.web3ContractInstance = wrapper.web3ContractInstance.at(
              contract.address
            );
            wrapper.address = contract.address;
            resolve();
          }
        }
      );
    });
  }
  static async deployed(
    web3: Web3,
    defaults: Partial<TxData>
  ): Promise<DummyContractContract> {
    const currentNetwork = web3.version.network;
    const { abi, networks } = await this.getArtifactsData(web3);
    const web3ContractInstance = web3.eth
      .contract(abi)
      .at(networks[currentNetwork].address);

    return new DummyContractContract(web3ContractInstance, defaults);
  }
  static async at(
    address: string,
    web3: Web3,
    defaults: Partial<TxData>
  ): Promise<DummyContractContract> {
    const { abi } = await this.getArtifactsData(web3);
    const web3ContractInstance = web3.eth.contract(abi).at(address);

    return new DummyContractContract(web3ContractInstance, defaults);
  }
  private static async getArtifactsData(web3: Web3): Promise<any> {
    try {
      const artifact = await fs.readFile(
        "build/contracts/DummyContract.json",
        "utf8"
      );
      const { abi, networks } = JSON.parse(artifact);
      return { abi, networks };
    } catch (e) {
      console.error("Artifacts malformed or nonexistent: " + e.toString());
    }
  }
  constructor(
    web3ContractInstance: Web3.ContractInstance,
    defaults: Partial<TxData>
  ) {
    super(web3ContractInstance, defaults);
    classUtils.bindAll(this, ["web3ContractInstance", "defaults"]);
  }
} // tslint:disable:max-file-line-count
