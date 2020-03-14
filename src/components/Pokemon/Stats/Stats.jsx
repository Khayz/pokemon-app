import React from 'react';

import classes from './Stats.module.css';

const Stats = props => {
	let stats = null;
	if (props.stats) {
		stats = props.stats.map(stat => (
			<div key={stat.stat.name}>
				<p>
					{stat.stat.name}: {stat.base_stat}
				</p>
			</div>
		));
	}
	return (
		<div className={classes.stats}>
			<h3>Stats</h3>
			{stats}
		</div>
	);
};

export default Stats;
