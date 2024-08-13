import { render } from 'preact';
import { LocationProvider, Router, Route } from 'preact-iso';

import { Home } from '@pages/Home';
import { About } from '@pages/About';
import { NotFound } from '@pages/_404.jsx';

import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
import '@shoelace-style/shoelace/dist/themes/light.css';

import './reset.css';
import './style.css';

export function App() {
	return (
		<LocationProvider>
			<main>
				<Router>
					<Route path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route default component={NotFound} />
				</Router>
			</main>
		</LocationProvider>
	);
}

setBasePath('/shoelace');
render(<App />, document.getElementById('app'));
