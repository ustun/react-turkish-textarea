import React from 'react';
import Deasciifier from 'turkish-deasciifier';

const deascii = new Deasciifier();

deascii.correctWithRange = function(text, end){
    var end = end ? end : text.length;
    while(text.charAt(--end) == ' ');
    return this.deasciifyRange(text, text.lastIndexOf(' ', end - 1), end);
}

const TurkishTextArea = React.createClass({

    getDefaultProps() {
        return {
            enableCorrectionOnChange: true,
            enableCorrectionOnPaste: true,
            showToggleButtonForCorrectionOnChange: true,
            showToggleButtonForCorrectionOnPaste: true,
            showButtonForManualCorrection: true,
            labelForEnableCorrectionOnChange: 'Otomatik düzelt',
            labelForEnableCorrectionOnPaste: 'Yapıştırdıktan sonra otomatik düzelt',
            labelForManualCorrectionButton: 'Düzelt'
        };
    },

    getInitialState() {
        return {
            value: '',
            enableCorrectionOnPaste: this.props.enableCorrectionOnPaste,
            enableCorrectionOnChange: this.props.enableCorrectionOnChange
        };
    },

    setValue(value) {
        this.setState({value});
    },

    onChange(e) {
        if (!this.state.enableCorrectionOnChange) {
            if (this.props.onChange) {
                this.props.onChange(e);
            } else {
                this.setValue(e.target.value);
            }
            return;
        }

        // prevent calling onChange after onPaste, otherwise we get double input
        // FIXME: find a less hacky way
        if (this._justPasted) {
            this._justPasted = false;
            return;
        }

        const end = e.target.selectionEnd, turkishValue = deascii.correctWithRange(e.target.value);
        e.target.selectionEnd = end;

        if (this.props.onChange) {
            e.target.value = turkishValue;
            this.props.onChange(e);
        } else {
            this.setValue(turkishValue);
        }
    },

    onPaste(e) {
        if (!this.state.enableCorrectionOnPaste) {
            this.props.onPaste && this.props.onPaste(e);
            return;
        }

        const pastedValue = e.clipboardData.getData('Text');
        const turkishValue = deascii.deasciify(pastedValue);

        e.target.value = turkishValue;

        if (this.props.onChange) {
            this.props.onChange(e);
        } else {
            this.setValue(turkishValue);
        }
        this.props.onPaste && this.props.onPaste(e);

        this._justPasted = true;
    },

    toggleEnableCorrectionOnChange() {
        this.setState({enableCorrectionOnChange: !this.state.enableCorrectionOnChange});

    },

    toggleEnableCorrectionOnPaste() {
        this.setState({enableCorrectionOnPaste: !this.state.enableCorrectionOnPaste});

    },

    correctManually() {
        const turkishValue = deascii.deasciify(this.refs.tx.value);

        if (this.props.onChange) {
            this.props.onChange({target: {value: turkishValue}});
        } else {
            this.setValue(turkishValue);
        }

        this.refs.tx.focus();

    },

    render() {
        const customProps = {
            onChange: this.onChange,
            onPaste: this.onPaste,
            ref: 'tx'
        };

        const finalProps = Object.assign({},
                                         {value: this.state.value},
                                         this.props,
                                         customProps);

        // var textArea =
        var showControls = this.props.showToggleButtonForCorrectionOnPaste || this.props.showToggleButtonForCorrectionOnChange;

        if (showControls) {
            return <div>
                <textarea {...finalProps}/>


                {this.props.showToggleButtonForCorrectionOnChange && <label>
                {this.props.labelForEnableCorrectionOnChange}
                <input type='checkbox'
                 onChange={this.toggleEnableCorrectionOnChange}
                 checked={this.state.enableCorrectionOnChange}/></label>}

{this.props.showToggleButtonForCorrectionOnPaste && <label>
                {this.props.labelForEnableCorrectionOnPaste}
                <input type='checkbox'
                 onChange={this.toggleEnableCorrectionOnPaste}
                 checked={this.state.enableCorrectionOnPaste}/></label>}

            {this.props.showButtonForManualCorrection && <button type='button'  onClick={this.correctManually}>{this.props.labelForManualCorrectionButton}</button>}
            </div>;
        } else {
            return <textarea  {...finalProps}/>;
        }

    }
});

export default TurkishTextArea;
