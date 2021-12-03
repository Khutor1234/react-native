import React, {useState} from 'react';
import { Text, View, Pressable, Modal, TextInput } from 'react-native';
import { connect } from 'react-redux';

import { addItem } from '../../store/actions';
import styles from './styles';

const AdminFilters = ({addItem}) => {
  const [open, setOpen] = useState(false);
  const [titleValue, setTitleValue] = useState('');
  const [bodyValue, setBodyValue] = useState('');

  const onAddItem = () => {
    addItem(titleValue, bodyValue)
    setTitleValue(''),
    setBodyValue(''),
    setOpen(false)
  }

  return (
    <View style = {styles.wrapper}>
      <Pressable style = {styles.button} onPress={() => setOpen(true)}>
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

            <Pressable style = {styles.button} onPress = {onAddItem}>
              <Text style = {styles.text}>Add post</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Pressable style = {styles.button} onPress={() => filter}>
        <Text style = {styles.text}>Top by comments</Text>
      </Pressable>
      <Pressable style = {styles.button} >
        <Text style = {styles.text}>Top by views</Text>
      </Pressable>

      <TextInput 
        style = {styles.input} 
        placeholder='Filter by user Id'/>
      <TextInput
        style = {styles.input} 
        placeholder='Filter by recent news'/>

    </View>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (title, body) => dispatch(addItem(title, body))
  }
}

export default connect(null, mapDispatchToProps)(AdminFilters);

