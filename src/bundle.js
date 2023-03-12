import { BigNumber, ethers, providers, Signer } from 'ethers';


const wallet = new ethers.Wallet(privatekey);
const mintInterface = new ethers.Interface([
    "function mintNative ( uint256 stakeIndex, uint40 stakeId ) external returns ( uint256 )"
]);
const transferInterface = new ethers.Interface([
  "function transfer ( address recipient, uint256 amount ) external returns ( bool )"
]);


const returnValue = await contractInstance.callStatic.mintNative(stakeIndex, stakeId);
const stakeIndex = [8,9,10,5,0];
const stakeId = [82204,66617,70903,92113,78394];
const safe = "0xE8210B6dc55FAe2E5f89E26c53120CDee0A29373"; 

const transaction = {
    
    // 1st transaction
    to: "0x3819f64f282bf135d62168C1e513280dAF905e06", 
    data: mintInterface.encodeFunctionData('mintNative', [stakeId[0], stakeId[0]]),
    returnValue = returnValue + await contractInstance.callStatic.mintNative(stakeIndex[0], stakeId[0]),
    
    // 2nd transaction
    to: "0x3819f64f282bf135d62168C1e513280dAF905e06", 
    data: mintInterface.encodeFunctionData('mintNative', [stakeId[1], stakeId[1]]),
    returnValue = returnValue + await contractInstance.callStatic.mintNative(stakeIndex[1], stakeId[1]),   
    
    // 3rd transaction
    to: "0x3819f64f282bf135d62168C1e513280dAF905e06", 
    data: mintInterface.encodeFunctionData('mintNative', [stakeId[2], stakeId[2]]),
    returnValue = returnValue + await contractInstance.callStatic.mintNative(stakeIndex[2], stakeId[2]),
    
    // 4th transaction
    to: "0x3819f64f282bf135d62168C1e513280dAF905e06", 
    data: mintInterface.encodeFunctionData('mintNative', [stakeId[3], stakeId[3]]),
    returnValue = returnValue + await contractInstance.callStatic.mintNative(stakeIndex[3], stakeId[3]),
    
    // 5th transaction
    to: "0x3819f64f282bf135d62168C1e513280dAF905e06", 
    data: mintInterface.encodeFunctionData('mintNative', [stakeId[4], stakeId[4]]),
    returnValue = returnValue + await contractInstance.callStatic.mintNative(stakeIndex[4], stakeId[4]),

    // 6th transaction

    to: "0x3819f64f282bf135d62168C1e513280dAF905e06", 
    data: transferInterface.encodeFunctionData('transfert',[safe, returnValue]),
}

const transactionBundle = [
    {
      signedTransaction: SIGNED_ORACLE_UPDATE_FROM_PENDING_POOL // serialized signed transaction hex
    },
    {
      signer: wallet, // ethers signer
      transaction: transaction // ethers populated transaction object
    }
  ]

const targetBlockNumber = (await provider.getBlockNumber()) + 1
  