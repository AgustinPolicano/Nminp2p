import React from 'react'
import BTC from "./btcCrypto";
import USDT from "./usdtCrypto";

function Exchange() {
    return (
        <div>
            <div className="text-center f40 txtcalculadora" style={{color:"#ffffff", fontFamily:"Comforta"}}  id="exchange">
                Usa nuestra calculadora!
                <div className="f18 mt-1" style={{color:"#FFBA03"}} >
                    Con cotización en tiempo real
                </div>
                <div className="mt-5">
                <BTC/>
                <USDT/>
                </div>
            </div>
        </div>
    )
}

export default Exchange
