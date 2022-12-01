const fs = require("fs-extra");

exports.ErrorHandler = class {
    constructor() {
    }

    async handle(err) {

        let userErrorMessage;

        if (err.message.includes('AuthenticationError.NETWORK_NOT_FOUND ')) {
            userErrorMessage = 'This network not found! Check Network ID and try again';
        } else if (err.message.includes('OrderActionError.PERMISSION_DENIED')) {
            userErrorMessage = `You don't have sufficient rights to perform integration. Check your status and try again`
        } else if (err.message.includes('LineItemError.INVALID_LINE_ITEM_CURRENCY')) {
            userErrorMessage = 'Invalid currency. Your network currency should be USD'
        } else if (err.message.includes('AuthenticationError.NOT_WHITELISTED_FOR_API_ACCESS')) {
            userErrorMessage = 'Cannot get access to Google AdManager API. Check API settings and try again'
        }
        else {
            userErrorMessage = 'Some error was occurred. Try again'
        }

        await fs.writeFile('app/modules/DFP_API/DFP_HB_SetUp/handlers/err.json', JSON.stringify(err));

        console.log(err.message);

        process.send({
            text: userErrorMessage,
            status: 'error'
        });

        process.exit(1);

    }
};
