const {
    time,
    loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const { ethers } = require("hardhat");


describe("Reffi Presale", function () {
    let usdt,vsion,reffi,presale;
    // We define a fixture to reuse the same setup in every test.
    // We use loadFixture to run this setup once, snapshot that state,
    // and reset Hardhat Network to that snapshopt in every test.
    it("Deploy Contracts", async function () {
        // Contracts are deployed using the first signer/account by default
        const [owner] = await ethers.getSigners();
        const amount = ethers.utils.parseEther("10000000");
        const Presale = await ethers.getContractFactory("REFFISELL");
        const USDT = await ethers.getContractFactory("USDT");
        const VSION = await ethers.getContractFactory("CriptoVision");
        const Reffi = await ethers.getContractFactory("REFFI");
        // Deploy Contracts
        usdt = await USDT.deploy();
        vsion = await VSION.deploy();
        reffi = await Reffi.deploy();
        presale = await Presale.deploy(vsion.address,reffi.address,owner.address);

        await reffi.transfer(presale.address, amount);

        await presale.AddTokenAccept(usdt.address);

        await presale.addPhases();   

    })


        it("Send Usdt and Vsion", async function () {
            const [account1,account2,account3,account4,account5,account6] = await ethers.getSigners();

            const amount = ethers.utils.parseEther("1000");
            
            await usdt.transfer(account1.address, amount);
            await usdt.transfer(account2.address, amount);
            await usdt.transfer(account3.address, amount);
            await usdt.transfer(account4.address, amount);
            await usdt.transfer(account5.address, amount);
            await usdt.transfer(account6.address, amount);
            
            await vsion.transfer(account1.address, 1000*10**8);
            await vsion.transfer(account2.address, 300000*10**8);
            await vsion.transfer(account3.address, 500000*10**8);
            await vsion.transfer(account4.address, 600000*10**8);
            await vsion.transfer(account5.address, 1000000*10**8);
            await vsion.transfer(account6.address, 10000000*10**8);
            
        });

        it('Aprove USDT tokens', async function () {
            const [account1,account2,account3,account4,account5,account6] = await ethers.getSigners();
            const AmountApprove = ethers.utils.parseEther("999999999");

            await usdt.approve(presale.address, AmountApprove);
            await usdt.connect(account1).approve(presale.address, AmountApprove);
            await usdt.connect(account2).approve(presale.address, AmountApprove);
            await usdt.connect(account3).approve(presale.address, AmountApprove);
            await usdt.connect(account4).approve(presale.address, AmountApprove);
            await usdt.connect(account5).approve(presale.address, AmountApprove);
            await usdt.connect(account6).approve(presale.address, AmountApprove);

        });


        it("Buy Tokens Reffi", async function () {
            const [account1,account2,account3,account4,account5,account6] = await ethers.getSigners();
            const amount = ethers.utils.parseEther("1000");
            await presale.BuyReffi(usdt.address, amount);
          
        //   await presale.BuyNft(1,1,usdt.address);
        //   const GetStock =await presale.getInventary(1,1);       
        //   expect(GetStock).to.equal(299);
        });

        // it("Buy Complete Collection", async function () {
        //     const [account1,account2,account3,account4,account5,account6] = await ethers.getSigners();
        //     await usdt.approve(presale.address, "999999999000000000000000000");
        //     await presale.BuyCollection(1,usdt.address);
        //     const GetStock =await presale.getInventary(1,1);       
        //     expect(GetStock).to.equal(299);
        //   });
        


})