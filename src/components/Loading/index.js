import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { ThemeProvider } from '@material-ui/styles';

import { useStyles, theme } from './styles';

export default function Loading() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <Box>
        <CircularProgress size={150} color="primary"className={classes.loading}/>
        <Typography variant="h6" component="div" color="primary" style={{textAlign: 'center'}}>
        	Carregando...
        </Typography>
        </Box>
      </ThemeProvider>
    </div>
  );
}