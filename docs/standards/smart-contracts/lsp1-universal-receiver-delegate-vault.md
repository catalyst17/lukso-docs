---
title: LSP1UniversalReceiverDelegateVault
sidebar_position: 9
---

# LSP1UniversalReceiverDelegateVault

:::info Solidity contract

[`LSP1UniversalReceiverDelegateVault.sol`](https://github.com/lukso-network/lsp-smart-contracts/blob/main/contracts/LSP1UniversalReceiver/LSP1UniversalReceiverDelegateVault/LSP1UniversalReceiverDelegateVault.sol)

:::

The **LSP1UniversalReceiverDelegateVault** is a contract called by the **[`universalReceiver(...)`](./lsp9-vault.md#universalreceiver)** function of the **[LSP9Vault](./lsp9-vault.md)** contract. It writes the assets of the **[LSP7-DigitalAsset Standard](../nft-2.0/LSP7-Digital-Asset.md)** and **[LSP8-IdentifiableDigitalAsset Standard](../nft-2.0/LSP8-Identifiable-Digital-Asset.md)** that a vault receives into the vault storage and removes them when the balance is zero according to the **[LSP5-ReceivedAssets Standard](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-5-ReceivedAssets.md)**.

:::note
_LSP1UniversalReceiverDelegateVault contract also contains the methods from the [ERC165 Standard](https://eips.ethereum.org/EIPS/eip-165):_

```solidity
function supportsInterface(bytes4 interfaceId) public view returns (bool)
```

:::

## Functions

### constructor

```solidity
constructor()
```

Registers the **[LSP1UniversalReceiverDelegate interface id](./interface-ids.md)**.

### universalReceiverDelegate

```solidity
function universalReceiverDelegate(
    address sender,
    bytes32 typeId,
    bytes memory data
) public payable returns (bytes memory result)
```

Writes the received **LSP7-DigitalAsset** or **LSP8-IdentifiableDigitalAsset** assets into the vault storage according to the **LSP5-ReceivedAssets** standard.

:::note
The data key representing an **asset** is cleared when the asset is not owned by the vault anymore.
:::

#### Parameters:

| Name     | Type    | Description                                                 |
| :------- | :------ | :---------------------------------------------------------- |
| `sender` | address | The token smart contract address.                           |
| `typeId` | bytes32 | The token hooks.                                            |
| `data`   | bytes   | The data associated with the asset transfer (concatenated). |

#### Return Values:

| Name     | Type  | Description |
| :------- | :---- | :---------- |
| `result` | bytes | Empty bytes |

## References

- [LUKSO Standards Proposals: LSP1 - Universal Receiver (Standard Specification, GitHub)](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-1-UniversalReceiver.md)
- [LSP1 Universal Receiver: Solidity implementations (GitHub)](https://github.com/lukso-network/lsp-universalprofile-smart-contracts/tree/develop/contracts/LSP1UniversalReceiver)
