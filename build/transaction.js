// JavaScript Document
// JavaScript Document
"use strict";

var Transaction = React.createClass({
	displayName: "Transaction",

	getInitialState: function getInitialState() {
		return {
			UserTransactions: [{ Date: '10/18', Deposit: "100", Withdrawal: "0", Balance: "100" }, { Date: '10/18', Deposit: "10", Withdrawal: "50", Balance: "40" }, { Date: '10/18', Deposit: "400", Withdrawal: "100", Balance: "300" }, { Date: '10/18', Deposit: "300", Withdrawal: "50", Balance: "100" }]
		};
	},

	render: function render() {
		return React.createElement(
			"div",
			{ className: "" },
			this.state.UserTransactions.map(function (UserTransaction, i) {
				return React.createElement(
					"div",
					null,
					React.createElement(
						"div",
						{ className: "col-md-3", key: i },
						UserTransaction.Date
					),
					React.createElement(
						"div",
						{ className: "col-md-3", key: i },
						UserTransaction.Deposit
					)
				);
			})
		);
	}
});
ReactDOM.render(React.createElement(
	"div",
	null,
	React.createElement(
		Transaction,
		null,
		"Enter Amount"
	)
), document.getElementById('transaction-results'));