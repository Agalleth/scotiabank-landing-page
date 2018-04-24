import React, {PureComponent} from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


class Select extends PureComponent  {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
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
        console.log(event.target.id)
        
      }
  
    render() {
        const {array} = this.props;
      return (
        <ButtonDropdown className="backgroundButton" isOpen={this.state.dropdownOpen} toggle={this.toggle} onChange={this.handleOnchange} >
          <DropdownToggle caret>
          ¿Cuál es tu ingreso?
          </DropdownToggle>
          <DropdownMenu>
            {
                array.map((item) => <DropdownItem key={item.id} id={item.amount} onClick={this.select}>{item.amount}</DropdownItem>) 
            }
          </DropdownMenu>
        </ButtonDropdown>
      );
    }
  }

export default Select;
