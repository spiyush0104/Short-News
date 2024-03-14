import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Login = () => {
    const navigation=useNavigation();
  const handleSignUpPress = () => {
    navigation.navigate('SignUp')
    
  };
  return (
    <SafeAreaView style={styles.flex1}>
      <View style={{margin: 20}}>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Text style={{fontSize: 30}}>Username</Text>
          <TextInput
            style={styles.textinput}
            // onChangeText={onChangeText}
            // value={text}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 30}}>Password </Text>
          <TextInput
            style={styles.textinput}
            // onChangeText={onChangeText}
            // value={text}
          />
        </View>
        <View
          style={{
            height: hp('5%'),
            width: wp('100%'),
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 40,
          }}>
          <TouchableOpacity
            style={{
              height: hp('4%'),
              width: wp('20%'),
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
            }}>
            <Text style={{alignContent: 'center', justifyContent: 'center'}}>
              SUBMIT
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: hp('5%'),
            width: wp('100%'),
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <TouchableOpacity
            style={{
              height: hp('4%'),
              width: wp('20%'),
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
            }}
            onPress={handleSignUpPress}>
            <Text style={{alignContent: 'center', justifyContent: 'center'}}>
              SIGNUP
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  flex1: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centre: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textinput: {
    height: 30,
    width: 200,
    borderBottomWidth: 1,
  },
});
