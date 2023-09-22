"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
let centresSchema = new mongoose_1.default.Schema({
    id: { type: Number, required: false },
    name: { type: String, required: true },
    tele: { type: String, required: false },
    adresse: { type: String, required: false },
    email: { type: String, required: false },
    ville: { type: String, required: false },
    categorie: { type: [], required: false },
    distance: { type: Number, required: false, default: 0 },
    nomReseau: { type: String, required: false },
    logo: { type: String, required: false },
    logoReseau: { type: String, required: false },
    lat: { type: String, required: false },
    lng: { type: String, required: false }
});
centresSchema.plugin(mongoose_paginate_1.default);
const Centre = mongoose_1.default.model("Centre", centresSchema);
exports.default = Centre;
