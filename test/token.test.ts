import * as chai from "chai";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { CurrencyModule } from "../src";
import { appModule, sdk, signers } from "./before.test";

import { expect, assert } from "chai";

global.fetch = require("node-fetch");

describe("Token Module", async () => {
  let currencyModule: CurrencyModule;

  let adminWallet: SignerWithAddress,
    samWallet: SignerWithAddress,
    bobWallet: SignerWithAddress;

  before(() => {
    [adminWallet, samWallet, bobWallet] = signers;
  });

  beforeEach(async () => {
    sdk.setProviderOrSigner(adminWallet);
    currencyModule = await appModule.deployCurrencyModule({
      name: "Currency Module",
      symbol: "TEST"
    });
  });

  it.skip("should mint a batch of tokens to the correct wallets", async () => {
    const batch = [
      {
        address: bobWallet.address,
        toMint: 10
      },
      {
        address: samWallet.address,
        toMint: 10
      }
    ];

    await currencyModule.mintBatchTo(
      batch.map(x => {
        return {
          address: x.address,
          amount: x.toMint
        };
      })
    );

    for (const b of batch) {
      const expectedBalance = 10;
      const actualBalance = (await currencyModule.balanceOf(b.address)).value;

      assert.equal(
        actualBalance,
        expectedBalance.toString(),
        `Wallet balance should increase by ${b.toMint}`
      );
    }
  });
  it("should return the correct list of holders and their balances", async () => {
    const balance = parseInt((await currencyModule.balance()).value);
    const addresses = [
      bobWallet.address,
      samWallet.address,
      adminWallet.address,
      "0xd8Ceb88D81a30e615024024E3fDeB711690EeD92",
      "0x59AA5E78bbC415E2e00F78a5E713F0A99C7645af"
    ];
    addresses.forEach(async address => {
      await currencyModule.mintTo(address, 10);
      const totest = await currencyModule.balanceOf(address);
      chai.assert.equal(totest.value, "10");
    });
  });
});
