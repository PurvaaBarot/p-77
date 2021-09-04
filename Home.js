import React , {Component} from 'react';
import {Text , View , StyleSheet , SafeAreaView , TouchableOpacity , Platform , StatusBar , ImageBackground , Image} from 'react-native';

export default class HomeScreen extends Component {
    render () {
        return(
            <View style={styles.container}>
             <SafeAreaView style={styles.androidsafearea}/>

             <ImageBackground source={require('../assets/starts.gif')} style={styles.backgroundimg}>
             <View style={styles.titlebar}>
             <Text style={styles.titletext}>
           Stellar App 
            </Text>
            </View>

            <TouchableOpacity style={styles.routecard} onPress = {()=>{this.props.navigation.navigate('SpaceCraft')}}>
                <Text style={styles.routetext}>SpaceCraft</Text>
                <Text style={styles.knowmore}> {'Know More -->'} </Text>
                <Text style={styles.bgdigit}>1</Text>
                <Image source={require('../assets/space_crafts.png')} style={styles.iconimg}/>
            </TouchableOpacity>

            <TouchableOpacity  style={styles.routecard} onPress = {()=>{this.props.navigation.navigate('StartMap')}}>
                <Text  style={styles.routetext}>StartMap</Text>
                <Text style={styles.knowmore}>  {'Know More -->'}  </Text>
                <Text style={styles.bgdigit}>2</Text>
                <Image source={require('../assets/star_map.png')} style={styles.iconimg}/>
            </TouchableOpacity>

            <TouchableOpacity  style={styles.routecard} onPress = {()=>{this.props.navigation.navigate('DailyPic')}}>
                <Text  style={styles.routetext}>DailyPic</Text>
                <Text style={styles.knowmore}>  {'Know More -->'}  </Text>
                <Text style={styles.bgdigit}>3</Text>
                <Image source={require('../assets/daily_picture.png')} style={styles.iconimg}/>
            </TouchableOpacity>

            </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    container :{
        flex : 1,
    },

    androidsafearea : {
        marginTop : Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    
    titlebar : {
        flex : 0.15,
        justifyContent : 'center',
        alignItems : 'center',
    },

    titletext : {
        fontSize : 40,
        fontWeight : 'bold',
        color : 'white'
    },

    routecard : {
        flex : 0.25,
        marginLeft : 50,
        marginRight : 50,
        marginTop : 50,
        borderRadius : 30,
        backgroundColor : 'white',
        borderWidth : 2
    },
    
    routetext : {
        fontSize : 30,
        fontWeight : 'bold',
        marginTop : 50,
        paddingLeft : 30,
    },

    backgroundimg : {
        flex : 1,
        resizeMode : 'cover',
    },

    iconimg : {
        position : 'absolute',
        width : 180,
        height : 180,
        resizeMode : 'contain',
        right : 20,
        top : -80 
    },

    knowmore : {
        paddingLeft : 30,
        color : 'red',
        fontSize : 15,
    },

    bgdigit : {
        position : 'absolute',
        color : 'rgba(183,183,183,0.5)',
        fontSize : 125,
        right : 20,
        bottom : -10,
        zIndex : -1
    }
})