import React from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { ThemeProvider } from '@material-ui/styles';

import { useStyles, theme } from './styles';
import * as comicsActions from '../../store/actions/comics';

function Details({comicId, cover, title, description, addComic}) {
  const classes = useStyles();
  const comic = {
    id: comicId,
    title: title,
    thumbnail: cover,
    price: 49.95,
    quantity: 1,
  }

  return (
        <div className={classes.root}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <Paper className={`${classes.paper} ${classes.cover}`} variant="outlined" elevation={1}>
                <img src={cover} alt="cover" className={classes.coverImg}/>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper 
                className={`${classes.paper} ${classes.content}`} 
                variant="outlined" 
                elevation={1}
              >            
                <Typography variant="h6" gutterBottom>
                  {title}
                </Typography>                    
                <Typography className={classes.item} variant="body2" gutterBottom>
                  {description}
                </Typography>
                <Typography className={classes.price} variant="h6" gutterBottom>
                  R$ 49,95
                </Typography>
                <ThemeProvider theme={theme}>
                  <Link 
                  style={{textDecoration: 'none'}}
                  to="/checkout"
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      disableElevation
                      className={classes.button}
                      startIcon={<AddShoppingCartIcon />}
                      onClick={() => addComic(comic)}
                    >
                      COMPRAR
                    </Button>
                  </Link>
                </ThemeProvider>
              </Paper>
            </Grid>
          </Grid>
        </div>
  );
}

const mapStateToProps = state => ({
  comics: state.comics
});

const mapDispatchToProps = dispatch => 
  bindActionCreators(comicsActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Details);