import * as React from 'react';
import { ScrollView, View , Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import DrawerContentt from './DrawerContentt';




import SplashScreen from '../screens/SplashScreen';
import AlerteScreen from '../screens/AlerteScreen';
import StaticScreen from '../screens/StaticScreen';
import ApmScreen from '../screens/ApmScreen';
import ApplicationScreen from '../screens/ApplicationScreen';
import PartenairesScreen from '../screens/PartenairesScreen';
import ProfileScreen from '../screens/ProfileScreen';









  function AlertPage({ navigation , route }) {
    return (
        <AlerteScreen/>
    );
  }


  function StaticPage({ navigation , route }) {
    return (
        <StaticScreen/>
    );
  }

  function ApmPage({ navigation , route }) {
    return (
        <ApmScreen/>
    );
  }

  function ApplicationPage({ navigation , route }) {
    return (
        <ApplicationScreen/>
    );
  }

  function PartenairPage({ navigation , route }) {
    return (
        <PartenairesScreen/>
    );
  }

  function ProfilPage({ navigation , route }) {
    return (
        <ProfileScreen/>
    );
  }

  
  function HomePage({ navigation , route }) {
    return (
        <Text>home</Text>
    );
  }

  function SplashPage({ navigation , route }) {
    return (
        <SplashScreen navigation={navigation}/>
    );
  }
 
  const Drawer = createDrawerNavigator();
  
  export default function Navigation() {
    return (
      <NavigationContainer>
        <Drawer.Navigator drawerContent={props=><DrawerContentt {... props} initialRouteName='home'/>}>


        <Drawer.Screen name="SplashPage" component={SplashPage}
          options={{
            title: 'SplashPage',
            headerShown :false
          }} 
          />

          
        <Drawer.Screen name="home" component={HomePage}
          options={{
            title: 'Home',
            headerStyle: {
              backgroundColor: '#001366',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              color:'#fff'
            },
          }} 
          />
  
        

        <Drawer.Screen name="AlertPage" component={AlertPage}
             options={{
                title: 'Alerts',
                headerStyle: {
                  backgroundColor: '#001366',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  color:'#fff'
                },
              }}  
          />

        <Drawer.Screen name="ApmPage" component={ApmPage}
             options={{
              
                headerTintColor: '#001366',
                headerTitleStyle: {
                  color:'#fff'
                },
              }}  
          />
         <Drawer.Screen name="ApplicationPage" component={ApplicationPage}
             options={{
                title: 'Applications',
                headerStyle: {
                  backgroundColor: '#001366',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  color:'#fff'
                },
              }}  
          />
         <Drawer.Screen name="PartenairPage" component={PartenairPage}
             options={{
                title: 'part',
                headerStyle: {
                  backgroundColor: '#001366',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  color:'#fff'
                },
              }}  
          />
        
        <Drawer.Screen name="ProfilePage" component={ProfilPage}
             options={{
                title: 'Profile',
                headerStyle: {
                  backgroundColor: '#001366',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  color:'#fff'
                },
              }}  
          />
        <Drawer.Screen name="StaticPage" component={StaticPage}
             options={{
                title: 'statistique',
                headerStyle: {
                  backgroundColor: '#001366',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  color:'#fff'
                },
              }}  
          />
  
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
  
  