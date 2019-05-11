import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const styles = {
	nameContainer: {
		display: 'flex',
		justifyContent: 'flex-start',

	},

	email: {
		margin: 'auto 5px',
    ['@media (max-width:480px)']: {
      display: 'none'
    }, 		
	},

	mobileEmail: {
		display: 'none',
    ['@media (max-width:480px)']: {
      display: 'flex',
      justifyContent: 'flex-start',
      margin: '10px auto'
    }, 		
	},

	message: {
		marginRight: 50, 
		marginLeft: 40,
    ['@media (max-width:480px)']: {
      margin: 'auto'
    }, 			
	}	,
}

const Sent = (props) => {
	const { classes } = props
	const { item, image } = props.location.state
	console.log(props)
  return (
  	<div>
  		<div>
  			<h1>{item.subject}</h1>
  			<div className={classes.nameContainer}>
  				<Avatar>  				
  					<img src={image} className={classes.image}/>
  				</Avatar>
  				<h4 style={{opacity: 0.6, margin: 'auto 5px'}}>{`${item.firstName} ${item.lastName}`}</h4>
  				<span className={classes.email}>{` - ${item.email}`}</span>
  			</div>
  			<div className={classes.mobileEmail}>{item.email}</div>
  			<p className={classes.message}>{item.message}</p>
  		</div>
    </div>
  )
}

export default withStyles(styles)(Sent);
