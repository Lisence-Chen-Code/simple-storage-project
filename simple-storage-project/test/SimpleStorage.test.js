const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SimpleStorage", function () {
    let simpleStorage;

    beforeEach(async function () {
        console.log("准备部署合约...");
        const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
        simpleStorage = await SimpleStorage.deploy();
        await simpleStorage.waitForDeployment();
        console.log("合约部署完成");
    });

    it("初始值应该为 0", async function () {
        const value = await simpleStorage.get();
        console.log("获取到的值:", value);
        expect(value).to.equal(0);
    });
});