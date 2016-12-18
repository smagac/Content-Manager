// @flow
import React, { Component } from 'react';
import { actions } from '../../store/modules/files';
import { connect } from 'react-redux'
const { dialog } = require('electron').remote;

class ConfigurePage extends Component {
  constructor(props) {
    super(props);
    props
  }

  findAssetsDirectory() {
    let { dispatch } = this.props

    dialog.showOpenDialog({
      properties: ['openDirectory']
    }, (dirs) => {
      dispatch(actions.loadResources(dirs[0]));
    })
  }

  changeAssetsDirectory(event) {
    actions.loadResources(event.target.files[0]);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <label>Assets Folder</label>
            <br/>
            <button className='btn btn-primary' onClick={(evt) => this.findAssetsDirectory()}>Locate Assets Folder</button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  assetsLoaded: state.files.loaded,
}))(ConfigurePage)