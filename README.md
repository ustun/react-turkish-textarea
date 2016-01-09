# React Turkish Textarea

İngilizce klavye ile yazılan yazıları otomatik olarak Türkçe karakterlerle düzelten, React için bir textarea bileşeni.

Örneğin İngilizce karakterlerle Ustun Ozgur yazdığınızda bunu Üstün Özgür olarak düzeltir.

## Demo

http://ustunozgur.com/react-turkish-textarea/

## Kurulum

Önce gereksinimleri kurun. (Bu paketler peer dependency olduğu için npm 3'ten itibaren otomatik olarak kurulmayacaklar.)

```shell
npm install react --save
npm install turkish-deasciifier --save
```
Daha sonra `react-turkish-textarea` paketini kurun.

```shell
npm install react-turkish-textarea --save
```


## Kullanım


```js

var TurkishTextArea = require('react-turkish-textarea');

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

Normal bir textarea bileşenine aktarabilen tüm özellikler TurkishTextarea bileşenine de aktarılabilir.

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

## Örnekler

Örnek bir kullanım için example/ klasörüne göz atabilirsiniz.

## Nasıl Çalışır?

Bu kod arkaplanda Deniz Yüret'in Emacs icin yazdığı eklentiyi JavaScript'e
çeviren Mustafa Emre Acer'in Turkish Deasciifier kodunu React bileşeniyle
entegre etmektedir. Deasciifier hakkında ayrıntılı bilgi için:

- http://www.denizyuret.com/2006/11/emacs-turkish-mode.html
- http://www.deasciifier.com/

## Scripts

* `npm run build` - produces production version of your library under the `lib` folder
* `npm run dev` - produces development version of your library and runs a watcher
* `npm run test` - well ... it runs the tests :)
