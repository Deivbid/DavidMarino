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


const CardComponent = ({classes, children}) => {
	return (
		<Grid container className={classes.root} justify='center'>
      <Grid item xs={12}>
        <Card>
          <Grid
            container
            align='center'
            alignItems='center'
            justify='center'
            direction='column'
            className={classes.styles}
          >
            {children}
          </Grid>
        </Card>
      </Grid>
    </Grid>
	);
}

const CardD = withStyles(styles)(CardComponent)

export default CardD