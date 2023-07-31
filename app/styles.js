// styles.js

import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
  },
  imageContainer: {
    marginBottom: 40,
    marginTop: -150,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    aspectRatio: 1,
    overflow: 'hidden',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    width: 250,
    height: 40,
    borderColor: COLORS.gray2,
    backgroundColor: COLORS.lightGray,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  loginButton: {
    width: 250,
    height: 40,
  },
  loginGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  loginText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default styles;
