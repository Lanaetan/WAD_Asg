import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';
import type { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types'; 

export default function SignupScreen() {
  const navigation = useNavigation<StackScreenProps<RootStackParamList, 'SignUp'>['navigation']>();

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../assets/images/background.png')} />
      <View style={styles.lightImage}>
        <Animated.Image entering={FadeInUp.delay(400).duration(1000).springify()} style={styles.light} source={require('../../assets/images/light.png')} />
        <Animated.Image entering={FadeInUp.delay(600).duration(1000).springify()} style={styles.light2} source={require('../../assets/images/light.png')} />
      </View>

      <View style={[styles.form, { justifyContent: 'center', alignItems: 'center' }]}>
        <Animated.Text entering={FadeInUp.duration(1000).springify()} style={styles.login}>Sign Up</Animated.Text>
      </View>

      <View style={styles.formContainer}>
      <Animated.View entering={FadeInUp.duration(1000).springify()} style={[styles.inputBox, { marginBottom:10 }]}>
          <TextInput placeholder="Username" placeholderTextColor={'grey'} />
        </Animated.View>
        <Animated.View entering={FadeInUp.delay(200).duration(1000).springify()} style={styles.inputBox}>
          <TextInput placeholder="Email" placeholderTextColor={'grey'} />
        </Animated.View>
        <Animated.View entering={FadeInUp.delay(400).duration(1000).springify()} style={[styles.inputBox, { marginBottom: 20, marginTop: 10 }]}>
          <TextInput placeholder="Password" placeholderTextColor={'grey'} secureTextEntry />
        </Animated.View>
        <Animated.View entering={FadeInUp.delay(600).duration(1000).springify()} style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View entering={FadeInUp.delay(800).duration(1000).springify()} style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{ color: '#0284c7' }}>Login</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
  },
  image: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  lightImage: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    position: 'absolute',
  },
  light: {
    height: 225,
    width: 90,
  },
  light2: {
    height: 160,
    width: 65,
  },
  form: {
    height: '100%',
    width: '100%',
    paddingTop: 100,
    paddingBottom: 6,
    justifyContent: 'space-around',
    flex: 1,
  },
  login: {
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: 1,
    fontSize: 40,
  },
  formContainer: {
    flex: 1,
    alignItems: 'center',
    marginLeft: 16,
    marginRight: 16,
  },
  inputBox: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    padding: 6,
    borderRadius: 16,
    width: '100%',
  },
  buttonContainer: {
    width: '100%',
  },
  button: {
    width: '100%',
    backgroundColor: '#38bdf8',
    padding: 12,
    borderRadius: 24,
    marginBottom: 12,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});
