import React from 'react';

import SlotMachine from './components/SlotMachine/SlotMachine';

import Red from './assets/red.png';
import Yellow from './assets/yellow.png';
import Green from './assets/green.png';
import Blue from './assets/blue.png';

const App = () => (
	<div className="container">
		<SlotMachine wheel={[ Green, Yellow, Red, Blue ]} />
	</div>
);

export default App;
