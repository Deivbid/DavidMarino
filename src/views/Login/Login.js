import React, { Component } from 'react';
//Material

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles';
//Images
import Dolphin from  '../../assets/images/dolphin.svg';
import Logo from  '../../assets/images/LogoLanding.svg';
import GoogleLogo from '../../assets/images/google.png';
//Redux
import { updateInputLogin, openSnackbar, setErrorMsg } from '../../actions/';
import { connect } from 'react-redux';
//Error Handling
import { SnackbarContent } from '../../components/Snackbar';
import Snackbar from '@material-ui/core/Snackbar';
//Router
import { Redirect } from 'react-router';

class LoginComponent extends Component {

    constructor(props) {
      super(props);
    
      this.state = {
        redirect: false
      };
    }


  	handleChange = (name) => (event) => {
    	this.props.updateInputLogin(name, event.target.value)
  	}

  	handleClose = (event, reason) => {
    	if (reason === 'clickaway') {
      	return;
    	}

    	this.props.openSnackbar(false)
  	};
  	
  	handleClick = () => {
  		const { email, password } = this.props

  		if(!email || !password){
  			this.props.setErrorMsg('Debes rellenar ambos campos c:')
   			this.props.openSnackbar(true)
   			return;
  		}

  		if(email !== 'test@getsirena.com' || password !== 'test'){
  			this.props.setErrorMsg('Nop, esta cuenta nop D:')
   			this.props.openSnackbar(true)
   			return;  			
  		}

  		this.setState({ redirect: true})
  	};

  	handleMissingFunctions = () => {
  		this.props.setErrorMsg('Esta función no se implementó T_T')
   		this.props.openSnackbar(true)
  	}

		

    render(){
      const { classes, email, password } = this.props;

      if(this.state.redirect){
        return(
         <Redirect to="/main/inbox"/>
        )
      }

  		return (
  			<div className={classes.container}>
  				<div className={classes.card}>
  					<div className={classes.leftSide}>
  						<img src={Dolphin} alt='Dolphin' className={classes.dolphin} />
  					</div>
  					<hr className={classes.separator} />

  					<div className={classes.rightSide}>
  						<div className={classes.logoContainer}>
  							<img src={Logo} alt='Logo' className={classes.logo} />
  						</div>

  						<div className={classes.inputsContainer}>
  							<div className={classes.title}>
  								<h2 className={classes.h2}>Bienvenido a Sirena</h2>
  							</div>

  							<div className={classes.input}>
  								<TextField
                		id='email'
                		label='Email'
                		value={email}
                		onChange={this.handleChange('email')}
                		InputLabelProps={{
                			classes: {
       									root: classes.cssLabel,
       									focused: classes.cssFocused,
       								},
        						}}
      							InputProps={{
        							classes: {
          							underline: classes.underline,
          							focused: classes.purple,
        							},
      							}}
              		/>
  							</div>

  							<div className={classes.input}>
  								<TextField
                		id='password'
                		label='Password'
                		type='password'
                		value={password}
                		onChange={this.handleChange('password')}
                		InputLabelProps={{
                			classes: {
       									root: classes.cssLabel,
       									focused: classes.cssFocused,
       								},
        						}}
      							InputProps={{
        							classes: {
          							underline: classes.underline,
          							focused: classes.purple,
        							},
      							}}
              		/>
  							</div>

  							<div className={classes.buttonContainer}>
  								<Button 
  									variant="contained" 
  									color="primary" 
  									className={classes.button}
  									onClick={this.handleClick}
  								>
          					Entrar
        					</Button>
        				</div>

        				<div className={classes.horizontalSepContainer}>
        					<hr className={classes.line}/>
        					<h5> OR </h5>
        					<hr className={classes.line}/>
        				</div>

        				<div className={classes.buttonContainerGoogle}>
                	<Button className={classes.google} onClick={this.handleMissingFunctions}>
                		<img src={GoogleLogo} alt={'Logo'} className={classes.googleImg} />
          					Entrar con Google
        					</Button>
        				</div>

        				<div className={classes.newAccount}>
        					<p className={classes.text}>
        							<b>Nuevo Usuario?</b> 
        							<a href="#!" onClick={this.handleMissingFunctions} style={{textDecoration: 'none'}}> 
        								{" Crear Cuenta"}
        							</a>
        						</p>
        				</div>

  			        <Snackbar
  			          anchorOrigin={{
  			            vertical: 'top',
  			            horizontal: 'right',
  			          }}
  			          open={this.props.isSnackbarOpen}
  			          autoHideDuration={6000}
  			          onClose={this.handleClose}
  			        >
  			          <SnackbarContent
  			            onClose={this.handleClose}
  			            variant="error"
  			            message={this.props.errorMsg}
  			          />
  			        </Snackbar>      				
  						</div>
  					</div>					
  				</div>		
  			</div>
  	);
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.login.email,
    password: state.login.password,
    isSnackbarOpen: state.isSnackbarOpen,
    errorMsg: state.errorMsg
  };
}

const mapDispatchToProps = {
  updateInputLogin,
  openSnackbar,
  setErrorMsg
}



const LoginWithStyles = withStyles(styles)(LoginComponent);
const Login = connect(mapStateToProps, mapDispatchToProps)(LoginWithStyles);

export default Login;