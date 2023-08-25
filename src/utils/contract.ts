export const Address = '0xD1Ee58cBBfc80443AfA37155F672126b41bd01d9';

export const Abi = [
  {
    type: 'constructor',
    name: '',
    inputs: [
      {
        type: 'address',
        name: '_token',
        internalType: 'address',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    name: 'PropertyApproved',
    inputs: [
      {
        type: 'uint256',
        name: 'id',
        indexed: false,
        internalType: 'uint256',
      },
      {
        type: 'address',
        name: 'by',
        indexed: false,
        internalType: 'address',
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'PropertyCreated',
    inputs: [
      {
        type: 'uint256',
        name: 'id',
        indexed: false,
        internalType: 'uint256',
      },
      {
        type: 'address',
        name: 'owner',
        indexed: false,
        internalType: 'address',
      },
      {
        type: 'uint256',
        name: 'price',
        indexed: false,
        internalType: 'uint256',
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'PropertySold',
    inputs: [
      {
        type: 'uint256',
        name: 'id',
        indexed: false,
        internalType: 'uint256',
      },
      {
        type: 'address',
        name: 'buyer',
        indexed: false,
        internalType: 'address',
      },
      {
        type: 'uint256',
        name: 'price',
        indexed: false,
        internalType: 'uint256',
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'RoleAdminChanged',
    inputs: [
      {
        type: 'bytes32',
        name: 'role',
        indexed: true,
        internalType: 'bytes32',
      },
      {
        type: 'bytes32',
        name: 'previousAdminRole',
        indexed: true,
        internalType: 'bytes32',
      },
      {
        type: 'bytes32',
        name: 'newAdminRole',
        indexed: true,
        internalType: 'bytes32',
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'RoleGranted',
    inputs: [
      {
        type: 'bytes32',
        name: 'role',
        indexed: true,
        internalType: 'bytes32',
      },
      {
        type: 'address',
        name: 'account',
        indexed: true,
        internalType: 'address',
      },
      {
        type: 'address',
        name: 'sender',
        indexed: true,
        internalType: 'address',
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'RoleRevoked',
    inputs: [
      {
        type: 'bytes32',
        name: 'role',
        indexed: true,
        internalType: 'bytes32',
      },
      {
        type: 'address',
        name: 'account',
        indexed: true,
        internalType: 'address',
      },
      {
        type: 'address',
        name: 'sender',
        indexed: true,
        internalType: 'address',
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: 'function',
    name: 'APPROVE_ROLE',
    inputs: [],
    outputs: [
      {
        type: 'bytes32',
        name: '',
        internalType: 'bytes32',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'DEFAULT_ADMIN_ROLE',
    inputs: [],
    outputs: [
      {
        type: 'bytes32',
        name: '',
        internalType: 'bytes32',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'IIds',
    inputs: [],
    outputs: [
      {
        type: 'uint256',
        name: '',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'PIds',
    inputs: [],
    outputs: [
      {
        type: 'uint256',
        name: '',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'Token',
    inputs: [],
    outputs: [
      {
        type: 'address',
        name: '',
        internalType: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'acceptRequest',
    inputs: [
      {
        type: 'uint256',
        name: 'propertyId',
        internalType: 'uint256',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'addProperty',
    inputs: [
      {
        type: 'string',
        name: 'uri',
        internalType: 'string',
      },
      {
        type: 'uint256',
        name: 'price',
        internalType: 'uint256',
      },
      {
        type: 'uint256',
        name: 'ownershipForSale',
        internalType: 'uint256',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'approveProperty',
    inputs: [
      {
        type: 'uint256',
        name: 'propertyId',
        internalType: 'uint256',
      },
      {
        type: 'string',
        name: 'uri',
        internalType: 'string',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'buyInvestmint',
    inputs: [
      {
        type: 'uint256',
        name: 'investmintId',
        internalType: 'uint256',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'buyingRequest',
    inputs: [
      {
        type: 'uint256',
        name: 'propertyId',
        internalType: 'uint256',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'calPerc',
    inputs: [
      {
        type: 'uint256',
        name: 'tAmount',
        internalType: 'uint256',
      },
      {
        type: 'uint8',
        name: 'tPerc',
        internalType: 'uint8',
      },
    ],
    outputs: [
      {
        type: 'uint256',
        name: '',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    name: 'getInvestmint',
    inputs: [
      {
        type: 'uint256',
        name: 'investmintId',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        type: 'tuple',
        name: '',
        components: [
          {
            type: 'uint256',
            name: 'id',
            internalType: 'uint256',
          },
          {
            type: 'uint256',
            name: 'proId',
            internalType: 'uint256',
          },
          {
            type: 'address',
            name: 'owner',
            internalType: 'address',
          },
          {
            type: 'uint8',
            name: 'ownership',
            internalType: 'uint8',
          },
          {
            type: 'bool',
            name: 'forSale',
            internalType: 'bool',
          },
        ],
        internalType: 'struct InvestmintMapping.Investmint',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getInvestmintIds',
    inputs: [],
    outputs: [
      {
        type: 'uint256[]',
        name: '',
        internalType: 'uint256[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getInvestmints',
    inputs: [],
    outputs: [
      {
        type: 'tuple[]',
        name: '',
        components: [
          {
            type: 'uint256',
            name: 'id',
            internalType: 'uint256',
          },
          {
            type: 'uint256',
            name: 'proId',
            internalType: 'uint256',
          },
          {
            type: 'address',
            name: 'owner',
            internalType: 'address',
          },
          {
            type: 'uint8',
            name: 'ownership',
            internalType: 'uint8',
          },
          {
            type: 'bool',
            name: 'forSale',
            internalType: 'bool',
          },
        ],
        internalType: 'struct InvestmintMapping.Investmint[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getMembers',
    inputs: [
      {
        type: 'bytes32',
        name: 'role',
        internalType: 'bytes32',
      },
    ],
    outputs: [
      {
        type: 'address[]',
        name: '',
        internalType: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getProperties',
    inputs: [],
    outputs: [
      {
        type: 'tuple[]',
        name: '',
        components: [
          {
            type: 'uint256',
            name: 'id',
            internalType: 'uint256',
          },
          {
            type: 'string',
            name: 'uri',
            internalType: 'string',
          },
          {
            type: 'address',
            name: 'owner',
            internalType: 'address',
          },
          {
            type: 'address',
            name: 'buyer',
            internalType: 'address',
          },
          {
            type: 'uint256',
            name: 'ownership',
            internalType: 'uint256',
          },
          {
            type: 'uint256[]',
            name: 'investmint',
            internalType: 'uint256[]',
          },
          {
            type: 'uint256',
            name: 'investorsOwnership',
            internalType: 'uint256',
          },
          {
            type: 'uint256',
            name: 'price',
            internalType: 'uint256',
          },
          {
            type: 'uint256',
            name: 'ownershipForSale',
            internalType: 'uint256',
          },
          {
            type: 'bool',
            name: 'draft',
            internalType: 'bool',
          },
          {
            type: 'bool',
            name: 'sold',
            internalType: 'bool',
          },
          {
            type: 'bool',
            name: 'approved',
            internalType: 'bool',
          },
          {
            type: 'bool',
            name: 'rejected',
            internalType: 'bool',
          },
          {
            type: 'bool',
            name: 'requested',
            internalType: 'bool',
          },
          {
            type: 'string',
            name: 'reasonUri',
            internalType: 'string',
          },
        ],
        internalType: 'struct PropertiesMapping.Property[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getProperty',
    inputs: [
      {
        type: 'uint256',
        name: 'propertyId',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        type: 'tuple',
        name: '',
        components: [
          {
            type: 'uint256',
            name: 'id',
            internalType: 'uint256',
          },
          {
            type: 'string',
            name: 'uri',
            internalType: 'string',
          },
          {
            type: 'address',
            name: 'owner',
            internalType: 'address',
          },
          {
            type: 'address',
            name: 'buyer',
            internalType: 'address',
          },
          {
            type: 'uint256',
            name: 'ownership',
            internalType: 'uint256',
          },
          {
            type: 'uint256[]',
            name: 'investmint',
            internalType: 'uint256[]',
          },
          {
            type: 'uint256',
            name: 'investorsOwnership',
            internalType: 'uint256',
          },
          {
            type: 'uint256',
            name: 'price',
            internalType: 'uint256',
          },
          {
            type: 'uint256',
            name: 'ownershipForSale',
            internalType: 'uint256',
          },
          {
            type: 'bool',
            name: 'draft',
            internalType: 'bool',
          },
          {
            type: 'bool',
            name: 'sold',
            internalType: 'bool',
          },
          {
            type: 'bool',
            name: 'approved',
            internalType: 'bool',
          },
          {
            type: 'bool',
            name: 'rejected',
            internalType: 'bool',
          },
          {
            type: 'bool',
            name: 'requested',
            internalType: 'bool',
          },
          {
            type: 'string',
            name: 'reasonUri',
            internalType: 'string',
          },
        ],
        internalType: 'struct PropertiesMapping.Property',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getPropertyIds',
    inputs: [],
    outputs: [
      {
        type: 'uint256[]',
        name: '',
        internalType: 'uint256[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getRoleAdmin',
    inputs: [
      {
        type: 'bytes32',
        name: 'role',
        internalType: 'bytes32',
      },
    ],
    outputs: [
      {
        type: 'bytes32',
        name: '',
        internalType: 'bytes32',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'grantRole',
    inputs: [
      {
        type: 'bytes32',
        name: 'role',
        internalType: 'bytes32',
      },
      {
        type: 'address',
        name: 'account',
        internalType: 'address',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'hasRole',
    inputs: [
      {
        type: 'bytes32',
        name: 'role',
        internalType: 'bytes32',
      },
      {
        type: 'address',
        name: 'account',
        internalType: 'address',
      },
    ],
    outputs: [
      {
        type: 'bool',
        name: '',
        internalType: 'bool',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'invest',
    inputs: [
      {
        type: 'uint256',
        name: 'propertyId',
        internalType: 'uint256',
      },
      {
        type: 'uint8',
        name: 'ownership',
        internalType: 'uint8',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'investmintSetForSale',
    inputs: [
      {
        type: 'uint256',
        name: 'investmintId',
        internalType: 'uint256',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'platformFee',
    inputs: [],
    outputs: [
      {
        type: 'uint8',
        name: '',
        internalType: 'uint8',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'platformFeeColector',
    inputs: [],
    outputs: [
      {
        type: 'address',
        name: '',
        internalType: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'rejectProperty',
    inputs: [
      {
        type: 'uint256',
        name: 'propertyId',
        internalType: 'uint256',
      },
      {
        type: 'string',
        name: 'uri',
        internalType: 'string',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'rejectRequest',
    inputs: [
      {
        type: 'uint256',
        name: 'propertyId',
        internalType: 'uint256',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'renounceRole',
    inputs: [
      {
        type: 'bytes32',
        name: 'role',
        internalType: 'bytes32',
      },
      {
        type: 'address',
        name: 'account',
        internalType: 'address',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'revokeRole',
    inputs: [
      {
        type: 'bytes32',
        name: 'role',
        internalType: 'bytes32',
      },
      {
        type: 'address',
        name: 'account',
        internalType: 'address',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'submitForReview',
    inputs: [
      {
        type: 'uint256',
        name: 'propertyId',
        internalType: 'uint256',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'supportsInterface',
    inputs: [
      {
        type: 'bytes4',
        name: 'interfaceId',
        internalType: 'bytes4',
      },
    ],
    outputs: [
      {
        type: 'bool',
        name: '',
        internalType: 'bool',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'updateProperty',
    inputs: [
      {
        type: 'uint256',
        name: 'propertyId',
        internalType: 'uint256',
      },
      {
        type: 'string',
        name: 'uri',
        internalType: 'string',
      },
      {
        type: 'uint256',
        name: 'price',
        internalType: 'uint256',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
];
