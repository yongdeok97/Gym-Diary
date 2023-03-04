import React from 'react';
import ModalScreenForTime from './ModalScreenForTime';
import ModalScreenForReps from './ModalScreenForReps';
import * as Home from '../assets/styles/HomeStyle/HomeStyle';

// Home Screen
// Set my exercise information
export default function HomeScreen(props) {
  // for exercise log
  const [type, setType] = React.useState('');
  const [time, setTime] = React.useState(0);
  const [rest, setRest] = React.useState(0);
  const [reps, setReps] = React.useState(0);

  const onTimeSelect = value => {
    setTime(value);
  };

  const onRepsSelect = value => {
    setReps(value);
  };

  const onRestSelect = value => {
    setRest(value);
  };

  return (
    <Home.Container>
      <Home.MenuContainer>
        <Home.MenuButton
          onPress={() => {
            props.navigation.openDrawer();
          }}>
          <Home.MenuText>🟰</Home.MenuText>
        </Home.MenuButton>
      </Home.MenuContainer>
      <Home.Title>Set Routine</Home.Title>
      <Home.ContentContainer>
        <Home.InputRow>
          <Home.LabelContainer>
            <Home.LabelText>운동</Home.LabelText>
          </Home.LabelContainer>
          <Home.InputContainer
          // In styled-comonent, it does not work, so it is put inline...
            style={[
              {
                shadowColor: '#171999',
                shadowOffset: {width: -2, height: 4},
                shadowOpacity: 0.4,
                shadowRadius: 3,
              },
            ]}>
            <Home.Input
              onChangeText={setType}
              value={type}
              placeholder=" set exercise name"
            />
          </Home.InputContainer>
        </Home.InputRow>
        <Home.InputRow>
          <Home.LabelContainer>
            <Home.LabelText>휴식</Home.LabelText>
          </Home.LabelContainer>
          <Home.InputContainer
            style={[
              {
                shadowColor: '#171999',
                shadowOffset: {width: -2, height: 4},
                shadowOpacity: 0.4,
                shadowRadius: 3,
              },
            ]}>
            <Home.SetLabel>
              {Math.floor(rest / 60)} : {rest % 60}
            </Home.SetLabel>
          </Home.InputContainer>
          <ModalScreenForTime onValueChange={onRestSelect}></ModalScreenForTime>
        </Home.InputRow>
        <Home.InputRow>
          <Home.LabelContainer>
            <Home.LabelText>라운드</Home.LabelText>
          </Home.LabelContainer>
          <Home.InputContainer
            style={[
              {
                shadowColor: '#171999',
                shadowOffset: {width: -2, height: 4},
                shadowOpacity: 0.4,
                shadowRadius: 3,
              },
            ]}>
            <Home.SetLabel>{reps}</Home.SetLabel>
          </Home.InputContainer>
          <ModalScreenForReps onValueChange={onRepsSelect}></ModalScreenForReps>
        </Home.InputRow>
        <Home.InputRow>
          <Home.LabelContainer>
            <Home.LabelText>시간</Home.LabelText>
          </Home.LabelContainer>
          <Home.InputContainer
            style={[
              {
                shadowColor: '#171999',
                shadowOffset: {width: -2, height: 4},
                shadowOpacity: 0.4,
                shadowRadius: 3,
              },
            ]}>
            <Home.SetLabel>
              {Math.floor(time / 60)} : {time % 60}
            </Home.SetLabel>
          </Home.InputContainer>
          <ModalScreenForTime onValueChange={onTimeSelect}></ModalScreenForTime>
        </Home.InputRow>
      </Home.ContentContainer>
      <Home.Contents>
        <Home.PlayButton
          onPress={() => {{
            const newItem = {
              type: type,
              rest: rest,
              reps: reps,
              time: time,
            };
            if (
              type === undefined ||
              rest === undefined ||
              reps === undefined ||
              time === undefined
            ) {
              alert('모든 내용을 기입해 주세요');
            } else if (rest <= 0 || time <= 0) {
              alert('휴식시간과 운동 시간을 적절히 적어 주세요');
            } else if (reps <= 0) {
              alert('적어도 한 라운드 이상 진행 하셔야 합니다');
            } else {
                setTime(0),
                setReps(0),
                setRest(0),
                setType(),
                props.navigation.navigate('TimeScreen', {info: newItem});
            }
          }}}>
          <Home.ButtonLabel>go!</Home.ButtonLabel>
        </Home.PlayButton>
      </Home.Contents>
    </Home.Container>
  );
}
