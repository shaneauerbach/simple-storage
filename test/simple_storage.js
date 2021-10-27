const SimpleStorage = artifacts.require("SimpleStorage");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("SimpleStorage", function (/* accounts */) {
  it("should assert true", async function () {
  const simpleStorage = await SimpleStorage.deployed();
  await simpleStorage.set(42);

return assert.equal(
await simpleStorage.get(),
42
  );
});
});