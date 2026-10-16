import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  inputContainer: {
    width: '90%',
    // flex: 1,
  },
  input: {
    // flex: 2,
    height: 50,
    width: '100%',
    paddingHorizontal: 6,
    backgroundColor: '#ffffff',
    marginBottom: 12,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#C19A6B',
    fontSize: 24,
  },
  inputLabel: {
    fontSize: 18,
    paddingBottom: 6,
  },
  dropDownContainer: {
    borderWidth: 2,
    borderColor: '#C19A6B',
  },
  dropDownText:{
    fontSize: 24,
  },
  navigationContainer: {
    width: '100%',
    paddingHorizontal: 12,
    paddingBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 8,
  },
  navButtonView: {
    flex: 1,
  },
  coverView: {
    height: '80%',
    width: '75%',
    backgroundColor: 'white',
    // To be deleted
    alignItems: 'center',
    justifyContent: 'center',
  },
});
