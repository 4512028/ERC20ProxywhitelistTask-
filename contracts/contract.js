//The amountADesired and amountBDesired parameters specify the desired amounts of 
// each token to add to the pool, while the amountAMin and amountBMin parameters specify
//  the minimum amounts of each token that must be added to the pool to complete the transaction.



const Web3 = require('web3');
const web3 = new Web3('https://mainnet.infura.io/v3/YOUR-PROJECT-ID');
const routerAddress = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D';
const tokenAAddress = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'; // WETH
const tokenBAddress = '0x6b175474e89094c44da98b954eedeac495271d0f'; // DAI
const amountADesired = web3.utils.toWei('1', 'ether');
const amountBDesired = web3.utils.toWei('500', 'ether');
const amountAMin = web3.utils.toWei('0.9', 'ether');
const amountBMin = web3.utils.toWei('450', 'ether');
const deadline = Math.floor(Date.now() / 1000) + 60 * 10; // 10 minutes
const privateKey = 'YOUR-PRIVATE-KEY';
const account = web3.eth.accounts.privateKeyToAccount(privateKey);

const router = new web3.eth.Contract(routerABI, routerAddress);

const tx = {
    from: account.address,
    to: routerAddress,
    gas: 300000,
    data: router.methods.addLiquidity(
        tokenAAddress,
        tokenBAddress,
        amountADesired,
        amountBDesired,
        amountAMin,
        amountBMin,
        account.address,
        deadline
    ).encodeABI()
};

web3.eth.accounts.signTransaction(tx, privateKey).then(signed => {
    web3.eth.sendSignedTransaction(signed.rawTransaction).on('receipt', console.log);
});
