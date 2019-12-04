import React,{Component} from 'react';
import {TouchableOpacity,Button, Text, TextInput, View } from 'react-native';

export default class TwoButton extends Component {
 

  render() {
    return (
     <View style={{flex:1,flexDirection:'column',alignContent:'center'}}>
       <TouchableOpacity style={{width: 250,borderWidth:2,borderRadius:20, borderColor:'#007fe0'}} >
      <Text style={{ fontSize:35,color:'#007fe0',textAlign:'center',fontFamily:'sans-serif'}}>Send</Text>
    </TouchableOpacity>
      <Text/><Text/>
    <TouchableOpacity style={{width: 250,borderWidth:2,borderRadius:20, borderColor:'#007fe0'}} >
      <Text style={{ fontSize:35,color:'#007fe0',textAlign:'center',fontFamily:'sans-serif'}}>Recieve</Text>
    </TouchableOpacity>
     </View>
    );
  }
}