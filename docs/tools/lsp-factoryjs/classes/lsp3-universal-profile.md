---
sidebar_position: 1
title: LSP3UniversalProfile
---

# LSP3UniversalProfile

## deploy

```javascript
lspFactory.LSP3UniversalProfile.deploy(
  profileDeploymentOptions,
  contractDeploymentOptions?
);
```

Deploys and **configures** a [Universal Profile](../../../standards/universal-profile/introduction) to the blockchain. It will deploy the following contracts:

- [LSP0 ERC725 Account](../../../standards/universal-profile/lsp0-erc725account)
- [LSP6 Key Manager](../../../standards/universal-profile/lsp6-key-manager)

After, it will:

- upload metadata to IPFS and set the [LSP3 Universal Profile](../../../standards/universal-profile/lsp3-universal-profile-metadata) metadata,
- attach the Universal Receiver Delegate to the ERC725 Account contract,
- set the Key Manager as the owner of the LSP0 ERC725 Account, and
- set all [LSP6 Permissions](../../../standards/universal-profile/lsp6-key-manager#-types-of-permissions) to the `controllerAddresses` except `DELEGATECALL`.

By default the [LSP1 Universal Receiver Delegate](../../../standards/universal-profile/lsp1-universal-receiver-delegate) contract that is specified in the [versions file](https://github.com/lukso-network/tools-lsp-factory/blob/main/src/versions.json) will be attached to the Universal Profile. A custom Universal Receiver Delegate can be optionally deployed, by passing custom bytecode to the ContractDeploymentOptions object. You can read more about it in the[Universal Profile Configuration](../deployment/universal-profile#configuration).

#### Parameters

| Name                         | Type   | Description                              |
| :--------------------------- | :----- | :--------------------------------------- |
| `profileDeploymentOptions`   | Object | The options used for profile deployment. |
| `contractDeploymentOptions?` | Object | Specifies contract deployment details.   |

#### Properties of `profileDeploymentOptions`

| Name                  | Type           | Description                                                                  |
| :-------------------- | :------------- | :--------------------------------------------------------------------------- |
| `controllerAddresses` | string[&nbsp;] | A list of accounts (public addresses) with [all permissions] on UP creation. |
| `lsp3Profile?`        | Object         | If set, the created Universal Profile will be populated with these values.   |

#### Properties of `lsp3Profile?`

| Name               | Type                                             | Description                                    |
| :----------------- | :----------------------------------------------- | :--------------------------------------------- |
| `name`             | string                                           | The name of the Universal Profile.             |
| `description`      | string                                           | The description of the Universal Profile.      |
| `profileImage?`    | File, ImageBuffer, or ImageMetadata[&nbsp;]      | The profile image of the Universal Profile.    |
| `backgroundImage?` | File, ImageBuffer, or ImageMetadata[&nbsp;]      | The background image of the Universal Profile. |
| `tags?`            | string[&nbsp;]                                   | The tags of the Universal Profile.             |
| `links?`           | {&nbsp;title: string, url: string&nbsp;}[&nbsp;] | The links related to the Universal Profile.    |

:::info Contract Deployment Details
See the [configuration specification](../deployment/universal-profile#configuration) for more information about the `contractDeploymentOptions?` property.
:::

#### Returns

| Name         | Type           | Description                                                                                                       |
| :----------- | :------------- | :---------------------------------------------------------------------------------------------------------------- |
| `Promise`    | <Object/>      | An object containing deployed contract details by default.                                                        |
| `Observable` | RxJS <Object/> | An [RxJS Observable] object, if `deployReactive` flag is set to `true` in the `contractDeploymentOptions?` object |

:::note
The Observable is an object containing deployment events.
:::

#### Universal Profile Deployment Example

```javascript title="Deploying a Universal Profile"
await lspFactory.LSP3UniversalProfile.deploy({
  controllingAccounts: ['0xb74a88C43BCf691bd7A851f6603cb1868f6fc147'],
  lsp3Profile: {
    name: 'My Universal Profile',
    description: 'My cool Universal Profile',
    tags: ['Fashion', 'Design'],
    links: [{ title: 'My Website', url: 'www.my-website.com' }],
  },
});

/**
{
  ERC725Account: {
    address: '0xaEc61B848954e4d69B1283810df8A7fB9bA23BF2',
    receipt: {
      to: null,
      from: '0x9Fba07e245B415cC9580BD6c890a9fd7D22e20db',
      contractAddress: '0xaEc61B848954e4d69B1283810df8A7fB9bA23BF2',
      transactionIndex: 0,
      gasUsed: [BigNumber],
      logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
      blockHash: '0x48950fa6dfae12c7c6f172820bb0a7976da1c97ea541d2966bd2a9f39f3eb952',
      transactionHash: '0xfb5d45fda891c47efa1a14748939d51bed58a9406c6ff685e0fdc8655a880d6e',
      logs: [],
      blockNumber: 12028255,
      confirmations: 1,
      cumulativeGasUsed: [BigNumber],
      status: 1,
      type: 0,
      byzantium: true,
      events: []
    }
  },
  UniversalReceiverDelegate: {
    address: '0xd92C7cA9c493aFC0DF51cE480ec7bB7DC8394549',
    receipt: {
      to: null,
      from: '0x9Fba07e245B415cC9580BD6c890a9fd7D22e20db',
      contractAddress: '0xd92C7cA9c493aFC0DF51cE480ec7bB7DC8394549',
      transactionIndex: 0,
      gasUsed: [BigNumber],
      logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
      blockHash: '0x8b793e53ffe5ad6853cc06f0ca8879f8b0f0c32f69791e96d657d7fde8313d35',
      transactionHash: '0x12e38b93709116da42e0c69af65f6096fa7b380ccb02ced4e3e431297c05e704',
      logs: [],
      blockNumber: 12028257,
      confirmations: 1,
      cumulativeGasUsed: [BigNumber],
      status: 1,
      type: 0,
      byzantium: true,
      events: []
    }
  },
  KeyManager: {
    address: '0xdbD3297B9bD80cA20cA75a644b1Fa903B05A2Fc3',
    receipt: {
      to: null,
      from: '0x9Fba07e245B415cC9580BD6c890a9fd7D22e20db',
      contractAddress: '0xdbD3297B9bD80cA20cA75a644b1Fa903B05A2Fc3',
      transactionIndex: 1,
      gasUsed: [BigNumber],
      logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
      blockHash: '0x8b793e53ffe5ad6853cc06f0ca8879f8b0f0c32f69791e96d657d7fde8313d35',
      transactionHash: '0x1183a1c9a64b88bb8e7da67805125d5b8e63c7dc8fab11dce350ee0c0995060b',
      logs: [],
      blockNumber: 12028257,
      confirmations: 1,
      cumulativeGasUsed: [BigNumber],
      status: 1,
      type: 0,
      byzantium: true,
      events: []
    }
  }
}
*/
```

#### Reactive Universal Profile Deployment Example

```javascript title="Deploying a reactive Universal Profile"
await lspFactory.LSP3UniversalProfile.deploy(
  {
    controllingAccounts: ['0x9Fba07e245B415cC9580BD6c890a9fd7D22e20db'],
  },
  {
    deployReactive: true,
  }
).subscribe({
  next: (deploymentEvent) => {
    console.log(deploymentEvent);
  },
  complete: () => {
    console.log('Deployment Complete');
  },
});

/**
{
  type: 'PROXY',
  contractName: 'ERC725Account',
  status: 'PENDING',
  transaction: {
    ...
  }
}
{
  type: 'PROXY',
  contractName: 'ERC725Account',
  status: 'PENDING',
  receipt: {
    ...
  }
}
{
  type: 'PROXY',
  contractName: 'ERC725Account',
  functionName: 'initialize',
  status: 'PENDING',
  transaction: {
    ...
  }
}
{
  type: 'PROXY',
  contractName: 'ERC725Account',
  functionName: 'initialize',
  status: 'COMPLETE',
  receipt: {
    ...
  }
}
{
  type: 'CONTRACT',
  status: 'PENDING',
  contractName: 'KeyManager',
  transaction: {
    ...
  }
}
{
  type: 'PROXY',
  contractName: 'UniversalReceiverDelegate',
  status: 'PENDING',
  transaction: {
    ...
  }
}
{
  type: 'CONTRACT',
  contractName: 'KeyManager',
  status: 'COMPLETE',
  receipt: {
    ...
  }
}
{
  type: 'PROXY',
  contractName: 'UniversalReceiverDelegate',
  status: 'PENDING',
  receipt: {
    ...
  }
}
{
  type: 'PROXY',
  contractName: 'UniversalReceiverDelegate',
  functionName: 'initialize',
  status: 'PENDING',
  transaction: {
    ...
  }
}
{
  type: 'PROXY',
  contractName: 'UniversalReceiverDelegate',
  functionName: 'initialize',
  status: 'COMPLETE',
  receipt: {
    ...
  }
}
{
  type: 'TRANSACTION',
  contractName: 'ERC725Account',
  functionName: 'setData',
  status: 'PENDING',
  transaction: {
    ...
  }
}
{
  type: 'TRANSACTION',
  contractName: 'ERC725Account',
  functionName: 'setData',
  status: 'COMPLETE',
  receipt: {
    ...
  }
}
{
  type: 'TRANSACTION',
  status: 'PENDING',
  contractName: 'ERC725Account',
  functionName: 'transferOwnership',
  transaction: {
    ...
  }
}
{
  type: 'TRANSACTION',
  contractName: 'ERC725Account',
  functionName: 'transferOwnership',
  status: 'COMPLETE',
  receipt: {
    ...
  }
}
Deployment Complete
*/
```

---

## uploadProfileData

```js
LSP3UniversalProfile.uploadProfileData(profileData, uploadOptions?);
```

Uploads the [LSP3Profile](../../../standards/universal-profile/lsp3-universal-profile-metadata) data to the desired endpoint. The endpoint can be a `HTTPS` URL pointing to a public or private storage solution, an IPFS node, or a cluster.

Will upload and process passed images.

#### Parameters

| Name             | Type   | Description                                                           |
| :--------------- | :----- | :-------------------------------------------------------------------- |
| `profileData`    | Object | An object containing the profile data to upload.                      |
| `uploadOptions?` | Object | An object containing special options used for uploading profile data. |

#### Returns

| Name      | Type                          | Description                           |
| :-------- | :---------------------------- | :------------------------------------ |
| `Promise` | <LSP3ProfileDataForEncoding\> | Processed [LSP3] data and upload URL. |

#### Uploading Profile Data Example

```javascript title="Uploading profile data"
await LSP3UniversalProfile.uploadProfileData({
  name: 'My Universal Profile',
  description: 'My cool Universal Profile',
  tags: ['Fashion', 'Design'],
  links: [{ title: 'My Website', url: 'www.my-website.com' }],
  profileImage: [
    {
      width: 500,
      height: 500,
      hashFunction: 'keccak256(bytes)',
      hash: '0xfdafad027ecfe57eb4ad047b938805d1dec209d6e9f960fc320d7b9b11cbed14',
      url: 'ipfs://QmPLqMFHxiUgYAom3Zg4SiwoxDaFcZpHXpCmiDzxrtjSGp',
    },
  ],
  backgroundImage: [
    {
      width: 500,
      height: 500,
      hashFunction: 'keccak256(bytes)',
      hash: '0xfdafad027ecfe57eb4ad047b938805d1dec209d6e9f960fc320d7b9b11cbed14',
      url: 'ipfs://QmPLqMFHxiUgYAom3Zg4SiwoxDaFcZpHXpCmiDzxrtjSGp',
    },
  ],
});

/**
{
  profile: {
    LSP3Profile: {
      name: 'My Universal Profile',
      description: 'My cool Universal Profile',
      tags: [Array],
      links: [Array],
      profileImage: [Array],
      backgroundImage: [Array]
    }
  },
  url: 'ipfs://QmS7NCnoXub7ju13HZuDzJpWqWq15Nev4CC18821qBNbkx'
}
*/
```

[all permissions]: ../../../../../standards/universal-profile/lsp6-key-manager#-address-permissions
[rxjs observable]: https://rxjs.dev/guide/observable
[lsp3]: ../../../standards/universal-profile/lsp3-universal-profile-metadata
