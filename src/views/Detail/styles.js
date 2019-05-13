const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    // boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
  },
  margin: {
    margin: theme.spacing.unit,
    width: '100%'
  },
  cssLabel: {
    '&$cssFocused': {
      color: '#0097A7',
    },
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: '#0097A7',
    },
  },
 cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: '#0097A7',
    },
  },
  notchedOutline: {},
  inputsContainer: {
    width: '100%'
  },
  messageInput: {
    minHeight: '80%'
  },
  input: {
    display: 'flex',
    justifyContent: 'center'
  },
  sendButton: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    margin: '15px 10px',
    '@media (max-width:480px)': {
      justifyContent: 'center',
    },    
  },
  button: {
    width: '20%',
    color: 'white',
    backgroundColor: '#0097A7',
    '&:hover': {
      backgroundColor: '#0097A7',
      color: 'white',
      outlineColor: 'transparent'
    },
    '@media (max-width:480px)': {
      width: '100%',
    },     
  },
  sendIcon: {
    fontSize: 20,
    margin: '0 10px'
  },
});

export { styles }