import UIStore from './UIStore';
import TodoStore from './Todos';

export default {
    UIStore: new UIStore(),
    TodoStore: new TodoStore(),
    // place for other stores...
};