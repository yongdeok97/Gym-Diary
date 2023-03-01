import React, {useEffect} from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import firestore from '@react-native-firebase/firestore';
import {useSelector} from 'react-redux';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f2f2f2;
`;

const MenuView = styled.View`
  height: 10%;
  background-color: #f2f2f2;
  justify-content: flex-start;
  margin-left: 20px;
  align-items: center;
  flex-direction: row;
`;
const MenuButton = styled.TouchableOpacity`
  padding: 10px;
`;
const MenuLabel = styled.Text`
  font-size: 15px;
`;

const Label = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #4d4d4d;
  margin: 20px 0;
  text-align: center;
`;
const Contents = styled.ScrollView`
  flex: 1;
  padding: 24px;
`;

const ButtonView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
  padding: 10px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
`;

const Button = styled.TouchableOpacity`
  flex: 1;
`;

const ButtonLabel = styled.Text`
  font-weight: bold;
  font-size: 15px;
  color: #4d4d4d;
  text-align: center;
`;

export default function RecordScreen(props) {
  const [users, setUsers] = React.useState();
  const checkLogin = useSelector(state => state.email);
  const addCollection = firestore().collection(String(checkLogin));

  const DeleteDB = async prop => {
    try {
      await addCollection.doc(prop).delete();
      console.log('Delete Complete!');
    } catch (error) {
      console.log(error.message);
    }
  };

  React.useEffect(() => {
    const _callApi = async () => {
      try {
        const data = await addCollection.get();
        setUsers(data._docs.map(doc => ({...doc.data(), id: doc.id})));
      } catch (error) {
        console.log(error.message);
      }
    };
    _callApi();
  }, [users]);

  return (
    <Container>
      <MenuView>
        <MenuButton
          onPress={() => {
            props.navigation.openDrawer();
          }}>
          <MenuLabel>🏋️</MenuLabel>
        </MenuButton>
      </MenuView>
      <Contents>
        {users !== undefined ? (
          users.map(el => (
            <ButtonView>
              <Button
                onPress={() => {
                  props.navigation.navigate('CheckScreenDay', {id: el.id});
                }}>
                <ButtonLabel>
                  {el.id.replace(':', '-').replace(':', '-').replace(':', '  ')}
                </ButtonLabel>
              </Button>
              <Button
                onPress={() => {
                  DeleteDB(el.id);
                }}>
                <ButtonLabel>❌</ButtonLabel>
              </Button>
            </ButtonView>
          ))
        ) : (
          <Label>no data</Label>
        )}
      </Contents>
    </Container>
  );
}
