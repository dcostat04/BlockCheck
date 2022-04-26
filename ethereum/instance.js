
import web3 from './web3';

const address = '0x4459FFC83cF14eb13E464B712275b3A6F5EFa56f';
const abi = [
	{
		"constant": false,
		"inputs": [
		  {
			"name": "_code",
			"type": "string"
		  },
		  {
			"name": "_brand",
			"type": "string"
		  },
		  {
			"name": "_model",
			"type": "string"
		  },
		  {
			"name": "_status",
			"type": "uint256"
		  },
		  {
			"name": "_description",
			"type": "string"
		  },
		  {
			"name": "_manufactuerName",
			"type": "string"
		  },
		  {
			"name": "_manufactuerLocation",
			"type": "string"
		  },
		  {
			"name": "_manufactuerTimestamp",
			"type": "string"
		  }
		],
		"name": "createCode",
		"outputs": [
		  {
			"name": "",
			"type": "uint256"
		  }
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	  },
	  {
		"constant": true,
		"inputs": [
		  {
			"name": "_code",
			"type": "string"
		  }
		],
		"name": "getNotOwnedCodeDetails",
		"outputs": [
		  {
			"name": "",
			"type": "string"
		  },
		  {
			"name": "",
			"type": "string"
		  },
		  {
			"name": "",
			"type": "uint256"
		  },
		  {
			"name": "",
			"type": "string"
		  },
		  {
			"name": "",
			"type": "string"
		  },
		  {
			"name": "",
			"type": "string"
		  },
		  {
			"name": "",
			"type": "string"
		  }
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	  },
	  {
		"constant": true,
		"inputs": [
		  {
			"name": "_code",
			"type": "string"
		  }
		],
		"name": "getOwnedCodeDetails",
		"outputs": [
		  {
			"name": "",
			"type": "string"
		  },
		  {
			"name": "",
			"type": "string"
		  }
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	  },
	  {
		"constant": false,
		"inputs": [
		  {
			"name": "_code",
			"type": "string"
		  },
		  {
			"name": "_hashedEmailRetailer",
			"type": "string"
		  }
		],
		"name": "addRetailerToCode",
		"outputs": [
		  {
			"name": "",
			"type": "uint256"
		  }
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	  },
	  {
		"constant": false,
		"inputs": [
		  {
			"name": "_hashedEmail",
			"type": "string"
		  },
		  {
			"name": "_name",
			"type": "string"
		  },
		  {
			"name": "_phone",
			"type": "string"
		  }
		],
		"name": "createCustomer",
		"outputs": [
		  {
			"name": "",
			"type": "bool"
		  }
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	  },
	  {
		"constant": true,
		"inputs": [
		  {
			"name": "_code",
			"type": "string"
		  }
		],
		"name": "getCustomerDetails",
		"outputs": [
		  {
			"name": "",
			"type": "string"
		  },
		  {
			"name": "",
			"type": "string"
		  }
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	  },
	  {
		"constant": false,
		"inputs": [
		  {
			"name": "_hashedEmail",
			"type": "string"
		  },
		  {
			"name": "_retailerName",
			"type": "string"
		  },
		  {
			"name": "_retailerLocation",
			"type": "string"
		  }
		],
		"name": "createRetailer",
		"outputs": [
		  {
			"name": "",
			"type": "uint256"
		  }
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	  },
	  {
		"constant": true,
		"inputs": [
		  {
			"name": "_code",
			"type": "string"
		  }
		],
		"name": "getRetailerDetails",
		"outputs": [
		  {
			"name": "",
			"type": "string"
		  },
		  {
			"name": "",
			"type": "string"
		  }
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	  },
	  {
		"constant": false,
		"inputs": [
		  {
			"name": "_code",
			"type": "string"
		  },
		  {
			"name": "_customer",
			"type": "string"
		  }
		],
		"name": "reportStolen",
		"outputs": [
		  {
			"name": "",
			"type": "bool"
		  }
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	  },
	  {
		"constant": false,
		"inputs": [
		  {
			"name": "_code",
			"type": "string"
		  },
		  {
			"name": "_oldCustomer",
			"type": "string"
		  },
		  {
			"name": "_newCustomer",
			"type": "string"
		  }
		],
		"name": "changeOwner",
		"outputs": [
		  {
			"name": "",
			"type": "bool"
		  }
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	  },
	  {
		"constant": false,
		"inputs": [
		  {
			"name": "_code",
			"type": "string"
		  },
		  {
			"name": "_retailer",
			"type": "string"
		  },
		  {
			"name": "_customer",
			"type": "string"
		  }
		],
		"name": "initialOwner",
		"outputs": [
		  {
			"name": "",
			"type": "bool"
		  }
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	  },
	  {
		"constant": true,
		"inputs": [
		  {
			"name": "_customer",
			"type": "string"
		  }
		],
		"name": "getCodes",
		"outputs": [
		  {
			"name": "",
			"type": "string[]"
		  }
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	  }
];

export default new web3.eth.Contract(abi, address);
