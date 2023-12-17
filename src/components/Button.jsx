import { Component } from "react"

class Button extends Component {

    render(){
        return (
            <div>
                <a href={this.props.linkTo} class="default-button">{this.props.text}</a>
            </div>
        )
    }
}

export default Button