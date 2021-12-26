import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,ScrollView ,Image} from 'react-native';
import Alerte from '../components/Alerte';



export default function AlerteScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerpanel}>
        <View style={styles.header}>
              <Image  source={require('../assets/images/error.png')} style={styles.icon} /> 
              <Text style={styles.title}>Alertes</Text>
        </View>


        <View style={styles.panelServicesAndInf}>
          <Text style={styles.btnServices}>Services</Text>
          <Text style={styles.btnInfrastcture}>Infrastructure</Text>
        </View>

        <View style={styles.panelErreurAndWarning}>
          <View style={styles.panelErrur}>
                <Image  source={require('../assets/images/shield.png')} style={styles.iconErreur} /> 
                <Text style={styles.titleErreur}>15 Erreur</Text>
          </View>
          <View style={styles.panelWarning}>
                <Image  source={require('../assets/images/shield.png')} style={styles.iconWarning} /> 
                <Text style={styles.titleWarning}>27 Warning</Text>
          </View>
        </View>
      </View>


      <Alerte color={'red'}/>
      <Alerte color={'#faea07'}/>
      <Alerte color={'#faea07'}/>
      <Alerte color={'red'}/>


    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dbdbdb',
    marginTop:40
  },
  headerpanel:{
    width :'95%',
    margin :10, 
    justifyContent:'center',
    alignItems:'center'
  },
  header :{
    backgroundColor :'red',
    flexDirection :'row' ,
    width:'100%',
    alignItems :'center'
  },
  icon :{
      width:15 ,
      height :15 ,
      margin :10
  },
  title :{
      color :'#fff',
      margin:10,
      fontSize:18,
      width:'80%'
  },
  panelServicesAndInf :{
    flexDirection :'row' ,
    justifyContent:'center',
    alignItems:'center' , 
    height:80
  },
  btnServices :{
    color:'#fff',
    backgroundColor :'#fa0707' ,
    width:150 ,
    fontSize:18 ,
    textAlign:'center',
    height :40 ,
    paddingTop :8 ,
    overflow:'hidden',
    borderRadius :20 ,
    margin:5
  },
  btnInfrastcture :{
    color:'#fa0707',
    borderWidth:1.5,
    borderColor:'#fa0707',
    fontSize:18 ,
    textAlign:'center' ,
    width:150,
    height :40,
    paddingTop :8 ,
    overflow:'hidden',
    borderRadius :20 ,
    margin:5
  },
  panelErreurAndWarning :{
    flexDirection :'row' ,
    backgroundColor:'#fff',
    overflow:'hidden',
    borderRadius:10 ,
    width:'80%',
    justifyContent:'center'
  },
  panelErrur :{ 
    flexDirection :'row',
    alignItems:'center',
    justifyContent:'flex-start'
  },
  iconErreur :{
    width:15 ,
    height :15 ,
    margin :10
  },
  titleErreur :{
    color:'#fa0707',
    fontSize:18
  },
  panelWarning :{
    flexDirection :'row',
    alignItems:'center',
    justifyContent:'flex-start'
  },
  iconWarning :{
    width:15 ,
    height :15 ,
    margin :10
  },
  titleWarning :{
    color:'#faea07',
    fontSize:18
  },
});
