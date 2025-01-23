const { ethers } = require("hardhat");

async function main() {
    console.log("开始部署 SimpleStorage 合约...");

    // 获取合约工厂
    const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
    
    // 部署合约
    const simpleStorage = await SimpleStorage.deploy();
    await simpleStorage.waitForDeployment();  // 注意这里改用新的API

    console.log("SimpleStorage 已部署到地址:", await simpleStorage.getAddress());  // 注意这里也改用新的API
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });