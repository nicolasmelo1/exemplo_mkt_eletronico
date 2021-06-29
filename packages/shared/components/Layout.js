import React from 'react'
import { View } from 'react-native'


/**
 * {Description of your component, what does it do}
 * @param {Type} props - {go in detail about every prop it recieves}
 */
const Layout = (props) => {
    const renderMobile = () => {
        return (
            <View>{props.children}</View>
        )
    }

    const renderWeb = () => {
        return (
            <div>{props.children}</div>
        )
    }

    return process.env['APP'] === 'web' ? renderWeb() : renderMobile()
}

export default Layout