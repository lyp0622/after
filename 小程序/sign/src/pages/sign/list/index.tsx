import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { connect } from '@tarojs/redux'
import { getSignListAction } from '../../../actions/sign'

type PageStateProps = {
  list: Array<{
    [key: string]: any
  }>
}
type PageDispatchProps = {
  getSignList: (params) => void
}
type PageOwnProps = {}

type PageState = {
  status: number,
  page: number,
  pageSize: number
}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface SignList {
  props: IProps;
}

@connect(state => {
  return {
    list: state.sign.list
  }
}, dispatch => {
  return {
    getSignList: (params) => {
      dispatch(getSignListAction(params))
    }
  }
})
class SignList extends Component<{}, PageState> {
  config: Config = {
    navigationBarTitleText: '面试列表'
  }

  state = {
    status: 2,
    page: 1,
    pageSize: 10
    // topTab: [
    //   {
    //     'name': '未开始'
    //   },
    //   {
    //     'name': '已打卡'
    //   },
    //   {
    //     'name': '已放弃'
    //   },
    //   {
    //     'name': '全部'
    //   }
    // ]
  }

  componentDidShow() {
    let params = { ...this.state };
    if (params.status === 2) {
      delete params.status;
    }
    this.props.getSignList(params);
  }

  componentDidHide() { }

  render() {
    return (
      <View className='wrap'>
        <View className='top'>
          <Text>未开始</Text>
          <Text>已打卡</Text>
          <Text>已放弃</Text>
          <Text>全部</Text>
        </View>

        <View className='middle'>
          {
            this.props.list.map((item, inde) => {
              return <View className='itmeCon' key={inde}>
                <Text>{item.company}</Text>
                <Text>未开始</Text>
                <Text>{item.address}</Text>
                <Text>面试时间: {item.latitude} {item.longitude}</Text>
                <Text>未提醒</Text>
              </View>
            })
          }
        </View>

      </View>
    )
  }
}

export default SignList as ComponentClass;