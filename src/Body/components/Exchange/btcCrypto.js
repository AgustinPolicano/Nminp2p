import React, {Component} from "react";
import "./Cryptos.scss";
import axios from "axios";
import btclogo3 from "../../../assets/imgs/btclogo1.png"


class btcCrypto extends Component{
    state={
        currencies: [ "USD", "ARS"],
        base: "BTC",
        amount: "",
        convertTo: "USD",
        result: "",
        resultventa:"",
        date: "",
        compra: true,
        venta: false,
        cryptos: []
    }



    handleSelect = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        
        },
            this.calculate
        );
    };

    handleInput = (e) =>{
        this.setState({
            amount: e.target.value,
            
        },
        this.calculate
        );
    };

    calculate = () =>{
        const amount = this.state.amount;
        if(amount === isNaN){
            return
        } else{
            fetch("https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=USD,ARS,USDT")
            .then(res => res.json())
            .then(data => {
                const result = (data.BTC[this.state.convertTo] * amount ).toFixed(4);
                this.setState({
                    result
                })
            })
        }
    }

    componentDidMount(){
        axios.get("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD")
        .then(res => {
            const cryptos = res.data;
            console.log(cryptos);
            this.setState({cryptos: cryptos});
        })
    }

    render(){
        const {currencies, base, amount, convertTo, result, compra, venta} = this.state
        return(
                <div>
                    <div className="cardborder">
                        <div className="text-center" >
                            <img src={btclogo3} alt="" className="btclogo3"/>
                        </div>
                        <div className="f16 mtneg"  style={{color:"#343434", fontFamily:"Montserrat"}}>
                            Voy a comprar: &nbsp;&nbsp;&nbsp; A un precio estimado de:
                        </div>
                        <div className="mt-2 btctext" style={{fontFamily:"Montserrat"}}>
                       <h5>{amount} {base} </h5> 
                        </div>
                        <div className="converttext" style={{fontFamily:"Montserrat"}} >
                           <h5> {result*1.0475} {convertTo} </h5>
                        </div>
                        <form className="form-inline mt-3 ml-2">
                        <input
                                className="form"
                                type="number"
                                value={amount}
                                onChange={this.handleInput}
                                ></input>
                           <input
                             disable={true}
                                className="form1"
                                type="number"
                                value={convertTo}
                                onChange={this.handleSelect}
                                ></input>
                            
                                <select 
                                name="base"
                                value={base}
                                onChange={this.handleSelect}
                                className="slt1">
                               
                                <option> {base}
                                </option>
                                
                                </select>
                                <select
                                name=""
                                value={convertTo}
                                onChange={this.handleSelect}
                                className="slt2">
                                {currencies.map(currency =>
                                <option
                                key={currency}
                                value={currency}
                                >{currency}</option>
                                )}
                                </select>
                                      
                        </form>
                        

                                            </div>
                </div>





            )
    }
}

export default btcCrypto;