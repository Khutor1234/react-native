import React, {useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux';
import { loadData } from '../../store/actions/index';

const News = ({data, loadData}) => {
  
  useEffect(() => {
    loadData()
  }, [loadData]);

  console.log(data,'data')

  return(
    <View style = {styles.navbar}>
      <Text style = {styles.text}>ffffrrrffff</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#3949ab',
    paddingBottom: 10
  },
  text: {
    color: '#fff',
    fontSize: 20
  }
})

const mapStateToProps = ({newsList: {data}}) => {
  return{
    data
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadData: loadData(dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(News);
