import React from "react";
import styled from 'styled-components'

// common
export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

export const ExerciseContainer = styled.View`
  flex: 0.1;
`;
export const ExerciseText = styled.Text`
  font-size: 20;
  font-weight: bold;
`;
export const RoundContainer = styled.View`
  margin-bottom: 30px;
`;
export const RoundText = styled.Text`
  font-size: 40;
  font-weight: bold;
`;
export const StopAndGo = styled.Button`

`;

//exercise
export const ExerciseView = styled.View`
  justify-content: flex-start;
  flex: 0.1;
`;

export const LabelView = styled.View`
  flex-direction: row;
  margin-top: 20px;
`;

export const InputView = styled.View`
  flex: 0.5;
  border-color: '#000000';
  border-width: 1.6;
  border-radius: 10px;
`;
export const InputLabel = styled.Text`
  font-size: 20px;
  margin-top: 10px;
  margin-right: 15px;
`;
export const InputText = styled.TextInput`
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  margin-top: 10px;
`;

export const SaveButton = styled.Button`
  border-top: 20px;
`;
