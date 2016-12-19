import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bg-button-group/bg-button', 'Integration | Component | bg button group/bg button', {
  integration: true
});

test('when renders', function(assert) {

  expect(3);

  this.on('onRegisterHandler', function (id) {
    assert.equal(id, 'myCustomIdForTest', 'should call register action with elementId');
  });
  // Template block usage:
  this.render(hbs`
    {{#bg-button-group/bg-button id="myCustomIdForTest" onRegister=(action 'onRegisterHandler')}}
      button label
    {{/bg-button-group/bg-button}}
  `);

  assert.equal(this.$().text().trim(), 'button label');
  assert.equal(this.$('>button').length, 1, 'should be rendered as button');
});

test('active status', function (assert) {
  let buttonValue = 'apple';
  this.set('_selectedValue', '');
  this.set('value', buttonValue);

  this.render(hbs`
    {{#bg-button-group/bg-button value=value _selectedValue=_selectedValue}}
      button label
    {{/bg-button-group/bg-button}}
  `);
  assert.notOk(this.$('>button').hasClass('active'), 'should be false by default');

  this.set('_selectedValue', buttonValue);
  assert.ok(this.$('>button').hasClass('active'), 'should active by default');
});

test('onButtonClick action', function (assert) {
  expect(1);

  let buttonValue = 'apple';
  this.set('value', buttonValue);

  this.on('onClickHandler', (elementId) => {
    assert.equal(elementId, this.$('>button').attr('id'), 'should send elementId');
  });

  this.render(hbs`
    {{#bg-button-group/bg-button value=value onButtonClick=(action 'onClickHandler')}}
      button label
    {{/bg-button-group/bg-button}}
  `);
  this.$('>button').click();
});
