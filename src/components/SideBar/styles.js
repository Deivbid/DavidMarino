import { fade } from '@material-ui/core/styles/colorManipulator';

const drawerWidth = 240;
const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    backgroundColor: '#0097A7',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },

  // SearchBar
	search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },

  // Profile
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: '50%'
  },
  profilePicContainer: {
  	display: 'flex',
  	justifyContent: 'center',
  	margin: '20px auto'
  },
  textContainer:{
  	display:'flex',
  	flexDirection: 'column'
  },
  text: {
  	margin: '5px auto',
    fontFamily: 'Ubuntu'	
  },

  // Options
  optionText:{
    fontFamily: 'Ubuntu',
    fontWeight: 700,
  },

  // Add Button: 
  addButton: {
    display: 'flex',
    margin: '15px 0',
    justifyContent: 'center',
    width: '100%'
  },
  button: {
    width: '70%',
    borderRadius: 25,
    color: 'white',
    fontFamily: 'Ubuntu',
    fontWeight: 700,
    backgroundColor: '#0097A7',
    '&:hover': {
      backgroundColor: '#0097A7',
      color: 'white',
      outlineColor: 'transparent'
    },
  },
  addIcon: {
    marginLeft: 15
  },
  compose: {
    textDecoration: 'none', 
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  }
});

export { styles }