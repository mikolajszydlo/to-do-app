import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import {settings} from '../../redux/store-dataStore/dataStore.js';
import ReactHTMLParser from 'react-html-parser';
import Creator from '../Creator/Creator.js';
import Column from '../Column/ColumnContainer.js';


class List extends React.Component {

  static propTypes = {
    title: PropTypes.node.isRequired,
    description: PropTypes.string,
    columns: PropTypes.array,
    image: PropTypes.string.isRequired,
    addColumn: PropTypes.func,
  };

  static defaultProps = {
    description: settings.defaultListDescription,
  };
 
  render() {
    const {columns, title, image, description, addColumn} = this.props;
    return (
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
    );
  }
}

export default List;