// JavaScript Document
'use strict';

var FinanceInput = React.createClass({
	displayName: 'FinanceInput',

	deposit: function deposit() {
		alert('funds deposit');
	},

	withdrawal: function withdrawal() {
		alert('funds withdrawal');
	},

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'row finance-input offset-top-5' },
			React.createElement(
				'div',
				{ className: 'col-md-4 col-md-offset-2' },
				'Deposit ',
				React.createElement('input', { type: 'text', className: '', placeholder: this.props.children }),
				' ',
				React.createElement('input', { className: 'btn btn-primary', type: 'button', value: this.props.buttonTxt1, onClick: this.deposit })
			),
			React.createElement(
				'div',
				{ className: 'col-md-4' },
				'Withdrawal ',
				React.createElement('input', { type: 'text', className: '', placeholder: this.props.children }),
				' ',
				React.createElement('input', { className: 'btn btn-primary', type: 'button', value: this.props.buttonTxt2, onClick: this.withdrawal })
			)
		);
	}
});
ReactDOM.render(React.createElement(
	'div',
	null,
	React.createElement(
		FinanceInput,
		{ buttonTxt1: 'Deposit Funds', buttonTxt2: 'Withdrawal' },
		'Enter Amount'
	)
), document.getElementById('finance-input'));