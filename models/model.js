const { ObjectId } = require("bson");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const modelSchema = new Schema({
    name: { type: String, required: true },
    count: { type: Number, min: 0, max: 100 },
    isBool: { type: Boolean, default: false },
    _someId: Schema.Types.ObjectId,
    date: { type: Date, default: Date.now},
    array: [],
    nested: {
        item: { type: String, lowercase: true, trim: true }
    },
    map: Map,
    mapOfString: {
        type: Map,
        of: String
    }
});

const Model = mongoose.model("Model", modelSchema);

module.exports = Model;