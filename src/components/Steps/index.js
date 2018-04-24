import React, {Component} from 'react';
import CardInfo from "../../../src/card-info.png";
import Choice from "../../../src/CHOICE.png";
import Ingresa from "../../../src/ingresa.png";
import Bank from "../../../src/Bank.png";

class Seteps extends Component {
    render() {
        return (
            <div className="row stepsContainer">
                <div className="step1 col-lg-3">
                    <img className="ico" src={CardInfo} alt=""/>
                    <h2>Conoce</h2>
                    <p>Descubre todos los beneficios que tiene cada una de nuestras tarjetas.</p>
                </div>
                <div className="step2 col-lg-3">
                    <img className="ico" src={Choice} alt=""/>
                    <h2>Elige</h2>
                    <p>Elige la tarjeta ideal para ti.</p>
                </div>
                <div className="step3 col-lg-3">
                    <img className="ico" src={Ingresa} alt=""/>
                    <h2>Ingresa</h2>
                    <p>Llena la solicitud con tus datos.</p>
                </div>
                <div className="step4 col-lg-3">
                    <img className="ico" src={Bank} alt=""/>
                    <h2>Recibe</h2>
                    <p>Ve a tu sucursal más cercana por tu nueva tarjeta.</p>
                </div>
            </div>
        )
    }
}

export default Seteps