const compression = require("compression");
const router = require("../router");
const morgan = require("morgan");
const cors = require("cors");
const rotatingLogStream = require("../../../../app/logger/");
const {
    IpFilter
} = require("express-ipfilter");
const ips = ["::ffff:185.143.147.224",
    "::ffff:209.250.233.135",
    "::ffff:82.193.126.227",
    "::ffff:80.240.25.248",
    "::ffff:134.249.184.140",
    "134.249.184.140",
    "::ffff:91.218.193.233",
    "::ffff:188.163.75.92",
    "::ffff:188.163.75.92",
    "188.163.75.92",
    "185.143.147.224",
    "209.250.233.135",
    "82.193.126.227",
    "80.240.25.248",
    "134.249.184.140",
    "91.218.193.233",
    "::ffff:127.0.0.1",
    "127.0.0.1",
    "localhost"
];
exports.MiddleWares = class {
    constructor() {
    }

    static execute(app) {
        app.use(process.env.NODE_ENV === 'development'
            ? IpFilter([], {mode: "deny", logLevel: "all"})
            : IpFilter(ips, {mode: "allow"}));
        app.use(cors({origin: true}));
        app.use(compression());
        app.use(morgan("dev"));
        app.use(
            morgan("combined", {
                stream: rotatingLogStream,
                skip: (req, res) => {
                    return res.statusCode < 400;
                }
            })
        );
        app.use("", router);
        app.use((err, req, res, next) => {
            if (err) {
                console.log(err.message || err);
                res.status(err.status || err.statusCode || 400).send('BAD REQUEST');
            }
        });
    }
};
