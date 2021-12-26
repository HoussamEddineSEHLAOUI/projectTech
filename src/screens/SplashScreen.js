import React, { Component } from 'react';
import { Image  ,View ,StyleSheet ,Text} from 'react-native';

 
class SplashScreen extends Component{
    componentDidMount(){
        setTimeout(() => {
          this.props.navigation.navigate('ProfilePage');
        }, 2500);
      }
    render(){
        return (
            <View style={styles.container}>
                <Image 
                    source={require('../assets/images/bank.gif')}  
                    style={styles.logo}
                />
                <Text style={styles.logoText}>Buniontech</Text>
           </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'center',
      alignItems:'center' ,
      backgroundColor :'#fff'
    },
    logo:{
        width :200,
        height :200,
    },
    logoText :{
        color:'#f68e34',
        fontSize :20,
        marginTop :-20
    }
  });

export default SplashScreen ;