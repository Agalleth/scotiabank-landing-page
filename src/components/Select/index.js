import React, {PureComponent} from 'react';
import {ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

class Select extends PureComponent {
    constructor(props) {
        super(props);

        this.toggle = this
            .toggle
            .bind(this);
        this.state = {
            dropdownOpen: false,
            value: ''
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen

        });
    }

    handleOnchange = (item) => {
        console.log(item)
    }

    select(event) {
        let idSelect = event.target.id;
        console.log(idSelect)
    }

    render() {
        const {array} = this.props;
        return (
            <div className="row containerSelects">
                <h5 class="colo-red">Comienza a disfrutar de beneficios, recompensas y
                    promociones exclusivas por ser cliente Scotiabank.</h5>
                <p className="col-lg-3">¿Qué tarjeta prefieres?</p>
                <div className="form-group">
                    <ButtonDropdown
                        className="backgroundButton"
                        isOpen={this.state.dropdownOpen}
                        toggle={this.toggle}
                        onChange={this.handleOnchange}>
                        <DropdownToggle caret>
                            ¿Cuál es tu ingreso?
                        </DropdownToggle>
                        <DropdownMenu>
                            {array.map((item) => <DropdownItem key={item.id} id={item.amount} onClick={this.select}>${item.amount}</DropdownItem>)
}
                        </DropdownMenu>
                    </ButtonDropdown>
                </div>
            </div>
        );
    }
}

export default Select;