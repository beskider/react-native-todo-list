import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput, Keyboard, SafeAreaView } from 'react-native'
import { useState } from 'react'
import Todo from './components/Todo'
import ModalWindow from './components/ModalWindow'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function App() {
  
  const [ modalVisible, setModalVisible] = useState(false)
  const [ currentTodo, setCurrentTodo ] = useState()

  const [ todo, setTodo ] = useState('')
  const [ todos, setTodos ] = useState([
    {
      id: 1,
      content: 'Sharpen the knife on the lawn',
      completed: true
    },
    { 
      id: 2,
      content: 'Read work emails',
      completed: false
    },
    { 
      id: 3,
      content: 'Throw the trash',
      completed: false
    },
    { 
      id: 4,
      content: 'Read a book',
      completed: false
    },
    { 
      id: 5,
      content: 'Complete the React Native course, write a exam',
      completed: false
    },
  ])

  const openTodoModal = todo => {
    setModalVisible(true)
    setCurrentTodo(todo)
  }
  
  const deleteTodo = todo => {
    let items = todos.filter( el => el.id !== todo.id )
    setTodos(items)
    setCurrentTodo(null)
    setModalVisible(false)
  }

  const completeTodo = todo => {
    let elementIndex = todos.findIndex( el => el.id == todo.id )
    let todosCopy = [ ...todos ]
    todosCopy[elementIndex].completed = true
    setTodos(todosCopy)
    setCurrentTodo(null)
    setModalVisible(false)
  }

  const addTask = () => {
    Keyboard.dismiss()
    if (!todo || todo.length === 0) return
    let id = todos.length + 1
    let newTodo = {
      id,
      content: todo,
      completed: false
    }
    setTodos([...todos, newTodo])
    setTodo(null)
  }

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.titleText}>Todos</Text>

      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps='handled' >
        {
          todos.length ? (
            todos.map( todo => (
              <TouchableOpacity
                key={todo.id}
                onPress={() => openTodoModal(todo)}
              >
                <Todo {...todo} />
              </TouchableOpacity>
            ))
          ) : (
            <Text>Nothing!</Text>
          )
        }
      </ScrollView>

      <KeyboardAvoidingView
        behavior={ Platform.OS === 'ios' ? 'padding' : 'height' }
        style={styles.addTaskWrapper} >
        <TextInput 
          placeholder='New task...' 
          value={todo}
          onChangeText={ text => setTodo(text)} 
          style={styles.inputText}
        />
          <TouchableOpacity onPress={addTask}>
            <Icon name='plus-circle' size={50} color='#00a'/> 
          </TouchableOpacity>
      </KeyboardAvoidingView>

      <ModalWindow 
        todo={currentTodo} 
        modalVisible={modalVisible} 
        setModalVisible={setModalVisible}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    paddingHorizontal: 15,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: 50,
    paddingBottom: 10,
  },
  addTaskWrapper: {
    bottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  inputText: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    width: '80%',
    borderRadius: 20,
    borderWidth: 1,
    elevation: 2
  },
});
