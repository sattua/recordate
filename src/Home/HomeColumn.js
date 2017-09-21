import React from 'react';
import { Text, View } from 'react-native';
import Styles from './Styles'
import { List, ListItem } from 'react-native-elements';

export default class HomeColumn extends React.Component {

    editTodo(index){
        const {UIStore} = this.props;
        UIStore.setSelectedView('task',{index});
    }

    render() {
        const { todos } = this.props;

        return (
            <View style={Styles.homeColumn}>
                <List>
                    {
                        todos.map((todo, i) => (
                            <ListItem
                                key={i}
                                title={todo.title}
                                rightIcon={{name: 'mode-edit'}}
                                onPress={this.editTodo.bind(this, todo.id)}
                            />
                        ))
                    }
                </List>
            </View>
        );
    }
}