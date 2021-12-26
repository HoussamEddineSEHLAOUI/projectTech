
import React, { useRef, useEffect } from 'react';
import { StyleSheet, Text, View ,Image ,Dimensions ,Animated } from 'react-native';
import {Display} from '../utils';


export default function Apm(props) {
  const logoo = props.icon;
  const fadeAnim = useRef(new Animated.Value(0)).current  

  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true
      }
    ).start();
  }, [fadeAnim])


  return (
    <Animated.View style={{
      height:220,
      width:Dimensions.get('window').width/2 -30 ,
      justifyContent: 'center', 
      alignItems:'center' , 
      margin :12 ,
      backgroundColor:props.bgcolor ,
      borderRadius :7,
      opacity: fadeAnim

    }}>
      <View style={styles.header}>
         <Image  source={logoo} style={styles.image} />  
      </View>
      <View style={styles.contenu}>
          <Text style={styles.title}>{props.Title}</Text>
          <View style={styles.panelStat}>
            <Text style={styles.number}>{props.number}</Text>
            <Text style={styles.unite}>  {props.unite}</Text>
          </View>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  
  header:{
      overflow:'hidden',
      width:Display.setWidth(10) ,
      justifyContent:'center' ,
      alignItems:'center' ,
      position:'absolute',
      right :0,
      bottom :0
  },
  image:{
    height:30,
    width:30 ,
    margin :20 ,
    marginRight :30
  },
  contenu :{
    alignItems: 'center',
    justifyContent: 'center', 
    overflow:'hidden',
    borderRadius :18 ,
    height:100,
    width:Dimensions.get('window').width/2 ,
  },
  title :{
    color:'#fff' ,
    textAlign:'center',
    margin :10 ,
    fontSize :20,
    width :150
  },
  panelStat:{
      flexDirection:'row' ,
      margin :10
  },
  number :{
      color :'#fff',
      textAlign:'center',
      fontSize :22
  },
  unite :{
    color :'#fff',
    textAlign:'center',
    fontSize :22
  },
});
