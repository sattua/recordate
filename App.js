import React from 'react';
import { View, StyleSheet } from 'react-native';
import Home from './src/Home/HomeContainer';
import Task from './src/Task/TaskContainer';
import Stores from './src/stores/CombinedStores.js';
import {Provider,observer} from 'mobx-react';
import Menu from './src/CommonComponents/Menu';

@observer
export default class App extends React.Component {

  getSelectedView(viewName){
    switch(viewName){
      case 'home':{
        return <Home { ...Stores} />
      }
      case 'task':{
        return <Task { ...Stores} />
      }
      default:{
        return <Home { ...Stores} />
      }

    }
  }

  render() {
    return (
      <Provider { ...Stores} >
        <View style={styles.container}>
          { this.getSelectedView(Stores.UIStore.selectedView) }
          <Menu { ...Stores} />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
