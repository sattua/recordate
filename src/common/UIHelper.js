import Dimensions from 'Dimensions';

export default class UIHelper{
    constructor(){

    }
    getUIDimensions(){
        return {
            width: Dimensions.get('screen').width,
            height: Dimensions.get('screen').height
        }
    }
}