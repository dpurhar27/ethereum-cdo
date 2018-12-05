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

export class CollateralizerContract extends BaseContract {
  public debtKernelAddress = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<string> {
      const self = this as CollateralizerContract;
      const result = await promisify<string>(
        self.web3ContractInstance.debtKernelAddress.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public tokenTransferProxy = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<string> {
      const self = this as CollateralizerContract;
      const result = await promisify<string>(
        self.web3ContractInstance.tokenTransferProxy.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public CONTEXT = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<string> {
      const self = this as CollateralizerContract;
      const result = await promisify<string>(
        self.web3ContractInstance.CONTEXT.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public debtRegistry = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<string> {
      const self = this as CollateralizerContract;
      const result = await promisify<string>(
        self.web3ContractInstance.debtRegistry.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public unpause = {
    async sendTransactionAsync(txData: TxData = {}): Promise<string> {
      const self = this as CollateralizerContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.unpause.estimateGasAsync.bind(self)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.unpause,
        self.web3ContractInstance
      )(txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(txData: TxData = {}): Promise<number> {
      const self = this as CollateralizerContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.unpause.estimateGas,
        self.web3ContractInstance
      )(txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(txData: TxData = {}): string {
      const self = this as CollateralizerContract;
      const abiEncodedTransactionData = self.web3ContractInstance.unpause.getData();
      return abiEncodedTransactionData;
    }
  };
  public returnCollateral = {
    async sendTransactionAsync(
      agreementId: string,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as CollateralizerContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.returnCollateral.estimateGasAsync.bind(self, agreementId)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.returnCollateral,
        self.web3ContractInstance
      )(agreementId, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      agreementId: string,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as CollateralizerContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.returnCollateral.estimateGas,
        self.web3ContractInstance
      )(agreementId, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(
      agreementId: string,
      txData: TxData = {}
    ): string {
      const self = this as CollateralizerContract;
      const abiEncodedTransactionData = self.web3ContractInstance.returnCollateral.getData();
      return abiEncodedTransactionData;
    }
  };
  public timestampAdjustedForGracePeriod = {
    async callAsync(
      gracePeriodInDays: BigNumber,
      defaultBlock?: Web3.BlockParam
    ): Promise<BigNumber> {
      const self = this as CollateralizerContract;
      const result = await promisify<BigNumber>(
        self.web3ContractInstance.timestampAdjustedForGracePeriod.call,
        self.web3ContractInstance
      )(gracePeriodInDays);
      return result;
    }
  };
  public paused = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<boolean> {
      const self = this as CollateralizerContract;
      const result = await promisify<boolean>(
        self.web3ContractInstance.paused.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public SECONDS_IN_DAY = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<BigNumber> {
      const self = this as CollateralizerContract;
      const result = await promisify<BigNumber>(
        self.web3ContractInstance.SECONDS_IN_DAY.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public collateralize = {
    async sendTransactionAsync(
      agreementId: string,
      collateralizer: string,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as CollateralizerContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.collateralize.estimateGasAsync.bind(
          self,
          agreementId,
          collateralizer
        )
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.collateralize,
        self.web3ContractInstance
      )(agreementId, collateralizer, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      agreementId: string,
      collateralizer: string,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as CollateralizerContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.collateralize.estimateGas,
        self.web3ContractInstance
      )(agreementId, collateralizer, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(
      agreementId: string,
      collateralizer: string,
      txData: TxData = {}
    ): string {
      const self = this as CollateralizerContract;
      const abiEncodedTransactionData = self.web3ContractInstance.collateralize.getData();
      return abiEncodedTransactionData;
    }
  };
  public pause = {
    async sendTransactionAsync(txData: TxData = {}): Promise<string> {
      const self = this as CollateralizerContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.pause.estimateGasAsync.bind(self)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.pause,
        self.web3ContractInstance
      )(txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(txData: TxData = {}): Promise<number> {
      const self = this as CollateralizerContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.pause.estimateGas,
        self.web3ContractInstance
      )(txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(txData: TxData = {}): string {
      const self = this as CollateralizerContract;
      const abiEncodedTransactionData = self.web3ContractInstance.pause.getData();
      return abiEncodedTransactionData;
    }
  };
  public owner = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<string> {
      const self = this as CollateralizerContract;
      const result = await promisify<string>(
        self.web3ContractInstance.owner.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public revokeCollateralizeAuthorization = {
    async sendTransactionAsync(
      agent: string,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as CollateralizerContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.revokeCollateralizeAuthorization.estimateGasAsync.bind(self, agent)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.revokeCollateralizeAuthorization,
        self.web3ContractInstance
      )(agent, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      agent: string,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as CollateralizerContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.revokeCollateralizeAuthorization.estimateGas,
        self.web3ContractInstance
      )(agent, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(agent: string, txData: TxData = {}): string {
      const self = this as CollateralizerContract;
      const abiEncodedTransactionData = self.web3ContractInstance.revokeCollateralizeAuthorization.getData();
      return abiEncodedTransactionData;
    }
  };
  public tokenRegistry = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<string> {
      const self = this as CollateralizerContract;
      const result = await promisify<string>(
        self.web3ContractInstance.tokenRegistry.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public addAuthorizedCollateralizeAgent = {
    async sendTransactionAsync(
      agent: string,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as CollateralizerContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.addAuthorizedCollateralizeAgent.estimateGasAsync.bind(self, agent)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.addAuthorizedCollateralizeAgent,
        self.web3ContractInstance
      )(agent, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      agent: string,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as CollateralizerContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.addAuthorizedCollateralizeAgent.estimateGas,
        self.web3ContractInstance
      )(agent, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(agent: string, txData: TxData = {}): string {
      const self = this as CollateralizerContract;
      const abiEncodedTransactionData = self.web3ContractInstance.addAuthorizedCollateralizeAgent.getData();
      return abiEncodedTransactionData;
    }
  };
  public unpackCollateralParametersFromBytes = {
    async callAsync(
      parameters: string,
      defaultBlock?: Web3.BlockParam
    ): Promise<[BigNumber, BigNumber, BigNumber]> {
      const self = this as CollateralizerContract;
      const result = await promisify<[BigNumber, BigNumber, BigNumber]>(
        self.web3ContractInstance.unpackCollateralParametersFromBytes.call,
        self.web3ContractInstance
      )(parameters);
      return result;
    }
  };
  public agreementToCollateralizer = {
    async callAsync(
      index_0: string,
      defaultBlock?: Web3.BlockParam
    ): Promise<string> {
      const self = this as CollateralizerContract;
      const result = await promisify<string>(
        self.web3ContractInstance.agreementToCollateralizer.call,
        self.web3ContractInstance
      )(index_0);
      return result;
    }
  };
  public seizeCollateral = {
    async sendTransactionAsync(
      agreementId: string,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as CollateralizerContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.seizeCollateral.estimateGasAsync.bind(self, agreementId)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.seizeCollateral,
        self.web3ContractInstance
      )(agreementId, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      agreementId: string,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as CollateralizerContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.seizeCollateral.estimateGas,
        self.web3ContractInstance
      )(agreementId, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(
      agreementId: string,
      txData: TxData = {}
    ): string {
      const self = this as CollateralizerContract;
      const abiEncodedTransactionData = self.web3ContractInstance.seizeCollateral.getData();
      return abiEncodedTransactionData;
    }
  };
  public transferOwnership = {
    async sendTransactionAsync(
      newOwner: string,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as CollateralizerContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.transferOwnership.estimateGasAsync.bind(self, newOwner)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.transferOwnership,
        self.web3ContractInstance
      )(newOwner, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      newOwner: string,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as CollateralizerContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.transferOwnership.estimateGas,
        self.web3ContractInstance
      )(newOwner, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(
      newOwner: string,
      txData: TxData = {}
    ): string {
      const self = this as CollateralizerContract;
      const abiEncodedTransactionData = self.web3ContractInstance.transferOwnership.getData();
      return abiEncodedTransactionData;
    }
  };
  public getAuthorizedCollateralizeAgents = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<string[]> {
      const self = this as CollateralizerContract;
      const result = await promisify<string[]>(
        self.web3ContractInstance.getAuthorizedCollateralizeAgents.call,
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
  ): Promise<CollateralizerContract> {
    const currentNetwork = web3.version.network;
    const { abi, networks } = await this.getArtifactsData(web3);
    const web3ContractInstance = web3.eth
      .contract(abi)
      .at(networks[currentNetwork].address);

    return new CollateralizerContract(web3ContractInstance, defaults);
  }
  static async at(
    address: string,
    web3: Web3,
    defaults: Partial<TxData>
  ): Promise<CollateralizerContract> {
    const { abi } = await this.getArtifactsData(web3);
    const web3ContractInstance = web3.eth.contract(abi).at(address);

    return new CollateralizerContract(web3ContractInstance, defaults);
  }
  private static async getArtifactsData(web3: Web3): Promise<any> {
    try {
      const artifact = await fs.readFile(
        "build/contracts/Collateralizer.json",
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
