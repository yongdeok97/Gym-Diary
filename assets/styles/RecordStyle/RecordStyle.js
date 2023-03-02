import styled from 'styled-components'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f2f2f2;
`;

export const MenuView = styled.View`
  height: 10%;
  background-color: #f2f2f2;
  justify-content: flex-start;
  margin-left: 20px;
  align-items: center;
  flex-direction: row;
`;
export const MenuButton = styled.TouchableOpacity`
  padding: 10px;
`;
export const MenuLabel = styled.Text`
  font-size: 15px;
`;

export const Label = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #4d4d4d;
  margin: 20px 0;
  text-align: center;
`;
export const Contents = styled.ScrollView`
  flex: 1;
  padding: 24px;
`;

export const ButtonView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
  padding: 10px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
`;

export const Button = styled.TouchableOpacity`
  flex: 1;
`;

export const ButtonLabel = styled.Text`
  font-weight: bold;
  font-size: 15px;
  color: #4d4d4d;
  text-align: center;
`;