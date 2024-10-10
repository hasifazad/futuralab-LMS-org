const mongoose = require('mongoose');

const organizationSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    organization_name: { type: String, required: true },
    organization_code: { type: String, required: true, unique: true },
    country: { type: String, required: true },
    place: { type: String, required: true },
    mobile: { type: String, required: true }
}, {
    timestamps: true // Automatically adds `createdAt` and `updatedAt` fields
});

module.exports = mongoose.model('Organization', organizationSchema);
