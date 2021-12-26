
import React  , {Component} from 'react';
import { StyleSheet, Text, View ,ImageBackground, Image, Alert } from 'react-native';
import { DrawerContentScrollView ,DrawerItem } from '@react-navigation/drawer';


 class DrawerContentt extends  Component {
    constructor(props){
       super(props)
    }
    
    render(){
        return (
           <View style={{flex:1}}>
              <DrawerContentScrollView {...this.props}>
                   <Image  
                      source={require("../assets/images/bank.gif")}
                     style={styles.ImgaeCat}
                     />
                 <View>
                    <Text style={styles.drawnavBonjour}>BunionTech</Text>
                 </View>
                 <View style={styles.drawnavpanel} onStartShouldSetResponder={() => this.props.navigation.navigate('ProfilePage')}>
                     <Image source={require("../assets/images/home.png")} style={styles.drawnavpanelicon}/>
                     <Text style={styles.drawnavpanellabel}>Home</Text>
                 </View>

                 <View>
                    <Text style={styles.drawnavBonjour}>Technical View</Text>
                 </View>


                 <View style={styles.drawnavpanel} onStartShouldSetResponder={() => this.props.navigation.navigate('ApmPage')}>
                     <Image source={require("../assets/images/google-docs.png")} style={styles.drawnavpanelicon}/>
                     <Text style={styles.drawnavpanellabel}>APM</Text>
                 </View>
                 <View style={styles.drawnavpanel} onStartShouldSetResponder={() => this.props.navigation.navigate('ApplicationPage')}>
                     <Image source={require("../assets/images/categories.png")} style={styles.drawnavpanelicon}/>
                     <Text style={styles.drawnavpanellabel}>Applications</Text>
                 </View>
                 <View style={styles.drawnavpanel} onStartShouldSetResponder={() => this.props.navigation.navigate('ApmPage')}>
                     <Image source={require("../assets/images/servers.png")} style={styles.drawnavpanelicon}/>
                     <Text style={styles.drawnavpanellabel}>Infrstructure</Text>
                 </View>
                 <View style={styles.drawnavpanel} onStartShouldSetResponder={() => this.props.navigation.navigate('AlertPage')}>
                     <Image source={require("../assets/images/alert.png")} style={styles.drawnavpanelicon}/>
                     <Text style={styles.drawnavpanellabel}>Alerts</Text>
                 </View>

                 <View>
                    <Text style={styles.drawnavBonjour}>Business view</Text>
                 </View>

                 <View style={styles.drawnavpanel} onStartShouldSetResponder={() => this.props.navigation.navigate('StaticPage')}>
                     <Image source={require("../assets/images/shopping-cart.png")} style={styles.drawnavpanelicon}/>
                     <Text style={styles.drawnavpanellabel}>ERP / Vente</Text>
                 </View>
                 <View style={styles.drawnavpanel} onStartShouldSetResponder={() => this.props.navigation.navigate('ApmPage')}>
                     <Image source={require("../assets/images/computer.png")} style={styles.drawnavpanelicon}/>
                     <Text style={styles.drawnavpanellabel}>CIH online / Mobile</Text>
                 </View>
                 <View style={styles.drawnavpanel} onStartShouldSetResponder={() => this.props.navigation.navigate('PartenairPage')}>
                     <Image source={require("../assets/images/handshake.png")} style={styles.drawnavpanelicon}/>
                     <Text style={styles.drawnavpanellabel}>Partenaires</Text>
                 </View>
                 <View style={styles.drawnavpanel} onStartShouldSetResponder={() => this.props.navigation.navigate('ApmPage')}>
                     <Image source={require("../assets/images/credit-card.png")} style={styles.drawnavpanelicon}/>
                     <Text style={styles.drawnavpanellabel}>Monétique</Text>
                 </View>
              </DrawerContentScrollView>
           </View>
          );
     }
}


const styles = StyleSheet.create({
   ImgaeCat :{
      width:100,
      height:100,
      marginLeft :80
   },
   drawnavBonjour:{
      padding:10,
      fontSize:22 ,
      color:'#f68e34'
   },
   drawnavpanel:{
      backgroundColor :'#fff',
      height :50 ,
      flexDirection :'row',
      alignItems :'center'
   },
   drawnavpanelicon:{
      height :25 ,
      width :25,
      margin :1 ,
      marginLeft :9
   },
   drawnavpanellabel :{
      fontSize:17,
      color :'#001366',
      marginLeft:7 ,
      width :230,
      height :40,
      paddingTop :10
   }
   
});

export default DrawerContentt ;

{/* 

              
*/}