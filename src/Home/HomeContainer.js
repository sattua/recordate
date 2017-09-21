import React from 'react';
import { Text, View, AsyncStorage, ScrollView } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import Styles from './Styles';
import MainEvent from './MainEvent';
import HomeColumn from './HomeColumn';
import {observer} from 'mobx-react';
import Todo from '../model/Todo';
import moment from 'moment';
import UIHelper from '../common/UIHelper.js';

@observer
export default class HomeContainer extends React.Component {

  constructor(props){
    super(props);
    this.UIHelper = new UIHelper();
  }
  
  componentWillMount(){
    const {TodoStore} = this.props;
    AsyncStorage.getItem(TodoStore.storageName)
    .then((value) => {
        if(value){
          TodoStore.loadTodos(JSON.parse(value));
        }
    }).done();
  }

  render() {
    const { TodoStore, UIStore } = this.props;
    let { width, height } = this.UIHelper.getUIDimensions();
    let colsDimensions = { 
      width: width/2,
      height: height/2
    };

    return (
      <View >
        <Grid >

            <Row style={{ width }} >
                <MainEvent todos={TodoStore}/>
            </Row>

            <Row style={{ width }}>
              <View style={{flexDirection: 'row'}}>

                <View style={[Styles.homeColLeft, colsDimensions]}>
                  <View style={Styles.homeColHeader}>
                      <Text style={Styles.homeColHeaderText}>Coming</Text>
                  </View>
                  <ScrollView style={{ height }}>
                    <HomeColumn todos={TodoStore.futureTodos} UIStore={UIStore} />
                  </ScrollView>
                </View>

                <View style={[Styles.homeColRight, colsDimensions]} >
                  <View style={Styles.homeColHeader}>
                      <Text style={Styles.homeColHeaderText}>Pass</Text>
                  </View>
                  <ScrollView style={{ height }}>
                    <HomeColumn todos={TodoStore.passTodos} UIStore={UIStore} />
                  </ScrollView >
                </View>

              </View>
            </Row>

        </Grid>
      </View>
    );
  }
}


