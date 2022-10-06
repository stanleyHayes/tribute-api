const mongoose = require("mongoose");
const validator = require("validator");

const orderSchema = new mongoose.Schema({
    status: {
        type: String,
        enum: ['pending', 'completed', 'cancelled', 'delivering'],
        default: 'pending'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    tracking: {
        type: String,
        required: true
    },
    items: {
        type: [
            {
                item: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Product',
                    required: true
                },
                quantity: {
                    type: Number,
                    min: 0,
                    required: true
                }
            }
        ]
    },
    price: {
        amount: {
            type: Number,
            required: true,
            min: 0
        },
        currency: {
            type: String,
            default: 'GHS',
            enum: ['GHS', 'USD', 'EUR']
        }
    },
    shipping: {
        amount: {
            type: Number,
            required: true,
            min: 0
        },
        currency: {
            type: String,
            default: 'GHS',
            enum: ['GHS', 'USD', 'EUR']
        }
    },
    tax: {
        amount: {
            type: Number,
            required: true,
            min: 0
        },
        currency: {
            type: String,
            default: 'GHS',
            enum: ['GHS', 'USD', 'EUR']
        }
    },
    recipient: {
        firstName: {
            type: String,
            trim: true
        },
        lastName: {
            type: String,
            trim: true
        },
        email: {
            type: String,
            trim: true,
            lowercase: true,
            validate(value) {
                if (!validator.isEmail(value)) {
                    throw new Error(`Invalid email ${value}`);
                }
            }
        },
        phone: {
            type: String,
            trim: true,
            lowercase: true,
            validate(value) {
                if (!validator.isMobilePhone(value)) {
                    throw new Error(`Invalid phone ${value}`);
                }
            }
        },
    },
    destination: {
        country: {
            type: String,
            required: true,
            trim: true
        },
        stateOrProvinceOrRegion: {
            type: String,
            required: true,
            trim: true
        },
        city: {
            type: String,
            required: true,
            trim: true
        },
        zipCode: {
            type: String,
            trim: true
        },
        addressLine1: {
            type: String,
            required: true
        },
        addressLine2: {
            type: String
        }
    }
}, {timestamps: {createdAt: true, updatedAt: true}});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
