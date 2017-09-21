import React from 'react';
import { Text, View, Alert } from 'react-native';
import { Button, FormLabel, FormInput } from 'react-native-elements';
import {observer} from 'mobx-react';
import moment from 'moment';
import DatePicker from 'react-native-datepicker'
import Todo from '../model/Todo'

@observer
export default class TaskContainer extends React.Component {

    constructor(props){
        super(props);
        const { TodoStore, UIStore } = this.props;
        const index = UIStore.selectedViewParams.index
        let title, description = '';
        let date = new Date();
        
        if(index >= 0 ){
            title = TodoStore.list[index].title;
            description = TodoStore.list[index].body;
            date = moment(TodoStore.list[index].date).format('YYYY-MM-DD');
        }

        this.state = {
            title,
            description,
            date,
            showDatePicker: false,
            isEditing: index ? true : false
        };
    }

    clearForm(){
        this.setState({
            title: '',
            description: '',
            date: new Date(),
            showDatePicker: false
        });
    }

    createTask(){
        const { TodoStore } = this.props;
        const { title, description, date } = this.state;
        if(title){
            const todo = new Todo(title, description, moment(date).valueOf() );
            TodoStore.addTodo(todo);
            this.clearForm();
        }else{
            Alert.alert('Add a title')
        }
    }


    render() {
        return (
            <View>
                <FormLabel>Title</FormLabel>
                <FormInput value={this.state.title} onChangeText={(title)=> this.setState({title}) }/>
                <FormLabel>Description</FormLabel>
                <FormInput value={this.state.description} onChangeText={(description)=> this.setState({description}) }/>
                <DatePicker
                    style={{margin: 20}}
                    date={this.state.date}
                    mode="date"
                    format="YYYY-MM-DD"
                    minDate={ moment().format('YYYY-MM-DD') }
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                            marginLeft: 36
                        }
                    }}
                    onDateChange={(date) => {this.setState({date: date})}}
                />
                <Button
                    icon={{name: 'check-circle'}}
                    backgroundColor='#03A9F4'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='Create Task' 
                    onPress = {this.createTask.bind(this)}/>
            </View>
        );
    }
}