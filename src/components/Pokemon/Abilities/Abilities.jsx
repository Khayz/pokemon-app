import React from 'react';

import classes from './Abilities.module.css';

const Abilities = props => {
	let abilities = null;
	if (props.abilities) {
		abilities = props.abilities.map(({ ability }) => (
			<p key={ability.name}>{ability.name}</p>
		));
	}

	return (
		<div className={classes.abilities}>
			<h3>Abilities</h3>
			{abilities}
		</div>
	);
};

export default Abilities;
