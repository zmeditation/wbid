const fse = require('fs-extra');
const path = require('path');

module.exports.getAnalyticsList = async () => {
    try {
        //uncomment to rebuild analytics adapters list
/*        const pathToModules = path.join(__dirname, '../core/modules');
        const allModules = await fse.readdir(pathToModules);
        const analytics = allModules
            .filter(module => module.includes('AnalyticsAdapter.js'))
            .map((analytic) => analytic.slice(0, -19));
        await fse.writeFile(path.join(__dirname, '../dist/analytics.json'), JSON.stringify(analytics));*/
        const pathToAnalyticsList = path.join(__dirname, '../dist/analytics.json');
        return await fse.readFile(pathToAnalyticsList, 'utf-8');
    } catch (e) {
        console.error(e);
        return e.message;
    }
};


