module.exports.checkAdaptersList = async (adaptersList) => {
        adaptersList = JSON.parse(adaptersList);
        if (!Array.isArray(adaptersList)) {
            adaptersList = [adaptersList];
        }

        return adaptersList.map((el) => {
            if (el === 'oftmedia' || el === 'brealtime' || el === 'districtm') {
                el = 'appnexus'
            }

            if (el === 'waardex_ak') {
                el = 'waardex'
            }

            if (el === 'showheroes-bs') el = 'sh';
            // if (el === 'assertiveAnalytics') return el;
            return el + 'BidAdapter'
        });
};
