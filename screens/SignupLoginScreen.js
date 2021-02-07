import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity,TextInput, Alert } from 'react-native';

import db from '../config';
import firebase from 'firebase';


export default class SignupLoginScreen extends Component{
    constructor(){
        super()
        this.state = {
            emailId: '',
            password: '',
        }
    }



    userLogin = (emailId, password) => {
        firebase.auth.signInWithEmailAndPassword(emailId, password)
        .then(() => {
            return Alert.alert("Login Successfully")
        })
        .catch(function(error){
            var errorCode = error.code;
            var errorMessage = error.message;
            return Alert.alert(errorMessage)
        })
    }

    userSignUp = (emailId, password) =>{
        firebase.auth().createUserWithEmailAndPassword(emailId, password)
        .then((response)=>{
          return Alert.alert("User Added Successfully")
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          return Alert.alert(errorMessage)
        });
      }

    render(){
        return(
            <View>
                <TextInput
                style={styles.LoginBox}
                placeholder="abc@example.com"
                keyboardType='email-address'
                onChangeText={(text) => {
                    this.setState({
                        emailId: text
                    })
                }}
                />
                <TextInput
                style={styles.LoginBox}
                secureTextEntry={true}
                placeholder="Password"
                onChangeText={(text) => {
                    this.setState({
                        password: text
                    })
                }}
                />

                <TouchableOpacity style={styles.button}
                onPress={() => {this.userLogin(this.state.emailId, this.state.password)}}>
                    <Text>
                        Login
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.button}
                onPress={() => {this.userSignUp(this.state.emailId, this.state.password)}}>
                    <Text>
                        Sign Up
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    LoginBox: {
        width: 300,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 2,
        margin: 10,
        fontSize: 20,
        paddingLeft: 40
    },
    button: {
        width: 150,
        height: 50,
        borderRadius: 4,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 120,
        paddingLeft: 20,
    },
})