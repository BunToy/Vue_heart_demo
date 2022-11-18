// var abi=[
//   {
//     "constant": true,
//     "inputs": [
//       {
//         "name": "amount",
//         "type": "uint256"
//       },
//       {
//         "name": "modulo",
//         "type": "uint256"
//       },
//       {
//         "name": "rollUnder",
//         "type": "uint256"
//       }
//     ],
//     "name": "getDiceWinAmount",
//     "outputs": [
//       {
//         "name": "winAmount",
//         "type": "uint256"
//       },
//       {
//         "name": "jackpotFee",
//         "type": "uint256"
//       }
//     ],
//     "payable": false,
//     "stateMutability": "pure",
//     "type": "function"
//   },
//   {
//     "constant": false,
//     "inputs": [],
//     "name": "kill",
//     "outputs": [],
//     "payable": false,
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "constant": false,
//     "inputs": [
//       {
//         "name": "betMask",
//         "type": "uint256"
//       },
//       {
//         "name": "modulo",
//         "type": "uint256"
//       }
//     ],
//     "name": "placeBet",
//     "outputs": [],
//     "payable": true,
//     "stateMutability": "payable",
//     "type": "function"
//   },
//   {
//     "constant": true,
//     "inputs": [],
//     "name": "jackpotSize",
//     "outputs": [
//       {
//         "name": "",
//         "type": "uint128"
//       }
//     ],
//     "payable": false,
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "constant": true,
//     "inputs": [],
//     "name": "owner",
//     "outputs": [
//       {
//         "name": "",
//         "type": "address"
//       }
//     ],
//     "payable": false,
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "constant": true,
//     "inputs": [],
//     "name": "coder",
//     "outputs": [
//       {
//         "name": "",
//         "type": "address"
//       }
//     ],
//     "payable": false,
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "constant": true,
//     "inputs": [],
//     "name": "bankAmount",
//     "outputs": [
//       {
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "payable": false,
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "constant": true,
//     "inputs": [],
//     "name": "maxProfit",
//     "outputs": [
//       {
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "payable": false,
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "constant": false,
//     "inputs": [
//       {
//         "name": "beneficiary",
//         "type": "address"
//       },
//       {
//         "name": "withdrawAmount",
//         "type": "uint256"
//       }
//     ],
//     "name": "withdrawFunds",
//     "outputs": [],
//     "payable": false,
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "constant": false,
//     "inputs": [],
//     "name": "acceptNextOwner",
//     "outputs": [],
//     "payable": false,
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "constant": false,
//     "inputs": [
//       {
//         "name": "_nextOwner",
//         "type": "address"
//       }
//     ],
//     "name": "approveNextOwner",
//     "outputs": [],
//     "payable": false,
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "constant": false,
//     "inputs": [
//       {
//         "name": "increaseAmount",
//         "type": "uint256"
//       }
//     ],
//     "name": "increaseJackpot",
//     "outputs": [],
//     "payable": false,
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "constant": false,
//     "inputs": [
//       {
//         "name": "_maxProfit",
//         "type": "uint256"
//       }
//     ],
//     "name": "setMaxProfit",
//     "outputs": [],
//     "payable": false,
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "payable": true,
//     "stateMutability": "payable",
//     "type": "constructor"
//   },
//   {
//     "payable": true,
//     "stateMutability": "payable",
//     "type": "fallback"
//   },
//   {
//     "anonymous": false,
//     "inputs": [
//       {
//         "indexed": true,
//         "name": "beneficiary",
//         "type": "address"
//       },
//       {
//         "indexed": false,
//         "name": "amount",
//         "type": "uint256"
//       }
//     ],
//     "name": "FailedPayment",
//     "type": "event"
//   },
//   {
//     "anonymous": false,
//     "inputs": [
//       {
//         "indexed": true,
//         "name": "beneficiary",
//         "type": "address"
//       },
//       {
//         "indexed": false,
//         "name": "amount",
//         "type": "uint256"
//       }
//     ],
//     "name": "Payment",
//     "type": "event"
//   },
//   {
//     "anonymous": false,
//     "inputs": [
//       {
//         "indexed": true,
//         "name": "beneficiary",
//         "type": "address"
//       },
//       {
//         "indexed": false,
//         "name": "amount",
//         "type": "uint256"
//       }
//     ],
//     "name": "JackpotPayment",
//     "type": "event"
//   },
//   {
//     "anonymous": false,
//     "inputs": [
//       {
//         "indexed": true,
//         "name": "gambler",
//         "type": "address"
//       },
//       {
//         "indexed": false,
//         "name": "rollUnder",
//         "type": "uint256"
//       },
//       {
//         "indexed": false,
//         "name": "dice",
//         "type": "uint256"
//       },
//       {
//         "indexed": false,
//         "name": "diceWin",
//         "type": "uint256"
//       },
//       {
//         "indexed": false,
//         "name": "jackpotWin",
//         "type": "uint256"
//       },
//       {
//         "indexed": false,
//         "name": "amount",
//         "type": "uint256"
//       }
//     ],
//     "name": "BetEnd",
//     "type": "event"
//   },
//   {
//     "anonymous": false,
//     "inputs": [
//       {
//         "indexed": false,
//         "name": "txO",
//         "type": "address"
//       },
//       {
//         "indexed": false,
//         "name": "sender",
//         "type": "address"
//       },
//       {
//         "indexed": false,
//         "name": "amount",
//         "type": "uint256"
//       }
//     ],
//     "name": "RobotComing",
//     "type": "event"
//   }
// ]


