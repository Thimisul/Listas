import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin'
admin.initializeApp();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.contador = functions.https.onRequest(async (request, response) => {
    
    const results = await admin.firestore().collection("atividades").get();
    const atividadesList: any[] = [];
    let i = 0
    results.forEach(doc => {
        atividadesList.push({
            id: doc.id,
            data: doc.data()
        })
        i = i + 1
    });
    const contador = {quantidade: i}
    response.send(contador)

})


exports.atividades = functions.https.onRequest(async (request, response) => {
    
    const results = await admin.firestore().collection("atividades").get();
    const atividadesList: any[] = [];
    results.forEach(doc => {
        atividadesList.push({
            id: doc.id,
            data: doc.data()
        })
    });
    response.send(atividadesList)

})




