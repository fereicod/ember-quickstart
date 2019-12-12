import Component from '@glimmer/component';

export default class DciComponent extends Component {

  constructor() {
    super(...arguments);

    console.log('Parent data:- ', this.args.greetingMSG);
    this.args.functionRef('ABC');  // it will call parent function
  }
}