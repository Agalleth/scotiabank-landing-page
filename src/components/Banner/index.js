import React, {Component} from "react";
import Logo from '../../../src/scotiabank-logo.png';

class Banner extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-default">
                    <a className="navbar-brand" href="#"><img className="logo" src={Logo} alt="logo"/></a>
                    <a className="btn" href="#">SOLICITA TU TARJETA</a>
                </nav>
                <div className="row banner">
                    <div className="col-md-5 text-banner">
                        <h2 className="colo-red">Empieza a disfrutar la vida como quieras.</h2>
                        <p>En Scotiabank tenemos la Tarjeta de Crédito ideal para ti, cada una diseñada
                            para adaptarse a tu estilo de vida.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Banner;