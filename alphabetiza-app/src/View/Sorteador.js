import React, {useState} from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import SoundPlayer from 'react-native-sound-player';
import sorteadorFunctions from '../Functions/sorteadorFunctions';

const Sorteador = ( { route, navigation } ) => {

  const [value, setValue] = useState("");

  const { index } = route.params;

  const handleSortear = () => {
    let val = "";
    if (index === 0) val = sorteadorFunctions.generateUpperRandomLetter();
    else if (index === 1) val = sorteadorFunctions.generateLowerRandomLetter();
    else if (index === 2) val = sorteadorFunctions.generateUpperRandomSyllable();
    else if (index === 3) val = sorteadorFunctions.generateLowerRandomSyllable();
    else if (index === 4) val = sorteadorFunctions.generateUpperRandomWord();
    else if (index === 5) val = sorteadorFunctions.generateLowerRandomWord();
    else if (index === 6) val = sorteadorFunctions.generateRandomNumber();
    setValue(val);
  }

  const playCorrectSound = () => {
    try {
      SoundPlayer.playSoundFile('tada', 'mp3');
    } catch (e) {
      console.log(`cannot play the sound file`, e)
    }
  }

  const playWrongSound = () => {
    try {
      SoundPlayer.playSoundFile('wahwah', 'mp3');
    } catch (e) {
      console.log(`cannot play the sound file`, e)
    }
  }

  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={handleSortear}>
        <Text style = {styles.textBtn}>
          SORTEAR
        </Text>
      </TouchableOpacity>

      <Text style={styles.valor}>{value}</Text>

      <View style={styles.buttons}>
        <TouchableOpacity onPress={playCorrectSound}>
          <Text style = {styles.answerBtn}>
            ACERTOU
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={playWrongSound}>
          <Text style = {styles.answerBtn}>
            ERROU
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    paddingTop: 25
  },
  textBtn: {
      borderWidth: 0.8,
      padding: 15,
      borderColor: 'black',
      backgroundColor: '#6A5ACD',
      color: 'white',
      fontWeight: 'bold',
      textAlign: "center",
      margin: 25
  },
  valor: {
    textAlign: "center",
    fontSize: 70,
    marginTop: 25,
    fontWeight: 'bold'
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 15
  },
  answerBtn: {
    borderWidth: 0.8,
    padding: 15,
    borderColor: 'black',
    backgroundColor: '#6A5ACD',
    color: 'white',
    fontWeight: 'bold',
    textAlign: "center",
    margin: 15,
    borderRadius: 40,
    minWidth:100
  }
});


export default Sorteador;
