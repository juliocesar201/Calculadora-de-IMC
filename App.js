import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet,TextInput,Text, View, TouchableOpacity, Pro } from 'react-native';

type Props = {};
export default class App extends Component<Props> {

  constructor(props){
    super(props)
    this.state = {altura:0, massa:0, resultado:0, resultadoText:""}
    this.calcular = this.calcular.bind(this)
  } 

  calcular(){

    let imc = this.state.massa/ (this.state.altura * this.state.altura)

    let s = this.state
    s.resultado = imc
    this.setState(s)

    //     < 16  Magreza grave
    // 16 a < 17  Magreza moderada
    // 17 a < 18,5  Magreza leve
    // 18,5 a < 25  Saudável
    // 25 a < 30  Sobrepeso 
    // 30 a < 35  Obesidade Grau I
    // 35 a < 40  Obesidade Grau II (severa)
    // > 40 Obesidade Grau III (mórbida)

    if(s.resultado >1){
      s.resultadoText = "Magreza grave"

    }
    if(s.resultado >16){
      s.resultadoText = "Magreza moderada"

    }
    if(s.resultado >17){
      s.resultadoText = "Magreza leve"

    }
    if(s.resultado >18){
      s.resultadoText = "Saudável"

    }
    if(s.resultado >25){
      s.resultadoText = "Sobrepeso"

    }
    if(s.resultado >30){
      s.resultadoText = "Obesidade Grau I"

    }
    if(s.resultado >35){
      s.resultadoText = "Obesidade Grau II (severa)"

    }
    if(s.resultado >40){
      s.resultadoText = "Obesidade Grau III (mórbida)"

    }

  }

  
  render(){
  return (
    <View style={styles.container}>
      <View style={styles.entradas}>
        <TextInput placeholder="Massa" keyboardType="numeric" style={styles.input} onChangeText={(massa)=>{this.setState({massa})}}/>
        <TextInput placeholder="Altura" keyboardType="numeric" style={styles.input} onChangeText={(altura)=>{this.setState({altura})}}/>
      </View>
      <TouchableOpacity style={styles.button} onPress={this.calcular}><Text style={styles.buttonText}>Calcular</Text></TouchableOpacity>
      <Text style={styles.resultado}>{this.state.resultado.toFixed(2)}</Text>
      <Text style={[styles.resultado, {fontSize:35}]}>{this.state.resultadoText}</Text>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#f5fcff',
    
  },
  entradas:{
    flexDirection: 'row',

  },
  input:{
    height:80,
    textAlign:"center",
    width:"50%",
    fontSize:50,
    marginTop:24,
  },
  button:{
    backgroundColor:"#89ffa5"

  },
  buttonText:{
    alignSelf: 'center',
    padding: 30,
    fontSize:25,
    color:"#6dc4a4",
    fontWeight: 'bold',
  },
  resultado:{
    alignSelf:"center",
    color:"lightgray",
    fontSize: 65,
    padding:15

  }
});
