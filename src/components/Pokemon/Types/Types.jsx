import React from 'react';

import classes from './Types.module.css';

const Types = props => {
	const typesStyles = {
		normal: '#b7b7a9',
		grass: '#88d24f',
		fire: '#f95442',
		water: '#56aeff',
		fighting: '#a75544',
		flying: '#78a2ff',
		poison: '#a95da1',
		ground: '#ecca57',
		rock: '#cdbc72',
		bug: '#c1d120',
		ghost: '#7975d7',
		electric: '#fde543',
		psychic: '#fa65b5',
		ice: '#95f1ff',
		dragon: '#8a76ff',
		dark: '#8e6956',
		steel: '#c4c3dc',
		fairy: '#f9acff'
	};

	let types = null;
	if (props.types) {
		types = props.types.map(({ type }) => {
			return (
				<p
					style={{ backgroundColor: `${typesStyles[type.name]}` }}
					key={type.name}>
					{type.name}
				</p>
			);
		});
	}

	return (
		<div className={classes.types}>
			<h3>Type</h3>
			{types}
		</div>
	);
};

export default Types;
