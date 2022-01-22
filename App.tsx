import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import DataProvider  from './contexts/dataProvider';
import Example from './components/example'

export default function App() {
  return (
    <DataProvider>
      <View style={styles.container}>
        <Example/>
        <StatusBar style="auto" />
      </View>
    </DataProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
