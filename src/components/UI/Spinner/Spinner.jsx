import React from 'react';

import classes from './Spinner.module.css';

export const Spinner = () => (
	<div className={classes.handlerLoader}>
		<div className={classes.loader}>Loading...</div>
	</div>
);
