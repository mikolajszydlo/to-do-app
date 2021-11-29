import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import {settings} from '../../redux/store-dataStore/dataStore.js';
import ReactHTMLParser from 'react-html-parser';
import Creator from '../Creator/Creator.js';
import Column from '../Column/ColumnContainer.js';
import Container from '../Container/Container.js';
import { DragDropContext } from 'react-beautiful-dnd';

class List extends React.Component {

  static propTypes = {
    title: PropTypes.node.isRequired,
    description: PropTypes.string,
    columns: PropTypes.array,
    image: PropTypes.string.isRequired,
    addColumn: PropTypes.func,
    moveCard: PropTypes.func,
  };

  static defaultProps = {
    description: settings.defaultListDescription,
  };
 
  render() {
    const {columns, title, image, description, addColumn, moveCard} = this.props;
    const moveCardHandler = result => {

      if(
        result.destination
        &&
        (
          result.destination.index != result.source.index
          ||
          result.destination.droppableId != result.source.droppableId
        )
      ){
        moveCard({
          id: result.draggableId,
          dest: {
            index: result.destination.index,
            columnId: result.destination.droppableId,
          },
          src: {
            index: result.source.index,
            columnId: result.source.droppableId,
          },
        });
      }
    };

    return (
      <Container>
        <DragDropContext onDragEnd={moveCardHandler}>
          <section className={styles.component}>
            <Hero titleText={title} imageSource={image} />
            <div className={styles.description}>
              {ReactHTMLParser(description)}
            </div> 
            <div className={styles.columns}>
              {columns.map(columnData => (
                <Column key={columnData.id} {...columnData} />
              ))}
            </div>
            <div className={styles.creator}>
              <Creator text={settings.columnCreatorText} action={addColumn}/>
            </div>
          </section>
        </DragDropContext>
      </Container>
    );
  }
}

export default List;