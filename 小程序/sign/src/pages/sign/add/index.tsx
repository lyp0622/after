import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Input, Button, Form, PickerView, PickerViewColumn } from '@tarojs/components'
import './index.scss'
interface TimeType {
  years: []
}
class AddSign extends Component<TimeType> {
  config: Config = {
    navigationBarTitleText: '添加面试'
  }

  state={
    company: '',
    phone: '',
    time: '',
    address: '',
    info: '',
    value: [9999, 1, 1],
    years: years //?????
  }

  componentDidShow () { }

  componentDidHide () { }

  formSubmit(e){
    console.log('e...', this.state);
  }

  formReset(){
    this.setState({
      company: '',
      phone: '',
      address: '',
      time: '',
      info: ''
    })
  }

  goLocation(){
    wx.navigateTo({
      url: '/pages/sign/location/index'
    })
  }

  onChange = e => {
    const val = e.detail.value
    this.setState({
      year: this.state.years[val[0]],
      // month: this.state.months[val[1]],
      // day: this.state.days[val[2]],
      // value: val
    })
  }

  render () {
    return (
      <View className='wrap'>
         <Form onSubmit={this.formSubmit.bind(this)} onReset={this.formReset.bind(this)}>
          <View>
            <Text>公司名称</Text>
            <Input placeholder="公司名称" value={this.state.company} onInput={e=>this.setState({company:e.detail.value})}></Input>
          </View>
          <View>
            <Text>公司电话</Text>
            <Input placeholder="公司电话" value={this.state.phone} onInput={e=>this.setState({phone:e.detail.value})}></Input>
          </View>
          <View>
            <Text>面试时间</Text>
            <Input placeholder="面试时间" value={this.state.time} onInput={e=>this.setState({time:e.detail.value})}></Input>
            <PickerView indicatorStyle='height: 50px;' style='width: 100%; height: 300px;' value={this.state.value} onChange={this.onChange}>
              <PickerViewColumn>
                {this.state.years.map(item => {
                  return (
                    <View>{item}年</View>
                  );
                })}
              </PickerViewColumn>
            </PickerView>
          </View>
          <View>
            <Text>面试地址</Text>
            <Text onClick={this.goLocation}></Text>
          </View>
          <View>
            <Text>备注</Text>
            <Input placeholder="备注" value={this.state.info} onInput={e=>this.setState({info:e.detail.value})}></Input>
          </View>
          <Button form-type="submit">确认</Button>
          <Button form-type="reset">重置</Button>
         </Form>
      </View>
    )
  }
}

export default AddSign as ComponentClass;