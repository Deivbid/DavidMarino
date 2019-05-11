import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListMaterial from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
//Redux
import { PaginatorRedux } from '../../actions/';
import { connect } from 'react-redux';
//Text Handling
import LinesEllipsis from 'react-lines-ellipsis';
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC';
import { images } from './items';
//Pagination Buttons
import Fab from '@material-ui/core/Fab';
import Left from '@material-ui/icons/ChevronLeft';
import Right from '@material-ui/icons/ChevronRight';
//Paginator
import { Paginator } from './Paginator';
//Styles
import { styles } from './styles';
//Router
import { Link } from 'react-router-dom';
 
const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis)

const FolderList = (props) => {
  const { 
    classes, 
    data, 
    title, 
    currentPage,
    searchFilter } = props;

  const currentList = Paginator(data, currentPage)

  if(searchFilter){
    let newData = data.filter((item) => item.firstName.includes(searchFilter) || item.email.includes(searchFilter))
    currentList.data = newData
  }

  const nextPage = event => {
    if(props.currentPage <= currentList.total_pages)
      props.PaginatorRedux(props.currentPage + 1);
  }

  const prevPage = event => {
    if(props.currentPage >= 1)
      props.PaginatorRedux(props.currentPage - 1);
  }



  return (
    <div>
      <div className={classes.listHeader}>
        <div className={classes.title}><h1>{title}</h1></div>
        <div className={classes.pageButtons}>
          <Fab color="primary" aria-label="Add" className={classes.fab} onClick={prevPage}>
              <Left />
          </Fab>

          <p className={classes.pageNumber}> {currentList.page} de {currentList.total_pages} </p>

          <Fab color="primary" aria-label="Add" className={classes.fab} onClick={nextPage}>
              <Right />
          </Fab>          
        </div>
      </div>
      <ListMaterial className={classes.root}>
          {
            currentList.data.map((item, index) => {
              
              const text = (
                <ResponsiveEllipsis
                  text={`${item.subject} - ${item.message}`}
                  maxLine='1'
                  ellipsis='...'
                  trimRight
                  basedOn='letters'
                  key={index}
                />
              )

              const image = images[Math.floor(Math.random()*images.length)]
              return(
                <Link 
                  to={{ pathname: `/main/email/${index+1}`, state: {item, image}}} 
                  className={classes.link} 
                >
                  <ListItem key={index}>
                    <Avatar>
                      <img src={image} />
                    </Avatar>
                    <ListItemText primary={`${item.firstName} ${item.lastName || ''}`} secondary={text}/>                  
                  </ListItem>
                </Link>
              )
            })       
          }
      </ListMaterial>
    </div>
  );
}

FolderList.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    currentPage: state.currentPage,
    searchFilter: state.searchFilter
  };
}

const mapDispatchToProps = {
  PaginatorRedux
}

const List = withStyles(styles)(FolderList);
export default connect(mapStateToProps, mapDispatchToProps)(List);