import { Component } from "react"

class Button extends Component {

    render(){
        return (
            <>
                <a href={this.props.linkTo} class="default-button">{this.props.text}</a>
            </>
        )
    }
}

export default Button