import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View  ,Image ,ScrollView} from 'react-native';
import Apm from '../components/Apm';



export default function ApmScreen() {
  return (
    <ScrollView style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.title}>Applications Performance Monitoring</Text>
        </View>

      <View style={{
          flexDirection :'row' ,
          justifyContent:'center',
          alignItems :'center'

      }}>
        <Apm Title={'Nombre de requéte'} number={198025} unite={''} bgcolor={'#a16920'} icon={require('../assets/images/charge.png' )}/>
        <Apm Title={'Response error'} number={9.1} unite={'%'} bgcolor={'#a13e20'} icon={require('../assets/images/error.png' )}/>
      </View>

      <View style={{
          flexDirection :'row' ,
          justifyContent:'center',
          alignItems :'center'

      }}>
        <Apm Title={'AVG Response Time'} number={2.2} unite={'/s'} bgcolor={'#467ee8'} icon={require('../assets/images/history.png' )}/>
        <Apm Title={'Applications'} number={128} unite={''} bgcolor={'#46b5e8'} icon={require('../assets/images/application.png' )}/>
      </View>


      <View style={{
          flexDirection :'row' ,
          justifyContent:'center',
          alignItems :'center'
      }}
      >
        <Apm Title={'Databases'} number={18} unite={''} bgcolor={'#20a16f'} icon={require('../assets/images/database.png' )}/>
        <Apm Title={'Services'} number={293} unite={''} bgcolor={'#20a135'} icon={require('../assets/images/service.png' )}/>
      </View>

      <View style={{
          flexDirection :'row' ,
          justifyContent:'center',
          alignItems :'center'
      }}>
        <Apm Title={'Images'} number={23} unite={''} bgcolor={'#8ea120'} icon={require('../assets/images/image.png' )}/>
        <Apm Title={'Containers'} number={11} unite={''} bgcolor={'#a18b20'} icon={require('../assets/images/docker.png' )}/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop :40
  },
  header :{
      flexDirection :'row' ,
      margin:20 ,
      alignItems :'center'
  },
  title :{
      color :'#8a8a8a' ,
      fontSize :18 ,
      marginLeft :12

  },

});
