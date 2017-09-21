import React from 'react';

import {observer} from 'mobx-react';
import ActionButton from 'react-native-action-button';
import { Icon } from 'react-native-elements';

@observer
export default class HomeContainer extends React.Component {

  changeView(viewName){
    const { UIStore } = this.props;
    UIStore.setSelectedView(viewName);
  }

  render() {
    const { UIStore } = this.props;
    return (
        <ActionButton buttonColor="rgba(231,76,60,1)" position="center" >
          { UIStore.selectedView !== 'task' &&
          <ActionButton.Item buttonColor='#1abc9c' title="Add Tasks" onPress={this.changeView.bind(this, 'task')} >
            <Icon name="note-add"  />
          </ActionButton.Item>
          }
          { UIStore.selectedView !== 'home' &&
          <ActionButton.Item buttonColor='#1abc9c' title="Home" onPress={this.changeView.bind(this, 'home')} >
            <Icon name="home"  />
          </ActionButton.Item>
          }
          <ActionButton.Item buttonColor='#9b59b6' title="Settings" >
            <Icon name="settings"  />
          </ActionButton.Item>
        </ActionButton>
    );
  }
}


