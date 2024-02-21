import mainLogo from '@assets/main-logo.svg';
import { FunctionalComponent } from 'preact';
import './style.css';

export const Home: FunctionalComponent<{}> = () => {
    return (
        <div class="flex-columns">
            <img src={mainLogo} alt="Cartwheel Ranch logo" class="fade-in" style="width: 100%;" />
            <p>Locally raised registered Black Angus Prime beef, Berkshire pork, LaMancha goat and goat/cow dairy!</p>
            <a href='/about'>Learn More</a>
            <div></div>
        </div>
    );
};
