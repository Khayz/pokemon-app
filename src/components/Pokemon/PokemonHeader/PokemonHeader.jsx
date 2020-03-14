import React from 'react';

import classes from './PokemonHeader.module.css';

const PokemonHeader = props => {
	return (
		<div className={classes.PokemonHeader}>
			<h1>{props.pokemon.name}</h1>
			<button onClick={props.change}>Change Pokemon</button>
		</div>
	);
};

export default PokemonHeader;
