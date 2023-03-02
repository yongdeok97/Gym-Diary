import React from 'react';
import {Text} from 'react-native';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import {useIsFocused} from '@react-navigation/native';
import * as T from '../assets/styles/TimeStyle/TimeStyle';

export default function TimeScreen(props) {
  const isFocused = useIsFocused();

  const [isPlaying, setIsPlaying] = React.useState(true);
  const [mode, setMode] = React.useState(true);

  const [round, setRound] = React.useState(0);
  const [rest, setRest] = React.useState();

  React.useEffect(() => {
    setRest(props.route.params.info.rest);
    if (isFocused === true) setRound(round + 1);
  }, [isFocused]);

  return (
    <T.Container>
      <T.RoundContainer>
        <T.RoundText>Round {round}</T.RoundText>
      </T.RoundContainer>
      <T.ExerciseContainer>
        <T.ExerciseText>{props.route.params.info.type}</T.ExerciseText>
      </T.ExerciseContainer>
      <CountdownCircleTimer
        key={isFocused}
        isPlaying={isPlaying}
        duration={rest}
        colors={['#004777', '#F7B801', '#A30000', '#A30000']}
        colorsTime={[10, 6, 3, 0]}
        onComplete={() => ({
          shouldRepeat: false,
          delay: 2,
        })}
        updateInterval={1}>
        {({remainingTime, color}) =>
          remainingTime === 0 ? (
            (props.navigation.navigate('ExerciseScreen', {
              info: props.route.params,
              round: round,
            }),
            console.log('time', props.route.params))
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
    </T.Container>
  );
}
