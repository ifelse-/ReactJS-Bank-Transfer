var BankStatementTable = React.createClass({
  render: function() {
	  
	  //console.log(this.props.transactions);
	  
	  var getCurrentTime = new Date();
	  var timeStamp = getCurrentTime.getMonth() + "/" + getCurrentTime.getDate() + "/" + getCurrentTime.getFullYear()
	  	  
    return (
      <div className="offset-top-2 clear">
     
        {
          this.props.transactions.map(function(user) {
		   return <div key={user.deposit} >
		            <div className="col-md-3">
					  {timeStamp}
					 </div>
					 <div className="col-md-3">
					  {user.deposit}
					 </div>
					 <div className="col-md-3">
					  {user.withdrawal}
					 </div>
					 <div className="col-md-3">
					 {user.balance}
					 </div>
		          </div>
		    })
        }
       </div>
    )
  }
});



// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
var TranferStatement = React.createClass({
	
  getInitialState: function() {
    return {transactions: [], depositArr:[], withdrawalArr:[],  deposit:'', withdrawal:'', balance: 0};
  },
  getInputValue: function(key, e) {
	  
	 var foo = {}; 
	 foo[key] = e.target.value;
	 this.setState(foo);
	 document.getElementById("depositInput").classList.remove("error");
	 document.getElementById("withdrawalInput").classList.remove("error");
  },
  loopKit: function(sum, arrName){
     for (var i = 0, sum = 0; i < arrName.length; sum += parseInt(arrName[i++]));
  },
  handleSubmit: function(e) {
    e.preventDefault();
	
	//VALIDATION If user didn't enter a value use 0
	if(this.state.withdrawal === '' && this.state.deposit === ''){ 
	document.getElementById("depositInput").className += " error";
	document.getElementById("withdrawalInput").className += " error";
	return false;} 
	if(this.state.deposit === ''){this.state.deposit = 0}
	if(this.state.withdrawal === ''){this.state.withdrawal = 0}
	

	//Add each value to an array
	this.state.depositArr.push(this.state.deposit);
	this.state.withdrawalArr.push(this.state.withdrawal);
    
	
	for (var i = 0, depositSum = 0; i < this.state.depositArr.length; depositSum += parseInt(this.state.depositArr[i++]));
	console.log(depositSum);
	
	
	for (var i = 0, withdrawalSum = 0; i < this.state.withdrawalArr.length; withdrawalSum += parseInt(this.state.withdrawalArr[i++]));
	console.log(withdrawalSum);
	
	
	this.state.balance = depositSum - withdrawalSum;
			
	var Arr = [{deposit: this.state.deposit, withdrawal: this.state.withdrawal, balance: this.state.balance}];
    var nextItems = this.state.transactions.concat(Arr);
    this.setState({transactions: nextItems, deposit: '', withdrawal: '', balance: this.state.balance});
  },
  render: function() {
	 
    return (
      <div className="col-md-12 offset-top-2">
	 
	  <div className="row account-balance center">Current Balance ${this.state.balance}</div> 

<div className="col-md-offset-2">      
	    <form className="row offset-top-3" onSubmit={this.handleSubmit}>
		 
		  <div className="col-md-2 right"><span className="inputLabel">Deposit</span></div> 
		  <div className="col-md-2">
        <input id="depositInput" className="form-control" onChange={this.getInputValue.bind(this, "deposit")} placeholder={this.props.children} value={this.state.deposit} />
         </div>
		  
		  <div className="col-md-2 right"><span className="inputLabel">Withdrawal</span></div>
		   <div className="col-md-2">
		    <input id="withdrawalInput" className="form-control" onChange={this.getInputValue.bind(this, "withdrawal")} placeholder={this.props.children} value={this.state.withdrawal} />
         </div>
		 
		 <div className="col-md-2">
		  <button  className="btn btn-primary">{'Add Transaction #' + (this.state.transactions.length + 1)}</button>
		  </div>
        </form>
</div>
		
		<div className="table-head offset-top-5  center">
			 <div className="col-md-3">
			 Date
			 </div>
			 <div className="col-md-3">
			 Deposit
			 </div>
			 <div className="col-md-3">
			 Withdrawal
			 </div>
			 <div className="col-md-3">
			 Balance
			 </div>
		 </div>
		
		<BankStatementTable transactions={this.state.transactions} />
      </div>
    );
  }
});

ReactDOM.render(<div><TranferStatement>Enter Amount</TranferStatement></div>,
document.getElementById('transaction-results'));	
 