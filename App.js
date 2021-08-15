import * as React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import * as Speech from 'expo-speech';
import styles from './styles';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      text: '',
    }
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}> Text to Speech Converter </Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputText}> Type your Words </Text>
          <TextInput
            style={styles.input}
            onChangeText={(data) => {
              this.setState({
                text: data
              })
            }}
            value={this.state.text}
            placeholder={'Type Words'}
          />
        </View>
        
        <TouchableOpacity 
          style={styles.button}
          onPress={() => {
            Speech.speak(this.state.text);
          }}
        >
            <Text style={styles.buttonText}> Speak </Text>
        </TouchableOpacity>
      </View>
    );
  }
}