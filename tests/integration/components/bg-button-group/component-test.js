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
      <div>
      {{#bg-button-group selectedValue=selectedValue as |bg|}}
        {{#each buttons as |btn|}}
          {{#bg.button value=btn}}{{btn.label}}{{/bg.button}}
        {{/each}}
      {{/bg-button-group}}
      </div>
    `);

    assert.equal(this.$('button').length, 3, 'should render 3 button');
    assert.notOk(this.$('button.active').length, 'should not have active class when it is rendered');


    this.set('selectedValue', {id: 2, label: 'apple'});
    assert.ok(this.$('button:eq(1)').hasClass('active'), 'should set active status when selectedValue changes');
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
