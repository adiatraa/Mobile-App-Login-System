import {ScrollView, StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';
import * as Progress from 'react-native-progress';
import {SafeAreaView} from 'react-native';
import {colors, fonts} from '../components/Theme';
import Logo from '../assets/logo_2.svg';
import {ImageBackground} from 'react-native';
import {Button, Image, Text} from '@rneui/base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <View style={styles.header}>
        <Logo width={60} height={40} />
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.profileCard}>
          <ImageBackground
            source={require('../assets/backgroundCard.png')}
            resizeMode={'cover'}
            borderRadius={20}
            style={styles.profileCardBody}>
            <Image
              source={{
                uri: 'https://liputan7upcash.com/wp-content/uploads/2022/07/Freya-JKT48-agama.jpg',
              }}
              style={{
                width: 60,
                height: 60,
                borderRadius: 35,
                marginRight: 10,
              }}
              resizeMode="cover"
            />
            <View>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: fonts.poppins_b,
                  fontWeight: 'bold',
                }}>
                Freyanashifa Jayawardana
              </Text>
              <Text style={{fontSize: 12, fontFamily: fonts.poppins}}>
                back End
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={{marginBottom: 100}}>
          <Text style={styles.subTitle}>Data Karyawan</Text>
          <View style={styles.dataKaryawan}>
            <View style={styles.dataKaryawanProgress}>
              <Progress.Circle
                strokeCap="round"
                animated={false}
                size={80}
                borderWidth={0}
                color={colors.danger}
                unfilledColor="rgba(200, 200, 200, 0.2)"
                thickness={6}
                progress={3 / 10}
                fill={'transparent'}
                showsText={true}
                formatText={progress => {
                  return progress * 10 + ' Hari';
                }}
                textStyle={styles.progressText}
              />
              <Text style={styles.dataKaryawanTitle}>Sisa Cuti</Text>
            </View>
            <View style={styles.dataKaryawanProgress}>
              <Progress.Circle
                strokeCap="round"
                animated={false}
                size={80}
                borderWidth={0}
                color={colors.success}
                unfilledColor="rgba(200, 200, 200, 0.2)"
                thickness={6}
                progress={8 / 10}
                fill={'transparent'}
                showsText={true}
                formatText={progress => {
                  return progress * 10 + ' Jam';
                }}
                textStyle={styles.progressText}
              />
              <Text style={styles.dataKaryawanTitle}>Jam Lembur</Text>
            </View>
            <View style={styles.dataKaryawanProgress}>
              <Progress.Circle
                strokeCap="round"
                animated={false}
                size={80}
                borderWidth={0}
                color={colors.blue}
                unfilledColor="rgba(200, 200, 200, 0.2)"
                thickness={6}
                progress={5 / 10}
                fill={'transparent'}
                showsText={true}
                formatText={progress => {
                  return progress * 10 + ' Hari';
                }}
                textStyle={styles.progressText}
              />
              <Text style={styles.dataKaryawanTitle}>Dinas</Text>
            </View>
          </View>
          <Text style={styles.subTitle}>Monitoring</Text>
          <View style={styles.divider} />
          <View style={styles.monitoring}>
            <Button
              title={'Absensi'}
              titleStyle={styles.monitoringTitle}
              containerStyle={styles.monitoringButtonContainer}
              buttonStyle={styles.monitoringButton}
              icon={
                <Icon
                  name="calendar-month"
                  size={20}
                  color={colors.primary}
                  style={styles.monitoringIcon}
                />
              }
            />
            <Button
              title={'Kesehatan'}
              titleStyle={styles.monitoringTitle}
              containerStyle={styles.monitoringButtonContainer}
              buttonStyle={styles.monitoringButton}
              icon={
                <Icon
                  name="heart-plus-outline"
                  size={20}
                  color={colors.primary}
                  style={styles.monitoringIcon}
                />
              }
            />
            <Button
              title={'Jam Terbuang'}
              titleStyle={styles.monitoringTitle}
              containerStyle={styles.monitoringButtonContainer}
              buttonStyle={styles.monitoringButton}
              icon={
                <Icon
                  name="timelapse"
                  size={20}
                  color={colors.primary}
                  style={styles.monitoringIcon}
                />
              }
            />
          </View>
          <Text style={styles.subTitle}>Monitoring</Text>
          <View style={styles.divider} />
          <View style={styles.monitoring}>
            <Button
              title={'Absensi'}
              titleStyle={styles.monitoringTitle}
              containerStyle={styles.monitoringButtonContainer}
              buttonStyle={styles.monitoringButton}
              icon={
                <Icon
                  name="calendar-month"
                  size={20}
                  color={colors.primary}
                  style={styles.monitoringIcon}
                />
              }
            />
            <Button
              title={'Kesehatan'}
              titleStyle={styles.monitoringTitle}
              containerStyle={styles.monitoringButtonContainer}
              buttonStyle={styles.monitoringButton}
              icon={
                <Icon
                  name="heart-plus-outline"
                  size={20}
                  color={colors.primary}
                  style={styles.monitoringIcon}
                />
              }
            />
            <Button
              title={'Jam Terbuang'}
              titleStyle={styles.monitoringTitle}
              containerStyle={styles.monitoringButtonContainer}
              buttonStyle={styles.monitoringButton}
              icon={
                <Icon
                  name="timelapse"
                  size={20}
                  color={colors.primary}
                  style={styles.monitoringIcon}
                />
              }
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  dataKaryawan: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
    paddingHorizontal: 30,
  },
  dataKaryawanProgress: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  dataKaryawanTitle: {
    fontFamily: fonts.poppins_m,
    fontSize: 14,
    marginTop: 10,
    textAlign: 'center',
  },
  divider: {
    backgroundColor: '#fff',
    borderBottomColor: colors.primary,
    borderBottomWidth: 2,
    elevation: 5,
    left: 30,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 1,
    shadowRadius: 3,
    width: 70,
  },
  header: {
    backgroundColor: colors.white,
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  monitoring: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 20,
    paddingHorizontal: 30,
  },
  monitoringButton: {
    backgroundColor: colors.white,
    borderColor: colors.dark60,
    borderRadius: 10,
    borderWidth: 1,
    color: colors.dark,
    elevation: 5,
    flex: 1,
    marginVertical: 10,
    paddingVertical: 15,
    shadowColor: '#333',
    shadowOffset: {width: 2, height: 1},
    shadowRadius: 3,
  },
  monitoringButtonContainer: {width: 150},
  monitoringIcon: {marginLeft: -10, paddingRight: 10},
  monitoringTitle: {
    color: colors.dark,
    fontFamily: fonts.poppins_sb,
    fontSize: 12,
    fontWeight: 'bold',
  },
  profileCard: {
    height: 'auto',
    marginTop: 10,
    paddingHorizontal: 30,
    position: 'relative',
    width: '100%',
  },
  profileCardBody: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  progressText: {fontSize: 12, fontWeight: 'bold'},
  scrollView: {
    backgroundColor: colors.white,
    height: '100%',
    width: '100%',
  },
  subTitle: {
    fontFamily: fonts.poppins_sb,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
    paddingHorizontal: 30,
  },
});
