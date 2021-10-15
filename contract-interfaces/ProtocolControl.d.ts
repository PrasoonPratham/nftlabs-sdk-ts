/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface ProtocolControlInterface extends ethers.utils.Interface {
  functions: {
    "DEFAULT_ADMIN_ROLE()": FunctionFragment;
    "MAX_BPS()": FunctionFragment;
    "addModule(address,uint256)": FunctionFragment;
    "contractURI()": FunctionFragment;
    "getAllModulesOfType(uint256)": FunctionFragment;
    "getForwarder()": FunctionFragment;
    "getRoleAdmin(bytes32)": FunctionFragment;
    "getRoleMember(bytes32,uint256)": FunctionFragment;
    "getRoleMemberCount(bytes32)": FunctionFragment;
    "getRoyaltyTreasury(address)": FunctionFragment;
    "grantRole(bytes32,address)": FunctionFragment;
    "hasRole(bytes32,address)": FunctionFragment;
    "modules(bytes32)": FunctionFragment;
    "numOfModuleType(uint256)": FunctionFragment;
    "pauseProtocol(bool)": FunctionFragment;
    "registry()": FunctionFragment;
    "renounceRole(bytes32,address)": FunctionFragment;
    "revokeRole(bytes32,address)": FunctionFragment;
    "royaltyTreasury()": FunctionFragment;
    "setContractURI(string)": FunctionFragment;
    "setForwarder(address)": FunctionFragment;
    "setModuleRoyaltyTreasury(address,address)": FunctionFragment;
    "setRoyaltyTreasury(address)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "systemPaused()": FunctionFragment;
    "updateModule(bytes32,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "MAX_BPS", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "addModule",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "contractURI",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAllModulesOfType",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getForwarder",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleMember",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleMemberCount",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoyaltyTreasury",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(functionFragment: "modules", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "numOfModuleType",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "pauseProtocol",
    values: [boolean]
  ): string;
  encodeFunctionData(functionFragment: "registry", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "royaltyTreasury",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setContractURI",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setForwarder",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setModuleRoyaltyTreasury",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setRoyaltyTreasury",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "systemPaused",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "updateModule",
    values: [BytesLike, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "MAX_BPS", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addModule", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "contractURI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllModulesOfType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getForwarder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleMember",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleMemberCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoyaltyTreasury",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "modules", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "numOfModuleType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pauseProtocol",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "registry", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "royaltyTreasury",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setContractURI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setForwarder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setModuleRoyaltyTreasury",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRoyaltyTreasury",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "systemPaused",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateModule",
    data: BytesLike
  ): Result;

  events: {
    "ForwarderUpdated(address)": EventFragment;
    "ModuleUpdated(bytes32,address)": EventFragment;
    "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
    "RoleGranted(bytes32,address,address)": EventFragment;
    "RoleRevoked(bytes32,address,address)": EventFragment;
    "SystemPaused(bool)": EventFragment;
    "TreasuryUpdated(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ForwarderUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ModuleUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SystemPaused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TreasuryUpdated"): EventFragment;
}

export type ForwarderUpdatedEvent = TypedEvent<
  [string] & { _newForwarder: string }
>;

export type ModuleUpdatedEvent = TypedEvent<
  [string, string] & { moduleId: string; module: string }
>;

export type RoleAdminChangedEvent = TypedEvent<
  [string, string, string] & {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
  }
>;

export type RoleGrantedEvent = TypedEvent<
  [string, string, string] & { role: string; account: string; sender: string }
>;

export type RoleRevokedEvent = TypedEvent<
  [string, string, string] & { role: string; account: string; sender: string }
>;

export type SystemPausedEvent = TypedEvent<[boolean] & { isPaused: boolean }>;

export type TreasuryUpdatedEvent = TypedEvent<
  [string] & { _newTreasury: string }
>;

export class ProtocolControl extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: ProtocolControlInterface;

  functions: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

    MAX_BPS(overrides?: CallOverrides): Promise<[BigNumber]>;

    addModule(
      _newModuleAddress: string,
      _moduleType: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    contractURI(overrides?: CallOverrides): Promise<[string]>;

    getAllModulesOfType(
      _moduleType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string[]] & { allModules: string[] }>;

    getForwarder(overrides?: CallOverrides): Promise<[string]>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    getRoleMember(
      role: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getRoleMemberCount(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getRoyaltyTreasury(
      moduleAddress: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    modules(arg0: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    numOfModuleType(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    pauseProtocol(
      _toPause: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    registry(overrides?: CallOverrides): Promise<[string]>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    royaltyTreasury(overrides?: CallOverrides): Promise<[string]>;

    setContractURI(
      _URI: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setForwarder(
      forwarder: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setModuleRoyaltyTreasury(
      moduleAddress: string,
      _treasury: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setRoyaltyTreasury(
      _treasury: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    systemPaused(overrides?: CallOverrides): Promise<[boolean]>;

    updateModule(
      _moduleId: BytesLike,
      _newModuleAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  MAX_BPS(overrides?: CallOverrides): Promise<BigNumber>;

  addModule(
    _newModuleAddress: string,
    _moduleType: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  contractURI(overrides?: CallOverrides): Promise<string>;

  getAllModulesOfType(
    _moduleType: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string[]>;

  getForwarder(overrides?: CallOverrides): Promise<string>;

  getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

  getRoleMember(
    role: BytesLike,
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getRoleMemberCount(
    role: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getRoyaltyTreasury(
    moduleAddress: string,
    overrides?: CallOverrides
  ): Promise<string>;

  grantRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  hasRole(
    role: BytesLike,
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  modules(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

  numOfModuleType(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  pauseProtocol(
    _toPause: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  registry(overrides?: CallOverrides): Promise<string>;

  renounceRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  revokeRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  royaltyTreasury(overrides?: CallOverrides): Promise<string>;

  setContractURI(
    _URI: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setForwarder(
    forwarder: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setModuleRoyaltyTreasury(
    moduleAddress: string,
    _treasury: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setRoyaltyTreasury(
    _treasury: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  systemPaused(overrides?: CallOverrides): Promise<boolean>;

  updateModule(
    _moduleId: BytesLike,
    _newModuleAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    MAX_BPS(overrides?: CallOverrides): Promise<BigNumber>;

    addModule(
      _newModuleAddress: string,
      _moduleType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    contractURI(overrides?: CallOverrides): Promise<string>;

    getAllModulesOfType(
      _moduleType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string[]>;

    getForwarder(overrides?: CallOverrides): Promise<string>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

    getRoleMember(
      role: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getRoleMemberCount(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoyaltyTreasury(
      moduleAddress: string,
      overrides?: CallOverrides
    ): Promise<string>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    modules(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

    numOfModuleType(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pauseProtocol(_toPause: boolean, overrides?: CallOverrides): Promise<void>;

    registry(overrides?: CallOverrides): Promise<string>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    royaltyTreasury(overrides?: CallOverrides): Promise<string>;

    setContractURI(_URI: string, overrides?: CallOverrides): Promise<void>;

    setForwarder(forwarder: string, overrides?: CallOverrides): Promise<void>;

    setModuleRoyaltyTreasury(
      moduleAddress: string,
      _treasury: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setRoyaltyTreasury(
      _treasury: string,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    systemPaused(overrides?: CallOverrides): Promise<boolean>;

    updateModule(
      _moduleId: BytesLike,
      _newModuleAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "ForwarderUpdated(address)"(
      _newForwarder?: null
    ): TypedEventFilter<[string], { _newForwarder: string }>;

    ForwarderUpdated(
      _newForwarder?: null
    ): TypedEventFilter<[string], { _newForwarder: string }>;

    "ModuleUpdated(bytes32,address)"(
      moduleId?: BytesLike | null,
      module?: string | null
    ): TypedEventFilter<[string, string], { moduleId: string; module: string }>;

    ModuleUpdated(
      moduleId?: BytesLike | null,
      module?: string | null
    ): TypedEventFilter<[string, string], { moduleId: string; module: string }>;

    "RoleAdminChanged(bytes32,bytes32,bytes32)"(
      role?: BytesLike | null,
      previousAdminRole?: BytesLike | null,
      newAdminRole?: BytesLike | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; previousAdminRole: string; newAdminRole: string }
    >;

    RoleAdminChanged(
      role?: BytesLike | null,
      previousAdminRole?: BytesLike | null,
      newAdminRole?: BytesLike | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; previousAdminRole: string; newAdminRole: string }
    >;

    "RoleGranted(bytes32,address,address)"(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; account: string; sender: string }
    >;

    RoleGranted(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; account: string; sender: string }
    >;

    "RoleRevoked(bytes32,address,address)"(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; account: string; sender: string }
    >;

    RoleRevoked(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; account: string; sender: string }
    >;

    "SystemPaused(bool)"(
      isPaused?: null
    ): TypedEventFilter<[boolean], { isPaused: boolean }>;

    SystemPaused(
      isPaused?: null
    ): TypedEventFilter<[boolean], { isPaused: boolean }>;

    "TreasuryUpdated(address)"(
      _newTreasury?: null
    ): TypedEventFilter<[string], { _newTreasury: string }>;

    TreasuryUpdated(
      _newTreasury?: null
    ): TypedEventFilter<[string], { _newTreasury: string }>;
  };

  estimateGas: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_BPS(overrides?: CallOverrides): Promise<BigNumber>;

    addModule(
      _newModuleAddress: string,
      _moduleType: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    contractURI(overrides?: CallOverrides): Promise<BigNumber>;

    getAllModulesOfType(
      _moduleType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getForwarder(overrides?: CallOverrides): Promise<BigNumber>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoleMember(
      role: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoleMemberCount(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoyaltyTreasury(
      moduleAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    modules(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    numOfModuleType(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pauseProtocol(
      _toPause: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    registry(overrides?: CallOverrides): Promise<BigNumber>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    royaltyTreasury(overrides?: CallOverrides): Promise<BigNumber>;

    setContractURI(
      _URI: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setForwarder(
      forwarder: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setModuleRoyaltyTreasury(
      moduleAddress: string,
      _treasury: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setRoyaltyTreasury(
      _treasury: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    systemPaused(overrides?: CallOverrides): Promise<BigNumber>;

    updateModule(
      _moduleId: BytesLike,
      _newModuleAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DEFAULT_ADMIN_ROLE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    MAX_BPS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addModule(
      _newModuleAddress: string,
      _moduleType: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    contractURI(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAllModulesOfType(
      _moduleType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getForwarder(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoleMember(
      role: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoleMemberCount(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoyaltyTreasury(
      moduleAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    modules(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    numOfModuleType(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pauseProtocol(
      _toPause: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    registry(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    royaltyTreasury(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setContractURI(
      _URI: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setForwarder(
      forwarder: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setModuleRoyaltyTreasury(
      moduleAddress: string,
      _treasury: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setRoyaltyTreasury(
      _treasury: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    systemPaused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updateModule(
      _moduleId: BytesLike,
      _newModuleAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
