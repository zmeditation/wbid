const getDataType = (data) => {
    let isFind = false;
    const types = [
        {
            number:
                [
                    'integer',
                    'number',
                    'float',
                    'int',
                    'decimal'
                ]
        },
        {
            string:
                [
                    'string',
                    'n/a',
                    'character'
                ]
        },
        {
            array:
                [
                    'array',
                    'array<string>',
                    'array of numbers',
                    'array of strings',
                    'array of integers',
                    'Array<string>',
                    'Array<integer>',
                    'array<integer>',
                    'array[string]',
                    'array<float>',
                    'array<array>'
                ]
        },
        {
            object:
                [
                    'object',
                    'Object',
                ]
        },
        {
            boolean:
                [
                    'boolean'
                ]
        },
        {
            function: [
                'function'
            ]
        }
    ];

    for (let type of types) {
        for (let t in type) {
            if (type[t].includes(data)) {
                isFind = true;
                return t;
            }
        }
    }
    if (!isFind) return false;
};

module.exports.getDataType = getDataType;
