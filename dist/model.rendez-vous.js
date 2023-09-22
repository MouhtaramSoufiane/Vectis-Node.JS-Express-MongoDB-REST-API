"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
let rendezVousSchema = new mongoose_1.default.Schema({
    _id: { type: String, required: false },
    centre_id: { type: Number, required: true },
    first_name: { type: String, required: false },
    last_name: { type: String, required: false },
    tele: { type: String, required: false },
    adress: { type: String, required: false },
    make: { type: String, required: false },
    model: { type: String, required: false, default: 0 },
    year: { type: Number, required: false },
    description: { type: String, required: false },
    date: { type: String, required: false },
    time: { type: String, required: false },
    centre_name: { type: String, required: false }
});
rendezVousSchema.plugin(mongoose_paginate_1.default);
const rendezVous = mongoose_1.default.model("rendezVous", rendezVousSchema);
exports.default = rendezVous;
