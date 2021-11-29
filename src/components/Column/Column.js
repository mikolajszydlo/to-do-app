import React from 'react';
import styles from './Column.scss';
import Icon from '../Icon/Icon.js';
import Card from '../Card/Card.js';
import { settings } from '../../redux/store-dataStore/dataStore.js';
import Creator from '../Creator/Creator.js';
import PropTypes from 'prop-types';
import {Droppable} from 'react-beautiful-dnd';

class Column extends React.Component {

  static propTypes = {
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    cards: PropTypes.array, 
    icon: PropTypes.node,
    addCard: PropTypes.func,
  };

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  };
  
  render () {
    const {id, title, icon, cards, addCard} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}>
            <Icon name={icon}/>
          </span>
          {title}
        </h3>
        <Droppable droppableId={id}>
          {provided => (
            <div 
              className={styles.cards}
              {...provided.droppableProps}
              ref={provided.innerRef}  
            >
              {cards.map(cardsData => (
                <Card key={cardsData.id} {...cardsData} />
              ))}

              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={addCard}/>
        </div>
      </section>
    );
  }
}

export default Column;
