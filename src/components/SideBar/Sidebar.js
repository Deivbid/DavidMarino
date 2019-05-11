import React from 'react';
import PropTypes from 'prop-types';
//Material
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';

import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
//Icons
import InboxIcon from '@material-ui/icons/MoveToInbox';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import SentIcon from '@material-ui/icons/Send';
import DraftIcon from '@material-ui/icons/Drafts';
import Write from '@material-ui/icons/Create';
//Routes
import { Link } from 'react-router-dom';
//Styles
import { styles } from './styles'
//Redux
import { searchFilter, isNew } from '../../actions/';
import { connect } from 'react-redux';

const options = [
  {
    id: 1,
    text: 'Inbox',
    icon: <InboxIcon />,
    path: '/main/inbox'
  },
  {
    id: 2,
    text: 'Borradores',
    icon: <DraftIcon />,
    path: '/main/drafts'
  },
  {
    id: 3,
    text: 'Enviados',
    icon: <SentIcon />,
    path: '/main/sents'
  }
]

class ResponsiveDrawer extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  handleChange = (event)  => {
    this.props.searchFilter(event.target.value)
  };

  handleNew = (flag) => (event) =>{
    this.props.isNew(flag)
  };

  render() {
    const { classes } = this.props;

    const drawer = (
      <div>
        <div className={classes.toolbar}>
          <div className={classes.profilePicContainer}>
            <img 
              src={'https://juanjosesaez.com/wp-content/uploads/Gran-Tiburon-blanco.jpg'} 
              className={classes.profilePicture} 
              alt={'Tiburoncin uh ha ha'}
            />
          </div>
          <div className={classes.textContainer}>
            <h3 className={classes.text}> @Tiburcio </h3>
          </div>
        </div>
        <Divider />
        <List>
          {options.map((item, index) => (
            <Link to={item.path} style={{textDecoration: 'none'}} key={index}>
              <ListItem button key={item.id} onClick={this.handleNew(false)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText 
                  primary={item.text} 
                  classes={{ primary: classes.optionText}}/>
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />

        <div className={classes.addButton}>
          <Link 
            to={{ pathname: `/main/newMessage`}} 
            className={classes.compose}
          >
            <Button variant="contained" className={classes.button} onClick={this.handleNew(true)}>
              Escribir
              <Write  className={classes.addIcon}/>
            </Button>
          </Link>
        </div>        
      </div>
    );

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Filtrar por nombre...."
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                onChange={this.handleChange}
              />
            </div>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {this.props.children}
        </main>
      </div>
    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    searchFilter: state.searchFilter
  };
}

const mapDispatchToProps = {
  searchFilter,
  isNew
}

const SidebarComponent = withStyles(styles, { withTheme: true })(ResponsiveDrawer);
export default connect(mapStateToProps, mapDispatchToProps)(SidebarComponent);
