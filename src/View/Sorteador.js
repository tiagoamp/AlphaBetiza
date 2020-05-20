import React, {useState} from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
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

  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={handleSortear}>
        <Text style = {styles.textBtn}>
          SORTEAR
        </Text>
      </TouchableOpacity>

      <Text style={styles.valor}>{value}</Text>

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
      backgroundColor: '#1E90FF',
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
  }
});


export default Sorteador;
