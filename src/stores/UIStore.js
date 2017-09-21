import {computed, observable, action} from 'mobx';

export default  class UIStore {
    @observable homeColCardWidth = 200;

    @observable selectedView = 'home';
    @observable selectedViewParams = {};

    @action setSelectedView(name, params = {}) {
        this.selectedView = name;
        this.selectedViewParams = params;
    }

    @action setHomeColCardWidth(width) {
        this.homeColCardWidth = width;
    }
}