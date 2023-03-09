import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../components/Theme';
import {Input} from '@rneui/base';

const SendEmail = ({navigation}) => {
  const [email, setEmail] = useState('');

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={colors.white} />
      <View style={styles.container}>
        <View style={styles.appBar}>
          <Icon
            name="arrow-left"
            size={32}
            style={{marginHorizontal: 10}}
            color={colors.black}
            onPress={() => navigation.navigate('Login')}
          />
          <Text
            style={{
              fontSize: 26,
              fontWeight: 'bold',
              marginLeft: 10,
              color: colors.black,
            }}>
            Bali
          </Text>
        </View>
        <View style={styles.progressLine} />
        <View style={styles.progress}>
          <View style={styles.progressDetail}>
            <Icon
              name="email"
              color={colors.black}
              size={16}
              style={styles.progressIcon}
              backgroundColor={colors.black}
            />
            <Text
              style={{fontWeight: 'bold', fontSize: 12, color: colors.black}}>
              Email Address
            </Text>
          </View>
          <View style={styles.progressDetail}>
            <Icon
              name="shield-key-outline"
              color={colors.black}
              size={16}
              style={styles.progressIcon}
              backgroundColor={colors.black}
            />
            <Text style={{fontWeight: 'bold', fontSize: 12}}>Get OTP Code</Text>
          </View>
          <View style={styles.progressDetail}>
            <View style={styles.progressIcon}>
              <Icon
                name="email"
                color={colors.black}
                size={16}
                backgroundColor={colors.black}
              />
            </View>
            <Text style={{fontWeight: 'bold', fontSize: 12}}>Create New</Text>
          </View>
        </View>
        <View style={styles.description}>
          <Text style={{color: colors.dark10, fontSize: 13}}>
            Kami akan kirim 4 digit kode ke email anda. Masukkan email anda
            untuk proses verivikasi.
          </Text>
        </View>
        <KeyboardAvoidingView behavior="padding" style={{alignItems: 'center'}}>
          <Input
            inputContainerStyle={styles.emailForm}
            containerStyle={{width: 300}}
            placeholder="NPP"
            placeholderTextColor="#666"
            value={email}
            leftIcon={
              <Icon
                name="card-account-details-outline"
                size={18}
                color="#333"
                style={{marginRight: 5}}
              />
            }
            onChangeText={text => setEmail(text)}
          />
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appBar: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  container: {
    backgroundColor: colors.white,
    height: '100%',
    paddingHorizontal: 10,
    paddingVertical: 20,
    width: '100%',
  },
  description: {
    paddingHorizontal: 48,
  },
  emailForm: {
    borderColor: '#666',
    borderRadius: 10,
    borderWidth: 2,
    marginTop: 30,
    paddingHorizontal: 15,
  },
  progress: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  progressDetail: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginHorizontal: 5,
    padding: 10,
  },
  progressIcon: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderColor: colors.dark40,
    borderRadius: 20,
    borderWidth: 3,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
    padding: 9,
  },
  progressIconActive: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 10,
    padding: 12,
  },
  progressLine: {
    backgroundColor: colors.dark40,
    height: 3,
    left: '50%',
    marginLeft: -100,
    position: 'absolute',
    top: 105,
    width: 200,
  },
});

export default SendEmail;
