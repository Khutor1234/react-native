import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  text: {
    fontSize: 15,
    fontWeight: '700',
    textTransform: 'uppercase',
    color: '#fff'
  },
  button: {
    backgroundColor: '#010165',
    borderRadius: 20,
    padding: 7,
    alignItems: 'center',
    minWidth: 100
  }, 
  input: {
    minWidth: 150,
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#010165',
    height: 40,
    color: '#010165'
  },
  modal: {
    backgroundColor: 'rgb(134,163,244)',
    padding: 20,
    flex: 1,
  },
  modalContent: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'rgb(134,163,244)',
  },
  close: {
    color: '#010165',
    alignItems: 'flex-end',
  }
})

export default styles