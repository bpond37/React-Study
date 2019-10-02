import React, {Component} from 'React'
import {View, Text} from 'react-native'

class Splash extends Component {
    componentDidMount(){
        setTimeout(() => {
            this.props.navigation.navigate('login')
        }, 500);
    }
    render(){
        return(
            <View>
                <Text>Splash</Text>
            </View>
        )
    }
}

export default Splash