import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Container from '../Container/Container.js';
import Icon from '../Icon/Icon';
import styles from './Header.scss';
import { settings } from '../../redux/store-dataStore/dataStore.js';
import Search from '../Search/Search.js';

class Header extends React.Component {

  render() {
    const {icon} = settings.navigation;
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link className={styles.logo} to='/'>
              <Icon name={icon} />
            </Link>
            <Search />
            <nav>
              <NavLink exact to='/' activeClassName='active'>Home</NavLink>
              <NavLink exact to='/info' activeClassName='active'>Info</NavLink>
              <NavLink exact to='/faq' activeClassName='active'>FAQ</NavLink>
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;