import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | bg-button-group', function (hooks) {
  setupRenderingTest(hooks);

  test('when renders', async function(assert) {
    this.set('buttons', [
      {id: 1, label: 'melon'},
      {id: 2, label: 'apple'},
      {id: 3, label: 'plum'}
    ]);

    await render(hbs`
      {{#bg-button-group selectedValue=selectedValue as |bg|}}
        {{#each buttons as |btn|}}
          {{#bg.button value=btn}}{{btn.label}}{{/bg.button}}
        {{/each}}
      {{/bg-button-group}}
    `);

    assert.equal(this.element.querySelectorAll('button').length, 3, 'should render 3 button');
    assert.notOk(this.element.querySelector('.active'), 'should not have active class when it is rendered');

    this.set('selectedValue', {id: 2, label: 'apple'});
    const buttons = this.element.querySelectorAll('button');
    assert.notOk(buttons[0].classList.contains('active'), 'first button should not have active class');
    assert.ok(buttons[1].classList.contains('active'), '2nd button should have active class when selectedValue changed');
    assert.notOk(buttons[2].classList.contains('active'), '3rd button should have active class');
  });

  test('interacting with buttons', async function (assert) {
    var callCounter = 0;
    var buttons = [
      {id: 1, label: 'melon'},
      {id: 2, label: 'apple'},
      {id: 3, label: 'plum'}
    ];

    this.set('buttons', buttons);

    this.set('testHandler', (value) => {
      assert.deepEqual(value, buttons[callCounter]);
      callCounter += 1;
    });

    await render(hbs`
      {{#bg-button-group onButtonClick=(action testHandler) as |bg|}}
        {{#each buttons as |btn|}}
          {{#bg.button value=btn}}{{btn.label}}{{/bg.button}}
        {{/each}}
      {{/bg-button-group}}
    `);

    // assert.notOk(this.$('button.active').length, 'should not have active class when it is rendered');

    let buttonList = this.element.querySelectorAll('button');
    await click(buttonList[0]);

    buttonList = this.element.querySelectorAll('button');
    assert.ok(buttonList[0].classList.contains('active'));

    await click(buttonList[1]);
    buttonList = this.element.querySelectorAll('button');
    assert.ok(buttonList[1].classList.contains('active'));

    await click(buttonList[2]);
    buttonList = this.element.querySelectorAll('button');
    assert.ok(buttonList[2].classList.contains('active'));

  });
});
