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

export class ERC721MetadataContract extends BaseContract {
  public name = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<string> {
      const self = this as ERC721MetadataContract;
      const result = await promisify<string>(
        self.web3ContractInstance.name.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public getApproved = {
    async callAsync(
      _tokenId: BigNumber,
      defaultBlock?: Web3.BlockParam
    ): Promise<string> {
      const self = this as ERC721MetadataContract;
      const result = await promisify<string>(
        self.web3ContractInstance.getApproved.call,
        self.web3ContractInstance
      )(_tokenId);
      return result;
    }
  };
  public approve = {
    async sendTransactionAsync(
      _to: string,
      _tokenId: BigNumber,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as ERC721MetadataContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.approve.estimateGasAsync.bind(self, _to, _tokenId)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.approve,
        self.web3ContractInstance
      )(_to, _tokenId, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      _to: string,
      _tokenId: BigNumber,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as ERC721MetadataContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.approve.estimateGas,
        self.web3ContractInstance
      )(_to, _tokenId, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(
      _to: string,
      _tokenId: BigNumber,
      txData: TxData = {}
    ): string {
      const self = this as ERC721MetadataContract;
      const abiEncodedTransactionData = self.web3ContractInstance.approve.getData();
      return abiEncodedTransactionData;
    }
  };
  public transferFrom = {
    async sendTransactionAsync(
      _from: string,
      _to: string,
      _tokenId: BigNumber,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as ERC721MetadataContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.transferFrom.estimateGasAsync.bind(self, _from, _to, _tokenId)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.transferFrom,
        self.web3ContractInstance
      )(_from, _to, _tokenId, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      _from: string,
      _to: string,
      _tokenId: BigNumber,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as ERC721MetadataContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.transferFrom.estimateGas,
        self.web3ContractInstance
      )(_from, _to, _tokenId, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(
      _from: string,
      _to: string,
      _tokenId: BigNumber,
      txData: TxData = {}
    ): string {
      const self = this as ERC721MetadataContract;
      const abiEncodedTransactionData = self.web3ContractInstance.transferFrom.getData();
      return abiEncodedTransactionData;
    }
  };
  public safeTransferFrom = {
    async sendTransactionAsync(
      _from: string,
      _to: string,
      _tokenId: BigNumber,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as ERC721MetadataContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.safeTransferFrom.estimateGasAsync.bind(self, _from, _to, _tokenId)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.safeTransferFrom,
        self.web3ContractInstance
      )(_from, _to, _tokenId, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      _from: string,
      _to: string,
      _tokenId: BigNumber,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as ERC721MetadataContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.safeTransferFrom.estimateGas,
        self.web3ContractInstance
      )(_from, _to, _tokenId, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(
      _from: string,
      _to: string,
      _tokenId: BigNumber,
      txData: TxData = {}
    ): string {
      const self = this as ERC721MetadataContract;
      const abiEncodedTransactionData = self.web3ContractInstance.safeTransferFrom.getData();
      return abiEncodedTransactionData;
    }
  };
  public exists = {
    async callAsync(
      _tokenId: BigNumber,
      defaultBlock?: Web3.BlockParam
    ): Promise<boolean> {
      const self = this as ERC721MetadataContract;
      const result = await promisify<boolean>(
        self.web3ContractInstance.exists.call,
        self.web3ContractInstance
      )(_tokenId);
      return result;
    }
  };
  public ownerOf = {
    async callAsync(
      _tokenId: BigNumber,
      defaultBlock?: Web3.BlockParam
    ): Promise<string> {
      const self = this as ERC721MetadataContract;
      const result = await promisify<string>(
        self.web3ContractInstance.ownerOf.call,
        self.web3ContractInstance
      )(_tokenId);
      return result;
    }
  };
  public balanceOf = {
    async callAsync(
      _owner: string,
      defaultBlock?: Web3.BlockParam
    ): Promise<BigNumber> {
      const self = this as ERC721MetadataContract;
      const result = await promisify<BigNumber>(
        self.web3ContractInstance.balanceOf.call,
        self.web3ContractInstance
      )(_owner);
      return result;
    }
  };
  public symbol = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<string> {
      const self = this as ERC721MetadataContract;
      const result = await promisify<string>(
        self.web3ContractInstance.symbol.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public setApprovalForAll = {
    async sendTransactionAsync(
      _operator: string,
      _approved: boolean,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as ERC721MetadataContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.setApprovalForAll.estimateGasAsync.bind(self, _operator, _approved)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.setApprovalForAll,
        self.web3ContractInstance
      )(_operator, _approved, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      _operator: string,
      _approved: boolean,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as ERC721MetadataContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.setApprovalForAll.estimateGas,
        self.web3ContractInstance
      )(_operator, _approved, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(
      _operator: string,
      _approved: boolean,
      txData: TxData = {}
    ): string {
      const self = this as ERC721MetadataContract;
      const abiEncodedTransactionData = self.web3ContractInstance.setApprovalForAll.getData();
      return abiEncodedTransactionData;
    }
  };
  public safeTransferFrom = {
    async sendTransactionAsync(
      _from: string,
      _to: string,
      _tokenId: BigNumber,
      _data: string,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as ERC721MetadataContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.safeTransferFrom.estimateGasAsync.bind(
          self,
          _from,
          _to,
          _tokenId,
          _data
        )
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.safeTransferFrom,
        self.web3ContractInstance
      )(_from, _to, _tokenId, _data, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      _from: string,
      _to: string,
      _tokenId: BigNumber,
      _data: string,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as ERC721MetadataContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.safeTransferFrom.estimateGas,
        self.web3ContractInstance
      )(_from, _to, _tokenId, _data, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(
      _from: string,
      _to: string,
      _tokenId: BigNumber,
      _data: string,
      txData: TxData = {}
    ): string {
      const self = this as ERC721MetadataContract;
      const abiEncodedTransactionData = self.web3ContractInstance.safeTransferFrom.getData();
      return abiEncodedTransactionData;
    }
  };
  public tokenURI = {
    async callAsync(
      _tokenId: BigNumber,
      defaultBlock?: Web3.BlockParam
    ): Promise<string> {
      const self = this as ERC721MetadataContract;
      const result = await promisify<string>(
        self.web3ContractInstance.tokenURI.call,
        self.web3ContractInstance
      )(_tokenId);
      return result;
    }
  };
  public isApprovedForAll = {
    async callAsync(
      _owner: string,
      _operator: string,
      defaultBlock?: Web3.BlockParam
    ): Promise<boolean> {
      const self = this as ERC721MetadataContract;
      const result = await promisify<boolean>(
        self.web3ContractInstance.isApprovedForAll.call,
        self.web3ContractInstance
      )(_owner, _operator);
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
  ): Promise<ERC721MetadataContract> {
    const currentNetwork = web3.version.network;
    const { abi, networks } = await this.getArtifactsData(web3);
    const web3ContractInstance = web3.eth
      .contract(abi)
      .at(networks[currentNetwork].address);

    return new ERC721MetadataContract(web3ContractInstance, defaults);
  }
  static async at(
    address: string,
    web3: Web3,
    defaults: Partial<TxData>
  ): Promise<ERC721MetadataContract> {
    const { abi } = await this.getArtifactsData(web3);
    const web3ContractInstance = web3.eth.contract(abi).at(address);

    return new ERC721MetadataContract(web3ContractInstance, defaults);
  }
  private static async getArtifactsData(web3: Web3): Promise<any> {
    try {
      const artifact = await fs.readFile(
        "build/contracts/ERC721Metadata.json",
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
