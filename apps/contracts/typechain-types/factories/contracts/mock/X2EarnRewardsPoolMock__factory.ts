/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  X2EarnRewardsPoolMock,
  X2EarnRewardsPoolMockInterface,
} from "../../../contracts/mock/X2EarnRewardsPoolMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_admin",
        type: "address",
      },
      {
        internalType: "contract IToken",
        name: "_b3tr",
        type: "address",
      },
      {
        internalType: "contract IX2EarnAppsMock",
        name: "_x2EarnApps",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AccessControlBadConfirmation",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "neededRole",
        type: "bytes32",
      },
    ],
    name: "AccessControlUnauthorizedAccount",
    type: "error",
  },
  {
    inputs: [],
    name: "ReentrancyGuardReentrantCall",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "appId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "depositor",
        type: "address",
      },
    ],
    name: "NewDeposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "appId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "proof",
        type: "string",
      },
      {
        indexed: true,
        internalType: "address",
        name: "distributor",
        type: "address",
      },
    ],
    name: "RewardDistributed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "appId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "teamWallet",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "withdrawer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "reason",
        type: "string",
      },
    ],
    name: "TeamWithdrawal",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "CONTRACTS_ADDRESS_MANAGER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "appId",
        type: "bytes32",
      },
    ],
    name: "availableFunds",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "b3tr",
    outputs: [
      {
        internalType: "contract IToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string[]",
        name: "proofTypes",
        type: "string[]",
      },
      {
        internalType: "string[]",
        name: "proofValues",
        type: "string[]",
      },
      {
        internalType: "string[]",
        name: "impactCodes",
        type: "string[]",
      },
      {
        internalType: "uint256[]",
        name: "impactValues",
        type: "uint256[]",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
    ],
    name: "buildProof",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "appId",
        type: "bytes32",
      },
    ],
    name: "deposit",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "appId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "distributeReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "appId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "distributeRewardDeprecated",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "appId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "string[]",
        name: "proofTypes",
        type: "string[]",
      },
      {
        internalType: "string[]",
        name: "proofValues",
        type: "string[]",
      },
      {
        internalType: "string[]",
        name: "impactCodes",
        type: "string[]",
      },
      {
        internalType: "uint256[]",
        name: "impactValues",
        type: "uint256[]",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
    ],
    name: "distributeRewardWithProof",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "callerConfirmation",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IX2EarnAppsMock",
        name: "_x2EarnApps",
        type: "address",
      },
    ],
    name: "setX2EarnApps",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "appId",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "reason",
        type: "string",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "x2EarnApps",
    outputs: [
      {
        internalType: "contract IX2EarnAppsMock",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200289c3803806200289c8339810160408190526200003491620002ce565b600180556001600160a01b038316620000a95760405162461bcd60e51b815260206004820152602c60248201527f58324561726e52657761726473506f6f6c3a2061646d696e206973207468652060448201526b7a65726f206164647265737360a01b60648201526084015b60405180910390fd5b6001600160a01b038216620001155760405162461bcd60e51b815260206004820152602b60248201527f58324561726e52657761726473506f6f6c3a206233747220697320746865207a60448201526a65726f206164647265737360a81b6064820152608401620000a0565b6001600160a01b038116620001875760405162461bcd60e51b815260206004820152603160248201527f58324561726e52657761726473506f6f6c3a2078324561726e4170707320697360448201527020746865207a65726f206164647265737360781b6064820152608401620000a0565b6200019460008462000206565b507f7c0dcc5654efea34bf150fefe2d7f927494d4026026590e81037cb4c7a9cdc0080546001600160a01b039384166001600160a01b0319918216179091557f7c0dcc5654efea34bf150fefe2d7f927494d4026026590e81037cb4c7a9cdc0180549290931691161790555062000322565b6000828152602081815260408083206001600160a01b038516845290915281205460ff16620002ab576000838152602081815260408083206001600160a01b03861684529091529020805460ff19166001179055620002623390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4506001620002af565b5060005b92915050565b6001600160a01b0381168114620002cb57600080fd5b50565b600080600060608486031215620002e457600080fd5b8351620002f181620002b5565b60208501519093506200030481620002b5565b60408501519092506200031781620002b5565b809150509250925092565b61256a80620003326000396000f3fe6080604052600436106101395760003560e01c80637b924532116100ab578063c9630cb01161006f578063c9630cb014610490578063cfe706b3146104b0578063d547741f146104d0578063f23a6e61146104f0578063f274433414610510578063f7335f111461055c57610191565b80637b924532146103e757806391d1485414610407578063952f213314610427578063a217fddf1461045b578063bc197c811461047057610191565b806336568abe116100fd57806336568abe1461030557806340a6fc0b146103255780634879ed081461034557806354fd4d5014610372578063582a486a1461039c57806369933c78146103c757610191565b806301ffc9a7146101e6578063150b7a021461021b578063248a9ca3146102545780632f2ff15d1461029257806333653f5d146102b457610191565b366101915760405162461bcd60e51b815260206004820152602f602482015260008051602061251583398151915260448201526e081b9bdd081858d8d95c1d08159155608a1b60648201526084015b60405180910390fd5b60405162461bcd60e51b81526020600482015260366024820152600080516020612515833981519152604482015275206e6f74206163636570742063616c6c732f6461746160501b6064820152608401610188565b3480156101f257600080fd5b50610206610201366004611a14565b61057c565b60405190151581526020015b60405180910390f35b34801561022757600080fd5b5061023b610236366004611b21565b6105b3565b6040516001600160e01b03199091168152602001610212565b34801561026057600080fd5b5061028461026f366004611b8d565b60009081526020819052604090206001015490565b604051908152602001610212565b34801561029e57600080fd5b506102b26102ad366004611ba6565b610612565b005b3480156102c057600080fd5b507f7c0dcc5654efea34bf150fefe2d7f927494d4026026590e81037cb4c7a9cdc01546001600160a01b03165b6040516001600160a01b039091168152602001610212565b34801561031157600080fd5b506102b2610320366004611ba6565b61063d565b34801561033157600080fd5b506102b2610340366004611bd6565b610675565b34801561035157600080fd5b50610365610360366004611d02565b610751565b6040516102129190611e24565b34801561037e57600080fd5b506040805180820190915260018152603160f81b6020820152610365565b3480156103a857600080fd5b506000805160206124f5833981519152546001600160a01b03166102ed565b3480156103d357600080fd5b506102b26103e2366004611e37565b6108a9565b3480156103f357600080fd5b506102b2610402366004611e82565b610917565b34801561041357600080fd5b50610206610422366004611ba6565b61093c565b34801561043357600080fd5b506102847f56af926aa3845d4dc63a6c773ed36f51794728c97ebcd1bf845bcecb16eeb6b781565b34801561046757600080fd5b50610284600081565b34801561047c57600080fd5b5061023b61048b366004611f78565b610965565b34801561049c57600080fd5b506102066104ab366004611fd4565b6109da565b3480156104bc57600080fd5b506102b26104cb366004611ff6565b610bb7565b3480156104dc57600080fd5b506102b26104eb366004611ba6565b610fea565b3480156104fc57600080fd5b5061023b61050b366004612046565b61100f565b34801561051c57600080fd5b5061028461052b366004611b8d565b60009081527f7c0dcc5654efea34bf150fefe2d7f927494d4026026590e81037cb4c7a9cdc02602052604090205490565b34801561056857600080fd5b506102b2610577366004611e37565b61106e565b60006001600160e01b03198216637965db0b60e01b14806105ad57506301ffc9a760e01b6001600160e01b03198316145b92915050565b60405162461bcd60e51b8152602060048201526039602482015260008051602061251583398151915260448201527f206e6f74206163636570742045524337323120746f6b656e73000000000000006064820152600090608401610188565b60008281526020819052604090206001015461062d81611129565b6106378383611136565b50505050565b6001600160a01b03811633146106665760405163334bd91960e11b815260040160405180910390fd5b61067082826111c8565b505050565b7f56af926aa3845d4dc63a6c773ed36f51794728c97ebcd1bf845bcecb16eeb6b761069f81611129565b6001600160a01b03821661070f5760405162461bcd60e51b815260206004820152603160248201527f58324561726e52657761726473506f6f6c3a2078324561726e4170707320697360448201527020746865207a65726f206164647265737360781b6064820152608401610188565b507f7c0dcc5654efea34bf150fefe2d7f927494d4026026590e81037cb4c7a9cdc0180546001600160a01b0319166001600160a01b0392909216919091179055565b60606000808751118015610766575060008651115b9050600080865111801561077b575060008551115b845190915015158215801561078e575081155b156107ad576040518060200160405280600081525093505050506108a0565b604080516c3d913b32b939b4b7b7111d101960991b60208201528151600d818303018152602d90910190915281156108045780866040516020016107f29291906120af565b60405160208183030381529060405290505b831561083e5760006108168b8b611233565b9050818160405160200161082b929190612109565b6040516020818303038152906040529150505b8215610878576000610850898961139c565b9050818160405160200161086592919061214e565b6040516020818303038152906040529150505b806040516020016108899190612194565b60408051601f198184030181529190529450505050505b95945050505050565b6108b48484846114e4565b336001600160a01b0316826001600160a01b0316857f4811710b0c25cc7e05baf214b3a939cf893f1cbff4d0b219e680f069a4f204a28660405161090991815260406020820181905260009082015260600190565b60405180910390a450505050565b6109228888886114e4565b61093288888888888888886117d8565b5050505050505050565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b60405162461bcd60e51b815260206004820152604d602482015260008051602061251583398151915260448201527f206e6f7420616363657074206261746368207472616e7366657273206f66204560648201526c52433131353520746f6b656e7360981b608482015260009060a401610188565b6000806000805160206124f5833981519152600181015460405163181efec960e21b8152600481018690529192506001600160a01b03169063607bfb2490602401602060405180830381865afa158015610a38573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a5c91906121b9565b610a785760405162461bcd60e51b8152600401610188906121db565b600083815260028201602052604081208054869290610a98908490612236565b909155505080546040516323b872dd60e01b8152336004820152306024820152604481018690526001600160a01b03909116906323b872dd906064016020604051808303816000875af1158015610af3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b1791906121b9565b610b765760405162461bcd60e51b815260206004820152602a60248201527f58324561726e52657761726473506f6f6c3a206465706f736974207472616e7360448201526919995c8819985a5b195960b21b6064820152608401610188565b604051848152339084907fb129470ed4a80566812579bd667bb40c9cc246b5470797f9291f8a27cd3d16309060200160405180910390a35060019392505050565b60006000805160206124f5833981519152600181015460405163181efec960e21b8152600481018690529192506001600160a01b03169063607bfb2490602401602060405180830381865afa158015610c14573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c3891906121b9565b610c545760405162461bcd60e51b8152600401610188906121db565b600181015460405163238e8a7760e21b8152600481018590523360248201526001600160a01b0390911690638e3a29dc90604401602060405180830381865afa158015610ca5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cc991906121b9565b80610d445750600181015460405163b58a754760e01b8152600481018590523360248201526001600160a01b039091169063b58a754790604401602060405180830381865afa158015610d20573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d4491906121b9565b610db65760405162461bcd60e51b815260206004820152603c60248201527f58324561726e52657761726473506f6f6c3a206e6f7420616e2061707020616460448201527f6d696e206e6f72206120726577617264206469737472696275746f72000000006064820152608401610188565b6000838152600282016020526040902054841115610de65760405162461bcd60e51b815260040161018890612249565b80546040516370a0823160e01b815230600482015285916001600160a01b0316906370a0823190602401602060405180830381865afa158015610e2d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e519190612296565b1015610e6f5760405162461bcd60e51b8152600401610188906122af565b6001810154604051631772503b60e01b8152600481018590526000916001600160a01b031690631772503b90602401602060405180830381865afa158015610ebb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610edf9190612300565b9050848260020160008681526020019081526020016000206000828254610f06919061231d565b9091555050815460405163a9059cbb60e01b81526001600160a01b038381166004830152602482018890529091169063a9059cbb906044016020604051808303816000875af1158015610f5d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f8191906121b9565b610f9d5760405162461bcd60e51b815260040161018890612330565b806001600160a01b0316847fd9ffa9a1a748d0d5a7264f97f319a08a8d4925854093354e05965ff93e46d804873387604051610fdb93929190612384565b60405180910390a35050505050565b60008281526020819052604090206001015461100581611129565b61063783836111c8565b60405162461bcd60e51b815260206004820152603a602482015260008051602061251583398151915260448201527f206e6f7420616363657074204552433131353520746f6b656e730000000000006064820152600090608401610188565b6110798484846114e4565b61063784848460006040519080825280602002602001820160405280156110b457816020015b606081526020019060019003908161109f5790505b5060408051600080825260208201909252906110e0565b60608152602001906001900390816110cb5790505b50604080516000808252602082019092529061110c565b60608152602001906001900390816110f75790505b5060408051600080825281830190925260208101918252906117d8565b6111338133611842565b50565b6000611142838361093c565b6111c0576000838152602081815260408083206001600160a01b03861684529091529020805460ff191660011790556111783390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45060016105ad565b5060006105ad565b60006111d4838361093c565b156111c0576000838152602081815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45060016105ad565b606081518351146112a45760405162461bcd60e51b815260206004820152603560248201527f58324561726e52657761726473506f6f6c3a204d69736d61746368656420696e604482015274383aba103632b733ba3439903337b910283937b7b360591b6064820152608401610188565b60408051607b60f81b602082015281516001818303018152602190910190915260005b845181101561137257818582815181106112e3576112e36123ae565b60200260200101518583815181106112fd576112fd6123ae565b6020026020010151604051602001611317939291906123c4565b604051602081830303815290604052915060018551611336919061231d565b811015611360578160405160200161134e9190612435565b60405160208183030381529060405291505b8061136a8161245a565b9150506112c7565b50806040516020016113849190612194565b60408051808303601f19018152919052949350505050565b6060815183511461140e5760405162461bcd60e51b815260206004820152603660248201527f58324561726e52657761726473506f6f6c3a204d69736d61746368656420696e6044820152751c1d5d081b195b99dd1a1cc8199bdc88125b5c1858dd60521b6064820152608401610188565b60408051607b60f81b602082015281516001818303018152602190910190915260005b8351811015611372578185828151811061144d5761144d6123ae565b602002602001015161147786848151811061146a5761146a6123ae565b602002602001015161187f565b60405160200161148993929190612473565b6040516020818303038152906040529150600184516114a8919061231d565b8110156114d257816040516020016114c09190612435565b60405160208183030381529060405291505b806114dc8161245a565b915050611431565b6114ec611912565b60006000805160206124f5833981519152600181015460405163181efec960e21b8152600481018790529192506001600160a01b03169063607bfb2490602401602060405180830381865afa158015611549573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061156d91906121b9565b6115895760405162461bcd60e51b8152600401610188906121db565b600181015460405163b58a754760e01b8152600481018690523360248201526001600160a01b039091169063b58a754790604401602060405180830381865afa1580156115da573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115fe91906121b9565b61165e5760405162461bcd60e51b815260206004820152602b60248201527f58324561726e52657761726473506f6f6c3a206e6f742061207265776172642060448201526a3234b9ba3934b13aba37b960a91b6064820152608401610188565b600084815260028201602052604090205483111561168e5760405162461bcd60e51b815260040161018890612249565b80546040516370a0823160e01b815230600482015284916001600160a01b0316906370a0823190602401602060405180830381865afa1580156116d5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116f99190612296565b10156117175760405162461bcd60e51b8152600401610188906122af565b60008481526002820160205260408120805485929061173790849061231d565b9091555050805460405163a9059cbb60e01b81526001600160a01b038481166004830152602482018690529091169063a9059cbb906044016020604051808303816000875af115801561178e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117b291906121b9565b6117ce5760405162461bcd60e51b815260040161018890612330565b5061067060018055565b60006117e78686868686610751565b9050336001600160a01b0316876001600160a01b03168a7f4811710b0c25cc7e05baf214b3a939cf893f1cbff4d0b219e680f069a4f204a28b8560405161182f9291906124d3565b60405180910390a4505050505050505050565b61184c828261093c565b61187b5760405163e2517d3f60e01b81526001600160a01b038216600482015260248101839052604401610188565b5050565b6060600061188c8361193c565b600101905060008167ffffffffffffffff8111156118ac576118ac611a6a565b6040519080825280601f01601f1916602001820160405280156118d6576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a85049450846118e057509392505050565b60026001540361193557604051633ee5aeb560e01b815260040160405180910390fd5b6002600155565b60008072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b831061197b5772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef810000000083106119a7576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc1000083106119c557662386f26fc10000830492506010015b6305f5e10083106119dd576305f5e100830492506008015b61271083106119f157612710830492506004015b60648310611a03576064830492506002015b600a83106105ad5760010192915050565b600060208284031215611a2657600080fd5b81356001600160e01b031981168114611a3e57600080fd5b9392505050565b6001600160a01b038116811461113357600080fd5b8035611a6581611a45565b919050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715611aa957611aa9611a6a565b604052919050565b600082601f830112611ac257600080fd5b813567ffffffffffffffff811115611adc57611adc611a6a565b611aef601f8201601f1916602001611a80565b818152846020838601011115611b0457600080fd5b816020850160208301376000918101602001919091529392505050565b60008060008060808587031215611b3757600080fd5b8435611b4281611a45565b93506020850135611b5281611a45565b925060408501359150606085013567ffffffffffffffff811115611b7557600080fd5b611b8187828801611ab1565b91505092959194509250565b600060208284031215611b9f57600080fd5b5035919050565b60008060408385031215611bb957600080fd5b823591506020830135611bcb81611a45565b809150509250929050565b600060208284031215611be857600080fd5b8135611a3e81611a45565b600067ffffffffffffffff821115611c0d57611c0d611a6a565b5060051b60200190565b600082601f830112611c2857600080fd5b81356020611c3d611c3883611bf3565b611a80565b82815260059290921b84018101918181019086841115611c5c57600080fd5b8286015b84811015611c9c57803567ffffffffffffffff811115611c805760008081fd5b611c8e8986838b0101611ab1565b845250918301918301611c60565b509695505050505050565b600082601f830112611cb857600080fd5b81356020611cc8611c3883611bf3565b82815260059290921b84018101918181019086841115611ce757600080fd5b8286015b84811015611c9c5780358352918301918301611ceb565b600080600080600060a08688031215611d1a57600080fd5b853567ffffffffffffffff80821115611d3257600080fd5b611d3e89838a01611c17565b96506020880135915080821115611d5457600080fd5b611d6089838a01611c17565b95506040880135915080821115611d7657600080fd5b611d8289838a01611c17565b94506060880135915080821115611d9857600080fd5b611da489838a01611ca7565b93506080880135915080821115611dba57600080fd5b50611dc788828901611ab1565b9150509295509295909350565b60005b83811015611def578181015183820152602001611dd7565b50506000910152565b60008151808452611e10816020860160208601611dd4565b601f01601f19169290920160200192915050565b602081526000611a3e6020830184611df8565b60008060008060808587031215611e4d57600080fd5b84359350602085013592506040850135611e6681611a45565b9150606085013567ffffffffffffffff811115611b7557600080fd5b600080600080600080600080610100898b031215611e9f57600080fd5b8835975060208901359650611eb660408a01611a5a565b9550606089013567ffffffffffffffff80821115611ed357600080fd5b611edf8c838d01611c17565b965060808b0135915080821115611ef557600080fd5b611f018c838d01611c17565b955060a08b0135915080821115611f1757600080fd5b611f238c838d01611c17565b945060c08b0135915080821115611f3957600080fd5b611f458c838d01611ca7565b935060e08b0135915080821115611f5b57600080fd5b50611f688b828c01611ab1565b9150509295985092959890939650565b600080600080600060a08688031215611f9057600080fd5b8535611f9b81611a45565b94506020860135611fab81611a45565b9350604086013567ffffffffffffffff80821115611fc857600080fd5b611d8289838a01611ca7565b60008060408385031215611fe757600080fd5b50508035926020909101359150565b60008060006060848603121561200b57600080fd5b8335925060208401359150604084013567ffffffffffffffff81111561203057600080fd5b61203c86828701611ab1565b9150509250925092565b600080600080600060a0868803121561205e57600080fd5b853561206981611a45565b9450602086013561207981611a45565b93506040860135925060608601359150608086013567ffffffffffffffff8111156120a357600080fd5b611dc788828901611ab1565b600083516120c1818460208801611dd4565b7016113232b9b1b934b83a34b7b7111d101160791b90830190815283516120ef816011840160208801611dd4565b601160f91b60119290910191820152601201949350505050565b6000835161211b818460208801611dd4565b6901611383937b7b3111d160b51b908301908152835161214281600a840160208801611dd4565b01600a01949350505050565b60008351612160818460208801611dd4565b6a0161134b6b830b1ba111d160ad1b908301908152835161218881600b840160208801611dd4565b01600b01949350505050565b600082516121a6818460208701611dd4565b607d60f81b920191825250600101919050565b6000602082840312156121cb57600080fd5b81518015158114611a3e57600080fd5b60208082526025908201527f58324561726e52657761726473506f6f6c3a2061707020646f6573206e6f7420604082015264195e1a5cdd60da1b606082015260800190565b634e487b7160e01b600052601160045260246000fd5b808201808211156105ad576105ad612220565b6020808252602d908201527f58324561726e52657761726473506f6f6c3a206170702068617320696e73756660408201526c66696369656e742066756e647360981b606082015260800190565b6000602082840312156122a857600080fd5b5051919050565b60208082526031908201527f58324561726e52657761726473506f6f6c3a20696e73756666696369656e7420604082015270199d5b991cc81bdb8818dbdb9d1c9858dd607a1b606082015260800190565b60006020828403121561231257600080fd5b8151611a3e81611a45565b818103818111156105ad576105ad612220565b60208082526034908201527f58324561726e52657761726473506f6f6c3a20416c6c6f636174696f6e207472604082015273185b9cd9995c881d1bc8185c1c0819985a5b195960621b606082015260800190565b8381526001600160a01b03831660208201526060604082018190526000906108a090830184611df8565b634e487b7160e01b600052603260045260246000fd5b600084516123d6818460208901611dd4565b601160f91b90830181815285519091906123f7816001850160208a01611dd4565b61111d60f11b60019390910192830152600382018190528451612421816004850160208901611dd4565b600492019182015260050195945050505050565b60008251612447818460208701611dd4565b600b60fa1b920191825250600101919050565b60006001820161246c5761246c612220565b5060010190565b60008451612485818460208901611dd4565b601160f91b90830190815284516124a3816001840160208901611dd4565b61111d60f11b6001929091019182015283516124c6816003840160208801611dd4565b0160030195945050505050565b8281526040602082015260006124ec6040830184611df8565b94935050505056fe7c0dcc5654efea34bf150fefe2d7f927494d4026026590e81037cb4c7a9cdc0058324561726e52657761726473506f6f6c3a20636f6e747261637420646f6573a26469706673582212207822714197bb77ded6bdb0328212bf32aa45635c022e4edb5841db6b2a6e823164736f6c63430008140033";

type X2EarnRewardsPoolMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: X2EarnRewardsPoolMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class X2EarnRewardsPoolMock__factory extends ContractFactory {
  constructor(...args: X2EarnRewardsPoolMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _admin: AddressLike,
    _b3tr: AddressLike,
    _x2EarnApps: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _admin,
      _b3tr,
      _x2EarnApps,
      overrides || {}
    );
  }
  override deploy(
    _admin: AddressLike,
    _b3tr: AddressLike,
    _x2EarnApps: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_admin, _b3tr, _x2EarnApps, overrides || {}) as Promise<
      X2EarnRewardsPoolMock & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): X2EarnRewardsPoolMock__factory {
    return super.connect(runner) as X2EarnRewardsPoolMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): X2EarnRewardsPoolMockInterface {
    return new Interface(_abi) as X2EarnRewardsPoolMockInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): X2EarnRewardsPoolMock {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as X2EarnRewardsPoolMock;
  }
}
