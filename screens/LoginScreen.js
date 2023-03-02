import React, {useState} from 'react';
import {Alert, Text} from 'react-native';
import {
  signIn,
  googleSigninConfigure,
  onGoogleButtonPress,
  checkLogIn,
  preserveLogIn,
} from '../assets/components/Auth';
import {useDispatch, useSelector} from 'react-redux';
import * as LM from '../assets/styles/LMStyle/LMStyle';

const LoginScreen = props => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');

  const checkLogin = useSelector(state => state.email);

  checkLogIn(props);
  const signInSubmit = async () => {
    const info = {email, password};
    try {
      const {user} = await signIn(info);
      console.log(user);
      preserveLogIn(email);
      dispatch({type: 'login', step: email});
      props.navigation.navigate('HomeScÍeen');
    } catch (e) {
      Alert.alert('로그인에 실패셨습니다');
    }
  };

  const signInWithGoogle = async () => {
    try {
      await onGoogleButtonPress();
      props.navigation.navigate('HomeScreen');
    } catch (e) {
      Alert.alert('로그인에 실패셨습니다');
    }
  };

  React.useEffect(() => {
    googleSigninConfigure();
  });

  return (
    <LM.Container>
      <Text style={{color: '#171999', fontSize: 20}}>Login</Text>
      <LM.Input
        placeholder="email"
        placeholderTextColor="#171999"
        value={email}
        onChangeText={setEmail}
      />
      <LM.Input
        placeholder="Password"
        placeholderTextColor="#171999"
        value={password}
        onChangeText={setpassword}
        secureTextEntry={true}
      />
      <LM.ButtonContainer>
        <LM.Button onPress={signInSubmit}>
          <LM.ButtonLabel>Login</LM.ButtonLabel>
        </LM.Button>
        <LM.Button onPress={() => signInWithGoogle()}>
          <LM.ButtonLabel>Login with Google</LM.ButtonLabel>
        </LM.Button>
      </LM.ButtonContainer>
      <LM.Button
        onPress={() =>
          console.log(props.navigation.navigate('MembershipScreen'))
        }>
        <LM.ButtonLabel>Make Account</LM.ButtonLabel>
      </LM.Button>
    </LM.Container>
  );
};

export default LoginScreen;
