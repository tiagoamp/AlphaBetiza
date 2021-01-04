const firestoreClient = require('./firestoreClient');

const dao = {

    save: async (collectionName, id, obj) => {
        await firestoreClient.save(collectionName, id, obj);
    },

    update: async (collection, id, obj) => {
        await firestoreClient.update(collectionName, id, obj);
    },

    findById: async (collectionName, id) => {
        const reg = await firestoreClient.find(collectionName, id);
        return reg;
    },

    findByAll: async (collectionName) => {
        const all = await firestoreClient.findAll(collectionName);
        return all;
    }

}

module.exports = dao;
