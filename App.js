import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import Button from './src/ui/components/button/Button'
import Counter from './src/ui/components/counter/Counter'
// const menuIcon = require('./src/assets/images/baseline_more_vert_black_18dp.png')

const instruction = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  state = {
    background: '#fff'
  }

  render() {
    console.log(this.state.background)
    // JSX = JavaScript XML
    // prop = property 
    const {
      container,
      navigationBar,
      welcome,
      instructions,
      buttonStyle,
      buttonTextStyle,
      bottomButtonStyle,
      navigationBarContainerStyle,
      menuIconStyle
    } = styles


    return (
      <View style={[container, { backgroundColor: this.state.background }]}>
        <View style={navigationBarContainerStyle}>
          <Text style={navigationBar}>Anasayfa </Text>
          <Image
            style={menuIconStyle}
            source={{ uri: 'https://cdn4.iconfinder.com/data/icons/aami-web-internet/64/aami12-51-512.png' }} />
        </View>
        <Text style={welcome}>Hello React Native</Text>
        <Text style={instructions}>To get started, edit App.js</Text>
        <Text style={instructions}>{instruction}</Text>

        <Counter />

        <Button
          style={[buttonStyle, bottomButtonStyle]}
          onClick={this.onTapNightMode}>
          <Text style={buttonTextStyle}>
            Night Mode
            </Text>
        </Button>

      </View >
    );
  }

  onTapNightMode = () => {
    const { background } = this.state
    if (background === '#fff') {
      this.setState({ background: '#000' })
    } else {
      this.setState({ background: '#fff' })
    }
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff'
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
  buttonTextStyle: {
    fontSize: 20,
    color: '#fff'
  },
  buttonStyle: {
    backgroundColor: '#34495e',
    width: 140,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  navigationBar: {
    fontSize: 20,
    textAlign: 'left',
    color: '#3f3f3f'
  },
  bottomButtonStyle: {
    marginTop: 20
  },
  navigationBarContainerStyle: {
    width: '100%',
    height: 50,
    backgroundColor: '#d3d3d3',
    flexDirection: 'row', // 'column' 
    justifyContent: 'space-between', // space-evenly, space-around 
    borderWidth: 2,
    alignItems: 'center',
    paddingRight: 20,
    paddingLeft: 20
  },
  menuIconStyle: {
    width: 30,
    height: 30
  }
}