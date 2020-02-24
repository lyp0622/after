import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { connect } from '@tarojs/redux'
import { getSignListAction } from '../../../actions/sign'
import { ITouchEvent } from '@tarojs/components/types/common'



type PageStateProps = {
    list: Array<{
        [key: string]: any
    }>
    navList:Array<{
        [key:string]:any
    }>
    current:number
     arr:{
        [key: string]: any;
    }[]
}
type PageDispatchProps = {
    getSignList: (params) => void
}
type PageOwnProps = {}

type PageState = {
    status: number,
    page: number,
    pageSize: number,
}
type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface SignList {
    props: IProps;
}

@connect(state => {
    return {
        list: state.sign.list,
        navList:state.sign.navList,
        current:state.sign.current
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
    }
 
    componentDidShow() {
        let params = { ...this.state };
        if (params.status === 2) {
            delete params.status;
        }
        this.props.getSignList(params);
    }

    componentDidHide() {
      
     }
    
    // itemNav(index){
    //  console.log(index)
    //  console.log(this.state.status)
    //  if(index===0){
    //     let arr = this.props.list.filter(item=>{
    //         item.status=1
    //     })
    //    console.log(this.props.list)
    //  console.log('4512', arr)
      
    //  }
    //  this.setState({
    //      current:index
    //  })
    // }
      changeStatus = (e:ITouchEvent)=>{
    this.setState({
      status: e.target.dataset.status
    })
  }
    goDetail = (e: ITouchEvent)=>{
        wx.navigateTo({url:'/pages/sign/detail/index?id='+e.currentTarget.dataset.id});
      }
    render() {
        return (
            <View className='wrap'>
                <View className='Tab'>
                    {
                        this.props.navList.map((ite, index) => {
                            return (
                                <Text key={index}  className={index===this.props.current?'active':''} onClick={this.changeStatus}>{ite}</Text>
                            )
                        })
                    }
                </View>
                    {
                        this.props.list.map((item, index) => {
                            return (
                                <View key={index} onClick={this.goDetail} data-id={item.id} className='box' >
                                    <Text>
                                        {item.company}
                                    </Text>
                                    <Text>
                                        {item.address}
                                    </Text>
                                </View>
                            )
                        })
                    }
            </View>
        )
    }
}


export default SignList as ComponentClass;