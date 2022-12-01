const fs = require('fs-extra');
const path = require('path');

module.exports = async (req, res) => {
    try {
        const pathToBiddersList = path.join(__dirname, '../../../../modules/PrebidBuilder/dist/adapters.json');
        const rawBiddersList = JSON.parse(await fs.readFile(pathToBiddersList, 'utf8'));
        const bidders = rawBiddersList.map(bidder => {
            return {name: bidder.toLowerCase()}
        });
        res.json({
            name: 'BIDDERS',
            results: bidders
        });
    } catch (e) {
        console.log(e);
        res.status(500).send(e.message);
    }
};
