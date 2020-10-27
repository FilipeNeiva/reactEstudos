/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import {Picker} from '@react-native-community/picker';

class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      pizza: 0,
      pizzas: [
        {key: 1, nome: 'Strogonoff', valor: 35.90},
        {key: 2, nome: 'Calabresa', valor: 59},
        {key: 3, nome: 'Quatro Queijos', valor: 37},
        {key: 4, nome: 'Brigadeiro', valor: 25.70},
        {key: 5, nome: 'Portuguesa', valor: 70},
      ]
    };
  }

  render(){

    let pizzasItem = this.state.pizzas.map( (v, k) => {
      return <Picker.Item key={k} value={k} label={v.nome} />
    })

    return(
      <View style={styles.conteiner}>
        <Text style={styles.logo}>Menu Pizza</Text>

        <Picker
          selectedValue={this.state.pizza}
          onValueChange={(itemValue, intemIndex) => {this.setState({pizza: itemValue})}}
        >
          {pizzasItem}
        </Picker>
        
        <Text style={styles.pizza}>Você escolheu: {this.state.pizzas[this.state.pizza].nome}</Text>
        <Text style={styles.pizza}>R$: {this.state.pizzas[this.state.pizza].valor.toFixed(2)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  conteiner:{
    flex: 1,
    marginTop: 20,
  },
  logo:{
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold'
  },
  pizza:{
    marginTop: 15,
    fontSize: 25,
    textAlign: 'center'
  }
})

export default App;
