import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('bg-button-group/bg-button-elem-elem', 'Integration | Component | bg button group/bg button elem', function (hooks) {
  setupRenderingTest(hooks);

  test('when renders', async function (assert) {

    assert.expect(3);

    this.set('onRegisterHandler', function (id) {
      assert.equal(id, 'myCustomIdForTest', 'should call register action with elementId');
    });
    // Template block usage:
    await render(hbs`
      {{#bg-button-group/bg-button-elem id="myCustomIdForTest" onRegister=(action onRegisterHandler)}}
        button label
      {{/bg-button-group/bg-button-elem}}
    `);

    assert.equal(this.$().text().trim(), 'button label');
    assert.equal(this.$('>button').length, 1, 'should be rendered as button');
  });

  test('active status', async function (assert) {
    let buttonValue = 'apple';
    this.set('_selectedValue', '');
    this.set('value', buttonValue);

    await render(hbs`
      {{#bg-button-group/bg-button-elem value=value _selectedValue=_selectedValue}}
        button label
      {{/bg-button-group/bg-button-elem}}
    `);
    assert.notOk(this.$('>button').hasClass('active'), 'should be false by default');

    this.set('_selectedValue', buttonValue);
    assert.ok(this.$('>button').hasClass('active'), 'should active by default');
  });

  test('onButtonClick action', async function (assert) {
    assert.expect(1);

    let buttonValue = 'apple';
    this.set('value', buttonValue);

    this.set('onClickHandler', (elementId) => {
      assert.equal(elementId, this.$('>button').attr('id'), 'should send elementId');
    });

    await render(hbs`
      {{#bg-button-group/bg-button-elem value=value onButtonClick=(action onClickHandler)}}
        button label
      {{/bg-button-group/bg-button-elem}}
    `);
    this.$('>button').click();
  });

});