const abi = JSON.parse('[\n' +
  '  {\n' +
  '    "constant": true,\n' +
  '    "inputs": [\n' +
  '      {\n' +
  '        "name": "amount",\n' +
  '        "type": "uint256"\n' +
  '      },\n' +
  '      {\n' +
  '        "name": "modulo",\n' +
  '        "type": "uint256"\n' +
  '      },\n' +
  '      {\n' +
  '        "name": "rollUnder",\n' +
  '        "type": "uint256"\n' +
  '      }\n' +
  '    ],\n' +
  '    "name": "getDiceWinAmount",\n' +
  '    "outputs": [\n' +
  '      {\n' +
  '        "name": "winAmount",\n' +
  '        "type": "uint256"\n' +
  '      },\n' +
  '      {\n' +
  '        "name": "jackpotFee",\n' +
  '        "type": "uint256"\n' +
  '      }\n' +
  '    ],\n' +
  '    "payable": false,\n' +
  '    "stateMutability": "pure",\n' +
  '    "type": "function"\n' +
  '  },\n' +
  '  {\n' +
  '    "constant": false,\n' +
  '    "inputs": [],\n' +
  '    "name": "kill",\n' +
  '    "outputs": [],\n' +
  '    "payable": false,\n' +
  '    "stateMutability": "nonpayable",\n' +
  '    "type": "function"\n' +
  '  },\n' +
  '  {\n' +
  '    "constant": false,\n' +
  '    "inputs": [\n' +
  '      {\n' +
  '        "name": "betMask",\n' +
  '        "type": "uint256"\n' +
  '      },\n' +
  '      {\n' +
  '        "name": "modulo",\n' +
  '        "type": "uint256"\n' +
  '      }\n' +
  '    ],\n' +
  '    "name": "placeBet",\n' +
  '    "outputs": [],\n' +
  '    "payable": true,\n' +
  '    "stateMutability": "payable",\n' +
  '    "type": "function"\n' +
  '  },\n' +
  '  {\n' +
  '    "constant": true,\n' +
  '    "inputs": [],\n' +
  '    "name": "jackpotSize",\n' +
  '    "outputs": [\n' +
  '      {\n' +
  '        "name": "",\n' +
  '        "type": "uint128"\n' +
  '      }\n' +
  '    ],\n' +
  '    "payable": false,\n' +
  '    "stateMutability": "view",\n' +
  '    "type": "function"\n' +
  '  },\n' +
  '  {\n' +
  '    "constant": true,\n' +
  '    "inputs": [],\n' +
  '    "name": "owner",\n' +
  '    "outputs": [\n' +
  '      {\n' +
  '        "name": "",\n' +
  '        "type": "address"\n' +
  '      }\n' +
  '    ],\n' +
  '    "payable": false,\n' +
  '    "stateMutability": "view",\n' +
  '    "type": "function"\n' +
  '  },\n' +
  '  {\n' +
  '    "constant": true,\n' +
  '    "inputs": [],\n' +
  '    "name": "coder",\n' +
  '    "outputs": [\n' +
  '      {\n' +
  '        "name": "",\n' +
  '        "type": "address"\n' +
  '      }\n' +
  '    ],\n' +
  '    "payable": false,\n' +
  '    "stateMutability": "view",\n' +
  '    "type": "function"\n' +
  '  },\n' +
  '  {\n' +
  '    "constant": true,\n' +
  '    "inputs": [],\n' +
  '    "name": "bankAmount",\n' +
  '    "outputs": [\n' +
  '      {\n' +
  '        "name": "",\n' +
  '        "type": "uint256"\n' +
  '      }\n' +
  '    ],\n' +
  '    "payable": false,\n' +
  '    "stateMutability": "view",\n' +
  '    "type": "function"\n' +
  '  },\n' +
  '  {\n' +
  '    "constant": true,\n' +
  '    "inputs": [],\n' +
  '    "name": "maxProfit",\n' +
  '    "outputs": [\n' +
  '      {\n' +
  '        "name": "",\n' +
  '        "type": "uint256"\n' +
  '      }\n' +
  '    ],\n' +
  '    "payable": false,\n' +
  '    "stateMutability": "view",\n' +
  '    "type": "function"\n' +
  '  },\n' +
  '  {\n' +
  '    "constant": false,\n' +
  '    "inputs": [\n' +
  '      {\n' +
  '        "name": "beneficiary",\n' +
  '        "type": "address"\n' +
  '      },\n' +
  '      {\n' +
  '        "name": "withdrawAmount",\n' +
  '        "type": "uint256"\n' +
  '      }\n' +
  '    ],\n' +
  '    "name": "withdrawFunds",\n' +
  '    "outputs": [],\n' +
  '    "payable": false,\n' +
  '    "stateMutability": "nonpayable",\n' +
  '    "type": "function"\n' +
  '  },\n' +
  '  {\n' +
  '    "constant": false,\n' +
  '    "inputs": [],\n' +
  '    "name": "acceptNextOwner",\n' +
  '    "outputs": [],\n' +
  '    "payable": false,\n' +
  '    "stateMutability": "nonpayable",\n' +
  '    "type": "function"\n' +
  '  },\n' +
  '  {\n' +
  '    "constant": false,\n' +
  '    "inputs": [\n' +
  '      {\n' +
  '        "name": "_nextOwner",\n' +
  '        "type": "address"\n' +
  '      }\n' +
  '    ],\n' +
  '    "name": "approveNextOwner",\n' +
  '    "outputs": [],\n' +
  '    "payable": false,\n' +
  '    "stateMutability": "nonpayable",\n' +
  '    "type": "function"\n' +
  '  },\n' +
  '  {\n' +
  '    "constant": false,\n' +
  '    "inputs": [\n' +
  '      {\n' +
  '        "name": "increaseAmount",\n' +
  '        "type": "uint256"\n' +
  '      }\n' +
  '    ],\n' +
  '    "name": "increaseJackpot",\n' +
  '    "outputs": [],\n' +
  '    "payable": false,\n' +
  '    "stateMutability": "nonpayable",\n' +
  '    "type": "function"\n' +
  '  },\n' +
  '  {\n' +
  '    "constant": false,\n' +
  '    "inputs": [\n' +
  '      {\n' +
  '        "name": "_maxProfit",\n' +
  '        "type": "uint256"\n' +
  '      }\n' +
  '    ],\n' +
  '    "name": "setMaxProfit",\n' +
  '    "outputs": [],\n' +
  '    "payable": false,\n' +
  '    "stateMutability": "nonpayable",\n' +
  '    "type": "function"\n' +
  '  },\n' +
  '  {\n' +
  '    "inputs": [],\n' +
  '    "payable": true,\n' +
  '    "stateMutability": "payable",\n' +
  '    "type": "constructor"\n' +
  '  },\n' +
  '  {\n' +
  '    "payable": true,\n' +
  '    "stateMutability": "payable",\n' +
  '    "type": "fallback"\n' +
  '  },\n' +
  '  {\n' +
  '    "anonymous": false,\n' +
  '    "inputs": [\n' +
  '      {\n' +
  '        "indexed": true,\n' +
  '        "name": "beneficiary",\n' +
  '        "type": "address"\n' +
  '      },\n' +
  '      {\n' +
  '        "indexed": false,\n' +
  '        "name": "amount",\n' +
  '        "type": "uint256"\n' +
  '      }\n' +
  '    ],\n' +
  '    "name": "FailedPayment",\n' +
  '    "type": "event"\n' +
  '  },\n' +
  '  {\n' +
  '    "anonymous": false,\n' +
  '    "inputs": [\n' +
  '      {\n' +
  '        "indexed": true,\n' +
  '        "name": "beneficiary",\n' +
  '        "type": "address"\n' +
  '      },\n' +
  '      {\n' +
  '        "indexed": false,\n' +
  '        "name": "amount",\n' +
  '        "type": "uint256"\n' +
  '      }\n' +
  '    ],\n' +
  '    "name": "Payment",\n' +
  '    "type": "event"\n' +
  '  },\n' +
  '  {\n' +
  '    "anonymous": false,\n' +
  '    "inputs": [\n' +
  '      {\n' +
  '        "indexed": true,\n' +
  '        "name": "beneficiary",\n' +
  '        "type": "address"\n' +
  '      },\n' +
  '      {\n' +
  '        "indexed": false,\n' +
  '        "name": "amount",\n' +
  '        "type": "uint256"\n' +
  '      }\n' +
  '    ],\n' +
  '    "name": "JackpotPayment",\n' +
  '    "type": "event"\n' +
  '  },\n' +
  '  {\n' +
  '    "anonymous": false,\n' +
  '    "inputs": [\n' +
  '      {\n' +
  '        "indexed": true,\n' +
  '        "name": "gambler",\n' +
  '        "type": "address"\n' +
  '      },\n' +
  '      {\n' +
  '        "indexed": false,\n' +
  '        "name": "rollUnder",\n' +
  '        "type": "uint256"\n' +
  '      },\n' +
  '      {\n' +
  '        "indexed": false,\n' +
  '        "name": "dice",\n' +
  '        "type": "uint256"\n' +
  '      },\n' +
  '      {\n' +
  '        "indexed": false,\n' +
  '        "name": "diceWin",\n' +
  '        "type": "uint256"\n' +
  '      },\n' +
  '      {\n' +
  '        "indexed": false,\n' +
  '        "name": "jackpotWin",\n' +
  '        "type": "uint256"\n' +
  '      },\n' +
  '      {\n' +
  '        "indexed": false,\n' +
  '        "name": "amount",\n' +
  '        "type": "uint256"\n' +
  '      }\n' +
  '    ],\n' +
  '    "name": "BetEnd",\n' +
  '    "type": "event"\n' +
  '  },\n' +
  '  {\n' +
  '    "anonymous": false,\n' +
  '    "inputs": [\n' +
  '      {\n' +
  '        "indexed": false,\n' +
  '        "name": "txO",\n' +
  '        "type": "address"\n' +
  '      },\n' +
  '      {\n' +
  '        "indexed": false,\n' +
  '        "name": "sender",\n' +
  '        "type": "address"\n' +
  '      },\n' +
  '      {\n' +
  '        "indexed": false,\n' +
  '        "name": "amount",\n' +
  '        "type": "uint256"\n' +
  '      }\n' +
  '    ],\n' +
  '    "name": "RobotComing",\n' +
  '    "type": "event"\n' +
  '  }\n' +
  ']',)

export default
{
  abi
}
