import { createStyles } from '@material-ui/core';

const styles = createStyles({
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  card: {
    width: 700,
    margin: 'auto 0',
    minHeight: 400,
    borderRadius: 5,
    backgroundColor: '#FCFDFE',
    display: 'flex',
    justifyContent: 'space-between', // De momento
    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    '@media (max-width:480px)': {
      minWidth: 300,
      maxWidth: 340,
      minHeight: '90vh',
      justifyContent: 'center'
    },
  },
  leftSide:{
    display: 'flex',
    justifyContent: 'center',
    margin: '0 15px',
    '@media (max-width:480px)': {
      display: 'none'
    },
  },
  rightSide: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 15px',
    width: 300, // POR AHORA
    '@media (max-width:480px)': {
      // height: '90vh',
      justifyContent: 'space-evenly',
      width: 310
    },  
  },
  dolphin: {
    height: '20em',
    margin: 'auto 0'
  },
  separator: {
    margin: 0,
    '@media (max-width:480px)': {
      display: 'none'
    },    
  },
  logoContainer: {
    margin: '15px 0',
    display: 'flex',
    justifyContent: 'center',
  },
  logo: {
    height: '3em',
  },
  inputsContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Ubuntu',
    color: '#D0D0D0',
    textAlign: 'center'
  },
  h2: {
    fontSize: '1.2em',
    fontWeight: 100,
  },
  input: {
    margin: '10px auto'
  },
  buttonContainer: {
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: '3em',
  },
  button: {
    color: 'white',
    backgroundColor: '#0097A7',
    '&:hover': {
      backgroundColor: 'white',
      color: '#0097A7',
      outlineColor: 'transparent'
    },
  },
  horizontalSepContainer: {
    display: 'flex',
  },
  line: {
    width: '6em',
    height: 0,
    margin: 'auto 2em'
  },
  buttonContainerGoogle: {
    justifyContent: 'center',
    textAlign: 'center',
    margin: '0.5em 0',

  },
  google: {
    boxShadow: '0 2px 11px 1px rgba(224,224,224,0.5)',
    borderRadius: 25,
    color: 'black',
    backgroundColor: 'white',
    textTransform: 'capitalize'

  },
  googleImg: {
    width: '16px',
    height: '16px',
    marginRight: '5px',
  },
  newAccount: {
    textAlign: 'center',
    margin: '20px 0'
  },
  text: {
    fontSize: 12
  },
  // Inputs
  underline: {
    borderBottom: '0.5px solid #090012',
  },
  purple: {
    borderColor: '#0097A7',
  },
  cssLabel: {
    'color': 'rgba(32,32,32,0.24)',
    'fontFamily': 'Ubuntu',
    '&$cssFocused': {
      color: '#0097A7',
    },
  },
  cssFocused: {},

});

export { styles };