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
    navList:Array<{
        [key:string]:any
    }>
    current:number
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
    
    itemNav(index){
        // this.setState({
        //     current:index
        // })
        // console.log(index)
    }

    render() {
        return (
            <View className='wrap'>
                <View className='Tab'>
                    {
                        this.props.navList.map((ite, index) => {
                            return (
                                <Text key={index} className={ index===this.props.current?'active':''} onClick={this.itemNav.bind(index)}>{ite}</Text>
                            )
                        })
                    }
                </View>
                    {
                        this.props.list.map((item, index) => {
                            return (
                                <View key={index} className='box'>
                                    <Text>
                                        {item["company"]}
                                    </Text>
                                    <Text>
                                        {item["phone"]}
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