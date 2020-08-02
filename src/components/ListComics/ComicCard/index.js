import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import noImage from '../../../assets/no-image.gif';

import { useStyles } from './styles';

const ComicCard = (props) => {
	const classes = useStyles();

	const coverSource = props.thumbnail.path + '.' + props.thumbnail.extension;
    const cover = 
        coverSource === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
        ? noImage : coverSource;

    const rare = props.rare ? classes.rare: '';

	return (	
		<Card component={Link}
            to={`/details/${props.id}`}
            className={`${rare} ${classes.root}`}>
            <CardMedia
        	    className={classes.cover}
        	    image={cover}
        	    title={props.title}
            />               
            <CardContent className={classes.container}>        	  
                <Typography variant="subtitle2">
                    {props.title}
                </Typography>
                <Typography variant="h6" className={classes.price}>
                    R$ 49.90
                </Typography>
          	</CardContent>    	  
        </Card>
	)
}

export default ComicCard;