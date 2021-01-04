const firestore = require('@google-cloud/firestore');
const path = require('path');
const { Firestore } = require('@google-cloud/firestore');

class FirestoreClient {

    constructor() {
        this.firestore = new Firestore({
            projectId: 'alphabetiza',
            keyFilename: path.join(__dirname,'./alphabetiza-service-account.json')
        });
    }

    async save(collectionName, id, data) {
        const docRef = this.firestore.collection(collectionName).doc(id);
        await docRef.set(data);
    }

    async saveSubCollection(rootCollName, rootDocId, subCollName, subCollId, subCollData) {
        const docRef = this.firestore.collection(rootCollName).doc(rootDocId).collection(subCollName).doc(subCollId);
        await docRef.set(subCollData);
    }

    async saveByPath(path, data) {
        const docRef = this.firestore.doc(path);
        await docRef.set(data);
    }

    async update(collectionName, id, data) {
        const docRef = this.firestore.collection(collectionName).doc(id);
        await docRef.update(data);
    }

    async find(collectionName, id) {
        const docRef = this.firestore.collection(collectionName).doc(id);
        const doc = await docRef.get();
        return doc.data();
    }

    async findAll(collectionName) {
        const docRef = this.firestore.collection(collectionName);
        const doc = await docRef.get();
        const jsonArr = [];
        doc.forEach( d => jsonArr.push(JSON.stringify(d.data())) );
        const objArr = jsonArr.map(j => JSON.parse(j));
        return objArr;
    }

    async delete(collectionName, id) {
        const docRef = this.firestore.collection(collectionName).doc(id);
        await docRef.delete();
    }

}

module.exports = new FirestoreClient();