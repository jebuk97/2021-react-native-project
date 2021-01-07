import * as React from 'react';
import { Dimensions, Button, Text, View, StyleSheet, Image, TouchableOpacity, TextBase, TextInput, ScrollView } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Axios from 'axios';
import DetailsMaterialScreen from './Details.js'
import Fotmob from './fotmob.js';

const HomeStack = createStackNavigator();
const HomeTopTab = createMaterialTopTabNavigator();

class HomeStackScreen extends React.Component {
    render() {
        return (
            <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeMaterialScreen} />
            <HomeStack.Screen name="Details" component={DetailsMaterialScreen}/>
            </HomeStack.Navigator>
        );
    }
} 

class HomeMaterialScreen extends React.Component {
    calculateDate(fromToday){
      var date = new Date();
      date.setDate(date.getDate()+fromToday);
      var month = new String(date.getMonth()+1); 
      var day = new String(date.getDate());
      if(month.length == 1){ 
        month = "0" + month; 
      } 
      if(day.length == 1){ 
        day = "0" + day; 
      }
      return month+'.'+day;
    }
    render(){
      
        return (
            <HomeTopTab.Navigator
            initialRouteName="오늘"
            swipeEnabled="true"
            tabBarOptions={{
              style: {
                  
              },
            }}
          screenOptions={{gestureEnabled: true}}
            >
            <HomeTopTab.Screen name={this.calculateDate(-2)} component={HomeScreen}  initialParams={{fromToday: -2}}/>
            <HomeTopTab.Screen name="어제" component={HomeScreen}  initialParams={{fromToday: -1}}/>
            <HomeTopTab.Screen name="오늘" component={HomeScreen}  initialParams={{fromToday: 0}}/>
            <HomeTopTab.Screen name="내일" component={HomeScreen}  initialParams={{fromToday: 1}}/>
            <HomeTopTab.Screen name={this.calculateDate(+2)} component={HomeScreen}  initialParams={{fromToday: 2}}/>
            </HomeTopTab.Navigator>
        );
    }
}

class HomeScreen extends React.Component {
  state = {
    isLoading: true,
    leagues: [],
    temp: [],
  };

  getMatches = async () => {
    const { route } = this.props;
    const { fromToday } = route.params; 
    var date = new Date();
    date.setDate(date.getDate()+fromToday); 
    var year = date.getFullYear(); 
    var month = new String(date.getMonth()+1); 
    var day = new String(date.getDate()); 

    // 한자리수일 경우 0을 채워준다. 
    if(month.length == 1){ 
      month = "0" + month; 
    } 
    if(day.length == 1){ 
      day = "0" + day; 
    }
    date=year+month+day;
    const fotmob = new Fotmob();
    var arr = await fotmob.getMatchesByDate(date);
    this.setState({leagues : arr});
  };

  componentDidMount(){
    this.getMatches();
    //console.log(this.state.matches);
  }

 currentState(status){
    if(status.ongoing==true){
      return status.liveTime.short;
    } else if (status.finished==true || status.cancelled==true){
      return status.reason.short;
    } else {
      return '';
    }
  }

  loadTeamImage(teamId){
    return 'https://www.fotmob.com/images/team/'+teamId+'_small';
  }

  render() {
    const leagues = this.state.leagues;
    return (
      <ScrollView>
      <View style={styles.container}>
        {this.state.temp.map(match => (
          <Text>{match.id}</Text>
        ))}
        
        
        {leagues.map(league=>(
          <View style={styles.detailsContainer}>
          <View style={styles.listHeader}><Text style={{textAlign:'left'}}>{league.ccode} - {league.name}</Text></View>
            {league.matches.map(match=>
            (
              <TouchableOpacity style={styles.homeList} onPress={() => {
                /* 1. Navigate to the Details route with params */
                this.props.navigation.navigate('Details', {
                  itemId: match.id,
                  otherParam: 'Home -> Details',
                });
              }}>
                <View style={{flexDirection:'row', alignItems:'center', width: '17%'}}>
                   <Text>{this.currentState(match.status)}</Text>
                </View>
                <View style={{flexDirection:'row', alignItems:'center', width:'30%'}}>
                  <Text  style={{textAlign: 'right', marginLeft:'auto'}}>{match.home.name}</Text>
                  <Image source={{uri: this.loadTeamImage(match.home.id)}} style={{width:35, height:35, margin:5}}/>
                </View>
                <View>
                  <Text style={{marginLeft:10, marginRight:10}}>{match.home.score} - {match.away.score}</Text>
                </View>
                <View style={{flexDirection:'row', alignItems:'center', width:'30%'}}>
                  <Image source={{uri: this.loadTeamImage(match.away.id)}} style={{width:35, height:35, margin:5}}/>
                  <Text style={{textAlign: 'left', marginRight:'auto'}}>{match.away.name}</Text>
                </View>
                <View></View>
            
          </TouchableOpacity>
            ))}
          </View>
        ))}
        
      </View>
      </ScrollView>
    );
  }
}

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
      marginRight: 10,
      marginBottom: 10,
      marginTop:10
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

  export default HomeStackScreen;