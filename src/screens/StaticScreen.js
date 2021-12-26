import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Dimensions, ScrollView} from 'react-native';
import {
    LineChart
  } from 'react-native-chart-kit'






export default function StaticScreen() {
    const linedataAVG = {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
            strokeWidth: 2,
          },
        ],
      };
    const linedatalinedata = {
        labels: ['01h', '03h', '04h', '05h', '06h', '07h'],
        datasets: [
          {
            data: [40, 45, 28, 10, 9, 43],
            strokeWidth: 2,
          },
        ],
      };
  
  return (
    <View style={styles.container}>
        <Text style={{
          fontSize :25,
          marginLeft :20
        }}>statistique</Text>
        <View>
            <Text style={styles.titleAVG}>AVG Response Time</Text>
            <LineChart
              data={linedataAVG}
              width={Dimensions.get('window').width-100} 
              height={220}
              chartConfig={{
                backgroundColor: '#e26a00',
                backgroundGradientFrom: '#fb8c00',
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

        <View>
            <Text style={styles.titleAVG}>Total Request</Text>
            <LineChart
              data={linedatalinedata}
              width={Dimensions.get('window').width-100} 
              height={220}
              chartConfig={{
                backgroundColor: '#24d4bc',
                backgroundGradientFrom: '#24d4bc',
                backgroundGradientTo: '#24d4bc',
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
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1 ,
    justifyContent:'center',
    alignItems:'center',
  },
  titleAVG :{
    borderColor :'red',
    borderLeftWidth :4 ,
    height :40 ,
    fontSize :18,
    paddingLeft :10 ,
    overflow:'hidden' ,
    color :'#c7c7c7'
  }
});
