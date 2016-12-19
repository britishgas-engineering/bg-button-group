import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bg-button-group', 'Integration | Component | bg button group', {
  integration: true
});

test('when renders', function(assert) {
  this.set('buttons', [
    {id: 1, label: 'melon'},
    {id: 2, label: 'apple'},
    {id: 3, label: 'plum'}
  ]);


  this.render(hbs`
    {{#bg-button-group selectedValue=selectedValue as |bg|}}
      {{#each buttons as |btn|}}
        {{#bg.button value=btn}}{{btn.label}}{{/bg.button}}
      {{/each}}
    {{/bg-button-group}}
  `);

  assert.equal(this.$('button').length, 3, 'should render 3 button');
  assert.notOk(this.$('button.active').length, 'should not have active class when it is rendered');


  this.set('selectedValue', {id: 2, label: 'apple'});
  assert.ok(this.$('button:eq(1)').hasClass('active'), 'should set active status when selectedValue changes');
});

test('interacting with buttons', function (assert) {
  var callCounter = 0;
  var buttons = [
    {id: 1, label: 'melon'},
    {id: 2, label: 'apple'},
    {id: 3, label: 'plum'}
  ];
  expect(buttons.length * 3 + 1);

  this.set('buttons', buttons);

  this.on('testHandler', (value) => {
    assert.deepEqual(value, buttons[callCounter]);
    callCounter += 1;
  });

  this.render(hbs`
    {{#bg-button-group onButtonClick=(action 'testHandler') as |bg|}}
      {{#each buttons as |btn|}}
        {{#bg.button value=btn}}{{btn.label}}{{/bg.button}}
      {{/each}}
    {{/bg-button-group}}
  `);

  assert.notOk(this.$('button.active').length, 'should not have active class when it is rendered');

  buttons.forEach((button, index) => {
    this.$(`button:eq(${index})`).click();

    assert.ok(this.$(`button:eq(${index})`).hasClass('active'), 'should set first button as active');
    assert.equal(this.$('button.active').length, 1, 'should have only 1 active button');
  });

});
