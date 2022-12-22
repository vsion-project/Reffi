(this.webpackJsonprefi=this.webpackJsonprefi||[]).push([[0],{27:function(e){e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"checkBlackList","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeListed","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"includeListed","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"lock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unlock","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},47:function(e){e.exports=JSON.parse('{"_format":"hh-sol-artifact-1","contractName":"REFFISELL","sourceName":"contracts/refisell.sol","abi":[{"inputs":[{"internalType":"address","name":"_criptovision","type":"address"},{"internalType":"address","name":"_refi","type":"address"},{"internalType":"address","name":"_walletDindon","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"refer","type":"address"},{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"AirdopReferal","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"ReffiBuyed","type":"event"},{"inputs":[{"internalType":"uint256","name":"_phase","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"AddPhase","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"AddTokenAccept","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"AddWhiteList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"BuyReffi","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"ChangeActivateWhiteList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_number","type":"uint256"}],"name":"ChangePhase","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"ChangeWalletLiquidity","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"PhaseSelling","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"RecoverTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"TotalSelling","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"addPhases","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getPhase","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPhaseCost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPhasePrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unlock","outputs":[],"stateMutability":"nonpayable","type":"function"}],"bytecode":"0x6080604052600160025534801561001557600080fd5b50604051620014223803806200142283398101604081905261003691610332565b6001600055610044336102c4565b60048054610100600160a81b0319166101006001600160a01b0393841602178155600780546001600160a01b0319908116948416949094179055600880549093169390911692909217905560408051808201825267016345785d8a000081526a04f7d1e992e034fdc00000602080830191825260016000818152600c80845294517fd421a5181c571bba3f01190c922c3b2a896fc1d84e86c9f17ac10e67ebef8b5c5592517fd421a5181c571bba3f01190c922c3b2a896fc1d84e86c9f17ac10e67ebef8b5d5584518086018652670214e8348c4f000081526a022bdd88fed9efc6a000008184018181526002865286855291517f5d6016397a73f5e079297ac5a36fef17b4d9c3831618e63ab105738020ddd7205590517f5d6016397a73f5e079297ac5a36fef17b4d9c3831618e63ab105738020ddd72155855180870187526702c68af0bb14000081528084018281526003865286855290517fc0da782485e77ae272268ae0a3ff44c1552ecb60b3743924de17a815e0a3cfd755517fc0da782485e77ae272268ae0a3ff44c1552ecb60b3743924de17a815e0a3cfd85585518087019096526703782dace9d90000865285830190815295835292815292517f5b84bb9e0f5aa9cc45a8bb66468db5d4816d1e75ff86b5e1f1dd8d144dab80975592517f5b84bb9e0f5aa9cc45a8bb66468db5d4816d1e75ff86b5e1f1dd8d144dab809855600a9091527fb0775d57c3eeb070f58d410e36e9ff396813a5d76997d9a91bdf10f0798296f0805460ff19908116831790915573e9e7cea3dedca5984780bafc599bd69add087d569092527f588f8bca8b2048a19ea94cc48f893d0bde00a1faadb2e5327aa9408686f2bdf28054909216179055610375565b600180546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b80516001600160a01b038116811461032d57600080fd5b919050565b60008060006060848603121561034757600080fd5b61035084610316565b925061035e60208501610316565b915061036c60408501610316565b90509250925092565b61109d80620003856000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c8063a69df4b5116100ad578063eced028011610071578063eced0280146103d9578063f2fde38b146103e1578063f83d08ba146103f4578063f8d5f409146103fc578063f9b496401461040f57600080fd5b8063a69df4b5146101d8578063c362d20c146101e0578063cf922b1e146101e9578063d3afd6ac146101fc578063e7cc0f79146103bf57600080fd5b80635a53bf31116100f45780635a53bf31146101875780636f6a5d061461019a578063715018a6146101a25780638da5cb5b146101aa578063939edd0e146101c557600080fd5b8063120005ae146101265780631c5f80241461014c5780632fea6ac414610161578063478b0f8714610174575b600080fd5b6002546000908152600c60205260409020545b6040519081526020015b60405180910390f35b61015f61015a366004610f00565b610418565b005b61015f61016f366004610f48565b61044e565b61015f610182366004610f48565b61047a565b61015f610195366004610f63565b61059c565b61015f610a4d565b61015f610a76565b6001546040516001600160a01b039091168152602001610143565b61015f6101d3366004610f48565b610a8a565b61015f610aba565b61013960055481565b61015f6101f7366004610f8d565b610ace565b61015f60408051808201825267016345785d8a000081526a04f7d1e992e034fdc00000602080830191825260016000908152600c80835293517fd421a5181c571bba3f01190c922c3b2a896fc1d84e86c9f17ac10e67ebef8b5c5591517fd421a5181c571bba3f01190c922c3b2a896fc1d84e86c9f17ac10e67ebef8b5d5583518085018552670214e8348c4f000081526a022bdd88fed9efc6a000008183018181526002855285845291517f5d6016397a73f5e079297ac5a36fef17b4d9c3831618e63ab105738020ddd7205590517f5d6016397a73f5e079297ac5a36fef17b4d9c3831618e63ab105738020ddd72155845180860186526702c68af0bb14000081528083018281526003855285845290517fc0da782485e77ae272268ae0a3ff44c1552ecb60b3743924de17a815e0a3cfd755517fc0da782485e77ae272268ae0a3ff44c1552ecb60b3743924de17a815e0a3cfd85584518086019095526703782dace9d90000855284820190815260049092529190915290517f5b84bb9e0f5aa9cc45a8bb66468db5d4816d1e75ff86b5e1f1dd8d144dab809755517f5b84bb9e0f5aa9cc45a8bb66468db5d4816d1e75ff86b5e1f1dd8d144dab809855565b6002546000908152600c6020526040902060010154610139565b600254610139565b61015f6103ef366004610f48565b610ae0565b61015f610b59565b61015f61040a366004610f48565b610b70565b61013960065481565b610420610b9c565b60408051808201825292835260208084019283526000948552600c9052909220905181559051600190910155565b610456610b9c565b6001600160a01b03166000908152600a60205260409020805460ff19166001179055565b610482610b9c565b806001600160a01b031663a9059cbb6104a36001546001600160a01b031690565b6040516370a0823160e01b81523060048201526001600160a01b038516906370a082319060240160206040518083038186803b1580156104e257600080fd5b505afa1580156104f6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061051a9190610fa6565b6040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401602060405180830381600087803b15801561056057600080fd5b505af1158015610574573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105989190610fbf565b5050565b6105a4610bf6565b60045460ff16156105ec5760405162461bcd60e51b815260206004820152600d60248201526c56656e7461205061757361646160981b60448201526064015b60405180910390fd5b6001600160a01b0382166000908152600a602052604090205460ff166106445760405162461bcd60e51b815260206004820152600d60248201526c24b73b30b634b2102a37b5b2b760991b60448201526064016105e3565b6002546000908152600c6020908152604080832081518083019092528054825260010154918101919091529061067a3384610c50565b9050600061068c338460000151610df1565b600454909150600160a81b900460ff1615610700573360009081526009602052604090205460ff166107005760405162461bcd60e51b815260206004820152601860248201527f596f7520617265206e6f7420696e2057686974654c697374000000000000000060448201526064016105e3565b6040516370a0823160e01b815233600482015284906001600160a01b038716906370a082319060240160206040518083038186803b15801561074157600080fd5b505afa158015610755573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107799190610fa6565b10156107b85760405162461bcd60e51b815260206004820152600e60248201526d42616c616e636520546f204c6f7760901b60448201526064016105e3565b60006107c48286610ff7565b9050600081846107d5606483610ff7565b6107df9190611019565b6107e99190611038565b6107fb90670de0b6b3a7640000611019565b9050806005600082825461080f9190611038565b9250508190555085600660008282546108289190611038565b90915550506005546020860151141561086e5760016002600082825461084e9190611038565b925050819055506000600560008282546108689190611038565b90915550505b600480546040516323b872dd60e01b8152339281019290925261010090046001600160a01b039081166024830152604482018890528816906323b872dd90606401602060405180830381600087803b1580156108c957600080fd5b505af11580156108dd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109019190610fbf565b6109415760405162461bcd60e51b815260206004820152601160248201527022b93937b91034b7102a3930b739b332b960791b60448201526064016105e3565b60075460405163a9059cbb60e01b8152336004820152602481018390526001600160a01b039091169063a9059cbb90604401602060405180830381600087803b15801561098d57600080fd5b505af11580156109a1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109c59190610fbf565b610a055760405162461bcd60e51b815260206004820152601160248201527022b93937b91034b7102a3930b739b332b960791b60448201526064016105e3565b60408051338152602081018490527f1ecc62d178ab4ffe6884f1463e2f3f563fa4090ef4f4a9c7c2682d9aa81abd20910160405180910390a150505050506105986001600055565b610a55610b9c565b6004805460ff60a81b198116600160a81b9182900460ff1615909102179055565b610a7e610b9c565b610a886000610e9b565b565b610a92610b9c565b600480546001600160a01b0390921661010002610100600160a81b0319909216919091179055565b610ac2610b9c565b6004805460ff19169055565b610ad6610b9c565b6002556000600555565b610ae8610b9c565b6001600160a01b038116610b4d5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016105e3565b610b5681610e9b565b50565b610b61610b9c565b6004805460ff19166001179055565b610b78610b9c565b6001600160a01b03166000908152600960205260409020805460ff19166001179055565b6001546001600160a01b03163314610a885760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016105e3565b60026000541415610c495760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016105e3565b6002600055565b6008546040516370a0823160e01b81526001600160a01b03848116600483015260009283929116906370a082319060240160206040518083038186803b158015610c9957600080fd5b505afa158015610cad573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cd19190610fa6565b9050610ce16305f5e10082610ff7565b9050610cf5670de0b6b3a764000084610ff7565b925060006001821115610daa576203d0908210158015610d16575060328410155b15610d1f575060195b6207a1208210158015610d33575060648410155b15610d3c575060325b6207a1218210158015610d525750620f42408211155b8015610d6057506101f48410155b15610d69575060645b620f42408210158015610d7e57506103e88410155b15610d87575060965b620f42408210158015610d9c57506113888410155b15610da5575060c85b610de9565b60328410610db6575060195b60648410610dc2575060325b6101f48410610dcf575060645b6103e88410610ddc575060965b6113888410610de9575060c85b949350505050565b6008546040516370a0823160e01b81526001600160a01b03848116600483015260009283929116906370a082319060240160206040518083038186803b158015610e3a57600080fd5b505afa158015610e4e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e729190610fa6565b9050826305f5e100821115610de957610e928466b1a2bc2ec50000610eed565b95945050505050565b600180546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6000610ef98284611050565b9392505050565b600080600060608486031215610f1557600080fd5b505081359360208301359350604090920135919050565b80356001600160a01b0381168114610f4357600080fd5b919050565b600060208284031215610f5a57600080fd5b610ef982610f2c565b60008060408385031215610f7657600080fd5b610f7f83610f2c565b946020939093013593505050565b600060208284031215610f9f57600080fd5b5035919050565b600060208284031215610fb857600080fd5b5051919050565b600060208284031215610fd157600080fd5b81518015158114610ef957600080fd5b634e487b7160e01b600052601160045260246000fd5b60008261101457634e487b7160e01b600052601260045260246000fd5b500490565b600081600019048311821515161561103357611033610fe1565b500290565b6000821982111561104b5761104b610fe1565b500190565b60008282101561106257611062610fe1565b50039056fea2646970667358221220e8d1cff1ecb7c597dd14c3fb66b36256beeb69c234e4b548a93bb5a94eb5a58b64736f6c63430008090033","deployedBytecode":"0x608060405234801561001057600080fd5b50600436106101215760003560e01c8063a69df4b5116100ad578063eced028011610071578063eced0280146103d9578063f2fde38b146103e1578063f83d08ba146103f4578063f8d5f409146103fc578063f9b496401461040f57600080fd5b8063a69df4b5146101d8578063c362d20c146101e0578063cf922b1e146101e9578063d3afd6ac146101fc578063e7cc0f79146103bf57600080fd5b80635a53bf31116100f45780635a53bf31146101875780636f6a5d061461019a578063715018a6146101a25780638da5cb5b146101aa578063939edd0e146101c557600080fd5b8063120005ae146101265780631c5f80241461014c5780632fea6ac414610161578063478b0f8714610174575b600080fd5b6002546000908152600c60205260409020545b6040519081526020015b60405180910390f35b61015f61015a366004610f00565b610418565b005b61015f61016f366004610f48565b61044e565b61015f610182366004610f48565b61047a565b61015f610195366004610f63565b61059c565b61015f610a4d565b61015f610a76565b6001546040516001600160a01b039091168152602001610143565b61015f6101d3366004610f48565b610a8a565b61015f610aba565b61013960055481565b61015f6101f7366004610f8d565b610ace565b61015f60408051808201825267016345785d8a000081526a04f7d1e992e034fdc00000602080830191825260016000908152600c80835293517fd421a5181c571bba3f01190c922c3b2a896fc1d84e86c9f17ac10e67ebef8b5c5591517fd421a5181c571bba3f01190c922c3b2a896fc1d84e86c9f17ac10e67ebef8b5d5583518085018552670214e8348c4f000081526a022bdd88fed9efc6a000008183018181526002855285845291517f5d6016397a73f5e079297ac5a36fef17b4d9c3831618e63ab105738020ddd7205590517f5d6016397a73f5e079297ac5a36fef17b4d9c3831618e63ab105738020ddd72155845180860186526702c68af0bb14000081528083018281526003855285845290517fc0da782485e77ae272268ae0a3ff44c1552ecb60b3743924de17a815e0a3cfd755517fc0da782485e77ae272268ae0a3ff44c1552ecb60b3743924de17a815e0a3cfd85584518086019095526703782dace9d90000855284820190815260049092529190915290517f5b84bb9e0f5aa9cc45a8bb66468db5d4816d1e75ff86b5e1f1dd8d144dab809755517f5b84bb9e0f5aa9cc45a8bb66468db5d4816d1e75ff86b5e1f1dd8d144dab809855565b6002546000908152600c6020526040902060010154610139565b600254610139565b61015f6103ef366004610f48565b610ae0565b61015f610b59565b61015f61040a366004610f48565b610b70565b61013960065481565b610420610b9c565b60408051808201825292835260208084019283526000948552600c9052909220905181559051600190910155565b610456610b9c565b6001600160a01b03166000908152600a60205260409020805460ff19166001179055565b610482610b9c565b806001600160a01b031663a9059cbb6104a36001546001600160a01b031690565b6040516370a0823160e01b81523060048201526001600160a01b038516906370a082319060240160206040518083038186803b1580156104e257600080fd5b505afa1580156104f6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061051a9190610fa6565b6040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401602060405180830381600087803b15801561056057600080fd5b505af1158015610574573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105989190610fbf565b5050565b6105a4610bf6565b60045460ff16156105ec5760405162461bcd60e51b815260206004820152600d60248201526c56656e7461205061757361646160981b60448201526064015b60405180910390fd5b6001600160a01b0382166000908152600a602052604090205460ff166106445760405162461bcd60e51b815260206004820152600d60248201526c24b73b30b634b2102a37b5b2b760991b60448201526064016105e3565b6002546000908152600c6020908152604080832081518083019092528054825260010154918101919091529061067a3384610c50565b9050600061068c338460000151610df1565b600454909150600160a81b900460ff1615610700573360009081526009602052604090205460ff166107005760405162461bcd60e51b815260206004820152601860248201527f596f7520617265206e6f7420696e2057686974654c697374000000000000000060448201526064016105e3565b6040516370a0823160e01b815233600482015284906001600160a01b038716906370a082319060240160206040518083038186803b15801561074157600080fd5b505afa158015610755573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107799190610fa6565b10156107b85760405162461bcd60e51b815260206004820152600e60248201526d42616c616e636520546f204c6f7760901b60448201526064016105e3565b60006107c48286610ff7565b9050600081846107d5606483610ff7565b6107df9190611019565b6107e99190611038565b6107fb90670de0b6b3a7640000611019565b9050806005600082825461080f9190611038565b9250508190555085600660008282546108289190611038565b90915550506005546020860151141561086e5760016002600082825461084e9190611038565b925050819055506000600560008282546108689190611038565b90915550505b600480546040516323b872dd60e01b8152339281019290925261010090046001600160a01b039081166024830152604482018890528816906323b872dd90606401602060405180830381600087803b1580156108c957600080fd5b505af11580156108dd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109019190610fbf565b6109415760405162461bcd60e51b815260206004820152601160248201527022b93937b91034b7102a3930b739b332b960791b60448201526064016105e3565b60075460405163a9059cbb60e01b8152336004820152602481018390526001600160a01b039091169063a9059cbb90604401602060405180830381600087803b15801561098d57600080fd5b505af11580156109a1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109c59190610fbf565b610a055760405162461bcd60e51b815260206004820152601160248201527022b93937b91034b7102a3930b739b332b960791b60448201526064016105e3565b60408051338152602081018490527f1ecc62d178ab4ffe6884f1463e2f3f563fa4090ef4f4a9c7c2682d9aa81abd20910160405180910390a150505050506105986001600055565b610a55610b9c565b6004805460ff60a81b198116600160a81b9182900460ff1615909102179055565b610a7e610b9c565b610a886000610e9b565b565b610a92610b9c565b600480546001600160a01b0390921661010002610100600160a81b0319909216919091179055565b610ac2610b9c565b6004805460ff19169055565b610ad6610b9c565b6002556000600555565b610ae8610b9c565b6001600160a01b038116610b4d5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016105e3565b610b5681610e9b565b50565b610b61610b9c565b6004805460ff19166001179055565b610b78610b9c565b6001600160a01b03166000908152600960205260409020805460ff19166001179055565b6001546001600160a01b03163314610a885760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016105e3565b60026000541415610c495760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016105e3565b6002600055565b6008546040516370a0823160e01b81526001600160a01b03848116600483015260009283929116906370a082319060240160206040518083038186803b158015610c9957600080fd5b505afa158015610cad573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cd19190610fa6565b9050610ce16305f5e10082610ff7565b9050610cf5670de0b6b3a764000084610ff7565b925060006001821115610daa576203d0908210158015610d16575060328410155b15610d1f575060195b6207a1208210158015610d33575060648410155b15610d3c575060325b6207a1218210158015610d525750620f42408211155b8015610d6057506101f48410155b15610d69575060645b620f42408210158015610d7e57506103e88410155b15610d87575060965b620f42408210158015610d9c57506113888410155b15610da5575060c85b610de9565b60328410610db6575060195b60648410610dc2575060325b6101f48410610dcf575060645b6103e88410610ddc575060965b6113888410610de9575060c85b949350505050565b6008546040516370a0823160e01b81526001600160a01b03848116600483015260009283929116906370a082319060240160206040518083038186803b158015610e3a57600080fd5b505afa158015610e4e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e729190610fa6565b9050826305f5e100821115610de957610e928466b1a2bc2ec50000610eed565b95945050505050565b600180546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6000610ef98284611050565b9392505050565b600080600060608486031215610f1557600080fd5b505081359360208301359350604090920135919050565b80356001600160a01b0381168114610f4357600080fd5b919050565b600060208284031215610f5a57600080fd5b610ef982610f2c565b60008060408385031215610f7657600080fd5b610f7f83610f2c565b946020939093013593505050565b600060208284031215610f9f57600080fd5b5035919050565b600060208284031215610fb857600080fd5b5051919050565b600060208284031215610fd157600080fd5b81518015158114610ef957600080fd5b634e487b7160e01b600052601160045260246000fd5b60008261101457634e487b7160e01b600052601260045260246000fd5b500490565b600081600019048311821515161561103357611033610fe1565b500290565b6000821982111561104b5761104b610fe1565b500190565b60008282101561106257611062610fe1565b50039056fea2646970667358221220e8d1cff1ecb7c597dd14c3fb66b36256beeb69c234e4b548a93bb5a94eb5a58b64736f6c63430008090033","linkReferences":{},"deployedLinkReferences":{}}')},56:function(e,a,t){},57:function(e,a,t){},70:function(e,a){},79:function(e,a){},80:function(e,a,t){"use strict";t.r(a);var b=t(7),n=t.n(b),c=t(41),s=t.n(c),d=(t(56),t(57),t(2)),i=t(17),f=t(10),r=t(24),o=t(15),l=t.n(o),u=t(42),p=t.n(u),m=t(5),y="WEB3_CONNECT_CACHED_PROVIDER",j=Object(b.createContext)({}),h=function(e){var a=e.children,t=Object(b.useState)(void 0),n=Object(f.a)(t,2),c=n[0],s=n[1],o=Object(b.useState)(void 0),u=Object(f.a)(o,2),h=u[0],O=u[1],x=Object(b.useState)(c?"":"https://bsc-dataseed1.binance.org/"),v=Object(f.a)(x,2),g=v[0],w=v[1],T=Object(b.useState)(!1),k=Object(f.a)(T,2),C=k[0],M=k[1],E=Object(b.useState)(!1),B=Object(f.a)(E,2),S=B[0],A=B[1],_="undefined"!==typeof window&&new p.a({cacheProvider:!0});Object(b.useEffect)((function(){function e(){return(e=Object(i.a)(Object(d.a)().mark((function e(){return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!window||!window.ethereum){e.next=7;break}if(!localStorage.getItem(y)){e.next=5;break}return e.next=5,F();case 5:e.next=8;break;case 7:console.log("window or window.ethereum is not available");case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0,"Catch error Account is not connected");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var P=function(){var e=Object(i.a)(Object(d.a)().mark((function e(a,t){var b,n,c;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b=new r.a.providers.Web3Provider(a),e.next=3,b.getBalance(t);case 3:n=e.sent,c=r.a.utils.formatEther(n),O(c);case 6:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),R=function(){s(void 0),_&&_.clearCachedProvider()},F=function(){var e=Object(i.a)(Object(d.a)().mark((function e(){var a,t;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,M(!0),(window&&void 0===window.web3||window&&void 0===window.ethereum)&&(A(!0),_&&_.toggleModal()),e.next=5,window.ethereum.request({method:"eth_requestAccounts"});case 5:if(a=e.sent,"56"===window.ethereum.networkVersion){e.next=12;break}return l.a.fire({title:"error",icon:"error",text:"wrong network, please swicht to BSC"}),t={method:"wallet_switchEthereumChain",params:[{chainId:"0x38",chainName:"Binance Smart Chain Mainnet",nativeCurrency:{name:"Binance Coin",symbol:"bnb",decimals:18},rpcUrls:["https://bsc-dataseed1.binance.org/"],blockExplorerUrls:["https://bscscan.com/"]}]},e.next=11,window.ethereum.request(t);case 11:return e.abrupt("return");case 12:return s(a[0]),w(window.ethereum),P(window.ethereum,a[0]),e.next=17,D(window.ethereum);case 17:M(!1),e.next=24;break;case 20:e.prev=20,e.t0=e.catch(0),M(!1),console.log(e.t0,"got this error on connectToWallet catch block while connecting the wallet");case 24:case"end":return e.stop()}}),e,null,[[0,20]])})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(i.a)(Object(d.a)().mark((function e(a){return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.on("close",(function(){R()})),a.on("accountsChanged",function(){var e=Object(i.a)(Object(d.a)().mark((function e(t){return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null!==t&&void 0!==t&&t.length?(s(t[0]),P(a,t[0])):R();case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(m.jsx)(j.Provider,{value:{address:c,balance:h,loading:C,error:S,Provider:g,connectToWallet:F,disconnectWallet:R},children:a})},O=function(){var e=Object(b.useContext)(j),a=e.address,t=e.connectToWallet;return Object(m.jsx)("div",{id:"sticky-header",class:"cryptobit_nav_manu",children:Object(m.jsx)("div",{class:"container",children:Object(m.jsxs)("div",{class:"row align-items-center",children:[Object(m.jsx)("div",{class:"col-lg-4",children:Object(m.jsxs)("div",{class:"logo",children:[Object(m.jsx)("a",{class:"logo_img upper1",href:"index.html",title:"cryptobit",children:Object(m.jsx)("img",{src:"assets/images/logo22.png",alt:""})}),Object(m.jsx)("a",{class:"main_sticky upper1",href:"index.html",title:"cryptobit",children:Object(m.jsx)("img",{src:"assets/images/logo22.png",alt:"astute"})})]})}),Object(m.jsx)("div",{class:"col-lg-8",children:Object(m.jsxs)("nav",{class:"cryptobit_menu upper",children:[Object(m.jsx)("ul",{class:"nav_scroll",children:Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"#!",children:Object(m.jsx)("br",{})})})}),Object(m.jsx)("div",{class:"header-button upper1",children:Object(m.jsx)("a",{href:"#!",onClick:function(){return a?console.log(a):t()},children:a?"Wallet conectada: ".concat(a):"Connect Wallet"})})]})})]})})})},x=t.p+"static/media/reffi.1da2a108.png",v=function(){return Object(m.jsx)("div",{class:"hero-section style-two d-flex align-items-center",id:"home",children:Object(m.jsx)("div",{class:"container",children:Object(m.jsxs)("div",{class:"row align-items-center",children:[Object(m.jsxs)("div",{class:"col-lg-6 col-md-6 col-sm-12",children:[Object(m.jsxs)("div",{class:"hero-content",children:[Object(m.jsxs)("div",{class:"hero-title",children:[Object(m.jsx)("h1",{children:"REFFI La Billetera Electr\xf3nica "}),Object(m.jsx)("h3",{children:"De Las Apps De La Nueva Economia"}),Object(m.jsx)("div",{class:"shape"})]}),Object(m.jsx)("div",{class:"hero-text",children:Object(m.jsx)("br",{})}),Object(m.jsx)("div",{class:"hero-button",children:Object(m.jsx)("a",{href:"#buy",children:"Buy Now"})})]}),Object(m.jsxs)("div",{class:"dreamit-hero-thumb",children:[Object(m.jsx)("div",{class:"hero-thumb-inner4 bounce-animate4",children:Object(m.jsx)("img",{src:"assets/images/slider/half-circle.png",alt:""})}),Object(m.jsx)("div",{class:"hero-thumb-inner5 bounce-animate",children:Object(m.jsx)("img",{src:"assets/images/slider/cross-2.png",alt:""})}),Object(m.jsx)("div",{class:"hero-thumb-inner6 bounce-animate2",children:Object(m.jsx)("img",{src:"assets/images/slider/cross.png",alt:""})})]})]}),Object(m.jsx)("div",{class:"col-lg-6 col-md-6 col-sm-12",children:Object(m.jsxs)("div",{class:"dreamit-hero-thumb",children:[Object(m.jsx)("div",{class:"hero-main-thumb",children:Object(m.jsx)("img",{src:x,alt:""})}),Object(m.jsx)("div",{class:"hero-thumb-inner1 rotateme",children:Object(m.jsx)("img",{src:"assets/images/slider/round.png",alt:""})}),Object(m.jsx)("div",{class:"hero-thumb-inner2 bounce-animate",children:Object(m.jsx)("img",{src:"assets/images/slider/style-1.png",alt:""})}),Object(m.jsx)("div",{class:"hero-thumb-inner3 bounce-animate3",children:Object(m.jsx)("img",{src:"assets/images/slider/style-2.png",alt:""})})]})})]})})})},g=t(25),w=t.n(g),T=t(47),k=t(27),C=function(){var e=Object(b.useContext)(j),a=e.address,t=e.Provider,n=Object(b.useState)("0x55d398326f99059fF775485246999027B3197955"),c=Object(f.a)(n,2),s=c[0],d=c[1],i=Object(b.useState)(0),o=Object(f.a)(i,2),u=o[0],p=o[1],y=Object(b.useState)(0),h=Object(f.a)(y,2),O=h[0],x=h[1],v=Object(b.useState)(0),g=Object(f.a)(v,2),C=g[0],M=g[1],E=Object(b.useState)(0),B=Object(f.a)(E,2),S=B[0],A=B[1],_=Object(b.useState)(0),P=Object(f.a)(_,2),R=P[0],F=P[1],D=Object(b.useState)(0),L=Object(f.a)(D,2),N=L[0],W=L[1],I=Object(b.useState)(!0),q=Object(f.a)(I,2),U=q[0],K=q[1],V="0x341eD7d7d16f05355A2030E416BDeBBF76fa0C8B",H=new w.a(t),J=new H.eth.Contract(k,s),z=new H.eth.Contract(k,"0x4BBD4fa12b2B874A13e9555F5C5d0F6aD035ACc3"),X=new H.eth.Contract(k,"0xeAF52bBE7694388c1f1c351be1908Db28F5451a8"),G=new H.eth.Contract(T.abi,V);Object(b.useEffect)((function(){G.methods.TotalSelling().call().then((function(e){return A(w.a.utils.fromWei(e,"ether"))})),G.methods.getPhase().call().then((function(e){return x(e)})),G.methods.getPhasePrice().call().then((function(e){return M(w.a.utils.fromWei(e,"ether"))})),a&&(J.methods.allowance(a,V).call().then((function(e){K(!(e>0))})),z.methods.balanceOf(a).call().then((function(e){return F(r.a.utils.parseUnits(e,"8").toString())})),X.methods.balanceOf(a).call().then((function(e){return W(w.a.utils.fromWei(e,"ether"))})))}),[a,s]);return Object(m.jsx)("div",{class:"services-area style-two pt-90 pb-100",children:Object(m.jsxs)("div",{class:"container",children:[Object(m.jsx)("div",{class:"row",children:Object(m.jsx)("div",{class:"col-lg-12 col-sm-12",children:Object(m.jsxs)("div",{class:"dreamit-section-title text-center style-two pb-5",children:[Object(m.jsx)("h4",{children:"PARTICIPA EN LA PREVENTA DE REFFI"}),Object(m.jsx)("h1",{children:"\xa1COMPRA EL TOKEN REFFI AHORA!"}),Object(m.jsxs)("p",{class:"section-text",style:{textAlign:"justify"},children:["El token Reffi es el token utility que impulsa nuestro ecosistema de Aplicaciones de econom\xeda Colaborativa \u2013 Startup Blockchain. ",Object(m.jsx)("br",{}),"Participa de las preventas m\xe1s atractivas de este 2022-2023.",Object(m.jsx)("br",{}),"Puedes comprar directamente con USDT, BNB, BUSD. ",Object(m.jsx)("br",{}),"Cuando concluya las preventas p\xfablicas, podr\xe1s realizar Staking y Farming, y as\xed podr\xe1s ganar m\xe1s tokens TREFFI que ser\xe1 nuestro token de liquidez con el podr\xe1s generar m\xe1s token.",Object(m.jsx)("br",{})]})]})})}),Object(m.jsxs)("div",{class:"row service-bg",id:"buy",children:[Object(m.jsxs)("div",{class:"col-lg-6 col-md-6 col-sm-12",children:[Object(m.jsxs)("div",{class:"dreamit-section-title style-two",children:[Object(m.jsxs)("h1",{children:["PREVENTA ",O]}),Object(m.jsx)("p",{class:"service-text",style:{marginBottom:0},dangerouslySetInnerHTML:{__html:"1 Reffi = ".concat(R>0?"<del>".concat(C,"</del> ").concat(C-.05):C)}}),Object(m.jsxs)("p",{class:"service-text",children:["Total Recaudado : ",S]})]}),Object(m.jsxs)("div",{class:"about-button2",children:[Object(m.jsx)("div",{class:"form-horizontal",children:Object(m.jsxs)("fieldset",{children:[Object(m.jsxs)("div",{class:"form-group",children:[Object(m.jsx)("label",{class:"col-md-8 control-label",for:"selectbasic",children:"Selecciona Token:"}),Object(m.jsx)("div",{class:"col-md-8",children:Object(m.jsxs)("select",{id:"selectbasic",name:"selectbasic",class:"form-control",onChange:function(e){return d(e.target.value)},children:[Object(m.jsx)("option",{value:"0x55d398326f99059fF775485246999027B3197955",children:"USDT"}),Object(m.jsx)("option",{value:"0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",children:"BUSD"})]})})]}),Object(m.jsxs)("div",{class:"form-group",style:{marginTop:30,marginBottom:30},children:[Object(m.jsx)("label",{class:"col-md-8 control-label",for:"textinput",children:"Cantidad:"}),Object(m.jsx)("div",{class:"col-md-8",children:Object(m.jsx)("input",{id:"textinput",name:"textinput",type:"number",placeholder:"0.00",class:"form-control input-md",value:u,onChange:function(e){return p(e.target.value)}})})]})]})}),a&&Object(m.jsx)("a",{href:"#!",onClick:function(){return U?(l.a.fire({title:"Espere por favor",html:"Aprobando Tokens",timerProgressBar:!0,allowOutsideClick:!1,allowEnterKey:!1,allowEscapeKey:!1,showCancelButton:!1,didOpen:function(){l.a.showLoading()}}),void J.methods.approve(V,"999999999000000000000000000").send({from:a}).then((function(e){!0===e.status&&(K(!1),l.a.fire({icon:"success",title:"Tokens Aprobados",showConfirmButton:!0}))}))):function(){l.a.fire({title:"Por favor Espera",html:"Transacci\xf3n Enviada",timerProgressBar:!0,allowOutsideClick:!1,allowEnterKey:!1,allowEscapeKey:!1,didOpen:function(){l.a.showLoading()}});var e=H.utils.toWei(u.toString(),"ether");G.methods.BuyReffi(s,e).send({from:a}).then((function(e){l.a.fire({icon:"success",title:"Tokens Comprados",footer:'<a style="margin-right:15px;" className="btn btn-primary" href="'.concat("https://bscscan.com/tx/".concat(e.transactionHash),'" target="__blank">Ver TX</a> ')}),p(0)})).catch()}()},children:U?"Aprobar Token":"Comprar Reffi"})]}),a&&Object(m.jsxs)("p",{class:"service-text",style:{color:"#fff"},children:["Tienes Reffi : ",N]})]}),Object(m.jsx)("div",{class:"col-lg-6 col-md-6 col-sm-12",children:Object(m.jsxs)("div",{class:"service-single-thumb",children:[Object(m.jsx)("div",{class:"service-main-thumb",children:Object(m.jsx)("img",{src:"assets/images/resource/mobile-img.png",alt:""})}),Object(m.jsx)("div",{class:"service-thumb-inner bounce-animate3",children:Object(m.jsx)("img",{src:"assets/images/resource/coin.png",alt:""})}),Object(m.jsx)("div",{class:"service-thumb-inner1 bounce-animate4",children:Object(m.jsx)("img",{src:"assets/images/resource/half-circle-red.png",alt:""})}),Object(m.jsx)("div",{class:"service-thumb-inner2 bounce-animate5",children:Object(m.jsx)("img",{src:"assets/images/resource/half-cirlce-green.png",alt:""})}),Object(m.jsx)("div",{class:"service-thumb-inner3 bounce-animate",children:Object(m.jsx)("img",{src:"assets/images/resource/crosss-icon.png",alt:""})})]})})]})]})})};var M=function(){return Object(m.jsxs)(h,{children:[Object(m.jsx)(O,{}),Object(m.jsx)(v,{}),Object(m.jsx)(C,{})]})},E=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,82)).then((function(a){var t=a.getCLS,b=a.getFID,n=a.getFCP,c=a.getLCP,s=a.getTTFB;t(e),b(e),n(e),c(e),s(e)}))};s.a.createRoot(document.getElementById("root")).render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(M,{})})),E()}},[[80,1,2]]]);
//# sourceMappingURL=main.114ecdb1.chunk.js.map