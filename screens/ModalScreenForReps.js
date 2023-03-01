import React, {useState} from 'react';
import Modal from 'react-native/Libraries/Modal/Modal';
import {Picker} from '@react-native-picker/picker';
import * as M from '../assets/styles/ModalStyle/ModalStyle'


export default function ModalScreenForReps(props) {
  const [showModal, setShowModal] = useState(false);
  const [selectedReps, setSelectedReps] = useState(0);

  const Reps = [];

  for (let i = 0; i < 15; i += 1) {
    Reps.push(i);
  }

  return (
    <M.Container>
      <M.Button onPress={() => setShowModal(true)}>
        <M.ButtonText>Set Time</M.ButtonText>
      </M.Button>
      <Modal visible={showModal} animationType="slide" transparent={true}>
        <M.ModalContainer>
          <M.ModalContent>
            <M.ModalSubContent>
              <M.PickerContainer>
                <M.TimeText>Reps:</M.TimeText>
                <Picker
                  selectedValue={selectedReps}
                  onValueChange={itemValue => setSelectedReps(itemValue)}
                  onRequestClose={() => {
                    setModalVisible(false);
                  }}>
                  {Reps.map(Reps => (
                    <Picker.Item
                      key={Reps}
                      label={Reps.toString()}
                      value={Reps}
                    />
                  ))}
                </Picker>
              </M.PickerContainer>
            </M.ModalSubContent>
            <M.Button onPress={() => {
                props.onValueChange(selectedReps);
                setShowModal(false);
            }}>
              <M.ButtonText>Done</M.ButtonText>
            </M.Button>
          </M.ModalContent>
        </M.ModalContainer>
      </Modal>
    </M.Container>
  );
}
