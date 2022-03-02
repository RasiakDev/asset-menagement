import { ImageBackground, StyleSheet } from 'react-native';
import Main from './src/screens/Main';

export default function App() {

  return (

    <ImageBackground
      source={require("./src/assets/images/background.png")}
      style={styles.container}
      resizeMode="stretch"

    >
      <Main />
    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});
