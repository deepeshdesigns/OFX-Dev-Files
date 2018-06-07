/* GetQuote Component will render the form to get the request for Quote along with mandatory fields
   Note - QuoteService - A custom service to call the OFX api to get currency conversion data
*/

import React from 'react';
import { getQuote } from './QuoteService';


/* The Component class contains important states (variables) that shall be used in the instance of the component */

export class GetQuote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: '#008000',
            fname: null,
            lname: null,
            exampleInputEmail1: null,
            fromCurrency: 'AUD',
            toCurrency: 'GBP',
            amount: '1000'

        }

        /* The following functions are binded in the constructor to ensure that the state of these functions are maintained 
        
        1. OnchangeFromCurrency - This function is used to listen to any changes in the Currency Type selected for conversion "from"
        2. OnchangeToCurrency - This function is used to listen to any changes in the Currency Type selected for conversion "to"
        3. OnchangeAmount - This function is used to listen to any changes in the amount that is required to be converted
        4. CallQuote - This function is will call the service that will call the API to get the requisite data for conversion
        
        
        */

        this.onchangeFname = this.onchangeFname.bind(this);
        this.onchangeLname = this.onchangeLname.bind(this);
        this.onchangeEmail = this.onchangeEmail.bind(this);
        this.onchangeFromCurrency = this.onchangeFromCurrency.bind(this);
        this.onchangeToCurrency = this.onchangeToCurrency.bind(this);
        this.onchangeAmount = this.onchangeAmount.bind(this);
        this.callQuote = this.callQuote.bind(this);

    }

    /* CallQuote - This function is will call the service that will call the API to get the requisite data for conversion */
    /* We are doing the validation of the form before calling the API service here */


    callQuote() {


/* Basic Form validation code */

        if (this.state.fname == null) {
            alert('Please provide the First Name of the person');
            return;
        }
        else {
            if (this.state.lname == null) {
                alert('Please provide the Second Name of the person');
                return;
            }

            else {
                if (this.state.exampleInputEmail1 == null) {
                    alert('please fill the email of the person');
                    return;
                }

            }
        }

/* Code to call the API service */

        getQuote(this.state.fromCurrency, this.state.toCurrency, this.state.amount).then(result => {
            this.setState({ posts: result.data });
            this.props.value(result.data, this.state.amount);
        })
    }

    /* This functoin will help to render the options in the select list (Dropdown) to select CUrrency types in the drop down for 
    a. The Currency from which the conversion is to be done 
    b. The Curreny to which conversion is to be done 
    
    Note - This function will take the list of all currency types that are currently supported on OFX API 
    *** This information has been picked from the www.ofx.com website and using the current currency calculator in place
    
    */


    ListOptions() {
        const currencyType = {
            AUD: 'Australia Dollar', EUR: 'Euro Member Countries', GBP: 'United Kingdom Pound', USD: 'United States Dollar', JPY: 'Japan Yen', AED: 'United Arab Emirates Dirham', ARS: 'Argentina Peso', AZN: 'Azerbaijan Manat', BGN: 'Bulgaria Lev', BHD: 'Bahrain Dinar', BND: 'Brunei Darussalam Dollar', BRL: 'Brazil Real', CAD: 'Canada Dollar', CHF: 'Switzerland Franc', CLP: 'Chile Peso', CNY: 'China Yuan Renminbi', CZK: 'Czech Republic Koruna', DJF: 'Djibouti Franc', DKK: 'Denmark Krone', EGP: 'Egypt Pound', FJD: 'Fiji Dollar', HKD: 'Hong Kong Dollar', HUF: 'Hungary Forint', IDR: 'Indonesia Rupiah', ILS: 'Israel Shekel', INR: 'India Rupee', KRW: 'Korea (South) Won', KWD: 'Kuwait Dinar', LKR: 'Sri Lanka Rupee', MAD: 'Morocco Dirham', MGA: 'Madagascar Ariary', MXN: 'Mexico Peso', MYR: 'Malaysia Ringgit', MZN: 'Mozambique Metical', NAD: 'Namibia Dollar', NGN: 'Nigeria Naira', NIO: 'Nicaragua Cordoba', NOK: 'Norway Krone', NZD: 'New Zealand Dollar', OMR: 'Oman Rial', PEN: 'Peru Sol', PGK: 'Papua New Guinea Kina', PHP: 'Philippines Piso', PKR: 'Pakistan Rupee', PLN: 'Poland Zloty', RUB: 'Russia Ruble', SAR: 'Saudi Arabia Riyal', SBD: 'Solomon Islands Dollar', SCR: 'Seychelles Rupee', SEK: 'Sweden Krona', SGD: 'Singapore Dollar', THB: 'Thailand Baht', TOP: 'Tonga Paanga', TRY: 'Turkey Lira', TVD: 'Tuvalu Dollar', TWD: 'Taiwan New Dollar', TZS: 'Tanzania Shilling', VEF: 'Venezuela Bolívar', VND: 'Viet Nam Dong', VUV: 'Vanuatu Vatu', WST: 'Samoa Tala', XOF: 'CFA Franc (BCEAO)', XPF: 'Pacific Franc', ZAR: 'South Africa Rand'
        };
        // We are using map functions to detail the key and value of various currencies in the currency Type object that contains the list of all currency types avaiable for conversion

        const ListCurrency = Object.keys(currencyType).map(key =>
            <option value={key}> {currencyType[key]} ({key})  </option>
        );
        return ListCurrency;
    }



    /* Onchang - This function is used to listen to any changes in the Currency Type selected for conversion "from" */

    onchangeFname(event) {

        this.setState({ fname: event.target.value });
        console.log(event);
    }

    /* Onchang - This function is used to listen to any changes in the Currency Type selected for conversion "from" */

    onchangeLname(event) {

        this.setState({ lname: event.target.value });
        console.log(event);
    }

    /* Onchang - This function is used to listen to any changes in the Currency Type selected for conversion "from" */

    onchangeEmail(event) {

        this.setState({ exampleInputEmail1: event.target.value });
        console.log(event);
    }
    /* OnchangeFromCurrency - This function is used to listen to any changes in the Currency Type selected for conversion "from" */

    onchangeFromCurrency(event) {

        this.setState({ fromCurrency: event.target.value });
        console.log(event);
    }


    /* OnchangeToCurrency - This function is used to listen to any changes in the Currency Type selected for conversion "to"*/

    onchangeToCurrency(event) {

        this.setState({ toCurrency: event.target.value });
        console.log(event);
    }


    /* OnchangeAmount - This function is used to listen to any changes in the amount that is required to be converted */

    onchangeAmount(event) {

        this.setState({ amount: event.target.value });
        console.log(event);

    }


    /* Calling render function to render HTML */

    /* Note - I would preferred to implement some of the additional validations of form elements 
    
    1. The min. and max length of user name
    2. Alert message when user first name and last name is empty
    3. Complete list of drop down for ISD code for phone number of the countries in which OFX has support 
    4. To provide a validation in the amount field to only accept values in numerical form 
    5. To provide validation if decimals are provided in the amount field 
    
    */

    render() {
        return (
            <div>
                <form>

                    <div className="row justify-content-center ">


                        <div className="container col-11" style={{ background: "#eee", padding: '2%' }}>
                            <h3 className="row justify-content-md-center ">Quick Quote</h3>

                            <hr />

                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">First Name<span className="astrick"> *</span></label>
                                        <input type="text" className="form-control" id="fname" placeholder="First Name" onChange={this.onchangeFname} value={this.state.fname} >
                                        </input>
                                    </div>
                                </div>


                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Last Name<span className="astrick"> *</span></label>
                                        <input type="text" className="form-control" id="lname" placeholder="Last Name" onChange={this.onchangeLname} value={this.state.lname}>
                                        </input>
                                    </div>
                                </div>
                            </div>



                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address<span className="astrick"> *</span></label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.onchangeEmail} value={this.state.exampleInputEmail1}>
                                </input>
                            </div>



                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Telephone/Mobile</label>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <select className="input-group-prepend" style={{ height: "44px" }}>
                                            <option>+61</option>
                                            <option>+1</option>
                                        </select>
                                    </div>
                                    <input type="text" className="form-control" aria-label="Text input with dropdown button">
                                    </input>
                                </div>
                            </div>



                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">From currency<span className="astrick"> *</span></label>
                                        <select className="form-control form-control-lg " id="fromCurrency" onChange={this.onchangeFromCurrency} value={this.state.fromCurrency} required>

                                            {this.ListOptions()}


                                        </select>
                                    </div>
                                </div>


                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">To currency<span className="astrick"> *</span></label>
                                        <select className="form-control form-control-lg" id="toCurrency" onChange={this.onchangeToCurrency} value={this.state.toCurrency} required>
                                            {this.ListOptions()}

                                        </select>
                                    </div>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputAmount">Amount<span className="astrick"> *</span></label>
                                        <input type="text" className="form-control" id="amount" placeholder='1000' onChange={this.onchangeAmount} required >
                                        </input>
                                    </div>
                                </div>
                            </div>


                            <div className="row justify-content-center">
                                <button type="submit" className="btn btn-info " onClick={this.callQuote}>GET QUOTE</button>
                            </div>



                        </div>
                    </div>
                </form>
            </div>
        );

    }
}

