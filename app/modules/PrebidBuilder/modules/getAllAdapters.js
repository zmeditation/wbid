const fse = require('fs-extra');
const path = require('path');

module.exports.getAllAdapters = async () => {
    const pathToBidders = path.join(__dirname, '../../../modules/PrebidBuilder/core/build/dist');
    const options = {withFileTypes: true};

    let adaptersList = await fse.readdir(pathToBidders, options);
    let adapters = {};

    for (let adapter of adaptersList) {
        if (adapter.name.slice(-13) === 'BidAdapter.js')
            adapters[adapter.name.slice(0, -13)] = `${adapter.name}`
    }

    await fse.writeFile('adapters.json', JSON.stringify(adapters));
    return JSON.stringify(adapters);
};
