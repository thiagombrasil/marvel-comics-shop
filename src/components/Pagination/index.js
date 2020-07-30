import React from 'react';
import Pagination from '@material-ui/lab/Pagination';

import { useStyles } from './styles';

export default function HomePagination(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Pagination count={10} page={props.page} onChange={props.handleChange} size="large" color="secondary" />
    </div>
  );
}