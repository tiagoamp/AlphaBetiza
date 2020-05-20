
const alphabetUpperCaseAscii = [];
for (let i=65; i<=90; i++) 
    alphabetUpperCaseAscii.push(i);

const alphabetLowerCaseAscii = [];
    for (let i=97; i<=122; i++) 
    alphabetLowerCaseAscii.push(i);

const vowelsAscii = [65,69,73,79,85];
const consonantsAscii = alphabetUpperCaseAscii.filter(el => !vowelsAscii.includes(el));

const lettersNotToFormSyllablesAscii = ['H', 'Y', 'W'].map(el => el.charCodeAt(0));

const words = ['GATO','RATO','PATO','MACACO','VALEU','SAPATO','COLETE','BALA','COLA','BOLA','CUECA',
    'BOCA','BEIJO','MATEMÁTICA','LIXO','ROUPA','CADEIRA','CARRO','PIRULITO','ÁGUA','CAFÉ','PAPAI',
    'OVO','KILO','AVIÃO','VACA','CADEIRA','PAPEL','COXA','DEDO','DADO','PEIXE','MENINA','MENINO',
    'REDE','VIDA','RODA','ROXO','NAVIO','NEVE','XÍCARA','FACA','FOCA','FEIO','FAMÍLIA','FEIJÃO',
    'JANAINA','JEITO','JIBÓIA','GOTA','LADO','MEDO','MIAU','BICO','NOVELA','NOVO','OLÁ','EU','POUCO',
    'QUEIJO','RABO','RETO','RUA','SOPA','UVA','VIAJOU'];

function randomInt(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

function getRandomLetter() {
    const index = randomInt(0, alphabetUpperCaseAscii.length-1);
    return String.fromCharCode( alphabetUpperCaseAscii[index] );
}

function getRandomSyllable() {
    const validConsonants = consonantsAscii.filter(el => !lettersNotToFormSyllablesAscii.includes(el));
    const iConsonant = randomInt(0, validConsonants.length-1);
    const consonant = String.fromCharCode( validConsonants[iConsonant] );
    const isLetterQ = 'Q' === consonant;
    const iVowel = randomInt(0, isLetterQ ? vowelsAscii.length-2 : vowelsAscii.length-1); // if 'Q', excludes vowel 'U'
    const vowel = String.fromCharCode( vowelsAscii[iVowel] );
    const syllable = isLetterQ ? (consonant + 'U' + vowel) : (consonant + vowel);
    return syllable;
}

function getRandomWord() {
    const index = randomInt(0, words.length-1);
    return words[index];
}



const sorteadorFunctions = {

    generateUpperRandomSyllable: () => {
        return getRandomSyllable();
    },
    
    generateLowerRandomSyllable: () => {
        return getRandomSyllable().toLowerCase();
    },
    
    generateUpperRandomLetter: () => {
        return getRandomLetter();
    },
    
    generateLowerRandomLetter: () => {
        return getRandomLetter().toLowerCase();
    },

    generateRandomNumber: () => {
        return randomInt(0,100);
    },

    generateUpperRandomWord: () => {
        return getRandomWord();
    },

    generateLowerRandomWord: () => {
        return getRandomWord().toLowerCase();
    }

}

export default sorteadorFunctions;