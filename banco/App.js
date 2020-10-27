
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Switch,
  Button
} from 'react-native';

import {Picker} from '@react-native-community/picker';
import Slider from '@react-native-community/slider';


class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      nome: null,
      idade: null,
      sexo: 0,
      limite: 1000,
      estudante: false,
    };

    this.abrirConta = this.abrirConta.bind(this);
  }

  abrirConta(){

    if(
      this.state.nome === null ||
      this.state.idade === null
      ){
      alert('Por favor preencha todos os campos.')
    }else{
      alert( 'Nome: ' + this.state.nome + 
            '\nIdade: ' + this.state.idade +
            '\nSexo: ' + (this.state.sexo != 2 ? 'Masculino' : 'Feminino') +
            '\nLimite: R$ ' + this.state.limite.toFixed(2) +
            '\nEstudante: ' + (this.state.estudante === true ? 'sim' : 'não')
          )
    }
  }

  render(){
    return(
      <View style={styles.conteiner}>
        <Text style={styles.logo}>BANCO</Text>
        <TextInput 
          placeholder='NOME' 
          style={styles.textoInput} 
          onChangeText={(textoNome) => this.setState({nome: textoNome})} 
        />
        <TextInput 
          placeholder='IDADE' 
          style={styles.textoInput} 
          keyboardType='number-pad'
          onChangeText={(textoIdade) => this.setState({idade: textoIdade})}
        />

        <View style={styles.areaPicker}>
          <Text style={styles.textoPicker}>SEXO: </Text>
          <Picker
            style={styles.pickerBtn}
            selectedValue={this.state.sexo}
            onValueChange={(itemValue, itemIndex) => this.setState({sexo: itemValue})}
          >
            <Picker.Item key={1} value={1} label='MASCULINO' />
            <Picker.Item key={2} value={2} label='FEMININO' />
          </Picker>
        </View>
        <View style={styles.areaSlider}>
          <Text style={styles.textoSlicer}>LIMITE: </Text>
          <Slider
            style={styles.slicerBtn}
            minimumValue={1000}
            maximumValue={2000}
            onValueChange={(valorSelecionado) => this.setState({limite: valorSelecionado})}
          />
          
        </View>

        <Text style={styles.textoLimite}>R$ {this.state.limite.toFixed(2)}</Text>
        
        <View style={styles.areaSwitch}>
          <Text style={styles.textoSwitch}>ESTUDANTE: </Text>
          <Switch
            style={styles.switchBtn}
            value={this.state.estudante}
            onValueChange={( valorSwitch ) => this.setState({estudante: valorSwitch})}
          />
        </View>

        <Button 
          title='ABRIR CONTA' 
          onPress={this.abrirConta} 
        />
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  conteiner:{
    flex: 1,
    marginTop: 30
  },
  logo:{
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  textoInput:{
    margin: 5,
    borderWidth: 1,
    borderRadius: 10
  },
  areaPicker:{
    flexDirection: 'row',
    height: 100,
    alignItems: 'center'
  },
  textoPicker:{
    flex:1,
    marginLeft: 30
  },
  pickerBtn:{
    flex: 2
  },
  areaSlider:{
    flexDirection: 'row',
    height: 50,
    alignItems: 'center'
  },
  textoSlicer:{
    flex: 1,
    textAlign: 'center'
  },
  slicerBtn:{
    flex: 3
  },
  textoLimite:{
    textAlign: 'center'
  },
  areaSwitch:{
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 60
  },
  textoSwitch:{
    flex: 2
  },
  switchBtn:{
    flex: 1
  },
})

export default App;
