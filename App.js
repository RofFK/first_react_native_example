import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Button from './src/ui/components/button/Button'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    // JSX = JavaScript XML
    // prop = property 
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Hello React Native</Text> 
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        
        <Button 
          onClick={() => {
            console.log('ahahah')
          }}
          style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle}>
              Click Baba
            </Text>  
        </Button>

        <Button 
          onClick={() => {
            console.log('ahahah')
          }}
          style={[styles.buttonStyle, styles.bottomButtonStyle]}>
            <Text style={styles.buttonTextStyle}>
              Click Anne
            </Text>  
        </Button>

      </View>
    );
  }
}

const styles =  {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  buttonTextStyle:{
    fontSize: 18,
    color: '#fff'
  },
  buttonStyle: {
    backgroundColor: '#34495e',
    width: 140,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomButtonStyle:{
    marginTop: 20
  }
}
