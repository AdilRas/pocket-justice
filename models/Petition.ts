const mongoose = require('mongoose');
const ttl = require('mongoose-ttl');

const daysTillExpiration = 7;
const expirationTime = 1000 * 24 * 60 * 60 * daysTillExpiration;

export const Petition = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    href: {
        type: String,
        required: true
    },
    imageHref: {
        type: String
    },
    signatures: {
        type: String
    },
    goal: {
        type: String
    }
});

Petition.plugin(ttl, { ttl: expirationTime });

module.exports = mongoose.model('Petition', Petition);