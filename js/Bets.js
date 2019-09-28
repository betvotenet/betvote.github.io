CargarCandidatos();
// START ADDRESSES
var address=[];
// START BETS
var bet_html = [];
candidatos.forEach((candidato)=>{
	address.push(candidato.address);
	bet_html.push("");
});
// END ADDRESSES
// END BETS

var addresses_query = address.join(",");

function api_callback(response) {
	var data = response.data;

	var balance = [];
	address.forEach((addr,index)=>{
		balance[index] = data && data.addresses[addr] ? data.addresses[addr].received : 0;
	});

	// array sum
	var total_balance_candidates = balance.reduce((a, b) => a + b, 0);

	//var profit = 0.99;
	var satoshi = 100000000;

	var bet = [];
	address.forEach((addr,index)=>{
		bet[index] = total_balance_candidates != 0 ? ( total_balance_candidates / balance[index] ) : 1;
	});

	bet.map((b,index)=>{ return b < 1 ? 1 : b });

	bet_html.forEach((b_html,index)=>{
		if(bet[index] != Infinity)
			bet_html[index] = bet[index].toFixed(2)+" X";
		else
			bet_html[index] = "-";
	});

	address.forEach((addr,index)=>{
		$(".bet"+address[index]).html(bet_html[index]);
		$(".balance"+address[index]).html(balance[index]/100000000+" BTC <br>vs<br> "+(total_balance_candidates-balance[index])/100000000+" BTC");
	});

	$(".candidatosContainer div.title").after("<div><strong>Pozo total: "+total_balance_candidates/100000000+" BTC</strong></div>")
}

api_promise = null;
function CargarBets() {
	api_promise = new Promise((resolve,reject)=>{
		$.getJSON("https://api.blockchair.com/bitcoin/dashboards/addresses/"+addresses_query)
		.done(resolve)
		.fail(reject);
	}).then(api_callback).catch(api_callback)
}
