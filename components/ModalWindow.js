import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const ModalWindow = ({todo, modalVisible, completeTodo, deleteTodo, setModalVisible}) => {
  return (
    <Modal
      animationType='fade'
      transparent={false}
      visible={modalVisible}
      onRequestClose={ () => {
        setModalVisible(false)
      }}
    > 
      <View style={styles.modal}>
        {
          todo?.completed ? (
            <View style={styles.modalContainer}>
              <Text style={{ ...styles.modalTitle, backgroundColor: "#c99" }}>Delete completed todo?</Text>
              <View style={styles.modalDivider}></View>
              <View style={styles.modalBody}>
                <Text>{todo?.content}</Text>
              </View>
              <View>
                <View style={styles.modalDivider}></View>
                <View style={{flexDirection:"row-reverse",margin:10}}>
                  <TouchableOpacity 
                    style={{...styles.button, backgroundColor:"#d33"}}
                    onPress={() => setModalVisible(false)}  
                  >
                    <Icon name='close' size={20} color='#900'/>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={{...styles.button, backgroundColor:"#2c5"}} 
                    onPress={() => deleteTodo(todo)}
                  >
                    <Icon name='check' size={20} color='#090'/>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ) : (
            <View style={styles.modalContainer}>
              <Text style={{ ...styles.modalTitle, backgroundColor: "#9c9" }}>Mark as completed?</Text>
              <View style={styles.modalDivider}></View>
              <View style={styles.modalBody}>
                <Text>{todo?.content}</Text>
              </View>
              <View>
                <View style={styles.modalDivider}></View>
                <View style={{flexDirection:"row-reverse",margin:10}}>
                  <TouchableOpacity 
                    style={{...styles.button, backgroundColor:"#d33" }}
                    onPress={() => setModalVisible(false)} 
                  >
                    <Icon name='close' size={20} color='#900'/>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={{...styles.button, backgroundColor:"#2c5"}} 
                    onPress={() => completeTodo(todo)}
                  >
                    <Icon name='check' size={20} color='#090'/>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )
        }
      </View>
    </Modal>
  )
}

export default ModalWindow

const styles = StyleSheet.create({
  modal: {
    backgroundColor: '#0009',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    backgroundColor: '#f9fafb',
    width: '90%',
  },
  modalTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    padding: 15,
    color: '#000'
  },
  modalDivider: {
    width: '100%',
    height: 1,
    backgroundColor: 'lightgray'
  },
  modalBody: {
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 10
  },
  button: {
    borderRadius: 5,
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 20
  },
})