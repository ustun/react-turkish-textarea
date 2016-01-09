import React from 'react';
import ReactDOM from 'react-dom';

import TurkishTextArea from 'react-turkish-textarea';

const MyComponent = React.createClass({

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

ReactDOM.render(<MyComponent/>, document.getElementById('app-1'));


const MyComponent2 = React.createClass({

    getInitialState() {
        return {value: ''};
    },

    onChange(e) {
        this.setState({value: e.target.value.toUpperCase()});
    },

    render: function () {
        return (
                <div>
                <h1>Ornek form</h1>
                <form>

                <TurkishTextArea style={{color: 'red'}} onChange={this.onChange} value={this.state.value}/>

                Using external state: {this.state.value}
                </form>
                </div>
        );

    }
});

ReactDOM.render(<MyComponent2/>, document.getElementById('app-2'));
