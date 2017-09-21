import {computed, observable, action} from 'mobx';
import { AsyncStorage } from 'react-native';
import Todo from '../model/Todo';
import moment from 'moment';

export default  class TodoStore {
    @observable list = [];
    @observable storageName = "recordateStore";

    @action addTodo(todo) {
        this.list.push(todo);
        todo.id = this.list.length;
        AsyncStorage.setItem(this.storageName, JSON.stringify(this.list));
    }

    @action loadTodos(todos) {
        this.list = todos;
    }

    @computed get todayTodos(){
        const today = new Date().getTime();
        return this.list.filter((todo)=>{
            return moment( today ).isSame( todo.date , 'day');
        });
    }

    @computed get futureTodos(){
        const today = new Date().getTime();
        return this.list.filter((todo)=>{
            return moment( today ).isBefore( todo.date , 'day');
        });
    }
    @computed get passTodos(){
        const today = new Date().getTime();
        return this.list.filter((todo)=>{
            return moment( today ).isAfter( todo.date , 'day');
        });
    }
}