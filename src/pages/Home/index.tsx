import mainLogo from '@assets/main-logo.svg';
import { FC } from 'preact/compat';
import './style.css';

export const Home: FC<{}> = () => {
	return (
		<div>
			<img src={mainLogo} alt="Cartwheel Ranch logo" />
			<p>Coming Soon!</p>
		</div>
	);
};
