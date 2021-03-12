import React, { useState } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, KeyboardAvoidingView, Platform, TextInput, Linking } from 'react-native'

export default function App(){

  const [numero, setNumero] = useState('');
  const [input, setInput] = useState('');


  function chamarNumero(){
    setNumero(input)
    Linking.openURL(`https://api.whatsapp.com/send?phone=55${input}`)
  }

  return(
    <View style={styles.container}>
      <Image 
        source={require('./src/backgroundWhats.png')}
        style={styles.fundo}
      />

      <Image 
        source={require('./src/logoWhats.png')}
        style={styles.logo}
        />
      
      <View 
        style={styles.area}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.escreverNumero}
        >
          <TextInput 
            style={styles.input}
            placeholder={'Digite o Número'}
            onChangeText={(valor) => setInput(valor)}
          />
        </KeyboardAvoidingView>

        <TouchableOpacity
          style={styles.button}
          onPress={chamarNumero}
        >
          <Text
            style={styles.textChamar}
          >Chamar Número</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: "center",
    justifyContent: "center",
  },
  fundo: {
    position: 'absolute',
    width: '100%',
    height:  '100%'
  },
  logo:{
    width: 170,
    height: 170
  },
 area:{
    marginTop: '20%',
    width: '80%',
  },

  input:{
    padding: 15,
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 7,
    marginBottom: 10,
  },
  button:{
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    padding: 15,
    marginTop: 10,
    backgroundColor: '#FFA200',
    borderRadius: 7
  },
  textChamar: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  }
});
