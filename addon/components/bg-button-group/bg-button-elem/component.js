/**
 * bg-button component
 */
import Component from '@ember/component';
import layout from './template';
import {computed} from '@ember/object';

export default Component.extend({
  layout,
  attributeBindings: ['type', 'tabindex'],
  type: 'button',
  tabindex: null,

  /**
   * Defaul class names following bootstrap
   * @type {Array}
   */
  classNames: ['btn', 'text-center', 'bg-button'],

  /**
   * Binding active state based on 'active' computed prop
   * @type {Array}
   */
  classNameBindings: ['active:active'],
  init() {
    this._super(...arguments);
    const action = this.get('onRegister');
    return action && action(this.elementId, this.get('value'));
  },
  /**
   * Value of the button, sent when user clicks on this button
   * @type {Mixed} any kind of data type accepted
   */
  value: null,

  /**
   * Click event handler
   * calling onButtonClick action
   * @return {[type]} [description]
   */
  click() {
    const action = this.get('onButtonClick');
    action(this.elementId);
  },

  /**
   * Active computed property
   * compares by JSON.stringify
   * @param  {Mixed} '_selectedValue'   selected value passed from outside
   * @return {Boolean} if the selected value and this component's values are matching
   */
  active: computed('_selectedValue', 'value', function () {
    return JSON.stringify(this.get('_selectedValue')) === JSON.stringify(this.get('value'));
  }),
  tagName: 'button'
});
