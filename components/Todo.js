import { StyleSheet, Text, Touchable, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

const Todo = ({content, completed}) => {
  return (
    <View style={styles.item}>
      <Text style={[
          completed && { color: '#888', textDecorationLine: 'line-through' },
          styles.itemText
        ]}
      >
        { content.length >= 35 ? `${content.substr(0, 35)}...` : content }
      </Text>
        { !completed && <Icon name="rocket" size={30} color='#c00'/> }
    </View>
  )
}

export default Todo

const styles = StyleSheet.create({
  item: {
      backgroundColor: '#FFF',
      padding: 15,
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20,
      elevation: 5,
    },
    itemText: {
      alignItems: 'center',
      flexWrap: 'wrap',
      maxWidth: '80%',
    }
})