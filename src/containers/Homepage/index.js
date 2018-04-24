import React, {Component} from 'react';
import Banner from '../../components/Banner';
import Select from '../../components/Select';
import Steps from '../../components/Steps';
//import Logo from '../images/scotiabank-logo.png';
import Api from '../../api';
import utilFirebase from '../../utils/utilsFirebase';


class Homepage extends Component {
    constructor (props) {
        super(props)
        this.state = {
            listCards: [],//pasar este estado al componente donde se van a pintar las tarjetas
            listSelect: []
        }
    }

    compareCategory () {
        this.state.listCards.forEach((card) => {
            console.log(card)
        })
    }


    componentDidMount () {
        let listCards = Api.database.collection("cards");
        let listSelect = Api.database.collection("select-amount");
        const self = this;
        listCards.get().then(function(doc) {
            let listCards = utilFirebase.snapshopToArray(doc)
            self.setState({
                listCards
            })
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
        listSelect.get().then(function(doc) {
            let listSelect = utilFirebase.snapshopToArray(doc)
            self.setState({
                listSelect
            })
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    }

    render() {
        let arrayList = this.state.listCards;
        arrayList.forEach((item)=> {
            let amountCard = item.amount;
            console.log(amountCard)

        })
        console.log(arrayList)
        return (
            <div className="container">
                <Banner/>
                <Steps/>
                <Select array= {this.state.listSelect}/>
            </div>
        );
    }
}

export default Homepage;