import React, {Component} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./Cryptos.scss";
import axios from "axios";
import usdtlogo from "../../../assets/imgs/usdtlogo1.png";

class usdtCrypto extends Component{
    state={
        currencies: [ "USD", "ARS"],
        base: "USDT",
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
            fetch("https://min-api.cryptocompare.com/data/pricemulti?fsyms=USDT&tsyms=ARS,USD")
            .then(res => res.json())
            .then(data => {
                const result = (data.USDT[this.state.convertTo] * amount).toFixed(4);
                this.setState({
                    result
                })
            })
        }
    }

    componentDidMount(){
        axios.get("https://min-api.cryptocompare.com/data/price?fsym=USDT&tsyms=USD")
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
                    <div className="cardborder1">
                        <div className="text-center">
                            <img src={usdtlogo} alt="" className="usdtlogo"/>
                        </div>
                        <div className="f16 mt-3" style={{color:"#343434", fontFamily:"Montserrat"}}>
                            Voy a comprar &nbsp;&nbsp;&nbsp; A un precio estimado de:
                        </div>
                        <div className="mt-2 btctext" style={{fontFamily:"Montserrat"}}>
                       <h5>{amount} {base} </h5> 
                        </div>
                        <div className="converttext" style={{fontFamily:"Montserrat"}}>
                           <h5> {result*1.045} {convertTo} </h5>
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
                                name="convertTo"
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

export default usdtCrypto;