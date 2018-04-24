import React, {PureComponent} from 'react';

class Card extends PureComponent {
    render() {
        // const {array} = this.props; //estado para el componente de las tarjetas
        // console.log(array)
        return (
            <div class="card">
                <div class="card-header" id="headingThree">
                    <h5 class="mb-0">
                        <button
                            class="btn btn-link collapsed"
                            data-toggle="collapse"
                            data-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree">
                            <img class="ico" src="src/arrow.png" alt=""/>
                        </button>
                    </h5>
                </div>
                <div
                    id="collapseThree"
                    class="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordion">
                    <div class="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                        brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                        sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                        shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
                        cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                        Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
                        you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;