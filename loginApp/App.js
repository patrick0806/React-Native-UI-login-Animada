import React, {useState, useEffect} from 'react';
import {
  KeyboardAvoidingView,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Animated,
  Keyboard,
} from 'react-native';

export default function App(){
  const [offSet,setOffset] = useState(new Animated.ValueXY({x:0,y:95}));
  const [opacity] = useState(new Animated.Value(0));

  useEffect(()=>{   
    Animated.parallel([
      Animated.spring(offSet.y,{
        toValue:0,
        speed:4,
        bounciness:20,
        useNativeDriver:true,
      }),
      Animated.timing(opacity,{
        toValue:1,
        duration:200,
        useNativeDriver:true,
      })
    ]).start();
  },[]);

  return(
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Image source={require('./src/assets/images/logo.png')}/>
      </View>
      <Animated.View style={[
        styles.container,
        {
          opacity:opacity,
          transform:[
            {translateY:offSet.y},
          ]
        }
      ]}>
        <TextInput placeholder="Email" autoCorrect={false} onChangeText={()=>{}} style={styles.input}/>
        <TextInput placeholder="Senha" autoCorrect={false} onChangeText={()=>{}} style={styles.input}/>
        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.submitText}>Acesar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnRegister}>
          <Text style={styles.registerText}>Criar conta gratuita</Text>
        </TouchableOpacity>
      </Animated.View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#191919'
  },
  containerLogo:{
    flex:1,
    justifyContent:"center",
  },
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    width:'90%',
    paddingBottom:50,
  },
  input:{
    backgroundColor:'#fff',
    width:'90%',
    marginBottom:15,
    color:"#222",
    fontSize:17,
    borderRadius:7,
    padding:10,
  },
  btnSubmit:{
    backgroundColor:'#35AAFF',
    width:'90%',
    height:45,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:7,
  },
  submitText:{
    color:'#FFF',
    fontSize:18,
  },
  btnRegister:{
    marginTop:10,
  },
  registerText:{
    color:'#FFF',
  },
});