"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
let reclamationSchema = new mongoose_1.default.Schema({
    _id: { type: String, required: false },
    first_name: { type: String, required: true },
    last_name: { type: String, required: false },
    email: { type: String, required: false },
    tele: { type: String, required: false },
    make: { type: String, required: false },
    model: { type: String, required: false },
    matricule: { type: String, required: false },
    centre_id: { type: Number, required: false },
    date: { type: String, required: false },
    time: { type: String, required: false },
    typeRec: { type: String, required: false },
    media: { type: String, required: false },
    StatutVehucule: { type: String, required: false },
    resolution: { type: String, required: false },
    trackingCode: { type: String, required: false },
    statut: { type: Boolean, required: false }
});
reclamationSchema.plugin(mongoose_paginate_1.default);
const reclamation = mongoose_1.default.model("reclamation", reclamationSchema);
exports.default = reclamation;
