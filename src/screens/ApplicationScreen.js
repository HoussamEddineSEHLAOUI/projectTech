import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,FlatList ,Image} from 'react-native';
import Application from '../components/Application';
import {Display} from '../utils';






export default function ApplicationScreen() {
  const Data =[
    {
      title :'active directory 2003-2008 Ser vices and counters',
      etat:true,
      number:40
    },
    {
      title :'CIH Mobile / Web Appllication',
      etat:true,
      number:130
    },
    {
      title :'Ressources Humaines Adminstrationand Gestion System',
      etat:true,
      number:35
    },
    {
      title :'active directory 2003-2008 Ser vices and counters',
      etat:false,
      number:90
    } ,
    {
        title :'CIH Mobile / Web Appllication',
        etat:true,
        number:130
      },
      {
        title :'Ressources Humaines Adminstrationand Gestion System',
        etat:true,
        number:35
      }
  ]
  return (
    <View style={styles.container}>
        {/* header */}

        <View style={styles.header}>
            <Image  source={require('../assets/images/shield.png')} style={styles.icon} /> 
            <Text style={styles.title}>Applications </Text>
        </View>

        {/* menu*/}
        <View style={styles.menu}>
            <View style={styles.panelApp}>
                <Text style={styles.titlenbApp}>NOMBRE D'ALICATIONS </Text>
                <Text style={styles.nbApp}>103</Text>
            </View>

            <View style={styles.panelDetailHeader}>
                {/* up and down */}
                <View style={styles.panelUpandDown}>
                    <View style={styles.panelUp}>
                        <Text style={styles.nbUp}>90</Text>
                        <Text style={styles.up}>Up</Text>
                        <View style={styles.colorUp}/>
                    </View>
                    <View style={styles.panelDown}>
                        <View style={styles.colorDonw} />
                        <Text style={styles.Down}>Downd</Text>
                        <Text style={styles.nbDown}>5</Text>
                    </View>
                </View>

                {/* Critical and warning */}
                <View style={styles.panelWarininganCritical}>
                    <View style={styles.panelCritical}>
                        <Text style={styles.numberCritical}>5</Text>
                        <Text style={styles.titleCritical}>Critical</Text>
                        <Image  source={require('../assets/images/shield.png')} style={styles.iconCritical} /> 
                    </View>

                    <View style={styles.panelWarining}>
                        <Image  source={require('../assets/images/shield.png')} style={styles.iconWarning} /> 
                        <Text style={styles.titleWarning}>Warning</Text>
                        <Text style={styles.numberWarning}>3</Text>
                    </View>

                </View>
            </View>
        </View>

      <FlatList
        data={Data}
        style={styles.flatList}
        ListHeaderComponent={()=>
            <View style={styles.tablHeader}>
                <Text style={styles.titletab}>Application</Text>
                <Text style={styles.status}>Status</Text>
                <Text style={styles.number}>Nbr</Text>      
            </View>
        }
        renderItem={ ({ item }) => (
          <Application 
              title={item.title}
              etat={item.etat}
              number={item.number}
              />
        )
      }
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dbdbdb',
    marginTop:80 ,
    alignItems:'center'
  },
  header :{
    backgroundColor :'red',
    flexDirection :'row' ,
    width:480,
    margin:20 ,
    alignItems :'center'
    },
    icon :{
        width:15 ,
        height :15 ,
        margin :10
    },
    title :{
        color :'#fff',
        width:'95%'
    },

    menu :{
        width:300,
        backgroundColor:'#fff',
        overflow:'hidden' ,
        borderRadius :10
    },
    panelApp   :{
        flexDirection :'row',
        justifyContent:'center',
        alignItems: 'center',
        margin:15
    },
    titlenbApp  :{
        color:'#000',
        fontSize:16
    },
    nbApp  :{
        color:'red',
        fontSize: 20
    },
    panelDetailHeader  :{
        justifyContent:'center',
        alignItems:'center',
        margin :10
    },
    panelUpandDown  :{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'

    },
    panelUp  :{
        width:'50%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    nbUp  :{
        color:'green',
        margin:8,
        fontSize :18
    },
    up  :{
        color:'#000',
        fontSize:18
    },
    colorUp  :{
        width :18,
        height:18,
        margin:10,
        overflow:'hidden',
        borderRadius:18/2,
        backgroundColor:'green'
    },
    panelDown  :{
        width:'50%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    colorDonw  :{
        width :18,
        height:18,
        margin:12,
        overflow:'hidden',
        borderRadius:18/2,
        backgroundColor:'red'
    },
    Down  :{
        color:'#000',
        fontSize:18
    },
    nbDown  :{
        color:'red',
        margin:8,
        fontSize :18
    },
    panelWarininganCritical  :{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    panelCritical  :{
        width:'50%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    numberCritical  :{
        color:'red',
        margin:8,
        fontSize :18
    },
    titleCritical  :{
        color:'#000',
        fontSize:18
    },
    iconCritical  :{
        width:20 ,
        height :20 ,
        margin:10
    },
    panelWarining  :{
        width:'50%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    iconWarning  :{
        width:20 ,
        height :20 ,
        margin :10
    },
    titleWarning  :{
        color:'#000',
        fontSize:18
    },
    numberWarning  :{
        color:'#faea07',
        margin:8,
        fontSize :18
    },


































  flatList:{
      width:'98%',
      margin:10
  },
  tablHeader: {
    height:Display.setHeight(10),
    width :'92%',
    height:50,
    flexDirection:'row',
    alignItems:'center' , 
    backgroundColor:'#fff',
    overflow:'hidden',
    borderRadius:15 ,
    padding :15 ,
    margin:10,
    backgroundColor :'red'
      

  },
  titletab:{
      color:'#fff',
      width :'75%'
  },
  number :{
      width:'20%',
      textAlign:'center',
      color:'#fff',

  },
  status:{
    width:'15%',
    textAlign:'center',
    color:'#fff',
  } ,



});
