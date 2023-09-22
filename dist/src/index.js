"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const model_centre_1 = __importDefault(require("../model/model.centre"));
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.end('<h1>Hello Soufiane Mouhtaram</h1>');
});
app.get('/centres', (req, res) => {
    model_centre_1.default.find((err, centres) => {
        if (err)
            res.sendStatus(500).send(err);
        else
            res.send(centres);
    });
});
const url = "mongodb://localhost:27017/vectis";
mongoose_1.default.connect('mongodb://localhost/vectis')
    .then(() => {
    console.log('MongoDB connected successfully');
})
    .catch((error) => {
    console.error('MongoDB connection error:', error);
});
app.listen(8888, () => {
    console.log('Server is Started on %d', 8888);
});
