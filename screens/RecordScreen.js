import React from 'react';
import _ from 'lodash';
import firestore from '@react-native-firebase/firestore';
import {useSelector} from 'react-redux';
import * as Record from '../assets/styles/RecordStyle/RecordStyle';

// A page where you can check the list of records by time
export default function RecordScreen(props) {
  const [users, setUsers] = React.useState();
  const checkId = useSelector(state => state.email);

  // delete record
  const DeleteDB = async prop => {
    try {
      await addCollection.doc(prop).delete();
      console.log('Delete Complete!');
    } catch (error) {
      console.log(error.message);
    }
  };

  React.useEffect(() => {
    // Get an hourly record of your data.
    const _callApi = async () => {
      try {
        const addCollection = firestore().collection(String(checkId));
        const data = await addCollection.get();
        setUsers(data._docs.map(doc => ({...doc.data(), id: doc.id})));
      } catch (error) {
        console.log(error.message);
      }
    };
    _callApi();
  }, [checkId]);

  return (
    <Record.Container>
      <Record.MenuView>
        <Record.MenuButton
          onPress={() => {
            props.navigation.openDrawer();
          }}>
          <Record.MenuLabel>🟰</Record.MenuLabel>
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
