// JavaScript Document
var FinanceInput = React.createClass({
	
	deposit: function () {
		alert('funds deposit');
		},
		
	withdrawal: function () {
		alert('funds withdrawal');
		},	
		
		render: function() {
	  return (
	  <form onSubmit={this.handleSubmit}>
	  <div className="row account-balance offset-top-5 center">Current Balance $0.00</div> 
    <div className="row finance-input offset-top-5">
      <div className="col-md-4 col-md-offset-2">
        Deposit <input type="text" className="" placeholder={this.props.children} /> <input className="btn btn-primary" type="button" value={this.props.buttonTxt1} onClick={this.deposit} />
      </div>
      <div className="col-md-4">
         Withdrawal <input type="text" className="" placeholder={this.props.children} /> <input className="btn btn-primary" type="button" value={this.props.buttonTxt2} onClick={this.withdrawal} />
      </div>     
    </div>
	</form>);
		}
	});
ReactDOM.render(<div><FinanceInput buttonTxt1="Deposit Funds" buttonTxt2="Withdrawal">
Enter Amount
</FinanceInput></div>, 
document.getElementById('finance-input'));	
 
 
 
 