import auth from "@react-native-firebase/auth";
import {GoogleSignin} from '@react-native-google-signin/google-signin';

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