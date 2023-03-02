import React from 'react';
import styled from 'styled-components'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f2f2f2;
  padding: 20px;
`;

export const ContentContainer = styled.View`
  flex: 1;
  margin-top: 20px;
  align-items: center;
  justify-content: space-between;
`;

export const MenuContainer = styled.View`
  height: 50px;
  width: 100%;
  margin-left: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const MenuButton = styled.TouchableOpacity`
  padding: 10px;
`;

export const MenuText = styled.Text`
  font-size: 20px;
  color: #171999;
  font-weight: bold;
`;

export const Title = styled.Text`
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 30px;
  color: #171999;
`;

export const InputRow = styled.View`
  flex-direction: row;
  margin-top: 20px;
  width: 100%;
`;

export const LabelContainer = styled.View`
  flex: 0.3;
  align-items: center;
  justify-content: center;
`;

export const LabelText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  margin-top: 10px;
  color: #171999;
`;

export const InputContainer = styled.View`
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

export const Input = styled.TextInput`
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  margin-top: 10px;
  color: #171999;
`;

export const Contents = styled.View`
  flex: 0.4;
  padding: 24px;
  align-items: center;
  justify-content: flex-end;
`;

export const PlayButton = styled.TouchableOpacity`
  background-color: #171999;
  border-color: #171999;
  border-width: 1.6;
  padding: 12px 0px;
  width: 80%;
  border-radius: 10px;
  margin-bottom: 30px;
`;

export const ButtonLabel = styled.Text`
  font-size: 20px;
  color: white;
  text-align: center;
  font-weight: bold;
`;

export const SetLabel = styled.Text`
  font-size: 20px;
`;