import React from "react";
import styled from 'styled-components'

//login and membership page
export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0);
`;

export const Input = styled.TextInput`
  width: 90%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border-width: 3px;
  border-color: #171999;
  color: #171999;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  border-color: #171999;
  border-width: 2px;
  border-radius: 5px;
`;

export const Button = styled.TouchableOpacity`
  padding: 10px 20px;
  border-radius: 10px;
`;

export const ButtonLabel = styled.Text`
  font-size: 15px;
  color: #171999;
`;
