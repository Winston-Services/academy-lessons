# Importing a token to your Wallet.

With so many tokens, and not all of them registered, verified, and auditied wallets by default do not show all of the tokens registered to an owner. You can add all of the tokens you hold to your wallet, as well as the ones you dont, I'll show you how. In this lesson I am going to show you the steps it takes to import a token to your metamask wallet. 


## Step 1 Install and/or Open your wallet

Often when you open a wallet for the first time you will need to setup a passphrase and a set of words called your seed phrase. You want to keep these and your private keys safe. I recommend you print them out and keep a hard copy. If you dont have Metamask installed [download it now](https://).

[Plug Winston Paper Wallet App]

Now if you have ever had a computer crash on you, you understand the need to back up your important documents and files. With your cryptocurrency wallet its important to do the same thing. Security should be your top priority with your wallet, as anyone with access to the private key, also has access to everything in your wallet.
---
NOTE :
You can look at the private key as a universal key to the lock on your account. Anyone with access can get in the account.

I am going to demonstrate using MetaMask to add Winston Token. If you would like to see how to add it using other decentralized wallets, send us a message.

[Image of Open Empty Wallet]

In the image above you will see an empty Metamask wallet. Let's take a look at the different parts and what we will need to know to get started adding a token.


The Network
It's always important to make sure you are using the right network for the right tokens. Since one token may be on many chains you will want to make sure you are using the right network, and token when doing transactions.

In our demonstration we are using the Binance network, you can generally add any of the public nodes to your wallet by going to the block explorer for the chain and following the directions to add a network node. On many of the explorers you can find a direct link to add the blockchain node to your wallet, you can usually locate it in the footer of any page on the explorer.

Once you make sure you are on the right network you will need to get the contract address for the token you are going to be adding. We are adding Winston Token,
you can find it on BSCScan [here](https://bscscan.com/token/0x75578ebBefe274F240B8E1b5859cA34f342157D9).
> https://bscscan.com/token/0x75578ebBefe274F240B8E1b5859cA34f342157D9
> * 0x75578ebBefe274F240B8E1b5859cA34f342157D9

Take some time to check it out. You can even read the code to the contract. This is usually a good start to a good token. However, If you can not read the code, you dont know what the contract is doing. THAT IS NOT SAFE!! Once you review the block explorer page, and make sure its the token you want to import, you can use the blockexplorer to add the token to your wallet. I have added those instruction [here](./import-a-token-with-bscscan.md).

Now that you have verified you have the right contract address you can import the token with Metamask. Scroll to the bottom of the Wallet, there should be a link to import a token. Follow the link to the import token screen. 

[Image of Import Token Screen on Metamask]

Here you have two option, the first is to search by the name, symbol, or contract address. Now most the time new tokens wont show up in this list, so you will have to use the second option. 

### Custom Token Import

If you click the tab for Custom Import it will take you to a screen like the one below, where you can add in the contract address, symbol and decimals. 

[Image of Custom Import Screen on Metamask]

You can find all that information on the block explorer page for the token. In our case for Winston we will use the following information.

* Contract Address
  * 0x75578ebBefe274F240B8E1b5859cA34f342157D9
* Symbol
  * WIN
* Decimals
  * 18

You can verify this information for yourself, and I encourage you to always check these things out before you do them.

Once we have our information in the fields we can click import.

You may get a message like the one below. If you are sure you are adding the right token, confirm the dialog and the token should now show up under the assets list like below.

[Image of Winston added to Metamask]


As a bonus you can update the Icon for Winston [here], not all tokens Icons are added, as it requires the blockexplorers approval. You can however always add any image you want for any token, check out this lesson on [adding an icon to metamask] with a bit of code you can have any image you want for your tokens.




