import React from 'react';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { ThemeProvider } from '@material-ui/styles';

import { useStyles, theme } from './styles';

import { useDetail } from '../../hooks/useDetail';
import Loading from '../../components/Loading';

export default function Details() {
	const [ details, cover, loading] = useDetail();
	const classes = useStyles();

	const description = details.description==null ? 'Descrição indisponível' : details.description;

  console.log(details)

	return (
    <div>
      {loading ? <Loading /> : (
        <div className={classes.root}>
          <Grid container spacing={1}>
            
            <Grid item xs={12} sm={6}>
                <Paper className={classes.paper} variant="outlined" elevation={1}>
                  <img src={cover} alt="cover" className={classes.cover}/>
                </Paper>
            </Grid>

            <Grid item xs={12} sm={6}>
                <Paper className={classes.paper} variant="outlined" elevation={1}>
                  <div className={classes.content}>               
                    <Typography variant="h6" gutterBottom>
                    {details.title}
                    </Typography>
                    
                    <Typography variant="body2" gutterBottom>
                      {description}
                    </Typography>


                    <Typography className={classes.price} variant="h6" gutterBottom>
                      R$ 49,90
                    </Typography>

                    <ThemeProvider theme={theme}>
                      <Link to="/checkout" style={{textDecoration: 'none'}}>
                        <Button
                          variant="contained"
                          size="large"
                          color="primary"
                          disableElevation
                          className={classes.button}
                          startIcon={<AddShoppingCartIcon />}
                        >
                          COMPRAR
                        </Button>
                      </Link>
                    </ThemeProvider>
                  </div>
                </Paper>
            </Grid>
          </Grid>
        </div>
      )}
    </div>
	);
}