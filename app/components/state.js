import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action, get, set } from '@ember/object';
import { inject as service } from '@ember/serice';
import utils from "../utils";

export default class StateComponent extends Component {

    @tracked stateData = {
        label: '',
        description: '',
        code: ''
    };
    @tracked isPermitToSave = false;

    constructor(){
        super(...arguments);
    }

    @action onChanged(event){
        let code = event.target.value.trim();
        if(code){
            set(this.stateData,'code', code);
        }
        this.isPermitToSave = true;
    }

    @action save(){
        console.log('Save Data:-', this.stateData);

        // after save, optional staff we can do
        this.isPermitToSave = false;
        this.stateData = {};
    }
}
