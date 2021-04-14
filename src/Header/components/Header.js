import React from 'react'
import axios from "axios";
import btclogo from "../../assets/imgs/main.png";
import "./Header.scss";
import btclogo2 from "../../assets/imgs/btclogo.png";

class Header extends React.Component{
    state={
        cryptos: [],
     
    }
    componentDidMount(){
        axios.get("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD")
        .then(res => {
            const cryptos = res.data;
            console.log(cryptos);
            this.setState({cryptos: cryptos});
            return Math.round(cryptos)
       
        })
    }


    render(){
        return(
            <div>
                <div>
                    <div className="mt-5 ml-5">
                        <img src={btclogo} alt="" className="btclogofix"/>
                    </div>
                    <div style={{fontFamily:"Comforta", color:"#ffffff"}} className="text-center mt-2 mr10 f70">
                        Nahuel <br></br> P2P
                    </div>
                    <div  style={{color: "#FFBA03", fontFamily:"Montserrat"}} className="text-center mr10 mt-3 f20">
                        Horario de atención: <br></br>
                        11:00 a 18:00 hrs - Belgrano, CABA
                    </div>
                    <div className="border1">
                        <div className="text-center">
                            <img src={btclogo2} alt="" className="btclogocotz mt-4"/>
                            <div className="h5 mt-3" style={{color:"#ffffff", fontFamily:"Montserrat"}}>
                                BITCOIN
                            <div className="mt-2" style={{color: "#343434"}}>
                                BTC
                            </div>
                            <div className="border2 text-center mt-3">
                               <div className="f18 pt-3">
                                1 Bitcoin equivale a:
                                <div className="pt-3 f23" style={{color:"#FFBA03"}}>
                                {this.state.cryptos.USD} USD
                                </div>
                               </div>
                            </div>
                            <div className="text-center mt-4 f16" style={{opacity:"0.5", fontFamily:"Montserrat"}}>
                                 Vendemos a:
                             </div>
                             <div className="text-center mt-3 f23">
                                 4.75%
                             </div>
                             <div className="linea">
                             </div>
                             <div className="text-center mt-4 f16" style={{opacity:"0.5", fontFamily:"Montserrat"}}>
                                Compramos a:
                             </div>
                             <div className="text-center mt-3 f23">
                                 0.75%
                             </div>
                             <div className="linea">

                             </div>
                             <div className="text-center f15 mt-3">
                                 Consulta cotizaciones mayores a 10k!
                             </div>
                             <div className="">
                             <button className="btn mt-3 pt" href="https://t.me/nahuelmi"> <a href="https://t.me/nahuelmi">Compra ahora!</a></button>
                             </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )


    }


}

export default Header;
