"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cors_1 = require("cors");
var dotenv_1 = require("dotenv");
dotenv_1.default.config();
var app = (0, express_1.default)();
var PORT = process.env.PORT || 5000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
var routes_1 = require("./routes");
app.use('/api', routes_1.default);
app.get('/api/health', function (req, res) {
    res.json({ status: 'ok' });
});
app.listen(PORT, function () {
    console.log("Server is running on port ".concat(PORT));
});
