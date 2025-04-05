import {View, Text, TouchableOpacity, Modal, StyleSheet} from 'react-native';
import React, {useState} from 'react';

const Modal_ = () => {
  const [status, setStatus] = useState(false);

  return (
    <View style={style.container}>
      <TouchableOpacity style={style.openButton} onPress={() => setStatus(true)}>
        <Text style={style.buttonText}>Show Modal</Text>
      </TouchableOpacity>

      <Modal
        visible={status}
        transparent
        animationType="slide"
        onRequestClose={() => setStatus(false)}
      >
        <View style={style.modalOverlay}>
          <View style={style.modalView}>
            <Text style={style.modalTitle}>Modal1</Text>
            <Text style={style.modalTitle}>Modal2</Text>
            <TouchableOpacity style={style.closeButton} onPress={() => setStatus(false)}>
              <Text style={style.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  openButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    elevation: 3,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 25,
    alignItems: 'center',
    elevation: 5,
    width: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
  },
  closeButton: {
    backgroundColor: 'crimson',
    marginTop: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Modal_;
