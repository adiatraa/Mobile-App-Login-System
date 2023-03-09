// src/components/Dashboard.js

import React, {useContext, useState, useEffect} from 'react';
import {StatusBar, SafeAreaView, StyleSheet, View} from 'react-native';
import {colors, fonts} from '../components/Theme';
import {AuthContext} from '../context/AuthContext';
import Spinner from '../components/Spinner';
import {Button, Text} from '@rneui/base';
import {Image} from '@rneui/themed';
import Icon from 'react-native-vector-icons/Octicons';
import axios from 'axios';
import {BASE_URL} from '../../config';

const HomePage = () => {
  const {logout, userToken, userInfo, newToken} = useContext(AuthContext);
  const [status, setStatus] = useState('');
  const [data, setData] = useState(null);

  useEffect(() => {
    setStatus('loading');
    const fetchMyAPI = async () => {
      try {
        axios
          .get(BASE_URL + '/test/user/' + userInfo.id, {
            headers: {'x-access-token': userToken},
          })
          .then(response => {
            setData(response.data);
          })
          .catch(e => {
            axios
              .post(BASE_URL + '/auth/refreshtoken', {
                refreshToken: userInfo.refreshToken,
              })
              .then(response => newToken(response.accessToken))
              .catch(e => logout());
          });
      } catch {}
    };
    setStatus('success');

    const intervalId = setInterval(() => {
      fetchMyAPI();
    }, 1000 * 5); // in milliseconds
    return () => clearInterval(intervalId);
  });

  if (status === 'loading' || data === null) {
    return <Spinner />;
  }

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={colors.dark} />
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/essp.png')}
                style={{
                  width: 20,
                  height: 30,
                  marginRight: 10,
                  paddingVertical: 10,
                }}
              />
              <Text
                style={{color: colors.white, fontSize: 11, fontWeight: 'bold'}}>
                EMPLOYEE SELF SERVICE {'\n'}
                PT. PINDAD
              </Text>
            </View>
            <View style={styles.headerNotifIcon}>
              <Icon name="bell" color={colors.white} size={18} />
            </View>
          </View>
          <View style={styles.headerBottom}>
            <Text style={{color: colors.white, fontSize: 12}}>
              Good Morning
            </Text>
            <Text
              style={{color: colors.white, fontSize: 20, fontWeight: 'bold'}}>
              Beautiful day is coming!
            </Text>
          </View>
        </View>
        <View style={styles.main}>
          <View style={styles.mainCard}>
            <View style={styles.mainCardTop}>
              <Image
                source={{
                  uri: 'https://liputan7upcash.com/wp-content/uploads/2022/07/Freya-JKT48-agama.jpg',
                }}
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 35,
                  marginRight: 10,
                }}
                resizeMode="cover"
              />
              <View>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                  Freyanashifa Jayawardana
                </Text>
                <Text style={{fontSize: 12}}>{data.email}</Text>
              </View>
            </View>
            <Button
              title="Log out"
              onPress={() => logout()}
              style={{marginBottom: 20}}
            />
            {/* <Button title="Load" onPress={loadImage} /> */}
            {/* <Text>{status}</Text> */}
          </View>
          <View style={styles.mainMenu} />
          <View style={styles.mainMenu} />
          <View style={styles.mainMenu} />
        </View>
        {/* <Image
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/id/6/6e/Logo_PT_Pindad_%28Persero%29.png',
        }}
        width={300}
        height={500}
        style={styles.image}
        />

        <View style={styles.buttonGroup}>
        <Button title="Get Image" onPress={loadImage} />
        <Button title="Logout" onPress={() => authContext.logout()} />
      </View> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    backgroundColor: colors.dark,
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-between',
  },
  header: {
    backgroundColor: colors.dark,
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 20,
    paddingVertical: 15,
    width: '100%',
  },
  headerBottom: {
    display: 'flex',
    marginTop: 20,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  headerNotifIcon: {
    backgroundColor: colors.dark10,
    borderRadius: 50,
    paddingHorizontal: 9,
    paddingVertical: 7,
  },
  headerTop: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  main: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    display: 'flex',
    flexDirection: 'column',
    height: '72%',
    justifyContent: 'flex-start',
    width: '100%',
  },
  mainCard: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    marginTop: -50,
    paddingBottom: 120,
    paddingHorizontal: 20,
    paddingTop: 20,
    width: '90%',
  },
  mainCardTop: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  mainMenu: {
    backgroundColor: colors.dark40,
    borderRadius: 20,
    height: 80,
    marginTop: 20,
    width: '80%',
  },
});
export default HomePage;
