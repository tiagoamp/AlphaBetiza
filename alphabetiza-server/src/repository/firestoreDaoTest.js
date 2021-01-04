const firestoreDao = require("./firestoreDao");


main = async () => {

    //firestoreDao.save('kids', mi.email, mi);
    //console.log('Gravado!');

    //await firestoreDao.update('kids', mi.email, mi);

    const reg = await firestoreDao.findById('kids', 'camilavmp@gmail.com');
    console.log(reg);

    //const all = await firestoreDao.findAll('kids');
    //console.log(all);
}

main();