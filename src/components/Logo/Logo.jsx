import React from 'react';

import classes from './Logo.module.css';

import LogoPokemon from '../../assets/images/International_Pokémon_logo.svg.png';

const Logo = () => (
	<img className={classes.Logo} src={LogoPokemon} alt='LogoPokemon' />
);
export default Logo;
