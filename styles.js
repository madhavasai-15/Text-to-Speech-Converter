import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      backgroundColor: '#556ee6',
      width: '100%',
      height: 100,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 100,
    },  
    headerText: {
      color: 'white',
      fontSize: 24
    },
    inputContainer: {
      alignItems: 'center',
    },  
    inputText: {
      fontSize: 20,
      fontWeight: 600,
      marginBottom: 60,
    },  
    input: {
      borderWidth: 2,
      width: '30%',
      height: 40,
    },
    button: {
      backgroundColor: '#556ee6',
      width: 100,
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      alignSelf: 'center',
      margin: 40
    },
    buttonText: {
      color: 'white'
    }
});

export default styles;