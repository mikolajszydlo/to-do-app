import React from 'react';
import styles from './SearchResults.scss';
import Icon from '../Icon/Icon.js';
import Card from '../Card/Card.js';
import Container from '../Container/Container.js';
import { settings } from '../../redux/store-dataStore/dataStore.js';
import PropTypes from 'prop-types';

class SearchResults extends React.Component {

  static propTypes = {
    cards: PropTypes.array, 
    moveCard: PropTypes.func,
  };
  
  render () {
    const {cards} = this.props;
    
    return (
      <Container>
        <section className={styles.component}>
          <h3 className={styles.title}>
            <span className={styles.icon}>
              <Icon name={settings.results.icon}/>
            </span>
            {settings.results.foundCardsTitle}
          </h3>
          {cards.map(cardsData => (
            <Card key={cardsData.id} {...cardsData} />
          ))}
        </section>
      </Container>
    );
  }
}

export default SearchResults;
