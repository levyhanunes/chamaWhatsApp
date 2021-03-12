import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity, KeyboardAvoidingView, TextInput, Button } from 'react-native'

const InputNumero = (props) => {

    super(props);
    this.state={Numero:''};

    Chamar = () => {
        var N1 = this.state.Numero;
        alert(N1)
      }
    
}

export default InputNumero

