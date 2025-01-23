const { ethers } = require("hardhat");

async function main() {
    try {
        console.log("开始测试...");

        // 部署合约
        console.log("部署合约...");
        const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
        const simpleStorage = await SimpleStorage.deploy();
        await simpleStorage.waitForDeployment();
        
        const address = await simpleStorage.getAddress();
        console.log("合约已部署到:", address);

        // 测试 get
        console.log("\n测试 get 函数...");
        const initialValue = await simpleStorage.get();
        console.log("初始值:", initialValue.toString());

        // 测试 set
        console.log("\n测试 set 函数...");
        let tx = await simpleStorage.set(42);
        await tx.wait();
        console.log("设置新值: 42");

        // 验证新值
        let newValue = await simpleStorage.get();
        console.log("读取新值:", newValue.toString());

        // 测试 increment
        console.log("\n测试 increment 函数...");
        tx = await simpleStorage.increment();
        await tx.wait();
        newValue = await simpleStorage.get();
        console.log("递增后的值:", newValue.toString());

        // 测试 decrement
        console.log("\n测试 decrement 函数...");
        tx = await simpleStorage.decrement();
        await tx.wait();
        newValue = await simpleStorage.get();
        console.log("递减后的值:", newValue.toString());

    } catch (error) {
        console.error("测试失败:", error);
    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });