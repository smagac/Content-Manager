// @flow
import React, { Component, classNames } from 'react';
import Files from '../../store/modules/files';
import { parseJson } from '../../utils/parsers';
import { connect } from 'react-redux'
import bootstrap from 'bootstrap/dist/css/bootstrap-flex.css';
import { Monster } from './data';
import MonsterDetail from './form';
import styles from '../body.css';

class MonstersPage extends Component {

  static propTypes = {
    monsterDirectory: React.PropTypes.string
  };

  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
      monster: null,
    };
  }

  /**
   * Load this component's data from the assets before rendering
   * This will provide us with a table
   */
  componentWillMount() {
    if (this.props.monsterDirectory){
      let data = parseJson(this.props.monsterDirectory);

      let monsters = [];
      for (let name in data) {
        let monster = Object.assign(new Monster(name), data[name]);
        monsters.push(monster);
      }
      this.state.monsters = monsters;
      this.state.monster = null;
    }
  }

  /**
   * Set the monster that we're currently editing in the form
   */
  setMonster(monster) {
    return () => {
      this.setState({monster});
    };
  }

  /**
   * Renders the list of monsters loaded in from the json
   */
  get monsterList() {
    return (
      <ul className={bootstrap['list-group']}>
        {
          this.state.monsters.map((monster) => (
            <li className={
                  bootstrap['list-group-item'] + ' ' + 
                  bootstrap['list-group-item-action'] + ' ' + 
                  ((monster == this.state.monster) ? bootstrap.active : '')
                } 
                onClick={this.setMonster(monster)}>
              {monster.name}
            </li>
          ))
        }
      </ul>
    )
  }

  get monster() {
    if (this.state.monster) {
      return <MonsterDetail monster={this.state.monster}></MonsterDetail>
    }
    return null;
  }

  render() {
    return (
      <div className={ bootstrap['row'] }>
        <div className={ bootstrap['col-xs-4'] + ' ' + styles.panel}>
          { this.monsterList }
        </div>
        <div className={ bootstrap['col-xs-8'] + ' ' + styles.panel }>
          { this.monster }
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  monsterDirectory: state.files.monsters
}))(MonstersPage)