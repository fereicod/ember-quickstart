import Route from '@ember/routing/route';

export default class WelcomeRoute extends Route {

    beforeModel(transition) {
      console.log('message:-', transition);
    }
  
    model(params) {
      console.log('This is the dynamic segment data: ', params );
    }
  }
