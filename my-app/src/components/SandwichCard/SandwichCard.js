import React from 'react'
import './SandwichCard.css'
class SandwichCard extends React.Component {
    render() {
        return (
            <div className="kakas-sandwich-container">
                <div>
                    <p className="kakas-sandwich-name">{this.props.name}</p>
                    <p className="kakas-sandwich-price">{this.props.price}</p>
                </div>
               {this.props.ingredients.map(ingredient => <div>{ingredient}</div> )}
            </div>
        )
    }
}

export default SandwichCard;