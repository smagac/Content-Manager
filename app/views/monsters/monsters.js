// @flow
import React, { Component, classNames } from 'react';
import Files from '../../store/modules/files';
import { parseJson } from '../../utils/parsers';
import { connect } from 'react-redux'
import { Monster, Ailments } from './data';
import MonsterDetail from './form';
import classnames from 'classnames';

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
        let ailments = Object.assign(new Ailments(), data[name]['status']);
        monster.status = ailments;
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
      <ul className={'list-group'}>
        {
          this.state.monsters.map((monster) => (
            <li className={
                  classnames('list-group-item list-group-item-action', {
                    'active': monster === this.state.monster 
                  })
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
      <div className={'row'} style={{ height: 'calc(100% - 64px)' }}>
        <div className={'col-xs-4 panel'}>
          { this.monsterList }
        </div>
        <div className={'col-xs-8 panel invert'}>
          { this.monster }
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  monsterDirectory: state.files.monsters
}))(MonstersPage)