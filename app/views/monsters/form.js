// @flow
import React, { Component } from 'react';
import { Monster } from './data';
import styles from '../body.scss';

export default class MonsterDetail extends Component {
  static propTypes = {
    monster: React.PropTypes.objectOf(Monster)
  }

  static monsterTypes = {
    humanoid: [
      'dude', 'elf', 'girl', 'gnome', 'knight', 'ranger', 'sorceress'
    ],
    beast: [
      'bug', 'bunny', 'duck', 'horse', 'plant', 'pudding', 'rat', 'roper', 'snake' 
    ],
    undead: [
      'ghost', 'skeleton', 'wisp'
    ],
    mimic: [
      'loot', 'door'
    ]
  }

  constructor(props) {
    super(props);

    this.updateValue = this.updateValue.bind(this);
  }

  updateValue(prop) {
    return (event) => {
      this.props.monster[prop] = event.target.value;
    }
  }

  _typeDropdownOptions() {
    
  }

  render() {
    let inputStyle = 'form-control';

    return (
      <form>
        <div className={'container'}>
          <div className={'row flex-items-xs-center'}>
            <input type="hidden" value={this.props.monster.id}/>
            <div className={'col-xs-9 col-md-8'}>
              <div className={'form-group'}>
                <label>Name</label>
                <input type="text" className={inputStyle} value={this.props.monster.name} onChange={this.updateValue('name')}/>
              </div>
            </div>
            <div className={'col-xs-3 col-md-4'}>
              <div className={'form-group'}>
                <label>Level</label>
                <input type="number" min="0" max="10" className={inputStyle} value={this.props.monster.level} onChange={this.updateValue('level')} />
              </div>
            </div>
            <div className={'col-xs-12'}>
              <div className={'form-group'}>
                <label>Type</label>
                <select value={this.props.monster.type} className={'custom-select' + ' ' + inputStyle}>
                  { 
                    // group monster types cleanly in the select dropdown
                    Object.keys(MonsterDetail.monsterTypes).map(group => 
                      <optgroup label={group}>
                        {
                          MonsterDetail.monsterTypes[group].map(type => 
                            <option value={type}>{type}</option>
                          )
                        }
                      </optgroup>
                    )
                  }
                </select>
              </div>
            </div>
          </div>
          <div className={'row flex-items-xs-center'}>
            <div className={'col-xs-6'}>
              <h3>Base</h3>
            </div>
            <div className={'col-xs-6'}>
              <h3>Max</h3>
            </div>
            <div className={'col-xs-12'}>
              <h6>Strength</h6>                
            </div>
            <div className={'col-xs-6'}>
              <div className={'form-group'}>
                <input type="number" min="1" max="200" className={inputStyle} value={this.props.monster.str} />
              </div>
            </div>
            <div className={'col-xs-6'}>
              <div className={'form-group'}>
                <input type="number" min="1" max="200" className={inputStyle} value={this.props.monster.maxstr} />
              </div>
            </div>
            <div className={'col-xs-12'}>
              <h6>Defense</h6>                
            </div>
            <div className={'col-xs-6'}>
              <div className={'form-group'}>
                <input type="number" min="1" max="200" className={inputStyle} value={this.props.monster.def} />
              </div>
            </div>
            <div className={'col-xs-6'}>
              <div className={'form-group'}>
                <input type="number" min="1" max="200" className={inputStyle} value={this.props.monster.maxdef} />
              </div>
            </div>
            <div className={'col-xs-12'}>
              <h6>Speed</h6>                
            </div>
            <div className={'col-xs-6'}>
              <div className={'form-group'}>
                <input type="number" min="1" max="200" className={inputStyle} value={this.props.monster.spd} />
              </div>
            </div>
            <div className={'col-xs-6'}>
              <div className={'form-group'}>
                <input type="number" min="1" max="200" className={inputStyle} value={this.props.monster.maxspd} />
              </div>
            </div>
            <div className={'col-xs-12'}>
              <h6>HP</h6>                
            </div>
            <div className={'col-xs-6'}>
              <div className={'form-group'}>
                <input type="number" min="1" max="9999" className={inputStyle} value={this.props.monster.hp} />
              </div>
            </div>
            <div className={'col-xs-6'}>
              <div className={'form-group'}>
                <input type="number" min="1" max="9999" className={inputStyle} value={this.props.monster.maxhp} />
              </div>
            </div>
            <div className={'col-xs-12'}>
              <h6>EXP Bonus</h6>                
            </div>
            <div className={'col-xs-6'}>
              <div className={'form-group'}>
                <input type="number" min="1" max="9999" className={inputStyle} value={this.props.monster.exp} />
              </div>
            </div>
            <div className={'col-xs-6'}>
              <div className={'form-group'}>
                <input type="number" min="1" max="9999" className={inputStyle} value={this.props.monster.maxexp} />
              </div>
            </div>
          </div>
          <div className={'row flex-items-xs-center'}>
            <div className={'col-xs-12'}>
              <h3>Status Ailments</h3>
            </div>
            <div className={'col-xs-6 col-md-4'}>
              <div className={'form-group'}>
                <label>Sprain</label>
                <input type="number" min="0" max="1" step="0.01" className={inputStyle} value={this.props.monster.status.sprain || 0} />
              </div>
            </div>
            <div className={'col-xs-6 col-md-4'}>
              <div className={'form-group'}>
                <label>Arthritis</label>
                <input type="number" min="0" max="1" step="0.01" className={inputStyle} value={this.props.monster.status.arthritis || 0} />
              </div>
            </div>
            <div className={'col-xs-6 col-md-4'}>
              <div className={'form-group'}>
                <label>Poison</label>
                <input type="number" min="0" max="1" step="0.01" className={inputStyle} value={this.props.monster.status.poison || 0} />
              </div>
            </div>
            <div className={'col-xs-6 col-md-4'}>
              <div className={'form-group'}>
                <label>Venom</label>
                <input type="number" min="0" max="1" step="0.01" className={inputStyle} value={this.props.monster.status.venom || 0} />
              </div>
            </div>
            <div className={'col-xs-6 col-md-4'}>
              <div className={'form-group'}>
                <label>Blind</label>
                <input type="number" min="0" max="1" step="0.01" className={inputStyle} value={this.props.monster.status.blind || 0} />
              </div>
            </div>
            <div className={'col-xs-6 col-md-4'}>
              <div className={'form-group'}>
                <label>Confusion</label>
                <input type="number" min="0" max="1" step="0.01" className={inputStyle} value={this.props.monster.status.confuse || 0} />
              </div>
            </div>
          </div>
        </div>
      </form>
    )
  }
}