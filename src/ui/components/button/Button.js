// /import React, {
    Component
} from 'react'
import {
    TouchableNativeFeedback,
    View
} from 'react-native'

/**
 
    const calc = () => {

    }

    function calc () {

    }
    
    const a = calc

 * 
 */

class Button extends Component {

    render() {
        return (
            <TouchableNativeFeedback onPress={this.props.onClick}>
                <View style={this.props.style}>
                    {this.props.children}  
                </View>
            </TouchableNativeFeedback>
        )
    }

}

export default Button