module.exports.amazonHelper = (CMP, amazonAdUnitCode) => {
    const timeout = CMP
        ? `gdpr: {
                    bidTimeout: 50
                }`
        : "";
    const hash = `div-wmg-id_${Math.random().toString(36).substr(2, 9)}`;
    const slotName = "/112081842/amazon_post_bid/" + amazonAdUnitCode;
    return {timeout, hash, slotName};
};
