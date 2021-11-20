import React from 'react';
import styles from './Column.scss';
import Card from '../Card/Card.js';
import Icon from '../Icon/Icon.js';
import {settings} from '../../data/dataStore.js';
import Creator from '../Creator/Creator.js';
import PropTypes from 'prop-types';

class Column extends React.Component {
  state = {
    cards: this.props.cards || [],
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.node, 
    icon: PropTypes.node, 
  };

  addCard(title){
    this.setState(state => (
      {
        cards: [
          ...state.cards,
          {
            key: state.cards.length ? state.cards[state.cards.length-1].key+1 : 0,
            title, 
          },
        ],
      }
    ));
  }
  
  render () {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}>
            <Icon name={this.props.icon}/>
          </span>
          {this.props.title}
        </h3>
        {this.state.cards.map(({key, ...cardProp}) => (
          <Card key={key} {...cardProp} />
        ))}
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
        </div>
      </section>
    );
  }
}

export default Column;
