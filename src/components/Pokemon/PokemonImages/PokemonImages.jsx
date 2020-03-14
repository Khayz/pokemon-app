import React from 'react';

import classes from './PokemonImage.module.css';

const PokemonImages = props => {
	return (
		<div className={classes.PokemonImages}>
			<img src={props.pokemon.sprites.front_default} alt='pokemon_front' />
			<img src={props.pokemon.sprites.back_default} alt='pokemon_back' />
		</div>
	);
};

export default PokemonImages;
