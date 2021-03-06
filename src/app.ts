import PatentCore from './patent-core';
import OutPut from './output';

(async () => {

  //create a patentCore instance 
  const patentCore = await PatentCore.create();

  //get IPCNums by PublicNums
  const arr_ipcNums = await patentCore.getIPCNumByPublicNum();
  // console.log(arr_ipcNums);

  //get IPCNames by IPCNums
  const arr_ipcNames = await patentCore.getIPCNameByIPCNum(arr_ipcNums);

  //write result to csv file
  await OutPut.writeToCSV(arr_ipcNames);

  await patentCore.close();
})();

