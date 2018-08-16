import Component from '@ember/component';
import layout from './template';
import {A} from '@ember/array';

export default Component.extend({
  layout,
  selectedValue: null,
  classNames: [],

  // child element ids
  children: A([]),
  didInsertElement() {
    this._super(...arguments);
    this.setSelectedValue(this.get('selectedValue'));
  },
  init() {
    this._super(...arguments);
    this.set('_buttons', {});
  },
  didUpdateAttrs() {
    this.setSelectedValue(this.get('selectedValue'));
  },

  /**
   * setting internal _selectedValue property
   * it is called on init or on external update or on subcomponent click
   * @param {mixed} value value of new selected state
   * @returns {undefined}
   */
  setSelectedValue(value) {
    if (this.get('children.length')) {
      this.set('_selectedValue', value);
    }
  },
  actions: {
    register(buttonId, value) {
      this.get('children').pushObject(buttonId);
      this.set(`_buttons.${buttonId}`, value);
    },
    onButtonClickHandler(buttonId) {
      let value = this.get(`_buttons.${buttonId}`);
      this.setSelectedValue(value);
      return this.onButtonClick && this.onButtonClick(value);
    }
  }
});
