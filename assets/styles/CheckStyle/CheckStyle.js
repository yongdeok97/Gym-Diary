import React from 'react';
import styled from 'styled-components';

//check screen
export const MainView = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export const Scroll = styled.ScrollView`
  width: 100%;
  flex: 1;
`;

export const MainLabelView = styled.View`
  margin-top: 50px;
  align-items: center;
`;

export const MainLabel = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #333;
`;

export const LabelView = styled.View`
  margin-left: 35px;
  margin-top: 35px;
  align-items: flex-start;
  width: 90%;
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 10px;
`;

export const Label = styled.Text`
  font-size: 15px;
  font-weight: 600;
  color: #333;
`;

export const SubLabelView = styled.View`
  margin-left: 30px;
`;

export const SubLabel = styled.Text`
  margin-top: 5px;
  color: #333;
`;

export const ButtonView = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 25px;
`;

export const BackButtonView = styled.View`
  align-items: flex-start;
  padding-left: 20px;

`;
export const BackButton = styled.TouchableOpacity`

`

export const Button = styled.TouchableOpacity`
  padding: 10px 20px;
  background-color: #333;
  border-radius: 10px;
`;

export const ButtonLabel = styled.Text`
  font-size: 15px;
  color: #fff;
`;
