import React, { Component } from 'react';

class Cards extends Component {
    
    render() {
        console.log(this.props.memoryCard)
        return(
            <div>
                <h2>Cards</h2>
                <img src={this.props.memoryCard.image_front} alt="not available"></img>
                <p>{this.props.memoryCard.photographer}</p>
            </div>
        )
    }
}

export default Cards