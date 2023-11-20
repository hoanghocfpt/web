const getWeb3 = async () => {
    return new Promise(async (resolve, reject) => {
        const web3 = new Web3(window.ethereum);
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' })
            resolve(web3)
        }catch (err) {
            reject(err)
        }
    }
    )
};

document.querySelector('#connect').addEventListener('click', async () => {  
    const web3 = await getWeb3();
    const accounts = await web3.eth.getAccounts();
    document.querySelector('.address').innerHTML = accounts[0]; 
    const balance = await web3.eth.getBalance(accounts[0]);    
    document.querySelector('#balance').innerHTML = balance;  
    const networkName = await web3.eth.net.getNetworkType(0);
    document.querySelector('#network').innerHTML = networkName;   
});