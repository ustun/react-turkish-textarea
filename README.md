# React Turkish Textarea

İngilizce klavye ile yazılan yazıları otomatik olarak Türkçe karakterlerle düzelten, React için bir textarea bileşeni.

Örneğin İngilizce karakterlerle Ustun Ozgur yazdığınızda bunu Üstün Özgür olarak düzeltir.

## Kullanım

var TurkishTextArea = require('react-turkish-textarea');

```js
var MyComponent = React.createClass({

  render: function () {
    return (
      <div>
        <h1>Ornek form</h1>
        <form>
          <TurkishTextArea/>
        </form>
      </div>
    );

  }
});
```

Normal bir textarea bilesenine aktarabilen tum ozellikler TurkishTextarea bilesenine de aktarilabilir.

```js
var MyComponent = React.createClass({

  getInitialState: function () {
    return {value: ''};
  },

  render: function () {
    return (
      <div>
        <h1>Ornek form</h1>
        <form>
          <TurkishTextArea placeholder='Adinizi yazin' className='my-class' style={{fontSize: 16, color: 'red'}} onChange={this.setValue} value={this.state.value}/>
        </form>
      </div>
    );

  }

});

```

## Scripts

* `npm run build` - produces production version of your library under the `lib` folder
* `npm run dev` - produces development version of your library and runs a watcher
* `npm run test` - well ... it runs the tests :)
