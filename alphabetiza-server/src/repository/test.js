const firestoreClient = require('./firestoreClient');

const mi = {
    email: 'camilavmp@gmail.com',
    name: 'Camila',
    birthdate: '2014-02-25T12:00:00Z',
    score: 0,
    rewards: [
        { id: 1, description: 'Comer no McDonalds', goal: 100 },
        { id: 2, description: 'Ganhar Kinder Ovo', goal: 50 }
    ],
    tasks: [
        { id: 1, description: 'Arrumar a cama', points: 5 },
        { id: 2, description: 'Resolver desafio de leitura ou escrita', points: 5 },
        { id: 3, description: 'Levar prato e talheres na pia após comer', points: 1 }
    ]    
};

main = async () => {

    //firestoreClient.save('kids', mi.email, mi);
    //console.log('Gravado!');

    //await firestoreClient.update('kids', mi.email, mi);

    const reg = await firestoreClient.find('kids', mi.email);
    console.log(reg);

    //const all = await firestoreClient.findAll('kids');
    //console.log(all);
}

main();


