import { ethers } from "hardhat";
import { FunctionsT1, FunctionsT1__factory } from "../typechain-types";


async function main() {

  const [owner, addr1, addr2] = await ethers.getSigners();


  const FunctionT1: FunctionsT1__factory = await ethers.getContractFactory("FunctionsT1");
  const functionsT1: FunctionsT1 = await FunctionT1.connect(addr1).deploy();

  await functionsT1.deployed();

  console.log(`SolidityTest deployed to ${functionsT1.address}`);

  console.log(`Counter before ${(await functionsT1.counter()).toString()}`);

  const tx1 = await functionsT1.updateAmount(ethers.utils.parseEther("0.01"));
  console.log(`Counter after ${(await functionsT1.counter()).toString()}`);

  console.log(`Contract Owner ADRESS ${await functionsT1.owner()}`);
  console.log(`TREASURE ADRESS ${await functionsT1.treasureAddress()}`);

  /*

  console.log(`Contract Owner ADRESS ${await functionsT1.owner()}`);
  console.log(`TREASURE ADRESS ${await functionsT1.treasureAddress()}`);

  const text1 = await functionsT1.updateTreasureAddress(addr1.address);

  console.log(`Contract Owner ADRESS ${await functionsT1.owner()}`);
  console.log(`TREASURE ADRESS ${await functionsT1.treasureAddress()}`);
*/


  // const text2 = await functionsT1.connect(addr2).updateTreasureAddress(addr1.address);

  // console.log(`Contract Owner ADRESS ${await functionsT1.owner()}`);
  // console.log(`TREASURE ADRESS ${await functionsT1.treasureAddress()}`);

  /*

  const val = await functionsT1.doSomething();
  console.log(`doSomething returned ${val}`);

  const val2 = await functionsT1.checkPureFunc(3);
  console.log(`checkPureFunc returned ${val2}`);

  const multival = await functionsT1.multiRet();
  console.log(`multival returned ${multival}`);
  console.log(`multival0 returned ${multival[0]}`);
  console.log(`multival1 returned ${multival[1]}`);



  const multiReturn = await functionsT1.multiVal();
  console.log(`multival returned ${multiReturn}`);
  console.log(`multival0 returned ${multiReturn[0]}`);
  console.log(`multival1 returned ${multiReturn[1]}`);
*/

}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
