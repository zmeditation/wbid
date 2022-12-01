module.exports.LogoInserter = function (divId, isNeeded = true) {
    try {
        if (isNeeded) {
            return `setTimeout(() => {
    addLogo("${divId}");
}, 3000); `
        } else return "";
    } catch (e) {
        console.log(e);
    }
}
