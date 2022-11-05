import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './Components/Welcome';


export default function App() {
  return (
    <View style={styles.container}>
      <Welcome></Welcome>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#001E6C',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
