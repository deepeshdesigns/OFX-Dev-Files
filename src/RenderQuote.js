import React from 'react';


export class RenderQuote extends React.Component {
    constructor(props) {
      super(props);
      this.state = {  color: 	'#008000' };
      
    }



    render() {
        return (
            <div className="row justify-content-md-center ">
                        <form className="col-xs-12 col-md-11" style={{ background: "#eee", padding: '30px' }}>
                            <div className="justify-content-md-center ">
                                <h3 className="row justify-content-md-center ">Quick Quote</h3>
                                <hr />
                                <h3 className="text-center" >OFX CUSTOMER RATE
                                </h3>
                                <h1 className="text-center" style={{ color: '#008000' }}>{this.props.CustomerRate}</h1>
        
                            </div>
        
                            <div className="row justify-content-md-center ">
                                <div className="col-2">
                                    <h3 className="text-left">From</h3>
                                    <h2 className="text-left">{this.props.fromCurrency} <span className="cur">{this.props.amount}</span></h2>
                                    <h3 className="text-left">To</h3>
                                    <h2 className="text-left">{this.props.toCurrency} <span className="cur">{this.props.CustomerAmount}</span></h2>
                                </div>
                            </div>
        
        
                            <br />
         
                            <div className="row justify-content-center">
                                <button type="submit" className="btn btn-info " onClick={this.props.value}>START NEW QUOTE</button>
                            </div>
                        </form>
                    </div>
        );
        
    }
  }
 

