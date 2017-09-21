import React from 'react';
import { Text, View } from 'react-native';
import Styles from './Styles'
import { Button, Card } from 'react-native-elements';
import moment from 'moment';
import {observer} from 'mobx-react';
import { Col, Row, Grid } from "react-native-easy-grid";
import UIHelper from '../common/UIHelper.js';

@observer
export default class MainEvent extends React.Component {
    
    constructor(props){
        super(props);
        this.UIHelper = new UIHelper();
        this.state = {
            index: 0
        };
    }

    moveIndex(moveTo){
        const { todayTodos } = this.props.todos;
        let index = moveTo === 'left' ? this.state.index -1 : this.state.index +1; 

        if( index >= todayTodos.length){
            index = 0;
        }
        if( index < 0){
            index = todayTodos.length-1
        }

        this.setState({
            index
        });
    }

    getCurrentTodos(){
        const { todayTodos } = this.props.todos;
        let { width } = this.UIHelper.getUIDimensions();

        if(todayTodos.length < 1){
            return (<Card title='Hooray!!!' ><Text>No tasks for today</Text></Card>);
        }
        const todo = todayTodos[this.state.index];

        return (
            <Card title={todo.title}  >

                <Text style={{marginBottom: 10}}>
                    {todo.body || "...." }
                </Text>

                <Text style={{marginBottom: 10}}>
                    Date: {moment(todo.date).format('LLLL')}
                </Text>
                
                <Button
                    icon={{name: 'check-circle'}}
                    backgroundColor='#03A9F4'

                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='Mark as Done' />
            </Card>
        );
    }

    render() {
        const { todayTodos } = this.props.todos;
        return (
            <View style={Styles.mainContainer}>

                {this.getCurrentTodos()}
                { todayTodos.length > 1 &&
                    <Grid>
                        <Col>
                            <Button
                                icon={{name: 'keyboard-arrow-left'}}
                                backgroundColor='#03A9F4'

                                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                                title='previous' 
                                onPress={this.moveIndex.bind(this, 'left') } />
                        </Col>
                        <Col>
                            <Button
                                iconRight
                                icon={{name: 'keyboard-arrow-right'}}
                                backgroundColor='#03A9F4'

                                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                                title='next' 
                                onPress={this.moveIndex.bind(this, 'right') }  />
                        </Col>
                    </Grid>
                }
            </View>
        );
    }
}