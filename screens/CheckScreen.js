import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';
import { Alert } from 'react-native';
import { useSelector } from 'react-redux';
import * as Check from '../assets/styles/CheckStyle/CheckStyle'

export default function CheckScreen(props) {
  const checkLogin = useSelector(state => state.email)
  const addCollection = firestore().collection(String(checkLogin));

  const deleteBtn = () => {
    AsyncStorage.clear(),
    setRecordList([]),
    props.navigation.popToTop();
  }

  const createTwoButtonAlert = () =>
    Alert.alert(
      'round',
      '운동 기록을 다 삭제 하시겠습니까?',
      [
      {
        text: 'Cancel',
        onPress: (() => {
        }),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: (deleteBtn),
        style: 'OK',
      }
    ]);

  const addText = async () => {
    let today = new Date(); // today 객체에 Date()의 결과를 넣어줬다
    let time = {
      year: today.getFullYear(), //현재 년도
      month: today.getMonth() + 1, // 현재 월
      date: today.getDate(), // 현제 날짜
      hours: today.getHours(), //현재 시간
      minutes: today.getMinutes(), //현재 분
    };
    let timestring = `${time.year}:${time.month}:${time.date}:${time.hours}:${time.minutes}`;

    try {
      await addCollection.doc(String(timestring)).set({
        type: recordList,
        // recordList
      });
      console.log('Create Complete!');
    } catch (error) {
      console.log(error.message);
    }
  };
  const [recordList, setRecordList] = React.useState([]);
  React.useEffect(() => {
    const getData = async () => {
      const storageData = JSON.parse(await AsyncStorage.getItem('record'));
      if (storageData) {
        setRecordList(storageData);
      }
    };
    getData();
    console.log(recordList);
  }, []);
  return (
    <Check.MainView>
      <Check.MainLabelView>
        <Check.MainLabel>Today</Check.MainLabel>
      </Check.MainLabelView>
      <Check.Scroll>
        {recordList.length > 0 ? (
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

      <Check.ButtonView>
        <Check.Button
          onPress={() => {
            addText(),
              AsyncStorage.clear(),
              setRecordList([]),
              console.log(recordList);
              alert('저장 되었습니다');
              props.navigation.navigate("HomeScreen");
          }}>
          <Check.ButtonLabel>확인 및 저장</Check.ButtonLabel>
        </Check.Button>
        <Check.Button
          onPress={() => {
            createTwoButtonAlert()
          }}>
          <Check.ButtonLabel>삭제</Check.ButtonLabel>
        </Check.Button>
      </Check.ButtonView>
    </Check.MainView>
  );
}
