import Ember from 'ember';

export default Ember.Component.extend({
  buttons: [{id: 1, label: 'apple'}, {id: 2, label: 'melon'}, {id: 3, label: 'plum'}],
  selectedValue: {id: 2, label: 'melon'},
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
