import Controller from '@ember/controller';
import { action, get, set } from '@ember/object';
import { tracked } from "@glimmer/tracking";

export default class ApplicationController extends Controller {
  @tracked componentName = 'dci';

  @action parentFunc(value) {
     alert('Hello From Parent:-' + value);
  }
}