import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import noImage from '../../../assets/no-image.gif';

import { useStyles } from './styles';

const ComicCard = (props) => {
	const classes = useStyles();

	const coverSource = props.thumbnail.path + '.' +props.thumbnail.extension;
    const cover = 
        coverSource === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
        ? noImage : coverSource;

	return (	
		<Card className={classes.root}> 		

        <CardMedia
    	    className={classes.cover}
    	    image={cover}
    	    title={props.title}

        />
        <Link className={classes.details} to={`/details/${props.id}`}>
        <CardActionArea component="div" className={classes.content}>               
          <CardContent>        	  
            <Typography variant="subtitle1">
        	   {props.title}
        	  </Typography>
            <Typography variant="h6" className={classes.price}>
              R$ 48,90
            </Typography>
      	  </CardContent>    	  
        </CardActionArea>
        </Link>
    </Card>
	)
}

export default ComicCard;