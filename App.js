import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppLogo from './Components/AppLogo';


export default function App() {
  return (
    <View style={styles.container}>
      <AppLogo></AppLogo>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001E6C',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
