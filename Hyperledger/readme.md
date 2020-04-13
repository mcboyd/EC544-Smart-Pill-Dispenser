### EC544 Smart Pill Dispenser: Hyperledger Folder
The files in this folder were used to modify the functionlaity of the Hyperledger Fabric "Fabcar" example network for use in this project. 

* **fabcar.js**: The smart contract that runs on the Hyperledger Fabric network to execute code and add information to the blockchain. 
* **hlf_function.js**: Helper functions to connect to Hyperledger and query for results and also return data to Lambda via SDK calls; used by index.js to keep the web server and blockchain/AWS functionality separate.  
* **index.js** The web server code used by Node to receive POSTs from Lambda and eventually provide the the UI for the medication taker. 

 