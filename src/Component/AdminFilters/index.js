import React from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';

const AdminFilters = () => {

  return (
    <View style = {styles.wrapper}>
        <Button style = {styles.button} title="Add post"/>
        <Button style = {styles.button} title="Add post"/>
        <Button style = {styles.button} title="Add post"/>
        <Button style = {styles.button} title="Add post"/>
        <Button style = {styles.button} title="Add post"/>
        
{/*          
        <Button style = {styles.button} >
          <Text style = {styles.text}>Edit</Text>
        </Button>
        <Button style = {styles.button} >
          <Text style = {styles.text}>Edit</Text>
        </Button>
        <Button style = {styles.button} >
          <Text style = {styles.text}>Edit</Text>
        </Button> */}
    </View>
  );
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     deleteItem: (id) => dispatch(deleteItem(id))
//   }
// }

export default connect(null, null)(AdminFilters);

