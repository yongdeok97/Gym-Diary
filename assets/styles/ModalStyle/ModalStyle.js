import React from "react";
import styled from 'styled-components'

// modal reps time rest
export const Container = styled.View`
  /* align-items: center; */
  padding: 20px;
`;

export const TimeText = styled.Text`
  font-size: 20px;
`;

export const PickerContainer = styled.View`
  width: 50%;
  height: 100%;
  border-width: 1px;
  border-color: gray;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const Button = styled.TouchableOpacity`
  background-color: lightblue;
  padding: 10px;
  border-radius: 10px;
`;

export const ButtonText = styled.Text`
  font-size: 20px;
  color: white;
`;

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.View`
  width: 100%;
  background-color: white;
  padding: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const ModalSubContent = styled.View`
  flex-direction: row;
`;

