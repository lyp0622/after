import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'

class MapCom extends Component {
    config: Config = {
        navigationBarTitleText: '面试地址'
    }

    state = {
        location: {}
    }

    componentDidShow() {
        Taro.getLocation({
            type: 'wgs84',
            success: (res) => {
                this.setState({
                    location: res
                })
            }
        })
    }

    // componentDidHide() { }
    render() {

        return (
            <View className='wrap'>
                <view>北京</view>                
            </View>
        )
    }
}

export default MapCom as ComponentClass;