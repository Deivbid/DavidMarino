import React from 'react';
//Material
import Button from '@material-ui/core/Button';
import Send from '@material-ui/icons/Send';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles';
//Redux
import { updateInputMessage, addSentList } from '../../actions/';
import { connect } from 'react-redux';

import Downshift from 'downshift';

import { AutoComplete } from '../../components/AutoComplete'

const Detail = (props) => {
	const { 
		classes, 
		name, 
		subject, 
		text,
		isNew } = props

	const handleChange = (name) => (event) => {
    props.updateInputMessage(name, event.target.value)
  }

  const handleClick = (event) => {
  	const { name, subject, text, sentList } = props;
  	const obj = { 
  		firstName: name, 
  		subject: subject, 
  		message: text,
  		email: 'test@prueba.com'
  	}
  	props.addSentList([...sentList.list, obj])
  }

  return (
  	<div className={classes.container}>
  		<div className={classes.titleContainer}>
  			<h1>{'Mensaje'}</h1>
  		</div>
	  	<div className={classes.root}>
	  		<div className={classes.inputsContainer}>
	  			<div className={classes.input}>
          	<AutoComplete />            				           	      
			    </div>

	  			<div className={classes.input}>
			  		<TextField
			  			onChange={handleChange('subject')}
			        className={classes.margin}						        
			        InputLabelProps={{
			          classes: {
			            root: classes.cssLabel,
			            focused: classes.cssFocused,
			          },
			        }}
			        InputProps={{
			          classes: {
			            root: classes.cssOutlinedInput,
			            focused: classes.cssFocused,
			            notchedOutline: classes.notchedOutline,
			          },
			        }}
			        label="Asunto"
			        variant="outlined"
			        id="custom-css-outlined-input"
			        defaultValue={isNew ? '' : subject}
			      />
			    </div>	

	  			<div className={classes.input}>
			  		<TextField
			  			onChange={handleChange('text')}
	          	id="outlined-multiline-static"
	          	label="Mensaje"
	          	multiline={true}
	          	rows="10"
	          	defaultValue={isNew ? '' : text}
	          	className={classes.textField}
	          	margin="normal"
	          	variant="outlined"
	          	className={classes.margin}
			        InputLabelProps={{
			          classes: {
			            root: classes.cssLabel,
			            focused: classes.cssFocused,
			          },
			        }}
			        InputProps={{
			          classes: {
			            root: classes.cssOutlinedInput,
			            focused: classes.cssFocused,
			            notchedOutline: classes.notchedOutline,
			          },
			        }}
	        	/>
			    </div>	
	      </div>
	      <div className={classes.sendButton}>
	      	<Button 
	      		variant="contained" 
	      		color="primary" 
	      		className={classes.button}
	      		onClick={handleClick}
	      	>
	        	Send
	        	<Send  className={classes.sendIcon}/>
	      	</Button>
	      </div>
	    </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    name: state.message.mName,
    subject: state.message.mSubject,
    text: state.message.mText,
    id: state.message.image,
    sentList: state.sentList,
    isNew: state.isNew
  };
}

const mapDispatchToProps = {
  updateInputMessage,
  addSentList
}

const DetailWithStyles = withStyles(styles)(Detail);
export default connect(mapStateToProps, mapDispatchToProps)(DetailWithStyles);