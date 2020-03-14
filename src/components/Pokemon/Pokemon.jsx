import React from 'react';

import classes from './Pokemon.module.css';

import Abilities from './Abilities/Abilities';
import Stats from './Stats/Stats';
import Types from './Types/Types';
import PokemonImages from './PokemonImages/PokemonImages';
import PokemonHeader from './PokemonHeader/PokemonHeader';

const Pokemon = props => {
	return (
		<div className={classes.Pokemon}>
			<div>
				<PokemonHeader change={props.change} pokemon={props.pokemon} />
				<PokemonImages pokemon={props.pokemon} />
			</div>
			<div className={classes.PokemonInfo}>
				<Abilities abilities={props.pokemon.abilities} />
				<Stats stats={props.pokemon.stats} />
				<Types types={props.pokemon.types} />
			</div>
		</div>
	);
};

export default Pokemon;
