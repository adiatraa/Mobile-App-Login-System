import {StyleSheet, View, KeyboardAvoidingView, StatusBar} from 'react-native';
import {Text, Image} from '@rneui/themed';
import React, {useState, useEffect} from 'react';
import {Button, Dialog, Input} from '@rneui/base';
import Icon from 'react-native-vector-icons/Octicons';
import * as Animatable from 'react-native-animatable';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function LoginPage() {
  const [dialogVisible, setDialogVisible] = useState(false);
  const [NPP, setNPP] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);
  const [eyeStatus, setEyeStatus] = useState('eye-closed');
  function eyeStatusHandler() {
    secureText === true ? setEyeStatus('eye') : setEyeStatus('eye-closed');
    setSecureText(!secureText);
  }
  function toggleDialog() {
    setDialogVisible(!dialogVisible);
  }
  return (
    <SafeAreaView style={styles.body}>
      <StatusBar backgroundColor="#FFD60A" />
      <Animatable.Image
        animation="fadeIn"
        delay={500}
        duration={1000}
        easing="ease-in-out"
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/id/6/6e/Logo_PT_Pindad_%28Persero%29.png',
        }}
        style={{width: 150, height: 100, marginVertical: 100}}
      />
      <Animatable.View
        animation="bounceInUp"
        delay={500}
        duration={2500}
        easing="ease-in"
        style={styles.formBox}>
        <Text h1={true}>LOGIN</Text>
        <Text style={{fontSize: 14}}>Welcome back you’ve been missed!</Text>
        <KeyboardAvoidingView behavior="padding" style={{alignItems: 'center'}}>
          <Input
            inputContainerStyle={styles.userForm}
            containerStyle={{width: 300}}
            placeholder="NPP"
            placeholderTextColor="#666"
            value={NPP}
            leftIcon={
              <Icon
                name="person"
                size={18}
                color="#333"
                style={{marginRight: 5}}
              />
            }
            onChange={e => {
              setNPP(e.target.value);
            }}
          />
          <Input
            secureTextEntry={secureText}
            textContentType="password"
            inputContainerStyle={styles.passwordForm}
            containerStyle={{width: 300, margin: -28}}
            placeholder="Password"
            placeholderTextColor="#666"
            value={password}
            rightIcon={
              <Icon
                name={eyeStatus}
                size={18}
                color="#333"
                style={{marginLeft: 5}}
                onPress={eyeStatusHandler}
              />
            }
            leftIcon={
              <Icon
                name="lock"
                size={18}
                color="#333"
                style={{marginRight: 5}}
              />
            }
            onChange={e => {
              setPassword(e.target.value);
            }}
          />
        </KeyboardAvoidingView>
        <Text style={{marginVertical: 20, textAlign: 'right', width: 280}}>
          Forgot Password?
        </Text>
        <Button
          title="Log In"
          titleStyle={{fontWeight: 'bold', fontSize: 18, color: '#333'}}
          buttonStyle={{
            paddingHorizontal: 116,
            paddingVertical: 10,
            backgroundColor: '#FFD60A',
            borderRadius: 10,
          }}
          containerStyle={{marginBottom: 100}}
          onPress={toggleDialog}
        />
      </Animatable.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#FFD60A',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  formBox: {
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingTop: 60,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  userForm: {
    borderWidth: 2,
    borderColor: '#666',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: 30,
  },
  passwordForm: {
    borderWidth: 2,
    borderColor: '#666',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
