import Component from '@ember/component';

export default Component.extend({
  init() {
    this._super(...arguments);
    this.set('buttons', [{id: 1, label: 'apple'}, {id: 2, label: 'melon'}, {id: 3, label: 'plum'}])
    this.set('selectedValue', {id: 2, label: 'melon'});
  },
  buttons: null,
  selectedValue: null,
  didInsertElement() {
    this._super(...arguments);
    this.set('result', JSON.stringify(this.get('selectedValue')));
  },
  actions: {
    onButtonClickHandler(value) {
      this.set('result', JSON.stringify(value));
    }
  }
});
