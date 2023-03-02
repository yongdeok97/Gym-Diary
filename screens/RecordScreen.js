import React from 'react';
import _ from 'lodash';
import firestore from '@react-native-firebase/firestore';
import {useSelector} from 'react-redux';
import * as Record from '../assets/styles/RecordStyle/RecordStyle';

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
    <Record.Container>
      <Record.MenuView>
        <Record.MenuButton
          onPress={() => {
            props.navigation.openDrawer();
          }}>
          <Record.MenuLabel>🏋️</Record.MenuLabel>
        </Record.MenuButton>
      </Record.MenuView>
      <Record.Contents>
        {users !== undefined ? (
          users.map(el => (
            <Record.ButtonView>
              <Record.Button
                onPress={() => {
                  props.navigation.navigate('CheckScreenDay', {id: el.id});
                }}>
                <Record.ButtonLabel>
                  {el.id.replace(':', '-').replace(':', '-').replace(':', '  ')}
                </Record.ButtonLabel>
              </Record.Button>
              <Record.Button
                onPress={() => {
                  DeleteDB(el.id);
                }}>
                <Record.ButtonLabel>❌</Record.ButtonLabel>
              </Record.Button>
            </Record.ButtonView>
          ))
        ) : (
          <Record.Label>no data</Record.Label>
        )}
      </Record.Contents>
    </Record.Container>
  );
}
