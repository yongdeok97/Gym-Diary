import auth from "@react-native-firebase/auth";
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';


  export async function checkLogIn (props){
    const dispatch = useDispatch();
    let email = await AsyncStorage.getItem('logInlog');
    console.log('email',email)
    if (email === null) {
    }
    else
    {
      dispatch({type: 'login', step: email});
      props.navigation.navigate('HomeScreen');
    }
  };

export const preserveLogIn = async (email) => {
  console.log(email);
  AsyncStorage.setItem('logInlog', email);
};


export function signIn({email, password}) {
  return auth().signInWithEmailAndPassword(email, password);
}

export function signUp({email, password}) {
  return auth().createUserWithEmailAndPassword(email, password);
}

export function subscribeAuth(callback) {
  return auth().onAuthStateChanged(callback);
}

export function signOut() {
  return auth().signOut();
}

export const googleSigninConfigure = () => {
    GoogleSignin.configure({
      webClientId:
        '776883032422-hla5brdij4eenmhhat84bdtu5fbvhncc.apps.googleusercontent.com',
    });
  };
  
export const onGoogleButtonPress = async () => {
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
  };