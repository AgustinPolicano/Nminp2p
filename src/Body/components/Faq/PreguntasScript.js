import React,{useState} from 'react'

import "./Faq.scss";
import { Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

const PreguntasScript = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return(
      <div>
        <Collapse
    bordered={false}
    expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
    className="bgfaq">
    <Panel  style={{opacity:0.5}} header="¿Envian usdt? ¿O solo btc? ¿Quién se encarga del fee?" key="1" className="txtfaq site-collapse-custom-panel">
      <p className="f14">Preferentemente enviamos USDT por la red TRC20 en binance ya que por ese metodo los envios son gratis. <br></br>A su vez, el cliente puede luego entrar cuando quiere a btc sin quedar obligado a hacerlo en el momento de la transaccion.<br></br>En caso de si o si requerir btc el comprador paga el fee.</p>
    </Panel>
    <Panel style={{opacity:0.5}}  header="¿Qué medidas de seguridad ofrecen?" key="2" className="site-collapse-custom-panel">
      <p className="f14">Trabajamos en local a la calle, con una oficina en un piso superior para privacidad pero custodiada por cámaras y personal de seguridad privada.</p>
    </Panel>
    <Panel style={{opacity:0.5}}  header="¿Cómo funcionan los turnos? ¿Se puede ir sin avisar?" key="3" className="site-collapse-custom-panel">
      <p className="f14">No. Se trabaja con cita previa aclarando los montos a operar y los nombres de quienes acuden.<br></br>
       No trabajamos con clientes espontaneos sin que se prepare la operación previamente.<br>
       </br> Esto nos ayuda a controlar el stock y la circulación.</p>
    </Panel>
    <Panel style={{opacity:0.5}}  header="¿Tienen montos mínimos? " key="4" className="site-collapse-custom-panel">
      <p className="f14">No. No tenemos montos mínimos pero el precio de venta sera siempre mayor cuando se operen montos bajos.</p>
    </Panel>
    <Panel style={{opacity:0.5}}  header="¿Aceptan otras monedas? ¿O solo dolares? " key="5" className="site-collapse-custom-panel">
      <p className="f14">Aceptamos dolares, pesos, euros y reales. Tambien podemos pagar en cualquiera de estas.</p>
    </Panel>
  </Collapse>


      </div>
    );
  }

export default PreguntasScript;