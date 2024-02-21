import mainLogo from '@assets/main-logo.svg';
import './style.css';

export const Nav = () => {
  return (
    <nav class="main-nav">
      <ol>
        <li>
          <a href="/">
            <img src={mainLogo} alt="Cartwheel Ranch logo" style="width: 120px;" />
          </a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ol>
    </nav>
  );
};
