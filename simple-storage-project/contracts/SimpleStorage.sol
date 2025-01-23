// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    // 存储变量
    uint256 private storedData;

    // 存储数值时触发的事件
    event DataStored(address indexed sender, uint256 newValue);

    // 构造函数
    constructor() {
        storedData = 0;
    }

    // 设置数值
    function set(uint256 x) public {
        storedData = x;
        emit DataStored(msg.sender, x);
    }

    // 获取数值
    function get() public view returns (uint256) {
        return storedData;
    }

    // 增加数值
    function increment() public {
        storedData += 1;
        emit DataStored(msg.sender, storedData);
    }

    // 减少数值
    function decrement() public {
        require(storedData > 0, "Value cannot be negative");
        storedData -= 1;
        emit DataStored(msg.sender, storedData);
    }
}