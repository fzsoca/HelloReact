import React from 'react'
import './SandwichCard.css'
class SandwichCard extends React.Component {
    render() {
        return (
            <div className="kakas-sandwich-container">
                <div>
                    <p>{this.props.name}</p>
                    <p>{this.props.price}</p>
                </div>
               {this.props.ingredients.map(ingredient => <div>{ingredient}</div> )}
            </div>
        )
    }
}

export default SandwichCard;