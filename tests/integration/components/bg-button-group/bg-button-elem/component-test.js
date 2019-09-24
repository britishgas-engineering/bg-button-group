import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('bg-button-group/bg-button-elem-elem', 'Integration | Component | bg button group/bg button elem', function (hooks) {
  setupRenderingTest(hooks);

  test('when renders', async function (assert) {

    assert.expect(2);

    this.set('onRegisterHandler', function (id) {
      assert.equal(id, 'myCustomIdForTest', 'should call register action with elementId');
    });
    // Template block usage:
    await render(hbs`
      {{#bg-button-group/bg-button-elem id="myCustomIdForTest" onRegister=(action onRegisterHandler)}}
        button label
      {{/bg-button-group/bg-button-elem}}
    `);

    assert.equal(this.element.querySelector('button').textContent.trim(), 'button label');
  });

  test('active status', async function (assert) {
    const buttonValue = 'apple';
    this.set('_selectedValue', '');
    this.set('value', buttonValue);

    await render(hbs`
      {{#bg-button-group/bg-button-elem value=value _selectedValue=_selectedValue}}
        button label
      {{/bg-button-group/bg-button-elem}}
    `);
    const button = this.element.querySelector('button');
    assert.notOk(button.classList.contains('active'), 'should not have active class by default');

    this.set('_selectedValue', buttonValue);
    assert.ok(button.classList.contains('active'), 'should active by default');
  });

  test('onButtonClick action', async function (assert) {
    assert.expect(1);

    const buttonValue = 'apple';
    this.set('value', buttonValue);

    this.set('onClickHandler', (elementId) => {
      assert.equal(elementId, this.$('>button').attr('id'), 'should send elementId');
    });

    await render(hbs`
      {{#bg-button-group/bg-button-elem value=value onButtonClick=(action onClickHandler)}}
        button label
      {{/bg-button-group/bg-button-elem}}
    `);
    await click(this.element.querySelector('button'));
  });

  test('tabindex', async function (assert) {
    assert.expect(1);

    const buttonValue = 'apple';
    this.set('value', buttonValue);

    await render(hbs`
      {{#bg-button-group/bg-button-elem value=value tabindex=123}}
        button label
      {{/bg-button-group/bg-button-elem}}
    `);

    const button = this.element.querySelector('button');
    assert.equal(button.tabIndex, 123, 'should add correct tabindex to the button');
  });

});
