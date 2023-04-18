import React, { Component } from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Alert } from 'react-native';
import HomeScreen from './screens/homescreen.js';
import ProfileScreen from './screens/profilescreen.js';
import CalenderScreen from './screens/calenderscreen.js';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createMaterialBottomTabNavigator();

export default class App extends React.Component{

  authenticated = false;

  signupPressed = ()=>{
    Alert.alert("Completed Sign Up")
  }

  loginPressed = ()=> {
    Alert.alert("Completed Login!")
    this.authenticated = true;
    this.forceUpdate();
  }

  isAuthenticated = ()=> {
    return this.authenticated;
  }



  render(){
  if(this.isAuthenticated()){
    return (
      <NavigationContainer>
      <Tab.Navigator labeled={false} barStyle={{ backgroundColor: 'gold' }} 
  activeColor="red" >
        <Tab.Screen name="Home" component={HomeScreen}            //Home Screen
        options={{
          tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={26}/>
          ),
      }}/>
        <Tab.Screen name="Calender" component={CalenderScreen} 
   // Notification Screen
        options={{
          tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="heart" color={color} size={26}/>
          ),
      }}/>
        <Tab.Screen name="Profile" component={ProfileScreen}   // Profile Screen
        options={{
          tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account-circle" color={color} 
  size={26}/>
          ),
      }}/>
      </Tab.Navigator>
      </NavigationContainer>
    );
  }else{
    return (
      <ImageBackground
        source={require('./assets/background.jpg')}
        style={styles.background}
      >
        <View>
          <Image
            source={require('./assets/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          >
          </Image>
          <Text style={styles.text}>Travel with people. Make new friends.</Text>
          <TouchableOpacity 
            onPress={this.signupPressed}
          >
            <Text style={styles.signup}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.loginPressed}
          >
            <Text style={styles.login}>Log In</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

};



const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%'
  },
  logo:{
    width: 280,
    height: 280,
    marginLeft: '15%',
    marginTop: '10%'
  },
  text: {
    color: 'white',
    marginTop: '-25%',
    marginLeft: '20%'
  },
  signup: {
    backgroundColor: 'white',
    color: '#3A59FF',
    width: "75%",
    borderRadius: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: '11%',
    padding: "2%",
    fontSize:  27,
    marginTop: '70%'
  },
  login: {
    backgroundColor: '#3A59FF',
    color: 'white',
    width: "75%",
    borderRadius: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: '11%',
    padding: "2%",
    fontSize:  27,
    marginTop: '10%'
  }
});