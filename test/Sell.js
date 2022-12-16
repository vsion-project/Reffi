const {
    time,
    loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const { ethers } = require("hardhat");


describe("Reffi Presale", function () {
    let usdt,vsion,reffi,presale,TotalSelling=0,PhaseSelling=0;
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
            const [owner,account1,account2,account3,account4,account5,account6,account7] = await ethers.getSigners();

            const amount = ethers.utils.parseEther("10000");
            
            await usdt.transfer(account1.address, amount);
            await usdt.transfer(account2.address, amount);
            await usdt.transfer(account3.address, amount);
            await usdt.transfer(account4.address, amount);
            await usdt.transfer(account5.address, amount);
            await usdt.transfer(account6.address, amount);
            await usdt.transfer(account7.address, amount);
            
            await vsion.transfer(account1.address, 1000*10**8);
            await vsion.transfer(account2.address, 300000*10**8);
            await vsion.transfer(account3.address, 500000*10**8);
            await vsion.transfer(account4.address, 600000*10**8);
            await vsion.transfer(account5.address, 1000000*10**8);
            await vsion.transfer(account6.address, 10000000*10**8);
            
    });

    it('Aprove USDT tokens', async function () {
            const [owner,account1,account2,account3,account4,account5,account6,account7] = await ethers.getSigners();
            const AmountApprove = ethers.utils.parseEther("999999999");

            await usdt.approve(presale.address, AmountApprove);
            await usdt.connect(account1).approve(presale.address, AmountApprove);
            await usdt.connect(account2).approve(presale.address, AmountApprove);
            await usdt.connect(account3).approve(presale.address, AmountApprove);
            await usdt.connect(account4).approve(presale.address, AmountApprove);
            await usdt.connect(account5).approve(presale.address, AmountApprove);
            await usdt.connect(account6).approve(presale.address, AmountApprove);
            await usdt.connect(account7).approve(presale.address, AmountApprove);

    });

    describe("Buy in Phase 1", function () {
        it("Buy Tokens Reffi Account1", async function () {
            const [owner,account1,account2,account3,account4,account5,account6,account7] = await ethers.getSigners();

            let usdtamount=1000;
            TotalSelling+=usdtamount;
            usdtamount=usdtamount.toString();
            const ScaleAmount = ethers.utils.parseEther(usdtamount);

            await presale.connect(account1).BuyReffi(usdt.address, ScaleAmount);

            let ReffiBuyed = await reffi.balanceOf(account1.address);

            expect(ReffiBuyed).to.equal(ethers.utils.parseEther("20000"));
        });

        it("Buy Tokens Reffi Account2", async function () {
            const [owner,account1,account2,account3,account4,account5,account6,account7] = await ethers.getSigners();

            let usdtamount=40;
            TotalSelling+=usdtamount;
            usdtamount=usdtamount.toString();
            const ScaleAmount = ethers.utils.parseEther(usdtamount);

            await presale.connect(account2).BuyReffi(usdt.address, ScaleAmount);

            let ReffiBuyed = await reffi.balanceOf(account2.address);

            expect(ReffiBuyed).to.equal(ethers.utils.parseEther("800"));
        });

        it("Buy Tokens Reffi Account3", async function () {
            const [owner,account1,account2,account3,account4,account5,account6,account7] = await ethers.getSigners();

            let usdtamount=2000;
            TotalSelling+=usdtamount;
            usdtamount=usdtamount.toString();
            const ScaleAmount = ethers.utils.parseEther(usdtamount);

            await presale.connect(account3).BuyReffi(usdt.address, ScaleAmount);

            let ReffiBuyed = await reffi.balanceOf(account3.address);

            expect(ReffiBuyed).to.equal(ethers.utils.parseEther("60000"));
        });

        it("Buy Tokens Reffi Account4", async function () {
            const [owner,account1,account2,account3,account4,account5,account6,account7] = await ethers.getSigners();

            let usdtamount=1000;
            TotalSelling+=usdtamount;
            usdtamount=usdtamount.toString();
            const ScaleAmount = ethers.utils.parseEther(usdtamount);

            await presale.connect(account4).BuyReffi(usdt.address, ScaleAmount);

            let ReffiBuyed = await reffi.balanceOf(account4.address);

            expect(ReffiBuyed).to.equal(ethers.utils.parseEther("40000"));
        });

        it("Buy Tokens Reffi Account5", async function () {
            const [owner,account1,account2,account3,account4,account5,account6,account7] = await ethers.getSigners();

            let usdtamount=35;
            TotalSelling+=usdtamount;
            usdtamount=usdtamount.toString();
            const ScaleAmount = ethers.utils.parseEther(usdtamount);

            await presale.connect(account5).BuyReffi(usdt.address, ScaleAmount);

            let ReffiBuyed = await reffi.balanceOf(account5.address);

            expect(ReffiBuyed).to.equal(ethers.utils.parseEther("700"));
        });

        it("Buy Tokens Reffi Account6", async function () {
            const [owner,account1,account2,account3,account4,account5,account6,account7] = await ethers.getSigners();

            let usdtamount=5000;
            TotalSelling+=usdtamount;
            
            usdtamount=usdtamount.toString();
            const ScaleAmount = ethers.utils.parseEther(usdtamount);

            await presale.connect(account6).BuyReffi(usdt.address, ScaleAmount);

            let ReffiBuyed = await reffi.balanceOf(account6.address);

            expect(ReffiBuyed).to.equal(ethers.utils.parseEther("300000"));
        });

        it("Buy Tokens Reffi Account7 No Vsion Holder", async function () {
            const [owner,account1,account2,account3,account4,account5,account6,account7] = await ethers.getSigners();

            let usdtamount=10000;

            TotalSelling+=usdtamount;

            usdtamount=usdtamount.toString();
            const ScaleAmount = ethers.utils.parseEther(usdtamount);

            await presale.connect(account7).BuyReffi(usdt.address, ScaleAmount);

            let ReffiBuyed = await reffi.balanceOf(account7.address);

            expect(ReffiBuyed).to.equal(ethers.utils.parseEther("100000"));
        });


        it("Get Status Total Selling Phase 1", async function () {
            // PhaseSelling
            // TotalSelling
            let PhaseSellingTotal=await presale.TotalSelling();
            // let ReffiBuyed = await reffi.balanceOf(account7.address);
            expect(PhaseSellingTotal).to.equal(ethers.utils.parseEther(TotalSelling.toString()));
        });
    })

    describe("Change to Phase 2", function () {

        it("Send Usdt for buy in Phase 2", async function () {
            const [owner,account1,account2,account3,account4,account5,account6,account7] = await ethers.getSigners();

            await presale.ChangePhase(2);

            const amount = ethers.utils.parseEther("10000");
            
            await usdt.transfer(account1.address, amount);
            await usdt.transfer(account2.address, amount);
            await usdt.transfer(account3.address, amount);
            await usdt.transfer(account4.address, amount);
            await usdt.transfer(account5.address, amount);
            await usdt.transfer(account6.address, amount);
            await usdt.transfer(account7.address, amount);
            
        });

        it("Buy Tokens Reffi Account1", async function () {
            const [owner,account1,account2,account3,account4,account5,account6,account7] = await ethers.getSigners();

            let usdtamount=1000;
            TotalSelling+=usdtamount;
            usdtamount=usdtamount.toString();
            const ScaleAmount = ethers.utils.parseEther(usdtamount);

            await presale.connect(account1).BuyReffi(usdt.address, ScaleAmount);

            let ReffiBuyed = await reffi.balanceOf(account1.address);

            expect(ReffiBuyed).to.equal(ethers.utils.parseEther("30000"));
        });

        it("Buy Tokens Reffi Account2", async function () {
            const [owner,account1,account2,account3,account4,account5,account6,account7] = await ethers.getSigners();

            let usdtamount=40;
            TotalSelling+=usdtamount;
            usdtamount=usdtamount.toString();
            const ScaleAmount = ethers.utils.parseEther(usdtamount);

            await presale.connect(account2).BuyReffi(usdt.address, ScaleAmount);

            let ReffiBuyed = await reffi.balanceOf(account2.address);

            expect(ReffiBuyed).to.equal(ethers.utils.parseEther("1200"));
        });

        it("Buy Tokens Reffi Account3", async function () {
            const [owner,account1,account2,account3,account4,account5,account6,account7] = await ethers.getSigners();

            let usdtamount=2000;
            TotalSelling+=usdtamount;
            usdtamount=usdtamount.toString();
            const ScaleAmount = ethers.utils.parseEther(usdtamount);

            await presale.connect(account3).BuyReffi(usdt.address, ScaleAmount);

            let ReffiBuyed = await reffi.balanceOf(account3.address);

            expect(ReffiBuyed).to.equal(ethers.utils.parseEther("90000"));
        });

        it("Buy Tokens Reffi Account4", async function () {
            const [owner,account1,account2,account3,account4,account5,account6,account7] = await ethers.getSigners();

            let usdtamount=1000;
            TotalSelling+=usdtamount;
            usdtamount=usdtamount.toString();
            const ScaleAmount = ethers.utils.parseEther(usdtamount);

            await presale.connect(account4).BuyReffi(usdt.address, ScaleAmount);

            let ReffiBuyed = await reffi.balanceOf(account4.address);

            expect(ReffiBuyed).to.equal(ethers.utils.parseEther("60000"));
        });

        it("Buy Tokens Reffi Account5", async function () {
            const [owner,account1,account2,account3,account4,account5,account6,account7] = await ethers.getSigners();

            let usdtamount=35;
            TotalSelling+=usdtamount;
            usdtamount=usdtamount.toString();
            const ScaleAmount = ethers.utils.parseEther(usdtamount);

            await presale.connect(account5).BuyReffi(usdt.address, ScaleAmount);

            let ReffiBuyed = await reffi.balanceOf(account5.address);

            expect(ReffiBuyed).to.equal(ethers.utils.parseEther("1050"));
        });

        it("Buy Tokens Reffi Account6", async function () {
            const [owner,account1,account2,account3,account4,account5,account6,account7] = await ethers.getSigners();

            let usdtamount=5000;
            TotalSelling+=usdtamount;
            
            usdtamount=usdtamount.toString();
            const ScaleAmount = ethers.utils.parseEther(usdtamount);

            await presale.connect(account6).BuyReffi(usdt.address, ScaleAmount);

            let ReffiBuyed = await reffi.balanceOf(account6.address);

            expect(ReffiBuyed).to.equal(ethers.utils.parseEther("450000"));
        });

        it("Buy Tokens Reffi Account7 No Vsion Holder", async function () {
            const [owner,account1,account2,account3,account4,account5,account6,account7] = await ethers.getSigners();

            let usdtamount=10000;

            TotalSelling+=usdtamount;

            usdtamount=usdtamount.toString();
            const ScaleAmount = ethers.utils.parseEther(usdtamount);

            await presale.connect(account7).BuyReffi(usdt.address, ScaleAmount);

            let ReffiBuyed = await reffi.balanceOf(account7.address);

            expect(ReffiBuyed).to.equal(ethers.utils.parseEther("166666"));
        });


        it("Get Status Total Selling Phase 2", async function () {
            // let PhaseSellingTotal=await presale.PhaseSelling();
            let PreSaleTotalSell=await presale.TotalSelling();
            expect(PreSaleTotalSell).to.equal(ethers.utils.parseEther(TotalSelling.toString()));
        });

    })


    describe("Change to Phase 3", function () {

        it("Send Usdt for buy in Phase 3", async function () {
            const [owner,account1,account2,account3,account4,account5,account6,account7] = await ethers.getSigners();

            await presale.ChangePhase(3);

            const amount = ethers.utils.parseEther("10000");
            
            await usdt.transfer(account1.address, amount);
            await usdt.transfer(account2.address, amount);
            await usdt.transfer(account3.address, amount);
            await usdt.transfer(account4.address, amount);
            await usdt.transfer(account5.address, amount);
            await usdt.transfer(account6.address, amount);
            await usdt.transfer(account7.address, amount);
            
        });

        it("Buy Tokens Reffi Account1", async function () {
            const [owner,account1,account2,account3,account4,account5,account6,account7] = await ethers.getSigners();

            let usdtamount=1000;
            TotalSelling+=usdtamount;
            usdtamount=usdtamount.toString();
            const ScaleAmount = ethers.utils.parseEther(usdtamount);

            await presale.connect(account1).BuyReffi(usdt.address, ScaleAmount);

            let ReffiBuyed = await reffi.balanceOf(account1.address);

            expect(ReffiBuyed).to.equal(ethers.utils.parseEther("36666"));
        });

        it("Buy Tokens Reffi Account2", async function () {
            const [owner,account1,account2,account3,account4,account5,account6,account7] = await ethers.getSigners();

            let usdtamount=40;
            TotalSelling+=usdtamount;
            usdtamount=usdtamount.toString();
            const ScaleAmount = ethers.utils.parseEther(usdtamount);

            await presale.connect(account2).BuyReffi(usdt.address, ScaleAmount);

            let ReffiBuyed = await reffi.balanceOf(account2.address);

            expect(ReffiBuyed).to.equal(ethers.utils.parseEther("1466"));
        });

        it("Buy Tokens Reffi Account3", async function () {
            const [owner,account1,account2,account3,account4,account5,account6,account7] = await ethers.getSigners();

            let usdtamount=2000;
            TotalSelling+=usdtamount;
            usdtamount=usdtamount.toString();
            const ScaleAmount = ethers.utils.parseEther(usdtamount);

            await presale.connect(account3).BuyReffi(usdt.address, ScaleAmount);

            let ReffiBuyed = await reffi.balanceOf(account3.address);

            expect(ReffiBuyed).to.equal(ethers.utils.parseEther("109983"));
        });

        it("Buy Tokens Reffi Account4", async function () {
            const [owner,account1,account2,account3,account4,account5,account6,account7] = await ethers.getSigners();

            let usdtamount=1000;
            TotalSelling+=usdtamount;
            usdtamount=usdtamount.toString();
            const ScaleAmount = ethers.utils.parseEther(usdtamount);

            await presale.connect(account4).BuyReffi(usdt.address, ScaleAmount);

            let ReffiBuyed = await reffi.balanceOf(account4.address);

            expect(ReffiBuyed).to.equal(ethers.utils.parseEther("73266"));
        });

        it("Buy Tokens Reffi Account5", async function () {
            const [owner,account1,account2,account3,account4,account5,account6,account7] = await ethers.getSigners();

            let usdtamount=35;
            TotalSelling+=usdtamount;
            usdtamount=usdtamount.toString();
            const ScaleAmount = ethers.utils.parseEther(usdtamount);

            await presale.connect(account5).BuyReffi(usdt.address, ScaleAmount);

            let ReffiBuyed = await reffi.balanceOf(account5.address);

            expect(ReffiBuyed).to.equal(ethers.utils.parseEther("1283"));
        });

        it("Buy Tokens Reffi Account6", async function () {
            const [owner,account1,account2,account3,account4,account5,account6,account7] = await ethers.getSigners();

            let usdtamount=5000;
            TotalSelling+=usdtamount;
            
            usdtamount=usdtamount.toString();
            const ScaleAmount = ethers.utils.parseEther(usdtamount);

            await presale.connect(account6).BuyReffi(usdt.address, ScaleAmount);

            let ReffiBuyed = await reffi.balanceOf(account6.address);

            expect(ReffiBuyed).to.equal(ethers.utils.parseEther("549933"));
        });

        it("Buy Tokens Reffi Account7 No Vsion Holder", async function () {
            const [owner,account1,account2,account3,account4,account5,account6,account7] = await ethers.getSigners();

            let usdtamount=10000;

            TotalSelling+=usdtamount;

            usdtamount=usdtamount.toString();
            const ScaleAmount = ethers.utils.parseEther(usdtamount);

            await presale.connect(account7).BuyReffi(usdt.address, ScaleAmount);

            let ReffiBuyed = await reffi.balanceOf(account7.address);

            expect(ReffiBuyed).to.equal(ethers.utils.parseEther("216666"));
        });


        it("Get Status Total Selling Phase 3", async function () {
            // let PhaseSellingTotal=await presale.PhaseSelling();
            let PreSaleTotalSell=await presale.TotalSelling();
            expect(PreSaleTotalSell).to.equal(ethers.utils.parseEther(TotalSelling.toString()));
        });

    })

    describe("Change to Phase 4", function () {

        it("Send Usdt for buy in Phase 4", async function () {
            const [owner,account1,account2,account3,account4,account5,account6,account7] = await ethers.getSigners();

            await presale.ChangePhase(4);

            const amount = ethers.utils.parseEther("10000");
            
            await usdt.transfer(account1.address, amount);
            await usdt.transfer(account2.address, amount);
            await usdt.transfer(account3.address, amount);
            await usdt.transfer(account4.address, amount);
            await usdt.transfer(account5.address, amount);
            await usdt.transfer(account6.address, amount);
            await usdt.transfer(account7.address, amount);
            
        });

        it("Buy Tokens Reffi Account1", async function () {
            const [owner,account1,account2,account3,account4,account5,account6,account7] = await ethers.getSigners();

            let usdtamount=1000;
            TotalSelling+=usdtamount;
            usdtamount=usdtamount.toString();
            const ScaleAmount = ethers.utils.parseEther(usdtamount);

            await presale.connect(account1).BuyReffi(usdt.address, ScaleAmount);

            let ReffiBuyed = await reffi.balanceOf(account1.address);

            expect(ReffiBuyed).to.equal(ethers.utils.parseEther("41666"));
        });

        it("Buy Tokens Reffi Account2", async function () {
            const [owner,account1,account2,account3,account4,account5,account6,account7] = await ethers.getSigners();

            let usdtamount=40;
            TotalSelling+=usdtamount;
            usdtamount=usdtamount.toString();
            const ScaleAmount = ethers.utils.parseEther(usdtamount);

            await presale.connect(account2).BuyReffi(usdt.address, ScaleAmount);

            let ReffiBuyed = await reffi.balanceOf(account2.address);

            expect(ReffiBuyed).to.equal(ethers.utils.parseEther("1666"));
        });

        it("Buy Tokens Reffi Account3", async function () {
            const [owner,account1,account2,account3,account4,account5,account6,account7] = await ethers.getSigners();

            let usdtamount=2000;
            TotalSelling+=usdtamount;
            usdtamount=usdtamount.toString();
            const ScaleAmount = ethers.utils.parseEther(usdtamount);

            await presale.connect(account3).BuyReffi(usdt.address, ScaleAmount);

            let ReffiBuyed = await reffi.balanceOf(account3.address);

            expect(ReffiBuyed).to.equal(ethers.utils.parseEther("124983"));
        });

        it("Buy Tokens Reffi Account4", async function () {
            const [owner,account1,account2,account3,account4,account5,account6,account7] = await ethers.getSigners();

            let usdtamount=1000;
            TotalSelling+=usdtamount;
            usdtamount=usdtamount.toString();
            const ScaleAmount = ethers.utils.parseEther(usdtamount);

            await presale.connect(account4).BuyReffi(usdt.address, ScaleAmount);

            let ReffiBuyed = await reffi.balanceOf(account4.address);

            expect(ReffiBuyed).to.equal(ethers.utils.parseEther("83266"));
        });

        it("Buy Tokens Reffi Account5", async function () {
            const [owner,account1,account2,account3,account4,account5,account6,account7] = await ethers.getSigners();

            let usdtamount=35;
            TotalSelling+=usdtamount;
            usdtamount=usdtamount.toString();
            const ScaleAmount = ethers.utils.parseEther(usdtamount);

            await presale.connect(account5).BuyReffi(usdt.address, ScaleAmount);

            let ReffiBuyed = await reffi.balanceOf(account5.address);

            expect(ReffiBuyed).to.equal(ethers.utils.parseEther("1458"));
        });

        it("Buy Tokens Reffi Account6", async function () {
            const [owner,account1,account2,account3,account4,account5,account6,account7] = await ethers.getSigners();

            let usdtamount=5000;
            TotalSelling+=usdtamount;
            
            usdtamount=usdtamount.toString();
            const ScaleAmount = ethers.utils.parseEther(usdtamount);

            await presale.connect(account6).BuyReffi(usdt.address, ScaleAmount);

            let ReffiBuyed = await reffi.balanceOf(account6.address);

            expect(ReffiBuyed).to.equal(ethers.utils.parseEther("624933"));
        });

        it("Buy Tokens Reffi Account7 No Vsion Holder", async function () {
            const [owner,account1,account2,account3,account4,account5,account6,account7] = await ethers.getSigners();

            let usdtamount=10000;

            TotalSelling+=usdtamount;

            usdtamount=usdtamount.toString();
            const ScaleAmount = ethers.utils.parseEther(usdtamount);

            await presale.connect(account7).BuyReffi(usdt.address, ScaleAmount);

            let ReffiBuyed = await reffi.balanceOf(account7.address);

            expect(ReffiBuyed).to.equal(ethers.utils.parseEther("256666"));
        });


        it("Get Status Total Selling Phase 4", async function () {
            // let PhaseSellingTotal=await presale.PhaseSelling();
            let PreSaleTotalSell=await presale.TotalSelling();
            expect(PreSaleTotalSell).to.equal(ethers.utils.parseEther(TotalSelling.toString()));
        });

    })

})