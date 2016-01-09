import React from 'react';
import ReactDOM from 'react-dom';

import TurkishTextArea from 'react-turkish-textarea';

const MyComponent = React.createClass({

    render: function () {
        var code = `<TurkishTextArea/>`;
        return (
                <div>
                <h1>Örnek: Basit kullanım</h1>
                <form>
                <pre>{code}</pre>
                <TurkishTextArea/>

                </form>
                </div>
        );

    }
});

ReactDOM.render(<MyComponent/>, document.getElementById('app-1'));


const MyComponent2 = React.createClass({

    getInitialState() {
        return {value: ''};
    },

    onChange(e) {
        this.setState({value: e.target.value.toUpperCase()});
    },

    render: function () {
        var doc = `
const MyComponent2 = React.createClass({

    getInitialState() {
        return {value: ''};
    },

    onChange(e) {
        this.setState({value: e.target.value.toUpperCase()});
    },

    render: function () {
       return <form>
                <TurkishTextArea
                  style={{color: 'red'}}
                  onChange={this.onChange}
                  value={this.state.value}/>

                Using external state: {this.state.value}
                </form>
        );

    }
});
`;

        return (
                <div>
                <h1>Örnek: Girilen değer dışarıdaki bileşende büyük harfe dönüştürülerek saklanır, özel stil.</h1>
                <form>

                <pre>{doc}
                </pre>
                <TurkishTextArea style={{color: 'red'}} onChange={this.onChange} value={this.state.value}/>

                Using external state: {this.state.value}
                </form>
                </div>
        );

    }
});

ReactDOM.render(<MyComponent2/>, document.getElementById('app-2'));


const MyComponent3 = React.createClass({

    getInitialState() {
        return {value: ''};
    },

    onChange(e) {
        this.setState({value: e.target.value.toUpperCase()});
    },

    render: function () {
        var code = `
                <TurkishTextArea
                 showToggleButtonForCorrectionOnChange={false}
                 showToggleButtonForCorrectionOnPaste={false}
                 showButtonForManualCorrection={false}
                 />`;
        return (
                <div>
                <h1>Örnek 3: Kontrolleri gizle</h1>
                <form>

                <pre>{code}
                </pre>
                <TurkishTextArea
                 showToggleButtonForCorrectionOnChange={false}
                 showToggleButtonForCorrectionOnPaste={false}
                 showButtonForManualCorrection={false}
                 />
                </form>
                </div>
        );

    }
});

ReactDOM.render(<MyComponent3/>, document.getElementById('app-3'));
