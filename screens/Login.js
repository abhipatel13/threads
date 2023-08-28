import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  ScrollView,
  Dimensions,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 

const Login = () => {
  const screenHeight = Dimensions.get('window').height;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        height: screenHeight,
      }}>
      <View style={{ marginTop: 150 }}>
        <Image
          style={{ width: 150, height: 100, resizeMode: 'contain' }}
          source={{
            uri: 'https://freelogopng.com/images/all_img/1688663386threads-logo-transparent.png',
          }}
        />
      </View>
      <KeyboardAvoidingView>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 30 }}>
            Login To Your Account
          </Text>
        </View>
        <View style={{ marginTop: 40 }}>
          <View
            style={{
              flexDirection: 'row',
              borderRadius: 1,
              alignItems: 'center',
              gap: 5,
              borderColor: '#D0D0D0',
              borderWidth: 1,
              paddingVertical: 6,
            }}>
            <Entypo
              name="email"
              size={24}
              color="black"
              style={{ marginLeft: 5 }}
            />
            <TextInput
              placeholder="Enter Your Email"
              placeholderTextColor="gray"
              value={email}
              onChange={(email) => setEmail(email)}
              style={{
                color: 'black',
                width: 300,
                marginVertical: 10,
                fontFamily: 'sans-serif',
                caretColor: 'black',
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              borderRadius: 1,
              alignItems: 'center',
              gap: 5,
              borderColor: '#D0D0D0',
              borderWidth: 1,
              paddingVertical: 6,
              marginTop: 20,
            }}>
            <AntDesign
              name="lock"
              size={24}
              color="black"
              style={{ marginLeft: 5 }}
            />

            <TextInput
              placeholder="Enter Your Password"
              placeholderTextColor="gray"
              secureTextEntry={true}
              value={password}
              onChange={(password) => setPassword(password)}
              style={{
                color: 'black',
                width: 300,
                marginVertical: 10,
                fontFamily: 'sans-serif',
                caretColor: 'black',
              }}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 15,
          }}>
          <Text
            style={{
              fontWeight: 500,
            }}>
            Keep me logged in
          </Text>
          <Text
            style={{
              fontWeight: 500,
              color: '#007FFF',
            }}>
            Forgot Password
          </Text>
        </View>
        <View
          style={{  marginTop : 40 , justifyContent: 'center', alignItems: 'center' }}>
          <Pressable
            style={{
              backgroundColor: 'black',
              width: 150,
              padding: 10,
              borderRadius : 10
            }}
  
            >
            <Text style={{ textAlign: 'center', color: 'white' , fontWeight : 700 }}>Login</Text>
          </Pressable >
          <Pressable  onPress={() => navigation.navigate("Register")}>
          <Text style ={{ fontSize: 11 , color : "gray" , marginTop : 10 }}>Already Have an account? SignIn</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;

const style = StyleSheet.create({});
