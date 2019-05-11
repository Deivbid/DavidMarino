const styles = theme => ({
  root: {
    height: 250,
    flexGrow: 1,
  },
  container: {
    position: 'relative',
    width: '100%',
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    zIndex: 2,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
  },
  suggestion: {
    display: 'block',
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
  divider: {
    height: theme.spacing.unit * 2,
  },
margin: {
    margin: theme.spacing.unit,
    width: '98%'
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
});

export { styles }