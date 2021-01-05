import * as React from 'react';
import { Dimensions, Button, Text, View, StyleSheet, Image, TouchableOpacity, TextBase, TextInput, ScrollView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import react from 'react';
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import Fotmob from './fotmob.js';

const DetailsTopTab = createMaterialTopTabNavigator();

class DetailsMaterialScreen extends React.Component {
    render() {
    const { route } = this.props;
    const { itemId, otherParam } = route.params;
      return (
        <DetailsTopTab.Navigator>
          <DetailsTopTab.Screen name="경기 내용" component={DetailsScreen}
          initialParams={{'itemId':itemId, 'otherParam': otherParam}}/>
  
        <DetailsTopTab.Screen name="응원 하기" component={ChatScreen}
          initialParams={{'itemId':itemId, 'otherParam': otherParam}}/> 
        </DetailsTopTab.Navigator>
      );
    }
  }
  
  class ChatScreen extends React.Component{
    state = {
      input : "",
      target : "",
    };
    handleInput = text => {
      this.setState({input: text});
    }
  
    render() {
      const { route } = this.props;
      const { itemId, otherParam } = route.params;
  
      return(
        <ScrollView>
        <View style={styles.container}>
          <Text>Match ID : {itemId} *TEMP UI*</Text>
          <View style={[styles.detailsContainer, {/*alignItems: 'left'*/}]}>
          <View style={{flexDirection: 'row', width:'100%'}}>
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="댓글을 작성하세요."
              autoCapitalize="none"
              onChangeText={this.handleInput}
            />
            <TouchableOpacity
            style={styles.submitButton}
            //onPress={() => this.login(this.state.email, this.state.password)}
          >
            <Text style={styles.submitButtonText}>등록</Text>
          </TouchableOpacity>
          </View>
            <View>
              <View style={styles.chatContainer}>
                <Text>ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ</Text>
                <Text style={styles.subText}>작성자 &#183; 2020.12.31</Text>
              </View>
              <View style={styles.chatContainer}>
                <Text>ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ</Text>
                <Text style={styles.subText}>작성자 &#183; 2020.12.31</Text>
              </View>
              <View style={styles.myChatContainer}>
                <Text style={{color:'white'}}>ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ</Text>
                <Text style={styles.subTextWhite}>작성자 &#183; 2020.12.31</Text>
              </View>
              <View style={styles.chatContainer}>
                <Text>ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ</Text>
                <Text style={styles.subText}>작성자 &#183; 2020.12.31</Text>
              </View>
  
              <View style={styles.chatContainer}>
                <Text>ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ</Text>
                <Text style={styles.subText}>작성자 &#183; 2020.12.31</Text>
              </View>
  
              <View style={styles.chatContainer}>
                <Text>ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ</Text>
                <Text style={styles.subText}>작성자 &#183; 2020.12.31</Text>
              </View>
              <View style={styles.chatContainer}>
                <Text>ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ</Text>
                <Text style={styles.subText}>작성자 &#183; 2020.12.31</Text>
              </View>
              <View style={styles.chatContainer}>
                <Text>ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ</Text>
                <Text style={styles.subText}>작성자 &#183; 2020.12.31</Text>
              </View>
              <View style={styles.chatContainer}>
                <Text>ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ</Text>
                <Text style={styles.subText}>작성자 &#183; 2020.12.31</Text>
              </View>
              <View style={styles.chatContainer}>
                <Text>ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ</Text>
                <Text style={styles.subText}>작성자 &#183; 2020.12.31</Text>
              </View>
            </View>
          </View>
        </View>
        </ScrollView>
      );
    }
  }

  class Timer extends React.Component{
    state = {
      time: 0
      
    }
    componentDidMount() {
      var min = this.props.min;
      var sec = this.props.sec;
      //console.log(this.props);
      var timeBySec = parseInt(min) * 60 + parseInt(sec);
      //console.log(timeBySec);
      this.setState({time:timeBySec})
      this.interval = setInterval(() => this.setState({ time: parseInt(this.state.time)+1 }), 1000);
    }
    componentWillUnmount() {
      clearInterval(this.interval);
    }
    renderByOption(){
      const option=this.props.option;
      if(option=='1'){
        if(this.state.time%60<10 && this.state.time/60<10){
          return <View><Text style={{width:'100%', textAlign:'center'}}>0{parseInt(this.state.time/60)}:0{this.state.time%60}</Text></View>;
        } else if(this.state.time%60>=10 && this.state.time/60<10)
          return <View><Text style={{width:'100%', textAlign:'center'}}>0{parseInt(this.state.time/60)}:{this.state.time%60}</Text></View>;
          else if(this.state.time%60<10 && this.state.time/60>=10){
            return <View><Text style={{width:'100%', textAlign:'center'}}>{parseInt(this.state.time/60)}:0{this.state.time%60}</Text></View>;
          } else{
            return <View><Text style={{width:'100%', textAlign:'center'}}>{parseInt(this.state.time/60)}:{this.state.time%60}</Text></View>; 
          }
      }
      else{
        clearInterval(this.interval);
        return <View><Text style={{textAlign:'center'}}>{option}</Text></View>
      }
    }
    render(){
      return(
        this.renderByOption()
      );
    }
  }
  
  class DetailsScreen extends React.Component {
    state = {
      isLoading: true,
      info: [],
      teams: [],
      status: [],
      ongoing: false,
      events: [], 
      // goalName : [],
      // goalTime : [],
      // goalIsHome : [],
      // goals : [],
    }

    constructor(props){
      super(props);
      this.getInfos();
    }

    getInfos = async () => {
      const { route } = this.props;
      const { itemId, otherParam } = route.params;
      const fotmob = new Fotmob();
      var arr = await fotmob.getMatchDetails(itemId);
      const header = arr['header'];
      const teams = header['teams'];
      const status = header['status'];
      
      var content = arr['content'];
      var events = content.matchFacts.events.events;
      var info = content.matchFacts.infoBox;
      //console.log(events);
      
      //console.log('1');
      //console.log(arr);
      //console.log(events);
      this.setState({
        teams:teams,
        status:status,
        events:events,
        info:info,
      });
    }

    componentDidMount(){
      
    }
    componentWillUnmount() {
      clearInterval(this.interval);
    }

    loadTeamImage(teamId){
      return 'https://www.fotmob.com/images/team/'+teamId+'_small';
    }
    
    startTimeOrScore(teams, status){
      if(status.started == true){
        return teams[0].score +' - ' + teams[1].score;
      } else {
        return status.startTimeStr
      }
    }
    
    currentTimeOrDate(status){
      if(status.started == false){
        console.log('not started');
        return <Timer option={status.startDateStr}/>
        //return status.startDateStr;
      } else if(status.started == true){
          if(status.finished==false){
            var time = status.liveTime.long.split(':');
            console.log(time);
            return <Timer option="1" min={time[0]} sec={time[1]}/>
            //return status.liveTime.long;
          } else{

            console.log('finished');
            return <Timer option={status.reason.long} />
            //return status.reason.long;
          }
        } else if(status.started == 'skip'){
          console.log('skip');
          return ;
        }
    }

    outputEvents(event){
     if(event.type=='Goal'){
      var assistStrKo= '';

      if(event.assistStr!=null){
        assistStrKo = '어시스트 '+event.assistStr.replace("assist by ", "");
      }
         //assistStrKo = '어시스트 ' + event.assist.replace("assist by ", "");
       if(event.isHome==true){
         return(
          <View style={{flexDirection: 'row', marginRight: 'auto'}}>
          <View style={{margin:5}}><Text>{event.time}</Text></View>
          <View style={{margin:5}}><Ionicons name="ios-football" style={{fontSize:16}}></Ionicons></View>
          <View style={{margin:5}}>
            <Text>{event.nameStr}</Text>
            <Text>{assistStrKo}</Text>
          </View>
        </View>
         );
       } else{
          return(
          <View style={{flexDirection: 'row', marginLeft:'auto'}}>
              <View style={{margin:5}}>
              <Text style={[styles.small, {textAlign:'right'}]}>{event.nameStr}</Text>
                <Text style={[styles.small, {textAlign:'right'}]}>{assistStrKo} </Text>
              </View>
              <View style={{margin:5}}><Ionicons name="ios-football" style={{fontSize:16}}></Ionicons></View>
              <View style={{margin:5}}><Text>{event.time}</Text></View>
            </View> 
          );
       }
     } else if(event.type=='Substitution'){
       if(event.isHome==true){
        return (
          <View style={{flexDirection: 'row', marginRight:'auto'}}>
          <View style={{margin:5}}><Text>{event.time}</Text></View>
          <View style={{margin:5}}>
            <Ionicons name="ios-arrow-back-circle" style={{fontSize: 15.2, color: 'green'}}></Ionicons>
            <Ionicons name="ios-arrow-forward-circle" style={{fontSize: 15.2, color: 'red'}}></Ionicons>
          </View>
          <View style={{margin:5}}>
            <Text style={[styles.small, {textAlign:'left', color: 'green'}]}>{event.swap[0].name}</Text>
            <Text style={[styles.small, {textAlign:'left', color: 'red'}]}>{event.swap[1].name}</Text>
          </View>
        </View>
          );
       } else{
        return (
          <View style={{flexDirection: 'row', marginLeft:'auto'}}>
          <View style={{margin:5}}>
            <Text style={[styles.small, {textAlign:'right', color: 'green'}]}>{event.swap[0].name}</Text>
            <Text style={[styles.small, {textAlign:'right', color: 'red'}]}>{event.swap[1].name}</Text>
          </View>
          <View style={{margin:5}}>
            <Ionicons name="ios-arrow-back-circle" style={{fontSize: 15.2, color: 'green'}}></Ionicons>
            <Ionicons name="ios-arrow-forward-circle" style={{fontSize: 15.2, color: 'red'}}></Ionicons>
          </View>
          <View style={{margin:5}}><Text>{event.time}</Text></View>
        </View>
        );
       }
     } else if(event.type=='Card'){
      if(event.isHome==true){
        return (
          <View style={{flexDirection: 'row', marginRight:'auto'}}>
          <View style={{margin:5}}><Text>{event.time}</Text></View>
          <View style={{margin:5}}>
            {event.card=="Yellow" ? <Ionicons name="tablet-portrait" style={{fontSize:16, color: 'orange'}}></Ionicons> : <Ionicons name="tablet-portrait" style={{fontSize:16, color: 'red'}}></Ionicons>}
          </View>
          <View style={{margin:5}}>
            <Text>{event.nameStr}</Text>
          </View>
        </View>
        );
       } else{
        return (
          <View style={{flexDirection: 'row', marginLeft:'auto'}}>
          <View style={{margin:5}}>
            <Text>{event.nameStr}</Text>
          </View>
          <View style={{margin:5}}>
            {event.card=="Yellow" ? <Ionicons name="tablet-portrait" style={{fontSize:16, color: 'orange'}}></Ionicons> : <Ionicons name="tablet-portrait" style={{fontSize:16, color: 'red'}}></Ionicons>}
          </View>
          <View style={{margin:5}}><Text>{event.time}</Text></View>
        </View>
        );
       }
     } else if(event.type=='AddedTime'){
        return (<View style={{flexDirection: 'row', marginRight: 'auto'}}>
        <View style={{margin:5}}><Text>{event.time}</Text></View>
        <View style={{margin:5}}><MaterialIcons name="add-alarm" style={{fontSize:16}}></MaterialIcons></View>
        <View style={{margin:5}}>
          <Text style={styles.small}>{event.minutesAddedStr.replaceAll(" minutes added", "")}분 추가됨</Text>
        </View>
      </View>);
     }else {
       return <View><Text>{event.type}</Text></View>
     }
    }

    render() {
      /* 2. Get the param, provide a fallback value if not available */
      var teams = this.state.teams;
      var status = this.state.status;
      var events = this.state.events;
      var info = this.state.info;
      console.log(info);
      if(typeof(teams[0])=="undefined"){
        teams[0] = {
          "name": "",
          "score": -1,
          "imageUrl": "",
          "pageUrl": ""
        }
        teams[1] = {
          "name": "",
          "score": -1,
          "imageUrl": "",
          "pageUrl": ""
        }
        status = {
          "finished": false,
          "started": 'skip',
          "cancelled": false,
          "scoreStr": "",
          "startDateStr": "",
          "reason": {
            "short": "",
            "long": ""
            },
            "liveTime": {
              "short": "",
              "long": ""
            }
          }
          events = [{
            "card": "",
            "isHome": false,
            "nameStr": "",
            "overloadTime": null,
            "overloadTimeStr": false,
            "profileUrl": "",
            "reactKey": "",
            "time": 0,
            "timeStr": "",
            "type": "",
            "swap": "",
            "minutesAddedStr" : "",
            "assistStr" : "",
          
          }]
      }
      return (
        <ScrollView>
        <View style={styles.container}>
          <View style={styles.scoreContainer}>
            <View style={styles.container}>
              <Image source={{uri:'https://www.fotmob.com'+teams[0].imageUrl}} style={{width:75, height:75}}/>
              <Text style={{textAlign: 'center'}}>{teams[0].name}</Text>
            </View>
            <View>
              <Text style={styles.score}>{this.startTimeOrScore(teams, status)}</Text>
              {this.currentTimeOrDate(status)}
            </View>
            <View style={styles.container}>
              <Image source={{uri:'https://www.fotmob.com'+teams[1].imageUrl}} style={{width:75, height:75}}/>
              <Text  style={{textAlign: 'center'}}>{teams[1].name}</Text>
            </View>
          </View>
          <View style={styles.scoreContainer}>
            <View style={{width:'35%', marginLeft: 'auto'}}>
              <Text style={{textAlign:'right', color:'rgba(0, 0, 0, 0.7)'}}>Son 7', 37'</Text>
            </View>
            <View>
              <Text style={{marginLeft:40, marginRight:40, color:'rgba(0, 0, 0, 0.7)'}}><Ionicons name="ios-football"></Ionicons></Text>
            </View>
            <View style={{width:'35%', marginRight: 'auto'}}>
              <Text style={{color:'rgba(0, 0, 0, 0.7)'}}>Fernande 2' (Pen)</Text>
            </View>
          </View>
          <View style={[styles.detailsContainer, {/*alignItems:'left'*/}]}>
            {events.map(event=>
            (
              this.outputEvents(event)
            ))}
            
            {/* <Text>itemId: {JSON.stringify(itemId)}</Text>
            <Text>otherParam: {JSON.stringify(otherParam)}</Text> */}
          </View>
          <View style={[styles.detailsContainer, {alignItems:'stretch'}]}>
            <View style={styles.infoContainer}>
              <View style={{width: '20%'}}>
                <Text>경기 날짜</Text>
              </View>
              <View>
                <Text>{info["Match Date"]}</Text>
              </View>
            </View>
            <View style={styles.infoContainer}>
              <View style={{width: '20%'}}>
                <Text>리그</Text>
              </View>
              <View>
                <Text>{console.log(info["Tournament"])}</Text>
              </View>
            </View>
            <View style={styles.infoContainer}>
              <View style={{width: '20%'}}>
                <Text>경기장</Text>
              </View>
              <View>
                <Text>{console.log(info["Stadium"])}</Text>
              </View>
            </View>
            <View style={styles.infoContainer}>
              <View style={{width: '20%'}}>
                <Text>주심</Text>
              </View>
              <View>
                <Text>{console.log(info["Referee"])}</Text>
              </View>
            </View>
          </View>
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

  export default DetailsMaterialScreen;