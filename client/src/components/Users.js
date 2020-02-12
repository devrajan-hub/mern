import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CssBaseline, makeStyles, Grid, Paper } from '@material-ui/core';

import { getUsers } from '../actions/userAction';

const useStyles = makeStyles(theme => ({
  root: {
    flexFlow: 1
  },
  main: {
    color: 'red'
  }
}));

export const Users = ({ user: { users, userErrors }, getUsers }) => {
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const classes = useStyles();

  return (
    <Fragment>
      <CssBaseline />
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12} sm={8} md={6} xl={6}>
            <Paper className={classes.main}>
              <p>This is some content</p>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
};

Users.propTypes = {
  getUsers: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = {
  getUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
