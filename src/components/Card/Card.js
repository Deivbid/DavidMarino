import React from 'react';
import { createStyles } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

const styles = createStyles({
  root: {
    flexGrow: 1,
    marginBottom: 25,
  },
  styles: {
    height: '100%',
  },
})


const CardComponent = (props) => {
	return (
		<Grid container={true} className={props.classes.root} justify='center'>
      <Grid item={true} xs={12}>
        <Card>
          <Grid
            container={true}
            align='center'
            alignItems='center'
            justify='center'
            direction='column'
            className={props.classes.styles}
          >
            {props.children}
          </Grid>
        </Card>
      </Grid>
    </Grid>
	);
}

const CardD = withStyles(styles)(CardComponent)

export default CardD