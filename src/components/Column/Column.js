import React from 'react';
import styles from './Column.scss';
import Icon from '../Icon/Icon.js';
import Card from '../Card/Card.js';
import { settings } from '../../redux/store-dataStore/dataStore.js';
import Creator from '../Creator/Creator.js';
import PropTypes from 'prop-types';

class Column extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.array, 
    icon: PropTypes.node,
    addCard: PropTypes.func,
  };

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  };
  
  render () {
    const {title, icon, cards, addCard} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}>
            <Icon name={icon}/>
          </span>
          {title}
        </h3>
        {cards.map(cardsData => (
          <Card key={cardsData.id} {...cardsData} />
        ))}
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={addCard}/>
        </div>
      </section>
    );
  }
}

export default Column;
