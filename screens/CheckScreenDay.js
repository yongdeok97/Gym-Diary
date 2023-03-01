import React from 'react';
import styled from 'styled-components';
import firestore from '@react-native-firebase/firestore';
import { useSelector } from 'react-redux';
import * as Check from '../assets/styles/CheckStyle/CheckStyle'
//detail
export default function CheckScreenDay(props) {
  const checkLogin = useSelector(state => state.email)
  const [recordList, setRecordList] = React.useState([]);
  const addCollection = firestore().collection(String(checkLogin));

  const _callApi = async () => {
    try {
      const data = await addCollection.doc(String(props.route.params.id)).get();
      setRecordList(data._data.type);
      console.log(data._data.type);
    } catch (error) {
      console.log(error.message);
    }
  };

  React.useEffect(() => {
    _callApi();
  }, []);
  return (
    <Check.MainView>
        <Check.ButtonView>
            <Check.Button 
                onPress={() => {props.navigation.pop()}}
            >
                <Check.ButtonLabel>
                    back
                </Check.ButtonLabel>
            </Check.Button>
        </Check.ButtonView>
      <Check.MainLabelView>
        <Check.MainLabel>{props.route.params.id.replace(':', '-').replace(':', '-').replace(':', '  ')}</Check.MainLabel>
      </Check.MainLabelView>
      <Check.Scroll>
        {recordList !== undefined ? (
          recordList.map((el, idx) => (
            <Check.LabelView>
              <Check.Label>round : {el.round}</Check.Label>
              <Check.SubLabelView>
                <Check.SubLabel>운동 종류: {el.type}</Check.SubLabel>
                <Check.SubLabel>횟수: {el.count} 회</Check.SubLabel>
                <Check.SubLabel>무게 : {el.weight} kg</Check.SubLabel>
              </Check.SubLabelView>
            </Check.LabelView>
          ))
        ) : (
          <Check.Label>no</Check.Label>
        )}
      </Check.Scroll>
    </Check.MainView>
  );
}
