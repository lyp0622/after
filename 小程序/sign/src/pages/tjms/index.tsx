import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Picker } from '@tarojs/components'
import './index.scss'

class MapCom extends Component {
    config: Config = {
        navigationBarTitleText: '添加面试'
    }

    state = {
        location: {
            // longitude: 0,latitude: 0,
            timeSel: ''
        }
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
    // onTimeChange=()=>{} 面试时间
    address = () => {
        console.log('address')
        Taro.navigateTo({
            url: '/pages/address/index'
        })
    }
    list = () => {
        console.log('list')
        Taro.navigateTo({
            url: '/pages/list/index'
        })
    }

    render() {
        // let {timeSel} = this.state.location;
        return (
            <View className='wrap'>
                <View className="tit1">面试信息</View>

                <View className="bao">
                    <View className="a1">公司名称</View>
                    <View className="a2"><input type="text" placeholder="请输入公司名称" /></View>
                </View>
                <View className="bao">
                    <View className="a1">公司电话</View>
                    <View className="a2"><input type="text" placeholder="请输入面试联系人电话" /></View>
                </View>
                <View className="bao">
                    <View className="a1">面试时间</View>
                    {/* <Picker mode = "selector" onChange={this.onTimeChange}>
                            <View className='picker'>
                                {{timeSel}}
                            </View>
                        </Picker> */}
                </View>
                <View className="bao">
                    <View className="a1" onClick={this.address}>面试地址</View>
                    <View className="a2">
                        <input type="text" placeholder="请输入面试地址" />
                    </View>
                </View>
                <View className="tit1">备注信息</View>
                <br />
                <textarea placeholder="备注信息(可选,100个以内)"></textarea>
                <Button className="btn" onClick={this.list}>确认</Button>
            </View>
        )
    }
}

export default MapCom as ComponentClass;