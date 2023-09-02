require("dotenv").config();
const { JsonRpcProvider, Signer } = require("@ethersproject/providers");
const ethers = require("ethers");

// Create a JsonRpcProvider instance
const rpcUrl = "https://rpc.testnet.mantle.xyz";
const chainId = 5001;
const provider = new JsonRpcProvider(rpcUrl, chainId);
/////////////////^step1
//const abi = require("../artifacts/contracts/MyNFT.sol/MyNFT.json").abi;
///////////////^step2
// Create a signer using the private key from the environment variable
const privateKey = process.env.PRIV_KEY;
const signer = new ethers.Wallet(privateKey, provider);

// Get contract ABI and address
const abi = require("../artifacts/contracts/MyNFT.sol/MyNFT.json").abi;
const contractAddress = "0x42B924C37E85b7bD1f92e5eAb11d97F222F403d5";

// Create a contract instance
const myNftContract = new ethers.Contract(contractAddress, abi, signer);
/////////^step4

// Get the NFT Metadata IPFS URL
const tokenUri = "https://gateway.pinata.cloud/ipfs/QmbFMke1KXqnYyBBWxB74N4c5SBnJMVAiMNRcGu6x1AwQH";

// Call mintNFT function
async function mintNFT() {
  let nftTxn = await myNftContract.mintNFT(signer.address, tokenUri, "Sword", 1, "Weapon");
  await nftTxn.wait();
  console.log(`NFT Minted! Check it out at: https://explorer.testnet.mantle.xyz/tx/${nftTxn.hash}`);
}


mintNFT()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
