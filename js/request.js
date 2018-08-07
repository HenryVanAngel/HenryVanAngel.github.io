
function montaTabela(){
	let xhr = new XMLHttpRequest();


	xhr.open("GET", "https://api.coinmarketcap.com/v1/ticker/?convert=BRL&limit=10", false);

	xhr.send();
	let currency = JSON.parse(xhr.response);

		for (let i = 0; i < 10; i++) {
			let tr = document.createElement('tr');

			let rank = document.createElement('td');
			rank.innerText=currency[i].rank;
			tr.appendChild(rank);

			let nome = document.createElement('td');
			nome.innerText=currency[i].name;
			tr.appendChild(nome);

			let simbolo = document.createElement('td');
			simbolo.innerText=currency[i].symbol;
			tr.appendChild(simbolo);

			let real = document.createElement('td');
			real.innerText=currency[i].price_brl;
			tr.appendChild(real);

			let dolar = document.createElement('td');
			dolar.innerText=currency[i].price_usd;
			tr.appendChild(dolar);

			let tbody = document.getElementById('linha');
			tbody.appendChild(tr);

			let option = document.createElement('option')
			option.textContent = currency[i].name
			option.value = currency[i].price_brl

			let select = document.querySelector('select')
			select.appendChild(option)

			}		
	}
montaTabela();

document.querySelector("#btn-conversor").addEventListener('click',function(e){
	e.preventDefault();

	let valorInput = document.querySelector("#input-valor-real");
	let valorCoin = document.querySelector("#moeda-digital");
	let resultado = document.querySelector('#resultado');

	resultado.innerHTML = (valorInput.value / valorCoin.value);
});