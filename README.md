# ERC20ProxywhitelistTask-

ERC20 Proxy white list Task
T1- What are proxy contracts? Give an example of Proxy Upgradable smart contract to upgrade ERC20 token like you deployed a simple erc20 token and later we want to add two more functionalities which can be any(up to you), you have to add any two functionality and upgrade the previous deployed contract.

\*\* We don’t want to rely on a single owner of ERC20 token, so you have to come up with some secure solution so that we don’t have to rely on a single private key.
(i)
What are proxy contracts?
A proxy is a contract that delegates all of its calls to a second contract, named an implementation contract. All state and funds are held in the proxy, but the code actually executed is that of the implementation. A proxy can be upgraded by its admin to use a different implementation contract.\

Proxy Contract address V1 : 0x6a95b40a2Ef40faE8667CAC6a4F3Ed0662162635
implemented Contract V3 : 0x35CA3d1239489819d8329855aB74D80a0058a975
Previous Implemented contract V2 : 0x337Ba81a89AA2F06A34868fb951868f1b1Ec11eD

(ii)
Secure solution for multi Role
WhiteList :
in smart contract to whitelist users, that it will be possible to add an address, check a user, and verify each function if the user has been whitelisted.
