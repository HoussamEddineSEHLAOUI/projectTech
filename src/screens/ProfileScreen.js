import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image ,Dimensions , ScrollView } from 'react-native';
import {Display} from '../utils';
import {
    BarChart,
    LineChart
  } from 'react-native-chart-kit'


const  barData = {
    labels: ['15m', '30m', '45m', '50m'],
    datasets: [
      {
        data: [20, 45, 28, 80],
      },
    ],
  };

  const line = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        strokeWidth: 2, // optional
      },
    ],
  };

  const Chart =(props)=>{
      return(
        <BarChart
            data={barData}
            width={Dimensions.get('window').width-100} 
            height={300}
            yAxisLabel={'$'}
            chartConfig={{
                backgroundColor: '#e26a00',
                backgroundGradientFrom: props.from,
                backgroundGradientTo: props.to,
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                }
              }}
        />
      )
  }

const chartline =()=>{
    return(
        <View style={{
            margin :20
        }}>
            <Text style={{
              fontSize :20,
              marginLeft :10
            }}>
            Compte bancaire
            </Text>
            <LineChart
                data={line}
                width={Dimensions.get('window').width -30} 
                height={300}
                yAxisLabel={'$'}
                chartConfig={{
                backgroundColor: '#e26a00',
                backgroundGradientFrom: '#73352a',
                backgroundGradientTo: '#ffa726',
                decimalPlaces: 2, 
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                    borderRadius: 16
                }
                }}
                bezier
                style={{
                marginVertical: 8,
                borderRadius: 16
                }}
            />
            </View>
    );
}

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <View style={styles.panelImg}>
                 <Image  source={require('../assets/images/man.png')} style={styles.imgProfile} />
            </View>
            <View style={styles.panelInfo}> 
                <Text style={styles.nom}>Bonjour , Amine</Text>
                <Text style={styles.gmail}>amine.usa@gmail.com</Text>
            </View> 
        </View>
        

        <ScrollView horizontal={true} style={{
            
        }} >
            <View style={styles.panelScrol}>
                <Text style={styles.titleScrol}>CEH</Text>
                <Chart from={'#fb8c00'} to={'#ffa726'}/>
            </View>

            <View style={styles.panelScrol}>
                <Text style={styles.titleScrol}>BCP</Text>
                <Chart from={'#ff5447'} to={'#f72516'}/>
            </View>

            <View style={styles.panelScrol}>
                <Text style={styles.titleScrol}>BMCE</Text>
                <Chart from={'#91fa4b'} to={'#6af20f'}/>
            </View>

            <View style={styles.panelScrol}>
                <Text style={styles.titleScrol}>CA</Text>
                <Chart from={'#c245f7'} to={'#b612fc'}/>
            </View>
        </ScrollView>
        {chartline()}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop:50
  } ,
  header :{
      flexDirection :'row',
      margin:10
  },
  panelImg :{
      justifyContent :'center',
      alignItems:'center'
  },
  imgProfile :{
      width :50,
      height:50 ,
      borderRadius :50/2
  },
  panelInfo :{
    paddingLeft :10
  },
  nom :{
      color :'#000',
      fontSize :20 ,
      margin:10
  },
  gmail :{
    color :'#bfbfbf',
    marginTop:-10,
    fontSize :18 ,
    marginLeft:10
  },
  panelScrol :{
      width:Dimensions.get('window').width-100, 
      height:100,
      margin :10
  },
  titleScrol :{
      fontSize :18 ,
      margin:10,

  }
});
