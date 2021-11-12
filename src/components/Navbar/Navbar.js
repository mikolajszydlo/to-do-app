import React from 'react';
import styles from './Navbar.scss';
import PropTypes from 'prop-types';
import ReactHTMLParser from 'react-html-parser';

class Navbar extends React.Component {
  state = {
    visibleNav: false,
  }

  handleClick = () => {
    this.setState({
      visibleNav: !this.state.visibleNav,
    })
  }

  render() {
    return (
      <div className={styles.navbar}>
        <span className={styles.icon}><i onClick={this.handleClick} className={'fas fa-chevron-up' + (this.state.visibleNav ? ' ' + styles.active : '')}></i></span>
        <nav className={(this.state.visibleNav ? ' ' + styles.active : '')}>
          <ul>
            {this.props.navbarData.map((element, index) => {
              return <li className={styles.listTitle} key={index}>{ReactHTMLParser(element.title)}
                <ul className={styles.navbarList}>
                  {this.props.navbarData[index].columns.map((column, index) => {
                    return <li className={styles.columnTitle} key={index}>{ReactHTMLParser(column.title)}</li>
                  })}
                </ul>
              </li>
            })}
          </ul>
        </nav>
      </div>
    )
  }
}

export default Navbar;