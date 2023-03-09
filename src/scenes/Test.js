import {ScrollView, StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';
import * as Progress from 'react-native-progress';
import {SafeAreaView} from 'react-native';
import {colors, fonts} from '../components/Theme';
import Logo from '../assets/logo_2.svg';
import {ImageBackground} from 'react-native';
import {Button, Image, Text} from '@rneui/base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Test = ({navigation}) => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <View style={styles.header}>
        <Logo width={60} height={40} />
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.mainCard}>
          <ImageBackground
            source={require('../assets/backgroundCard.png')}
            resizeMode={'stretch'}
            borderRadius={20}
            style={styles.mainCardBackground}>
            <View style={styles.mainCardBody}>
              <Text style={styles.mainCardTime}>08.43</Text>
              <Text style={styles.mainCardDate}>Kamis, 24 Mei 2023</Text>
              <View style={styles.mainCardFeature}>
                <Button
                  title={'Clock In'}
                  containerStyle={styles.mainCardButtonContainer}
                  buttonStyle={styles.mainCardButton}
                />
              </View>
            </View>
          </ImageBackground>
        </View>
        <View />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Test;

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.white,
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  mainCard: {
    height: 'auto',
    marginTop: 10,
    paddingHorizontal: 30,
    position: 'relative',
    width: '100%',
  },
  mainCardBody: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  mainCardDate: {
    fontFamily: fonts.poppins,
    fontSize: 14,
  },
  mainCardTime: {
    fontFamily: fonts.poppins_sb,
    fontSize: 40,
    fontWeight: 'bold',
  },
  scrollView: {
    backgroundColor: colors.white,
    height: '100%',
    width: '100%',
  },
});
