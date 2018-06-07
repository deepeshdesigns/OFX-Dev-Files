
import axios from 'axios';

/* Details of service

a. getQuote function will be exported as part of service
b. getQuote will be passed arguments, currency types - fromCurrency,toCurrency  and amount that is to be converted
c. A request object is being created to get the JSON from the API 

*/

export function getQuote(fromCurrency, toCurrency, amount) {
	//var posts;
	const request = axios.get(`https://api.ofx.com/PublicSite.ApiService/OFX/spotrate/Individual/${fromCurrency}/${toCurrency}/${amount}?format=json`)
	request.then(result => console.log('(1) Inside result:', result)).catch(error => console.error('(1) Inside error:', error))
	return request;
}


