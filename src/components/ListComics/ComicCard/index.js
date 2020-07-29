import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: 200,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '60%',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 130,
  },
}));

const ComicCard = (props) => {
	const classes = useStyles();

	const thumbSrc = props.thumbnail.path+'.'+props.thumbnail.extension;

	return (	
		<Card className={classes.root}>
		<CardMedia
	        className={classes.cover}
	        image={thumbSrc}
	        title={props.title}
      	/>
	    <div className={classes.details}>
	        <CardContent className={classes.content}>
	          <Typography>
	            {props.title}
	          </Typography>
	        </CardContent>
	    </div>
    </Card>
	)
}

export default ComicCard;