import React from 'react';
import { View, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';


const Menu = ( { navigation } ) => {


  return (
    <View style={styles.container} > 
        
        <TouchableOpacity>
          <Text style = {styles.textBtn} onPress={() => navigation.navigate('Sorteador', { index: 0 } ) }>
            SORTEADOR DE LETRA MAIÚSCULA
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity>
          <Text style = {styles.textBtn} onPress={() => navigation.navigate('Sorteador', { index: 1 } ) }>
            SORTEADOR DE LETRA MINÚSCULA
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.navigate('Sorteador', { index: 2 } ) }>
          <Text style = {styles.textBtn}>
            SORTEADOR DE SÍLABA MAIÚSCULA
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Sorteador', { index: 3 } ) }>
          <Text style = {styles.textBtn}>
            SORTEADOR DE SÍLABA MINÚSCULA
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Sorteador', { index: 4 } ) }>
          <Text style = {styles.textBtn}>
            SORTEADOR DE PALAVRA MAIÚSCULA
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Sorteador', { index: 5 } ) }>
          <Text style = {styles.textBtn}>
            SORTEADOR DE PALAVRA MINÚSCULA
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Sorteador', { index: 6 } ) }>
          <Text style = {styles.textBtn}>
            SORTEADOR DE NÚMEROS
          </Text>
        </TouchableOpacity>
      
    </View>
  );
  
};


const styles = StyleSheet.create({
  container: {
    paddingTop: 20 
  },
  textBtn: {
      borderWidth: 0.8,
      padding: 10,
      borderColor: 'black',
      backgroundColor: '#6A5ACD',
      color: 'white',
      fontWeight: 'bold',
      textAlign: "center",
      margin: 13
  }
});


export default Menu;
