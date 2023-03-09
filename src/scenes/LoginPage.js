import {StyleSheet, KeyboardAvoidingView, StatusBar, Alert} from 'react-native';
import {Text, Image} from '@rneui/themed';
import React, {useState, useContext} from 'react';
import {Button, color, Input} from '@rneui/base';
import Icon from 'react-native-vector-icons/Octicons';
import * as Animatable from 'react-native-animatable';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AuthContext} from '../context/AuthContext';
import {colors} from '../components/Theme';

export default function LoginPage({navigation}) {
  const {login} = useContext(AuthContext);

  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [NPP, setNPP] = useState('kminchelle');
  const [password, setPassword] = useState('0lelplR');
  const [secureText, setSecureText] = useState(true);
  const [eyeStatus, setEyeStatus] = useState('eye-closed');

  //Set password visible or invisible
  function eyeStatusHandler() {
    secureText === true ? setEyeStatus('eye') : setEyeStatus('eye-closed');
    setSecureText(!secureText);
  }

  //Login animation
  const circleA = {
    0: {
      marginTop: -25,
      marginLeft: -25,
      opacity: 1,
    },
    0.5: {
      marginTop: -25,
      marginLeft: -50,
      opacity: 1,
    },
    0.75: {
      marginTop: -50,
      marginLeft: -25,
      opacity: 1,
    },
    1: {
      marginTop: -50,
      marginLeft: -25,
      opacity: 0,
    },
  };
  const circleB = {
    0: {
      marginTop: -25,
      marginLeft: -25,
      opacity: 1,
    },
    0.5: {
      marginTop: -25,
      marginLeft: 0,
      opacity: 1,
    },
    0.75: {
      marginTop: 0,
      marginLeft: -25,
      opacity: 1,
    },
    1: {
      marginTop: 0,
      marginLeft: -25,
      opacity: 0,
    },
  };
  const logoFadeIn = {
    0: {
      marginTop: -50,
      opacity: 0,
    },
    0.5: {
      marginTop: -50,
      opacity: 1,
    },
    1: {
      opacity: 1,
      marginTop: -320,
    },
  };

  return (
    <SafeAreaView style={styles.body}>
      <StatusBar backgroundColor="#FFD60A" />
      <Animatable.View
        style={styles.circleA}
        animation={circleA}
        easing="ease-out"
        duration={3000}
      />
      <Animatable.View
        style={styles.circleB}
        easing="ease-out"
        animation={circleB}
        duration={3000}
      />
      <Animatable.Image
        animation={logoFadeIn}
        delay={1500}
        duration={2000}
        easing="ease-in-out"
        source={require('../assets/essp.png')}
        style={{
          tintColor: colors.dark10,
          width: 66,
          height: 100,
          position: 'absolute',
          left: '50%',
          marginLeft: -33,
          top: '50%',
          marginTop: -50,
        }}
      />
      <Animatable.Text
        animation="fadeIn"
        delay={3500}
        duration={1000}
        easing="ease-in-out"
        style={{
          fontSize: 18,
          color: colors.dark10,
          marginBottom: 60,
          marginTop: 170,
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
        EMPLOYEE SELF SERVICE {'\n'}PT. PINDAD
      </Animatable.Text>
      <Animatable.View
        animation="bounceInUp"
        delay={3500}
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
            onChangeText={text => setNPP(text)}
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
            onChangeText={text => setPassword(text)}
          />
        </KeyboardAvoidingView>
        <Text style={{marginVertical: 20, textAlign: 'right', width: 280}} onPress={()=>navigation.navigate('SendEmailReset')} >
          Forgot Password?
        </Text>
        <Button
          title="Log In"
          titleStyle={{fontWeight: 'bold', fontSize: 18, color: '#333'}}
          loading={isButtonLoading}
          loadingStyle={{marginHorizontal: 15}}
          buttonStyle={{
            paddingHorizontal: 116,
            paddingVertical: 10,
            backgroundColor: '#FFD60A',
            borderRadius: 10,
          }}
          containerStyle={{marginBottom: 100}}
          onPress={() => {
            login(NPP, password);
          }}
        />
      </Animatable.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    alignItems: 'center',
    backgroundColor: '#FFD60A',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'flex-start',
    width: '100%',
  },
  circleA: {
    backgroundColor: colors.dark10,
    borderRadius: 25,
    height: 50,
    left: '50%',
    marginLeft: -25,
    marginTop: -25,
    position: 'absolute',
    top: '50%',
    width: 50,
  },
  circleB: {
    backgroundColor: colors.dark10,
    borderRadius: 25,
    height: 50,
    left: '50%',
    marginLeft: -25,
    marginTop: -25,
    position: 'absolute',
    top: '50%',
    width: 50,
  },
  formBox: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 60,
    width: '100%',
  },
  passwordForm: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: '#666',
    borderWidth: 2,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  userForm: {
    borderColor: '#666',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 2,
    marginTop: 30,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
});
