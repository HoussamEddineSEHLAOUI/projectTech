import 'react-native-gesture-handler' ;
import * as React from 'react';


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,FlatList } from 'react-native';
import Alerte from './src/components/Alerte';
import Application from './src/components/Application';
import Navigation from './src/navigators';











import AlerteScreen from './src/screens/AlerteScreen';
import ApmScreen from './src/screens/ApmScreen';
import ApplicationScreen from './src/screens/ApplicationScreen';
import PartenairesScreen from './src/screens/PartenairesScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SplashScreen from './src/screens/SplashScreen';
import StaticScreen from './src/screens/StaticScreen';













export default function App() {
  
  return (
    <View style={styles.container}>
      <Navigation/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1 ,
    backgroundColor: '#fff',
  },
});
