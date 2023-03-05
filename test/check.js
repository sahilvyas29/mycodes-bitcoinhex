const { expect } = require("chai");
const { ethers } = require("hardhat");
describe("Check hex contract", function() {
    it("should check for hex", async function(){
        const [owner] = await ethers.getSigners();

    const Token = await ethers.getContractFactory("HEX");

    const hardhatToken = await Token.deploy();

    console.log("add", hardhatToken.address)
    })
})