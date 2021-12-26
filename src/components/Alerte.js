import React from 'react';
import { StyleSheet, Text, View ,Image } from 'react-native';
import {Display} from '../utils';

export default function Alerte(props) {
  return (
    <View style={styles.container}>
      <View style={{
          width :'20%',
          justifyContent:'center',
          alignItems: 'center',
          backgroundColor :props.color
      }}>
         <Image  source={require('../assets/images/error.png')} style={styles.alerti} />  
      </View>
      <View style={styles.contenu}>
          <View style={styles.panelDuree}>
             <Image  source={require('../assets/images/history.png')} style={styles.clock} /> 
             <Text style={styles.duree}>15h07min ,duree : 3h21min</Text>
          </View>

          <View style={styles.panelSql}>
             <Image  source={require('../assets/images/database.png')} style={styles.server} /> 
             <Text style={styles.serverSql}>SQL Server</Text>
          </View>

          <Text style={styles.rates}>Error rates in the SQL Server have increased by 30%</Text>
          <Text style={styles.raison}>Raison : disk memory {'<32GB'}</Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection :'row',
    overflow:'hidden',
    borderRadius :15 ,
    margin:10
  },
  alerti :{
      width:25,
      height:25 ,
  },
  contenu :{ 
    width :'80%' ,
    backgroundColor :'#fff' ,
    overflow:'hidden',
    borderRadius :15 ,
    marginLeft :-10 ,
    paddingLeft :20
  },
  panelDuree:{
    flexDirection :'row' ,
    alignItems:'center',
    justifyContent:'flex-start'
  },
  clock :{
    width:25,
    height:25 ,
    margin :10
  },
  duree :{
      color :'#bfbfbf',
      fontSize:17
  },
  panelSql:{
    flexDirection :'row' ,
    alignItems:'center',
    justifyContent:'flex-start'
  },
  server :{
    width:25,
    height:25 ,
    margin :5
  },
  serverSql :{
    color :'#000',
    fontSize:25
  },
  rates :{
    color :'#bfbfbf',
    fontSize:17
  },
  raison :{
    color :'#bfbfbf',
    fontSize:17 ,
    marginBottom :10
  },
});
