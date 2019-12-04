import React,{Component} from 'react';
import { Image,ImageBackground, Text, TextInput, View,StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    stretch: {
    
      width: 500,
      height: 300,
      resizeMode: 'stretch',
      position:'relative',
      top: 2,
      left: 2
    }
  });
export default class Logo extends Component {

  render() {
    return (
      <View style={{flex:1}}>
       <ImageBackground style={styles.stretch}
          source={require('../assets/sky.jpg')} >
          
        <View
        style={{
            flexDirection:'row',
            
            
            position: 'absolute', // child
            bottom: 150, // position where you want
            left: 165,
            
          }}>
              <Text style={{fontWeight: 'bold',fontSize:45,color: 'black',}} >W</Text>
              <Text style={{fontWeight: 'bold',fontSize:45,color: 'white',}} > / </Text>

              <Text style={{fontWeight: 'bold',fontSize:45,color: 'black',}} >P2P</Text>
          </View>
          
              </ImageBackground>
      </View>
    );
  }
}