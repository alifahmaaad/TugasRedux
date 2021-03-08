import React from 'react';
import { View, StyleSheet } from 'react-native'
import List from './List';
import { Provider } from 'react-redux';
import configureStore from './redux/Store';


const store = configureStore();
const App = () =>(
  
  <Provider store={store}>
    <View style={styles.container}>
      <List/>
    </View>
  </Provider>
  )
  export default App

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });