/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView,StyleSheet,Text,useColorScheme} from 'react-native';

import {
  Colors,
  
} from 'react-native/Libraries/NewAppScreen';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={styles.root}>
      <Text> Ngamia Mobile App</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex:1,
  }

});

export default App;
