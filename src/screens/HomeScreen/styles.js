import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  navbar: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#33559B',
  },
  button: {
    height: 50,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    margin: 10,
    backgroundColor: 'rgb(134,163,244)'
  },
  text: {
    color: '#000',
    fontSize: 20,
    padding: 10,
    textTransform: 'uppercase',
    fontWeight: '700'
  }
})

export default styles