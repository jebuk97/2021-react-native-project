import * as React from 'react';
import { SafeAreaView, Dimensions, Button, Text, View, StyleSheet, Image, TouchableOpacity, TextBase, TextInput, ScrollView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import react from 'react';
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import Fotmob from './fotmob.js';
import axios from 'axios';
//import socketio from 'socket.io-client';
import { FlatList } from 'react-native-gesture-handler';

const DetailsTopTab = createMaterialTopTabNavigator();
const host = 'http://localhost';
//const socket = socektio.connect(host+':3001');

const testChats = [{
  id : 1,
  team : '1',
  name : '작성자',
  main : 'ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ',
  date : '2020.01.09',
},
{
  id : 2,
  team : '1',
  name : '작성자',
  main : 'ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ',
  date : '2020.01.09',
},
{
  id : 3,
  team : '2',
  name : '작성자',
  main : '그걸 못넣냐',
  date : '2020.01.09',
},
{
  id : 4,
  team : '2',
  name : '작성자',
  main : '뭐해 씻팔!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
  date : '2020.01.09',
},
{
id : 5,
team : '1',
name : '작성자',
main : 'ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ',
date : '2020.01.09',
},
{
  id : 6,
  team : '1',
  name : '작성자',
  main : 'ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ',
  date : '2020.01.09',
},
{
  id : 7,
  team : '2',
  name : '작성자',
  main : '그걸 못넣냐',
  date : '2020.01.09',
},
{
  id : 8,
  team : '2',
  name : '작성자',
  main : '뭐해 씻팔!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
  date : '2020.01.09',
},
{
  id : 9,
  team : '1',
  name : '작성자',
  main : 'ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ',
  date : '2020.01.09',
},
{
  id : 10,
  team : '1',
  name : '작성자',
  main : 'ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ',
  date : '2020.01.09',
  },   
];

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
      target : '1',
      page: 1,
      data : [],
      status: [],
      events: []
    };

    componentDidMount = async() => {
      const { route } = this.props;
      const { itemId, otherParam } = route.params;

      console.log('Test Request to '+host+':3001/chat?id='+itemId+'&page='+this.state.page);
      const response = await axios.get(host+':3001/chat?id='+itemId+'&page='+this.state.page);
      console.log(response.data);

      // socket.on('chatUpdate', (obj) => {
      //   const chat = this.state.data;
      //   obj.concat(chat);
      //   this.setState({data: obj});
      // })

      this.getInfos();

      this.setState({
        data : testChats
      });

    }

    componentWillUnmount(){
      // socket.off('chatUpdate');
    }

      getInfos = async() => {
      const { route } = this.props;
      const { itemId, otherParam } = route.params;
      const fotmob = new Fotmob();
      var arr = await fotmob.getMatchDetails(itemId);
      const header = arr['header'];
      const status = header['status'];
      
      var content = arr['content'];
      var events = content.matchFacts.events.events;
      this.setState({
        status:status,
        events:events,
    });
    }

    handleSubmit = async() => {
      const { route } = this.props;
      const { itemId, otherParam } = route.params;

      const name = '익명';
      const text = this.state.input;
      const team = this.state.target;
    
      this.setState({input: ''});
      console.log(text+' submit');
      const response = await axios.post(host+':3001/newChat', {
          id: itemId,
          name: name,
          text: text,
          targetTeam: team
      });
      console.log(response.data);
    }

    handleLoadMore = /*async*/() => {
      this.setState({
        page: this.state.page + 1
      });
      // const response = await axios.get(host+':3001/chat?id='+itemId+'&page='+this.state.page);
      // console.log(response.data);
      var moreData = 
      [{
        id : this.state.page * 10 + 1,
        team : '1',
        name : '작성자',
        main : this.state.page * 10 + 1+'ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ',
        date : '2020.01.09',
      },
      {
        id : this.state.page * 10 + 2,
        team : '1',
        name : '작성자',
        main : this.state.page * 10 + 2+'ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ',
        date : '2020.01.09',
      },
      {
        id : this.state.page * 10 + 3,
        team : '2',
        name : '작성자',
        main : this.state.page * 10 + 3+'그걸 못넣냐',
        date : '2020.01.09',
      },
      {
        id : this.state.page * 10 + 4,
        team : '2',
        name : '작성자',
        main : this.state.page * 10 + 4+'뭐해 씻팔!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
        date : '2020.01.09',
      },
      {
        id : this.state.page * 10 + 5,
        team : '1',
        name : '작성자',
        main : this.state.page * 10 + 5+'ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ',
        date : '2020.01.09',
        },
        {
          id : this.state.page * 10 + 6,
          team : '1',
          name : '작성자',
          main : this.state.page * 10 + 6+'ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ',
          date : '2020.01.09',
        },
        {
          id : this.state.page * 10 + 7,
          team : '2',
          name : '작성자',
          main : this.state.page * 10 + 7+'그걸 못넣냐',
          date : '2020.01.09',
        },
        {
          id : this.state.page * 10 + 8,
          team : '2',
          name : '작성자',
          main : this.state.page * 10 + 8+'뭐해 씻팔!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
          date : '2020.01.09',
        },
        {
          id : this.state.page * 10 + 9,
          team : '1',
          name : '작성자',
          main : this.state.page * 10 + 9+'ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ',
          date : '2020.01.09',
        },
        {
          id : this.state.page * 10 + 10,
          team : '1',
          name : '작성자',
          main : this.state.page * 10 + 10+'ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ',
          date : '2020.01.09',
          }, ];
      if(moreData.length==0){
        return;
      }
      console.log(this.state.data);
      this.setState({
        data : this.state.data.concat(moreData)
      })
    }


    onPressHome = () => {
      this.setState({
        target: '1'
      });
    };

    onPressAway = () => {
      this.setState({
        target: '2'
      });
    };

    renderRecentEvent(){
      const event = this.state.events[0];
      if(this.state.status.started == true && this.state.status.finished == false){
        if(event.type=='Goal'){
          var assistStrKo= '';
    
          if(event.assistStr!=null){
            assistStrKo = '어시스트 '+event.assistStr.replace("assist by ", "");
          }
             //assistStrKo = '어시스트 ' + event.assist.replace("assist by ", "");
           if(event.isHome==true){
             return(
              <View style={styles.detailsContainer}>
              <View style={{flexDirection: 'row', marginRight: 'auto'}}>
              <View style={{margin:5}}><Text>{event.time}</Text></View>
              <View style={{margin:5}}><Ionicons name="ios-football" style={{fontSize:16}}></Ionicons></View>
              <View style={{margin:5}}>
                <Text>{event.nameStr}</Text>
                <Text>{assistStrKo}</Text>
              </View>
            </View>
            </View>
             );
           } else{
              return(
                <View style={styles.detailsContainer}>
              <View style={{flexDirection: 'row', marginLeft:'auto'}}>
                  <View style={{margin:5}}>
                  <Text style={[styles.small, {textAlign:'right'}]}>{event.nameStr}</Text>
                    <Text style={[styles.small, {textAlign:'right'}]}>{assistStrKo} </Text>
                  </View>
                  <View style={{margin:5}}><Ionicons name="ios-football" style={{fontSize:16}}></Ionicons></View>
                  <View style={{margin:5}}><Text>{event.time}</Text></View>
                </View>
                </View>                
              );
           }
         } else if(event.type=='Substitution'){
           if(event.isHome==true){
            return (
              <View style={styles.detailsContainer}>
              <View style={{flexDirection: 'row', marginRight:'auto'}}>
              <View style={{margin:5}}><Text>{event.time}</Text></View>
              <View style={{margin:5}}>
                <Ionicons name="ios-arrow-forward-circle" style={{fontSize: 15.2, color: 'green'}}></Ionicons>
                <Ionicons name="ios-arrow-back-circle" style={{fontSize: 15.2, color: 'red'}}></Ionicons>
              </View>
              <View style={{margin:5}}>
                <Text style={[styles.small, {textAlign:'left', color: 'green'}]}>{event.swap[0].name}</Text>
                <Text style={[styles.small, {textAlign:'left', color: 'red'}]}>{event.swap[1].name}</Text>
              </View>
            </View>
            </View>
              );
           } else{
            return (
              <View style={styles.detailsContainer}>
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
            </View>
            );
           }
         } else if(event.type=='Card'){
          if(event.isHome==true){
            return (
              <View style={styles.detailsContainer}>
              <View style={{flexDirection: 'row', marginRight:'auto'}}>
              <View style={{margin:5}}><Text>{event.time}</Text></View>
              <View style={{margin:5}}>
                {event.card=="Yellow" ? <Ionicons name="tablet-portrait" style={{fontSize:16, color: 'orange'}}></Ionicons> : <Ionicons name="tablet-portrait" style={{fontSize:16, color: 'red'}}></Ionicons>}
              </View>
              <View style={{margin:5}}>
                <Text>{event.nameStr}</Text>
              </View>
            </View>
            </View>
            );
           } else{
            return (
              <View style={styles.detailsContainer}>
              <View style={{flexDirection: 'row', marginLeft:'auto'}}>
              <View style={{margin:5}}>
                <Text>{event.nameStr}</Text>
              </View>
              <View style={{margin:5}}>
                {event.card=="Yellow" ? <Ionicons name="tablet-portrait" style={{fontSize:16, color: 'orange'}}></Ionicons> : <Ionicons name="tablet-portrait" style={{fontSize:16, color: 'red'}}></Ionicons>}
              </View>
              <View style={{margin:5}}><Text>{event.time}</Text></View>
            </View>
            </View>
            );
           }
         } else if(event.type=='AddedTime'){
            return (
              <View style={styles.detailsContainer}>
            <View style={{flexDirection: 'row', marginRight: 'auto'}}>
            <View style={{margin:5}}><Text>{event.time}</Text></View>
            <View style={{margin:5}}><MaterialIcons name="add-alarm" style={{fontSize:16}}></MaterialIcons></View>
            <View style={{margin:5}}>
              <Text style={styles.small}>{event.minutesAddedStr.replace(" minutes added", "")}분 추가됨</Text>
            </View>
          </View>
          </View>
          );
         }else {
           return <View><Text>{event.type}</Text></View>
         }
      } else{
        return;
      }
    }

    renderItem = ({item}) => {
      if(item.team == '1'){
        return (
          <View style={styles.chatContainer}>
            <Text>{item.main}</Text>
            <Text style={styles.subText}>{item.name} &#183; {item.date}</Text>
          </View>
        );
      } else{
        return (
          <View style={styles.myChatContainer}>
            <Text>{item.main}</Text>
            <Text style={styles.subTextWhite}>{item.name} &#183; {item.date}</Text>
          </View>
        );
      }
    }
  
    renderTeamButtons() {
      var currentTeam = this.state.target;
      if(currentTeam == '1'){
        return (
          <View style={{flexDirection: 'row', width:'100%'}}>
          <TouchableOpacity
              style={styles.selectedTeamButton}
              key = "1"
              onPress={this.onPressHome}
              >
                <Text style={styles.submitButtonText}>홈</Text>
              </TouchableOpacity>

              <TouchableOpacity
              style={[styles.awayTeamButton, {marginLeft: 'auto'}]}
              key = "2"
              onPress= {this.onPressAway}
              >
                <Text style={[styles.submitButtonText, {color:'rgba(0, 122, 255, 1)'}]}>어웨이</Text>
              </TouchableOpacity>
              </View>
        );
      } else {
        return (
          <View style={{flexDirection: 'row', width:'100%'}}>
          <TouchableOpacity
          style={styles.teamButton}
          key = "1"
          onPress={this.onPressHome}
          >
            <Text style={[styles.submitButtonText, {color:'rgba(255, 45, 85, 1)'}]}>홈</Text>
          </TouchableOpacity>

          <TouchableOpacity
          style={[styles.awaySelectedTeamButton, {marginLeft: 'auto'}]}
          key = "2"
          onPress= {this.onPressAway}
          >
            <Text style={styles.submitButtonText}>어웨이</Text>
          </TouchableOpacity>
          </View>
          );
      }
    }

    render() {
      const { route } = this.props;
      const { itemId, otherParam } = route.params;
  
      return(
        <SafeAreaView style={styles.container}>
            {this.renderRecentEvent()}
          <View style={[styles.detailsContainer, {paddingBottom: 27/*alignItems: 'left'*/}]}>
          {this.renderTeamButtons()}
          <View style={{flexDirection: 'row', width:'100%', paddingBottom: 5}}>
            <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="댓글을 작성하세요."
                autoCapitalize="none"
                ref= {(el) => { this.input = el; }}
                onChangeText={(input) => this.setState({input})}
                value={this.state.input}
              />
              <TouchableOpacity
              style={styles.submitButton}
              key = "3"
              onPress={this.handleSubmit}
              >
                <Text style={styles.submitButtonText}>등록</Text>
              </TouchableOpacity>
            </View>
              <FlatList
                data={this.state.data}
                renderItem={this.renderItem}
                keyExtractor={(item) => String(item.id)}
                style={{width:'100%', borderRadius: 5}}
                onEndReached={this.handleLoadMore}
                onEndReachedThreshold={100}
              />
          </View>
        </SafeAreaView>
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
            return <Timer option="1" min={time[0]} sec={time[1]}/>
            //return status.liveTime.long;
          } else{
            console.log('finished');
            return <Timer option={status.reason.long} />
            //return status.reason.long;
          }
        } else if(status.started == 'skip'){
          //console.log('skip');
          return ;
        }
    }
    saveGoalEvents(event, team1GoalName, team2GoalName){
      var i = 0;
      var isExist = false;
      if(event.type=='Goal'){
        var sliceStr = event.nameStr.substring(event.nameStr.indexOf(' '), event.nameStr.length).trim();
        if(event.isHome==true){
          for(i;i<team1GoalName.length;i++){
            if(sliceStr == team1GoalName[i].substring(0, team1GoalName[i].indexOf(','))){
              isExist = true;
              break;
            }
          }
          if(isExist == true){
            if(sliceStr.indexOf(', Penalty') != -1){
              team1GoalName[i] += ', '+event.time+ '\' (Pen)';
            }
            else{
              team1GoalName[i] += ', '+event.time+ '\'';
            }
          }
          else{
            if(sliceStr.indexOf(', Penalty') != -1){
              sliceStr = sliceStr.replace(', Penalty', '');
              team1GoalName[team1GoalName.length] = sliceStr +', '+event.time+'\' (Pen)';
            } else{
              team1GoalName[team1GoalName.length] = sliceStr +', '+event.time+ '\''; 
            }
          }
        } else{
          for(i;i<team2GoalName.length;i++){
            if(sliceStr == team2GoalName[i].substring(0, team2GoalName[i].indexOf(','))){
              isExist = true;
              break;
            }
          }
          if(isExist == true){
            if(sliceStr.indexOf(', Penalty') != -1){
              team2GoalName[i] += ', '+event.time+ '\' (Pen)';
            }
            else{
              team2GoalName[i] += ', '+event.time+ '\'';
            }
          }
          else{
            if(sliceStr.indexOf(', Penalty') != -1){
              sliceStr = sliceStr.replace(', Penalty', '');
              team2GoalName[team2GoalName.length] = sliceStr +', '+event.time+'\' (Pen)';
            } else{
              team2GoalName[team2GoalName.length] = sliceStr +', '+event.time+ '\''; 
            }
          }
        }
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
            <Ionicons name="ios-arrow-forward-circle" style={{fontSize: 15.2, color: 'green'}}></Ionicons>
            <Ionicons name="ios-arrow-back-circle" style={{fontSize: 15.2, color: 'red'}}></Ionicons>
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
          <Text style={styles.small}>{event.minutesAddedStr.replace(" minutes added", "")}분 추가됨</Text>
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
      var team1GoalName = [];
      var team2GoalName = [];
      var tournament = info["Tournament"];
      var stadium = info["Stadium"];
      var referee = info["Referee"];
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
          tournament = [];
          stadium = [];
          stadium["name"] = "";
          referee = [];
          referee["text"] = "";
      }

      if(stadium==null){
        stadium = [];
        stadium["name"] = "NO-INFO";
      }
      if(referee==null){
        referee = [];
        referee["text"] = "NO-INFO";
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
              {events.map(event=>
              (
                this.saveGoalEvents(event, team1GoalName, team2GoalName)
              ))}
                {team1GoalName.map(name=>(
                  <Text style={{color:'rgba(0, 0, 0, 0.7)', marginLeft: 'auto', fontSize: 12}}>{name}</Text>
                ))}
            </View>
            <View>
              <Text style={{marginLeft:40, marginRight:40, color:'rgba(0, 0, 0, 0.7)'}}><Ionicons name="ios-football"></Ionicons></Text>
            </View>
            <View style={{width:'35%', marginRight: 'auto'}}>
                {team2GoalName.map(name=>(
                  <Text style={{color:'rgba(0, 0, 0, 0.7)', fontSize: 12}}>{name}</Text>
                ))}
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
              <View style={{width: '80%'}}>
                <Text>{info["Match Date"]}</Text>
              </View>
            </View>
            <View style={styles.infoContainer}>
              <View style={{width: '20%'}}>
                <Text>리그</Text>
              </View>
              <View style={{width: '80%'}}>
                <Text>{tournament.text}</Text>
              </View>
            </View>
            
            {
                stadium.name == "NO-INFO" ? 
                (<View style={[styles.infoContainer, { padding : 0 }]}>
                  <View style={{width: '20%'}}>
                  </View>
                </View>) : 
                (<View style={styles.infoContainer}>
                  <View style={{width: '20%'}}>
                    <Text>경기장</Text>
                  </View>
                  <View style={{width: '80%'}}>
                    <Text>{stadium.name}</Text>
                  </View>
                </View>)
             }
            {
                referee.text == "NO-INFO" ? 
                (<View style={[styles.infoContainer, { padding : 0 }]}>
                  <View style={{width: '20%'}}>
                  </View>
                </View>) : 
                (<View style={styles.infoContainer}>
                  <View style={{width: '20%'}}>
                    <Text>주심</Text>
                  </View>
                  <View style={{width: '80%'}}>
                    <Text>{referee.text}</Text>
                  </View>
                </View>)
             }
            
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
      backgroundColor: 'rgba(255, 45, 85, 0.22)',
      borderRadius: 5,
      padding:10,
      marginRight:'auto',
      marginTop:10,
    },
    myChatContainer:{
      backgroundColor: 'rgba(0, 122, 255, 0.22)',
      borderRadius: 5,
      padding:10,
      marginLeft:'auto',
      marginBottom:10,
    },
    subText:{
      color: 'rgba(0, 0, 0, 0.8)',
      marginTop:8
    },
    subTextWhite:{
      color: 'rgba(0, 0, 0, 0.8)',
      marginTop:8, 
      textAlign:'right',
    },
    submitButton:{
      width:'10%',
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 122, 255, 1)',
    },
    submitButtonText:{
      alignItems: 'stretch',
      color: 'white'
    },
    teamButton: {
      width: '49%',
      height: 20,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      color: 'rgba(255, 45, 85, 1)',
      backgroundColor: 'white',
      borderColor: 'rgba(255, 45, 85, 1)',
      borderWidth: 1,
      marginBottom: 10,
    },
    selectedTeamButton: {
      width: '49%',
      height: 20,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(255, 45, 85, 1)',
      borderColor: 'rgba(255, 45, 85, 1)',
      borderWidth: 1,
      marginBottom: 10,
    },
    awayTeamButton: {
      width: '49%',
      height: 20,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      color: 'rgba(0, 122, 255, 1)',
      backgroundColor: 'white',
      borderColor: 'rgba(0, 122, 255, 1)',
      borderWidth: 1,
      marginBottom: 10,
    },
    awaySelectedTeamButton: {
      width: '49%',
      height: 20,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 122, 255, 1)',
      borderColor: 'rgba(0, 122, 255, 1)',
      borderWidth: 1,
      marginBottom: 10,
    },
  });

  export default DetailsMaterialScreen;