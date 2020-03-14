import React, { Component } from 'react';

import classes from './Pokemones.module.css';

import Pokemon from '../../components/Pokemon/Pokemon';
import Logo from '../../components/Logo/Logo';
import { Spinner } from '../../components/UI/Spinner/Spinner.jsx';

export default class Pokemones extends Component {
	state = {
		pokemones: []
	};

	componentDidMount() {
		const start = parseInt(Math.random() * 787);
		const end = start + 19;
		(async () => {
			await this.fetchPokemones(start, end);
		})();
	}

	fetchPokemones = async (start, end) => {
		const pokemones = [];
		for (let x = start; x <= end; x++) {
			const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${x}`);
			const pokemon = await data.json();
			pokemones.push({ ...pokemon, loading: false });
		}

		this.setState({
			pokemones: pokemones
		});
	};

	changePokemonHandler = index => {
		const pokemonsCopy = [...this.state.pokemones];
		pokemonsCopy.splice(index, 1, { loading: true });
		this.setState(prevState => ({
			pokemones: [...pokemonsCopy]
		}));
		fetch(`https://pokeapi.co/api/v2/pokemon/${parseInt(Math.random() * 807)}`)
			.then(resolve => resolve.json())
			.then(pokemon => {
				pokemonsCopy.splice(index, 1, { ...pokemon, loading: false });
				this.setState(prevState => ({
					pokemones: [...pokemonsCopy]
				}));
			});
	};

	changePokemonsHandler = () => {
		const start = parseInt(Math.random() * 787);
		const end = start + 19;
		this.setState({
			pokemones: []
		});
		(async () => {
			await this.fetchPokemones(start, end);
		})();
	};

	render() {
		let pokemones = null;
		if (this.state.pokemones.length === 20) {
			pokemones = this.state.pokemones.map((pokemon, index) => {
				if (pokemon.loading) {
					return <Spinner key={Math.random() * 1000} />;
				} else {
					return (
						<Pokemon
							change={() => this.changePokemonHandler(index)}
							key={Math.random() * 1000}
							pokemon={pokemon}
						/>
					);
				}
			});
		} else {
			pokemones = (
				<div>
					<h2>Wait, pokemons are waking up!</h2>
					<Spinner />
				</div>
			);
		}

		return (
			<div className={classes.PokemonesContainer}>
				<Logo />
				<h2>
					(If you change a pokemon, wait to that pokemon changes, for change to
					other, because you can bug the app)
				</h2>
				<button
					className={classes.changePokemones}
					onClick={this.changePokemonsHandler}>
					Change All Pokemons
				</button>
				<div className={classes.Pokemones}>{pokemones}</div>
			</div>
		);
	}
}
