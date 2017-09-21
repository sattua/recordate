
export default class Todo{
    constructor(title, body='', date = new Date().getTime(), state = 0){
        this.title = title;
        this.body  = body;
        this.date  = date;
        this.dateCreated = new Date().getTime();
        this.state = state;
        this.id = undefined;
    }
}