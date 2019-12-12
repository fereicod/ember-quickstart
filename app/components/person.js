import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action, get, set } from '@ember/object';
import { inject as service } from '@ember/serice';

export default class PersonComponent extends Component {

    name = "Hello from - Person Component";
    @tracked bindableVariable = 'It makes two way binding easier';
    @service store; // access ember data easily.
    @service router; // access router from component.
    person = {}; // declare object.

    // array declaration
    persons = [
        {name: "ABC", country: "Bangladesh"},
        {name: "DEF", country: "Dhaka"},
    ]

    // replacement of init() method
    constructor(){
        super(...arguments);
        this.bindableVariable = "change it nolonger needs set() method";
        
        set(this.person, 'name', 'Sadhan');
        set(this.persons[1], 'name', 'Sadhan');

        console.log('person', this.person);
        console.log('persons', this.persons);
    }
    
    @action onClick(){
        alert('Great Jon! We can make it!');

        // dynamically we can navigate to different route from component
        this.router.transitionTo('About'); //make sure you have this route
    }
}
