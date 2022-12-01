module.exports.postbidAnalyticsSettingsGen = (analyticsEnable, analytics, analyticsOptions) => {
    analyticsOptions
        ? analyticsOptions = JSON.parse(analyticsOptions)
        : analyticsOptions = {};
    let analyticsTemplate;
    if (analyticsEnable === 'true') {
        let analyticSettings = [];
        if (!Array.isArray(analytics)) {
            analytics = [analytics]
        }
        analytics.forEach(module => {
            let options, set;
            if (Object.keys(analyticsOptions).includes(module)) {
                set = [];
                analyticsOptions[module].forEach(el => {
                    for (let key in el) {
                        set.push(`
            ${key}: "${el[key]}"`)
                    }
                });
                options = `{${set.join(',')}
             }`;
            } else {
                options = '{}'
            }
            analyticSettings.push(`
    {
       provider: '${module}',
       options: ${options}
    }`)
        });

        analyticsTemplate =
            `pbjs.enableAnalytics([${analyticSettings.join(',')}
]);`
    } else {
        analyticsTemplate = ''
    }

    return {analyticsTemplate};
};
