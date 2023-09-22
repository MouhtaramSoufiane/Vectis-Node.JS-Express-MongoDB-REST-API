"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
let commenatiresSchema = new mongoose_1.default.Schema({
    _id: { type: Number, required: false },
    centre_id: { type: Number, required: false },
    description: { type: String, required: false },
    value: { type: Number, required: false },
    date: { type: String, required: false },
});
commenatiresSchema.plugin(mongoose_paginate_1.default);
const Commenatire = mongoose_1.default.model("Commenatire", commenatiresSchema);
exports.default = Commenatire;
