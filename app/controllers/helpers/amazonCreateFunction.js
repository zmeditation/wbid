module.exports = async ({ width, height, configname }, dfp) => {
  let config = { size: { width, height }, configname };
  let amazonInventory = await dfp.createAmazonInventory(config);
  return amazonInventory.unit[0];
};
