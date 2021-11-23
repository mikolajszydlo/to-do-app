import React from 'react';
import styles from './App.scss';
import List from '../List/ListContainer.js';
// import Creator from '../Creator/Creator.js';
// import Navbar from '../Navbar/Navbar.js';
import PropTypes from 'prop-types';
import Search from '../Search/SearchContainer.js';

class App extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
  };

  getNavbarData() {
    const navbarData = [];

    for(const list of this.state.lists){
      navbarData.push({
        title: list.title,
        columns: list.columns,
      });
    }
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
          },
        ],
      }
    ));
  }

  render() {
    const {lists, title, subtitle} = this.props;
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <Search />
        {/* <Navbar navbarData={this.getNavbarData()} />*/}
        {/* 
        <div className={styles.creator}>
          <Creator text={settings.listCreatorText} 
            action={inputString => this.addList(
              inputString.split(',', 2)[0], 
              inputString.split(',', 2)[1])}/>
        </div>  
        */} 
        {lists.map(listData => (
          <List key={listData.id} {...listData} />
        ))}
      </main>
    );
  }
}

export default App;