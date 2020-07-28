import React from 'react';

const ComicCard = (props) => {
	const thumbSrc = props.thumbnail.path+'.'+props.thumbnail.extension;

	return (
		<ul>
			<li>
				<img src={thumbSrc} alt={props.title}/>
				<strong>{props.title}</strong>
				<p>{props.description}</p>
			</li>
		</ul>
	)
}

export default ComicCard;