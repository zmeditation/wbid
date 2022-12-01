const cheerio = require("cheerio");
const request = require("request-promise-native");
const fse = require("fs-extra");

module.exports.getSettings = async () => {
  const URL = "http://prebid.org/dev-docs/bidders.html";
  let results = [];
  let html = await request(URL);
  let $ = cheerio.load(html);
  $('.bs-docs-section').each(function (i) {
    if (i === 0) return;

    //Between Digital and BuySellAds
    if ($(this).children('table').first().find('td').first().next().text() === 'between' ||
        $(this).children('table').first().find('td').first().next().text() === 'buysellads') {
      let options = [];
      $(this).children('table').last().children('tbody').children('tr').each(function () {
            options.push({
              option: $(this).children().first().text(),
              required: $(this).children('td').first().next().text() === 'required',
              description: $(this).children('td').last().prev().text(),
              example: $(this).children('td').last().text(),
              type: $(this).children('td').last().text() === '[12345, 4567]' ? 'array' : 'number'
            })
          }
      );
      results.push({
        name: $(this).children('h2').first().text(),
        code: $(this).children('table').first().find('td').first().next().text(),
        GDPR: $(this).children('table').first().find('tr').last().prev().prev().find('td').first().next().next().next().text() === 'yes',
        SChain: $(this).children('table').first().find('tr').last().find('td').first().next().text() === 'yes',
        media_types: $(this).children('table').first().find('tr').last().prev().prev().find('td').first().next().text().split(',').map(type => type.trim()),
        options
      });
      return;
    }

    //Inter Exchange
    if ($(this).children('table').first().find('td').first().next().text() === 'ix') {
      let options = [];
      $(this).children('table').each(function (i, el) {
            if (i === 3) {
              $(this).children('tbody').children('tr').each(function () {
                    options.push({
                      option: $(this).children().first().text(),
                      required: $(this).children('td').first().next().text() === 'required',
                      description: $(this).children('td').last().prev().prev().text(),
                      example: $(this).children('td').last().prev().text(),
                      type: $(this).children('td').last().text(),
                    })
                  }
              )
            }
          }
      );
      results.push({
        name: $(this).children('h2').first().text(),
        code: $(this).children('table').first().find('td').first().next().text(),
        SChain: $(this).children('table').first().find('tr').last().find('td').first().next().text() === 'yes',
        GDPR: $(this).children('table').first().find('tr').last().prev().prev().find('td').first().next().next().next().text() === 'yes',
        media_types: $(this).children('table').first().find('tr').last().prev().prev().find('td').first().next().text().split(',').map(type => type.trim()),
        options
      });
      return;
    }

    //decenterads
    if ($(this).children('table').first().find('td').first().next().text() === 'decenterads') {
      let options = [];
      $(this).children('table').last().children('tbody').children('tr').each(function () {
            options.push({
              option: $(this).children().first().text(),
              required: $(this).children('td').first().next().text() === 'required',
              description: $(this).children('td').first().next().next().text(),
              example: $(this).children('td').last().prev().text(),
              type: $(this).children('td').last().text().toLowerCase()
            })
          }
      );
      results.push({
        name: $(this).children('h2').first().text(),
        code: $(this).children('table').first().find('td').first().next().text(),
        GDPR: $(this).children('table').first().find('tr').last().prev().prev().find('td').first().next().next().next().text() === 'yes',
        SChain: $(this).children('table').first().find('tr').last().find('td').first().next().text() === 'yes',
        media_types: $(this).children('table').first().find('tr').last().prev().prev().find('td').first().next().text().split(',').map(type => type.trim()),
        options
      });
      return;
    }

    //etarget
    if ($(this).children('table').first().find('td').first().next().text() === 'etarget') {
      let options = [];
      $(this).children('table').last().children('tbody').children('tr').each(function () {
            options.push({
              option: $(this).children().first().text(),
              required: $(this).children('td').first().next().text() === 'required',
              description: $(this).children('td').first().next().next().text(),
              example: $(this).children('td').last().text(),
              type: $(this).children('td').last().text() === '12345' ? 'number' : "string"
            })
          }
      );
      results.push({
        name: $(this).children('h2').first().text(),
        code: $(this).children('table').first().find('td').first().next().text(),
        GDPR: $(this).children('table').first().find('tr').last().prev().prev().find('td').first().next().next().next().text() === 'yes',
        SChain: $(this).children('table').first().find('tr').last().find('td').first().next().text() === 'yes',
        media_types: $(this).children('table').first().find('tr').last().prev().prev().find('td').first().next().text().split(',').map(type => type.trim()),
        options
      });
      return;
    }

    //Prebid Server
    if ($(this).children('table').first().find('td').first().next().text() === 'prebidServer') {
      let options = [];
      $(this).children('table').last().children('tbody').children('tr').each(function () {
            options.push({
              option: $(this).children().first().text(),
              required: $(this).children().last().prev().text() === 'X',
              description: $(this).children().last().text(),
              example: " ",
              type: $(this).children().first().next().text().toLowerCase()
            })
          }
      );
      results.push({
        name: $(this).children('h2').first().text(),
        code: $(this).children('table').first().find('td').first().next().text(),
        GDPR: $(this).children('table').first().find('tr').last().prev().prev().find('td').first().next().next().next().text() === 'yes',
        SChain: $(this).children('table').first().find('tr').last().find('td').first().next().text() === 'yes',
        media_types: $(this).children('table').first().find('tr').last().prev().prev().find('td').first().next().text().split(',').map(type => type.trim()),
        options
      });
      return;
    }

    //UOL
    if ($(this).children('table').first().find('td').first().next().text() === 'uol') {
      let options = [];

      $(this).children('table').last().children('tbody').children('tr').each(function () {
            let type;
            if ($(this).children().last().text().includes('true')) {
              type = 'boolean'
            } else type = 'number';
            options.push({
              option: $(this).children().first().text(),
              required: $(this).children().first().next().text() === 'required',
              description: $(this).children().last().prev().text(),
              example: $(this).children().last().text(),
              type
            })
          }
      );
      results.push({
        name: $(this).children('h2').first().text(),
        code: $(this).children('table').first().find('td').first().next().text(),
        GDPR: $(this).children('table').first().find('tr').last().prev().prev().find('td').first().next().next().next().text() === 'yes',
        SChain: $(this).children('table').first().find('tr').last().find('td').first().next().text() === 'yes',
        media_types: $(this).children('table').first().find('tr').last().prev().prev().find('td').first().next().text().split(',').map(type => type.trim()),
        options
      });
      return;
    }

    //vi
    if ($(this).children('table').first().find('td').first().next().text() === 'vi') {
      let options = [];
      $(this).children('table').last().children('tbody').children('tr').each(function () {
            let type;
            if ($(this).children().last().text().includes('0.001')) {
              type = 'float'
            } else type = 'string';
            options.push({
              option: $(this).children().first().text(),
              required: $(this).children().first().next().text() === 'required',
              description: $(this).children().last().prev().text(),
              example: $(this).children().last().text(),
              type
            })
          }
      );
      results.push({
        name: $(this).children('h2').first().text(),
        code: $(this).children('table').first().find('td').first().next().text(),
        GDPR: $(this).children('table').first().find('tr').last().prev().prev().find('td').first().next().next().next().text() === 'yes',
        SChain: $(this).children('table').first().find('tr').last().find('td').first().next().text() === 'yes',
        media_types: $(this).children('table').first().find('tr').last().prev().prev().find('td').first().next().text().split(',').map(type => type.trim()),
        options
      });
      return;
    }

    //weborama
    if ($(this).children('table').first().find('td').first().next().text() === 'weborama') {
      let options = [];
      $(this).children('table').last().children('tbody').children('tr').each(function () {
            let type;
            if ($(this).children().last().text().includes('0')) {
              type = 'number'
            } else type = 'string';
            options.push({
              option: $(this).children().first().text(),
              required: $(this).children().first().next().text() === 'required',
              description: $(this).children().last().prev().text(),
              example: $(this).children().last().text(),
              type
            })
          }
      );
      results.push({
        name: $(this).children('h2').first().text(),
        code: $(this).children('table').first().find('td').first().next().text(),
        GDPR: $(this).children('table').first().find('tr').last().prev().prev().find('td').first().next().next().next().text() === 'yes',
        SChain: $(this).children('table').first().find('tr').last().find('td').first().next().text() === 'yes',
        media_types: $(this).children('table').first().find('tr').last().prev().prev().find('td').first().next().text().split(',').map(type => type.trim()),
        options
      });
      return;
    }

    //aduptech
    if ($(this).children('table').first().find('td').first().next().text() === 'aduptech') {
      let options = [];
      $(this).children('table').last().children('tbody').children('tr').each(function () {
            let type;
            if ($(this).children().last().text().includes('true')) {
              type = 'boolean'
            } else type = 'string';
            options.push({
              option: $(this).children().first().text(),
              required: $(this).children().first().next().text() === 'required',
              description: $(this).children().last().prev().text(),
              example: $(this).children().last().text(),
              type
            })
          }
      );
      results.push({
        name: $(this).children('h2').first().text(),
        code: $(this).children('table').first().find('td').first().next().text(),
        GDPR: $(this).children('table').first().find('tr').last().prev().prev().find('td').first().next().next().next().text() === 'yes',
        SChain: $(this).children('table').first().find('tr').last().find('td').first().next().text() === 'yes',
        media_types: $(this).children('table').first().find('tr').last().prev().prev().find('td').first().next().text().split(',').map(type => type.trim()),
        options
      });
      return;
    }

    //Slimcut
    if ($(this).children('table').first().find('td').first().next().text() === 'slimcut') {
      let options = [{
        option: "placementId",
        required: true,
        description: "",
        example: "SlimCut placementId",
        type: "integer"
      }];
      results.push({
        name: $(this).children('h2').first().text(),
        code: $(this).children('table').first().find('td').first().next().text(),
        GDPR: $(this).children('table').first().find('tr').last().prev().prev().find('td').first().next().next().next().text() === 'yes',
        SChain: $(this).children('table').first().find('tr').last().find('td').first().next().text() === 'yes',
        media_types: $(this).children('table').first().find('tr').last().prev().prev().find('td').first().next().text().split(',').map(type => type.trim()),
        options
      });
      return;
    }

    //StickyAds, Telaria and other adapters without bid params
    if ($(this).children('table').first().find('td').first().next().text() === 'stickyadstv' ||
        $(this).children('table').first().find('td').first().next().text() === 'telaria' ||
        $(this).children('table').first().find('td').first().next().text() === 'vmg') {
      let options = [];
      results.push({
        name: $(this).children('h2').first().text(),
        code: $(this).children('table').first().find('td').first().next().text(),
        GDPR: $(this).children('table').first().find('tr').last().prev().prev().find('td').first().next().next().next().text() === 'yes',
        SChain: $(this).children('table').first().find('tr').last().find('td').first().next().text() === 'yes',
        media_types: $(this).children('table').first().find('tr').last().prev().prev().find('td').first().next().text().split(',').map(type => type.trim()),
        options
      });
      return;
    }

    //Sortable
    if ($(this).children('table').first().find('td').first().next().text() === 'sortable') {
      let options = [];
      $(this).children('table').last().children('tbody').children('tr').each(function () {
        let type;
        if ($(this).children('td').last().text() === '0.25') {
          type = 'float'
        } else if ($(this).children('td').last().text().includes('{')) {
          type = 'object'
        } else type = 'string';
        options.push({
          option: $(this).children().first().text(),
          required: $(this).children('td').first().next().text() === 'required',
          description: $(this).children('td').last().prev().text(),
          example: $(this).children('td').last().text(),
          type
        })
      });
      results.push({
        name: $(this).children('h2').first().text(),
        code: $(this).children('table').first().find('td').first().next().text(),
        GDPR: $(this).children('table').first().find('tr').last().prev().prev().find('td').first().next().next().next().text() === 'yes',
        SChain: $(this).children('table').first().find('tr').last().find('td').first().next().text() === 'yes',
        media_types: $(this).children('table').first().find('tr').last().prev().prev().find('td').first().next().text().split(',').map(type => type.trim()),
        options
      });
      return;
    }

    //More that one table with settings
    if ($(this).children('table').length > 3) {
      let options = [];
      $(this).children('table').each(function (i, el) {
        if (i === 2) {
          $(this).find('tbody > tr').each(function () {
            options.push({
              option: $(this).children().first().text(),
              required: $(this).children('td').first().next().text() === 'required',
              description: $(this).children('td').first().next().next().text(),
              example: $(this).children('td').last().prev().text(),
              type: $(this).children('td').last().text().toLowerCase()
            })
          });
        }
      });
      results.push({
        name: $(this).children('h2').first().text(),
        code: $(this).children('table').first().find('td').first().next().text(),
        GDPR: $(this).children('table').first().find('tr').last().prev().prev().find('td').first().next().next().next().text() === 'yes',
        SChain: $(this).children('table').first().find('tr').last().find('td').first().next().text() === 'yes',
        media_types: $(this).children('table').first().find('tr').last().prev().prev().find('td').first().next().text().split(',').map(type => type.trim()),
        options
      });
      return;
    }
    let options = [];
    $(this).children('table').last().children('tbody').children('tr').each(function () {
          options.push({
            option: $(this).children().first().text(),
            required: $(this).children('td').first().next().text() === 'required',
            description: $(this).children('td').first().next().next().text(),
            example: $(this).children('td').last().prev().text(),
            type: $(this).children('td').last().text().toLowerCase()
          })
        }
    );
    results.push({
      name: $(this).children('h2').first().text(),
      code: $(this).children('table').first().find('td').first().next().text(),
      GDPR: $(this).children('table').first().find('tr').last().prev().prev().find('td').first().next().next().next().text() === 'yes',
      SChain: $(this).children('table').first().find('tr').last().find('td').first().next().text() === 'yes',
      media_types: $(this).children('table').first().find('tr').last().prev().prev().find('td').first().next().text().split(',').map(type => type.trim()),
      options
    })
  });
  await fse.writeFile('result.json', JSON.stringify(results, null, '\t'));

  return JSON.stringify(results);
};
