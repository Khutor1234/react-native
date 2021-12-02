import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  item: {
    padding: 10, 
    backgroundColor: '#fff',
    marginBottom: 10,
    borderWidth: 2,
    borderColor: 'rgb(134,163,244)',
    borderRadius: 20,
  },
  title: {
    color: '#000',
    fontSize: 20,
    lineHeight: 20
  },
  body: {
    color: '#000',
    fontSize: 12,
    lineHeight: 12
  },
  img: {
    width: 30,
    height: 30,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  email: {
    fontWeight: '700'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    height: 40
  },
  text: {
    color: 'rgb(134,163,244)',
    textTransform: 'uppercase',
    fontWeight: '700'
  }
})

export default styles