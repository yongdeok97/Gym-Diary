import React from 'react';
import {Text, Alert} from 'react-native';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as T from '../assets/styles/TimeStyle/TimeStyle';

export default function ExerciseScreen(props) {
  const [isPlaying, setIsPlaying] = React.useState(true);

  const [mode, setMode] = React.useState(true);
  const [weight, setWeight] = React.useState();
  const [count, setCount] = React.useState();

  let round = props.route.params.round;
  let Ptype = props.route.params.info.info.type;
  // ayncStorage storage function
  // In order to access the database less, use ayncStorage to collect and upload data at once.
  const store = async () => {
    let newList = await AsyncStorage.getItem('record');
    if (newList === null) {
      newList = [];
    } else {
      newList = JSON.parse(newList);
    }
    newList.push({type: Ptype, round: round, weight: weight, count: count});
    AsyncStorage.setItem('record', JSON.stringify(newList));
    String(props.route.params.round) == props.route.params.info.info.reps
      ? props.navigation.navigate('CheckScreen')
      : props.navigation.goBack();
  };

  const createTwoButtonAlert = () =>
    Alert.alert(
      'Round ' + props.route.params.round,
      String(props.route.params.round) == props.route.params.info.info.reps
        ? '마지막 라운드 \n 저장 하시겠습니까?'
        : '저장 하시겠습니까?',
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: store,
        },
      ],
    );

  return (
    <T.Container>
      <T.RoundContainer>
        <T.RoundText>Round {props.route.params.round}</T.RoundText>
      </T.RoundContainer>
      <T.ExerciseContainer>
        <T.ExerciseText>{props.route.params.info.info.type}</T.ExerciseText>
      </T.ExerciseContainer>
      <CountdownCircleTimer
        isPlaying={isPlaying}
        duration={props.route.params.info.info.time}
        colors={['#004777', '#F7B801', '#A30000', '#A30000']}
        colorsTime={[10, 6, 3, 0]}
        onComplete={() => ({
          shouldRepeat: false,
          delay: 2,
        })}
        updateInterval={1}>
        {({remainingTime, color}) =>
          remainingTime < 0 ? (
            // sound option
            <Text style={{color, fontSize: 40}}>over</Text>
          ) : (
            <Text style={{color, fontSize: 40}}>{remainingTime}</Text>
          )
        }
      </CountdownCircleTimer>
      <T.StopAndGo
        title={mode === true ? 'stop' : 'go'}
        onPress={() => {
          setIsPlaying(prev => !prev);
          setMode(!mode);
        }}
      />
      <T.LabelView>
        <T.InputLabel>무게 입력: </T.InputLabel>
        <T.InputView
          // In styled-comonent, it does not work, so it is put inline...
          style={[
            {
              shadowColor: '#171999',
              shadowOffset: {width: -2, height: 4},
              shadowOpacity: 0.4,
              shadowRadius: 3,
            },
          ]}>
          <T.InputText onChangeText={setWeight} value={weight} />
        </T.InputView>
        <T.InputLabel> kg </T.InputLabel>
      </T.LabelView>
      <T.LabelView>
        <T.InputLabel>갯수 입력: </T.InputLabel>
        <T.InputView
          style={[
            {
              shadowColor: '#171999',
              shadowOffset: {width: -2, height: 4},
              shadowOpacity: 0.4,
              shadowRadius: 3,
            },
          ]}>
          <T.InputText onChangeText={setCount} value={count} />
        </T.InputView>
        <T.InputLabel> 회 </T.InputLabel>
      </T.LabelView>
      <T.SaveButton
        title={'save'}
        onPress={() => {
          createTwoButtonAlert();
        }}
      />
    </T.Container>
  );
}
