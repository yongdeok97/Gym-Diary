import React from 'react';
import styled from 'styled-components';
import ModalScreenForTime from './ModalScreenForTime';
import ModalScreenForReps from './ModalScreenForReps';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f2f2f2;
  padding: 20px;
`;

const ContentContainer = styled.View`
  flex: 1;
  margin-top: 20px;
  align-items: center;
  justify-content: space-between;
`;

const MenuContainer = styled.View`
  height: 50px;
  width: 100%;
  margin-left: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const MenuButton = styled.TouchableOpacity`
  padding: 10px;
`;

const MenuText = styled.Text`
  font-size: 20px;
  color: #171999;
  font-weight: bold;
`;

const Title = styled.Text`
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 30px;
  color: #171999;
`;

const InputRow = styled.View`
  flex-direction: row;
  margin-top: 20px;
  width: 100%;
`;

const LabelContainer = styled.View`
  flex: 0.3;
  align-items: center;
  justify-content: center;
`;

const LabelText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  margin-top: 10px;
  color: #171999;
`;

const InputContainer = styled.View`
  flex: 0.6;
  height: 50px;
  margin-top: 15px;
  align-items: center;
  border-color: #171999;
  border-width: 1.6;
  border-radius: 10px;
  padding: 10px;
  margin-right: 10px;
`;

const Input = styled.TextInput`
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  margin-top: 10px;
  color: #171999;
`;

const Contents = styled.View`
  flex: 0.4;
  padding: 24px;
  align-items: center;
  justify-content: flex-end;
`;

const PlayButton = styled.TouchableOpacity`
  background-color: #171999;
  border-color: #171999;
  border-width: 1.6;
  padding: 12px 0px;
  width: 80%;
  border-radius: 10px;
  margin-bottom: 30px;
`;

const ButtonLabel = styled.Text`
  font-size: 20px;
  color: white;
  text-align: center;
  font-weight: bold;
`;

const SetLabel = styled.Text`
  font-size: 20px;
`;

export default function HomeScreen(props) {
  const [type, setType] = React.useState();
  const [time, setTime] = React.useState(0);
  const [rest, setRest] = React.useState(0);
  const [reps, setReps] = React.useState(0);
  
  const onTimeSelect = (value) => {
    setTime(value);
  }

  const onRepsSelect = (value) => {
    setReps(value);
  }

  const onRestSelect = (value) => {
    setRest(value);
  }

  return (
    <Container>
      <MenuContainer>
        <MenuButton
          onPress={() => {
            props.navigation.openDrawer();
          }}>
          <MenuText>🏋️</MenuText>
        </MenuButton>
      </MenuContainer>
      <Title>Set Routine</Title>
      <ContentContainer>
        <InputRow>
          <LabelContainer>
            <LabelText>운동</LabelText>
          </LabelContainer>
          <InputContainer
            style={[
              {
                shadowColor: '#171999',
                shadowOffset: {width: -2, height: 4},
                shadowOpacity: 0.4,
                shadowRadius: 3,
              },
            ]}>
            <Input
              onChangeText={setType}
              value={type}
              placeholder=" set exercise name"
            />
          </InputContainer>
        </InputRow>
        <InputRow>
          <LabelContainer>
            <LabelText>휴식</LabelText>
          </LabelContainer>
          <InputContainer
            style={[
              {
                shadowColor: '#171999',
                shadowOffset: {width: -2, height: 4},
                shadowOpacity: 0.4,
                shadowRadius: 3,
              },
            ]}>
            <SetLabel>
              {Math.floor(rest / 60)} : {rest % 60}
            </SetLabel>
          </InputContainer>
          <ModalScreenForTime onValueChange={onRestSelect}></ModalScreenForTime>
        </InputRow>
        <InputRow>
          <LabelContainer>
            <LabelText>라운드</LabelText>
          </LabelContainer>
          <InputContainer
            style={[
              {
                shadowColor: '#171999',
                shadowOffset: {width: -2, height: 4},
                shadowOpacity: 0.4,
                shadowRadius: 3,
              },
            ]}>
            <SetLabel>
              {reps}
            </SetLabel>
          </InputContainer>
          <ModalScreenForReps onValueChange={onRepsSelect}></ModalScreenForReps>
        </InputRow>

        <InputRow>
          <LabelContainer>
            <LabelText>시간</LabelText>
          </LabelContainer>
          <InputContainer
            style={[
              {
                shadowColor: '#171999',
                shadowOffset: {width: -2, height: 4},
                shadowOpacity: 0.4,
                shadowRadius: 3,
              },
            ]}>
            <SetLabel>
              {Math.floor(time / 60)} : {time % 60}
            </SetLabel>
          </InputContainer>
          <ModalScreenForTime onValueChange={onTimeSelect}></ModalScreenForTime>
        </InputRow>
      </ContentContainer>
      <Contents>
        <PlayButton
          onPress={() => {
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
          }}>
          <ButtonLabel>go!</ButtonLabel>
        </PlayButton>
      </Contents>
    </Container>
  );
}
