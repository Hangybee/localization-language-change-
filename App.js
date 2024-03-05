import { StyleSheet, Text, TouchableOpacity, View, Modal, Pressable, FlatList } from 'react-native'
import React, { useEffect, useState} from 'react'
import './src/i18n/i18n.config'
import 'intl-pluralrules';
import { useTranslation } from 'react-i18next';

const App = () => {

  const { t, i18n } = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);
  const [choice, setChoice] = useState('english')
 
  const changeLanguage = () => {
    console.log('hiiii')
    if(choice === 'french'){
      i18n.changeLanguage('fr')
    }
    else if (choice === 'hindi') {
      console.log('pleas')
      i18n.changeLanguage('hi')
    }
    else {
      i18n.changeLanguage('en')
    }
  }
  useEffect(()=>{
    changeLanguage()
  },[choice])
  return (
    <View style={{
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    }}>
      <Text>{t('greet')}</Text>

      <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={{fontSize:20}}>Choose Language</Text>
            <FlatList
              data={['english','french','hindi']}
              renderItem={({item, index})=><TouchableOpacity onPress={()=>setChoice(item)} style={{
                marginTop:20
              }}><Text style={{fontSize:15, fontWeight:'400'}}>{item}</Text></TouchableOpacity>}
            />
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    height:250,
    width:'80%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});