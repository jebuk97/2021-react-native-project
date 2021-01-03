import * as React from 'react';
import { Dimensions, Button, Text, View, StyleSheet, Image, TouchableOpacity, TextBase, TextInput, ScrollView } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.005)',
      alignItems: 'center',
      marginBottom: 10
    },
    scoreContainer: {
      backgroundColor: 'white',
      flexDirection: 'row',
      paddingBottom: 10,
      width: '100%',
      paddingTop: 15
    },
    score: {
      fontSize: 30,
      margin: 30
    },
    detailsContainer:{
      maxWidth: 1200,
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: 'rgba(0, 0, 0, 0.12)',
      width: '95%',
      padding: 10,
      borderRadius: 10, 
      marginTop: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    homeList: {
      width: '100%',
      textAlign: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      paddingRight: 10,
      paddingTop:10,
      paddingBottom:10,
    }, 
    small: {
      fontSize:13
    },
    listHeader: {
      width:'100%',
      paddingBottom:10,
      borderBottomWidth: 1,
      borderColor: 'rgba(0, 0, 0, 0.12)',
    },
    infoContainer:{
      flexDirection: 'row',
      padding: 5,
    },
    input: {
      width: '90%',
      padding: 10,
      marginRight: 5,
      marginLeft: 0,
      borderWidth: 1,
      borderColor: 'rgba(0, 0, 0, 0.12)',
      borderRadius:5,
    },
    chatContainer: {
      backgroundColor: 'rgba(0, 0, 0, 0.12)',
      borderRadius: 5,
      padding:10,
      marginRight:'auto',
      marginTop:10,
    },
    myChatContainer:{
      backgroundColor: 'rgba(20, 126, 251, 1)',
      borderRadius: 5,
      padding:10,
      marginLeft:'auto',
      marginTop:10,
    },
    subText:{
      color: 'rgba(0, 0, 0, 0.8)',
      marginTop:8
    },
    subTextWhite:{
      color: 'rgba(255, 255, 255, 0.8)',
      marginTop:8
    },
    submitButton:{
      width:'10%',
      backgroundColor: 'black',
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(20, 126, 251, 1)',
    },
    submitButtonText:{
      alignItems: 'stretch',
      color: 'white'
    },
  });