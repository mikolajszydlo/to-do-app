import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';
import Creator from '../Creator/Creator.js';
import Navbar from '../Navbar/Navbar.js';
import {pageContents, listData, settings} from '../../data/dataStore.js';

class App extends React.Component {
  state = {
    lists: listData || [],
  }

  getNavbarData() {
    const navbarData = [];

    for(const list of this.state.lists){
      navbarData.push({
        title: list.title,
        columns: list.columns,
      });
    }
    console.log(navbarData);
    return navbarData;
  }

  addList(title, description) {
    this.setState(state => (
      {
        lists: [
          ...state.lists,
          {
            key: state.lists.length ? state.lists[state.lists.length-1].key+1 : 0,
            title,
            description,
            image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
            columns: [],
          }
        ]
      }
    ))
  }

  render() {
    return (
        <main className={styles.component}>
          <h1 className={styles.title}>{pageContents.title}</h1>
          <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
            <Navbar navbarData={this.getNavbarData()} />
          <div className={styles.creator}>
            <Creator text={settings.listCreatorText} action={inputString => this.addList(inputString.split(',', 2)[0], inputString.split(',', 2)[1])}/>
          </div>    
          {this.state.lists.map(({key, ...listProp}) => (
            <List key={key} {...listProp} />
          ))}
        </main>
    )
  }
}

export default App;