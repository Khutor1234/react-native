import React, {useState} from 'react';
import { Text, View, Pressable, Modal, TextInput } from 'react-native';
import { connect } from 'react-redux';

import { addItem, filter,resetFilter } from '../../store/actions';
import styles from './styles';

const AdminFilters = ({addItem, filter, resetFilter}) => {
  const [open, setOpen] = useState(false);
  const [warning, setWarning] = useState(false);
  const [titleValue, setTitleValue] = useState('');
  const [bodyValue, setBodyValue] = useState('');

  const onAddItem = () => {
    if(titleValue && bodyValue){
      addItem(titleValue, bodyValue)
      setTitleValue(''),
      setBodyValue(''),
      setOpen(false)
      setWarning(false)
    } else {
      setWarning(true)
    }
  }

  const onOpen = () => {
    setOpen(true)
    setWarning(false)
  }

  return (
    <View style = {styles.wrapper}>
      <Pressable style = {styles.button} onPress={onOpen}>
        <Text style = {styles.text}>Add post</Text>
      </Pressable>

      <Modal visible={open}>
        <View style = {styles.modal}>
          <Text onPress={() => setOpen(false)} style = {styles.close}>Close</Text>
          <View style = {styles.modalContent}>
            <TextInput 
              style = {styles.input}
              onChangeText = {setTitleValue} 
              value = {titleValue} 
              placeholder='Enter a title'/>
            <TextInput 
              style = {styles.input}
              onChangeText = {setBodyValue} 
              value = {bodyValue} 
              placeholder='Enter a body'/>

            { warning && <Text style = {styles.warning}>You have not entered all the data</Text>}
            <Pressable style = {styles.button} onPress = {onAddItem}>
              <Text style = {styles.text}>Add post</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Pressable style = {styles.button} onPress={() => filter('comments')}>
        <Text style = {styles.text}>Top by comments</Text>
      </Pressable>
      <Pressable style = {styles.button} onPress={() => filter('views')}>
        <Text style = {styles.text}>Top by views</Text>
      </Pressable>

      <TextInput 
        onChangeText = {text => filter('user', text)}
        style = {styles.input} 
        placeholder='Filter by user Id'/>
      <TextInput
        onChangeText = {text => filter('resent', text)}
        style = {styles.input} 
        placeholder='Filter by resent posts'/>

      <Pressable style = {styles.reset} onPress = {resetFilter}>
        <Text style = {styles.text}>Reset filters</Text>
      </Pressable>
    </View>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (title, body) => dispatch(addItem(title, body)),
    filter: (type, value) => dispatch(filter(type, value)),
    resetFilter: () => dispatch(resetFilter())
  }
}

export default connect(null, mapDispatchToProps)(AdminFilters);

