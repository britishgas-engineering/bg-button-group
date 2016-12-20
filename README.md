[![Build Status](https://travis-ci.org/britishgas-engineering/bg-button-group.svg?branch=master)](https://travis-ci.org/britishgas-engineering/bg-button-group)

# Bg-button-group

Lightweight component for groupping buttons and sending 1 action when the user clicks on one of the buttons.

Value can be any of data types even ember objects.

Here at British Gas we use bootstrap therefore the rendered buttons has the added `btn` class.

Example: 

Assume there is a buttons array like:

```javascript
  buttons: [{id: 1, label: 'apple'}, {id: 2, label: 'melon'}],
```

Template:

```hbs
      {{#bg-button-group onButtonClick=(action 'onButtonClickHandler') selectedValue=selectedValue as |bg|}}
        {{#each buttons as |btn|}}
          {{#bg.button class="btn-success" value=btn}}
            {{btn.label}}
          {{/bg.button}}
        {{/each}}
      {{/bg-button-group}}

```

## Handling event (catching the clicked value)

set `onButtonClick` action which passes the value set to the button previously

## Preselected button

Use `selectedValue` attrinbute and pass the same value what you passed to the button.

## Rendered html

```html
<div>
  <button class="btn text-center bg-button" id="ember123">a label</button>
  <button class="btn text-center bg-button" id="ember125">another label</button>
</div>
```

DEMO page here: (https://britishgas-engineering.github.io/bg-button-group)

## Installation

* ember install bg-button-group

## Running

* `ember serve`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
