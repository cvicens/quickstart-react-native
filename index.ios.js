/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Image
} from 'react-native';

var RCTFH = require('rct-fh');

export default class HelloWorldRN extends Component {
   constructor(props) {
    console.log('constructor()');
    super(props);

    this.state = {
      message: 'Waiting...',
      userInput: '',
      init: false
    };
  }

  componentDidMount () {
    // After the component mounts we refresh to request data
    this.init();
  }


  sayHello = async () => {
    console.log('sayHello');
    try {
      const result = await RCTFH.cloud({
        "path": "/hello", //only the path part of the url, the host will be added automatically
        "method": "GET", //all other HTTP methods are supported as well. For example, HEAD, DELETE, OPTIONS
        "contentType": "application/json",
        "data": { "hello": this.state.userInput}, //data to send to the server
        "timeout": 25000 // timeout value specified in milliseconds. Default: 60000 (60s)
      });

      console.log('sayHello result', result);
      if (result && result.msg)
        this.setState({message: result.msg});
      else
        this.setState({message: JSON.stringify(result)});
    } catch (e) {
      this.setState({message: 'Error' + e});
    }
  }

  init = async () => {
      try {
        this.setState({message: 'Initializing...'});
        const result = await RCTFH.init();
        console.log('init result', result);
        this.setState({message: 'Ready'});

        if (result === 'SUCCESS') {
          console.log('SUCCESS');
          this.setState({init: true});
        } else {
          console.error('Error');
        }
      } catch (e) {
        console.error('Exception', e);
      }  
  }

  updateUserInput = async (userInput) => {
    this.setState({userInput: userInput});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>
          Feed Henry - React Native Template
        </Text>
        <TextInput key='2' style={styles.input} autoCapitalize = 'none'
          onSubmitEditing={(event) => this.updateUserInput(event.nativeEvent.text)}
          onEndEditing={(event) => this.updateUserInput(event.nativeEvent.text)}
          placeholder='Enter Your Name Here'
          placeholderTextColor='grey'
        />
        
        <Button style={styles.button}
        disabled={!this.state.init}
        onPress={this.sayHello}
        title="Say Hello From The Cloud"
        accessibilityLabel="Say Hello From The Cloud"
        />
        
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'flex-start'}}>
        <Text style={styles.message}>
        {this.state.message}
        </Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container_1: {
    paddingTop: 23,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  container: {
    paddingTop: 23,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
      margin: 30,
      height: 36,
      padding: 4,
      fontSize: 18,
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 8,
      color: 'black'
   },
  h1: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  message: {
    flex: 1,
    height: 150,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'grey',
    borderWidth: 1,
    borderColor: 'grey',
  },
});

AppRegistry.registerComponent('HelloWorldRN', () => HelloWorldRN);
