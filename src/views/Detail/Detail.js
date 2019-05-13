import React from 'react';
// Redux
import { connect } from 'react-redux';
// Material
import Button from '@material-ui/core/Button';
import Send from '@material-ui/icons/Send';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';
import swal from 'sweetalert';
import { styles } from './styles';
// AutoComplete Component
import { AutoComplete } from '../../components/AutoComplete';
// Router
// SeetAlert
import { updateInputMessage, addSentList, isSent} from "../../actions";

const Detail = (props) => {
	const { 
		classes,
		subject, 
		text,
		newie,
		redirect } = props

	const handleChange = (name) => (event) => {
    props.updateInputMessage(name, event.target.value)
  }

  const handleClick = () => {
  	const { name, /* subject, text, */ sentList } = props;
  	const obj = { 
  		firstName: name, 
  		subject, 
  		message: text,
  		email: 'test@prueba.com'
  	}
  	if(name === '' || subject === '' || text === ''){
  		swal("Error!", "Debes llenar todos los campos", "error");
  	}
  	else{
  		swal("Bien Hecho", "Tu mensaje ha sido envaido", "success");
  		props.addSentList([...sentList.list, obj])
  		props.isSent(true)
  	}  	
  }

  if(redirect){
  	return <Redirect to="/main/inbox"/>
  }

  return (
  	<div className={classes.container}>
  		<div className={classes.titleContainer}>
  			<h1>Mensaje</h1>
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
			        defaultValue={newie ? '' : subject}
			      />
			    </div>	

	  			<div className={classes.input}>
			  		<TextField
			  			onChange={handleChange('text')}
	          	id="outlined-multiline-static"
	          	label="Mensaje"
	          	multiline
	          	rows="10"
	          	defaultValue={newie ? '' : text}
	          	margin="normal"
	          	variant="outlined"
	          	className={`${classes.margin} ${classes.textField}`}
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
    newie: state.isNew,
    redirect: state.isSent
  };
}

const mapDispatchToProps = {
  updateInputMessage,
  addSentList,
  isSent 
}

const DetailWithStyles = withStyles(styles)(Detail);
export default connect(mapStateToProps, mapDispatchToProps)(DetailWithStyles);