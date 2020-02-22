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
    pageSize: number,

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
        pageSize: 10,
        // current:0
    }

    lyp = {
        navList: ['未开始', '已开始', '已放弃', '全部'],

    }

    componentDidShow() {
        let params = { ...this.state };
        if (params.status === 2) {
            delete params.status;
        }
        this.props.getSignList(params);
    }

    componentDidHide() { }
    itemNav = (index) => {
        this.setState({
            current: index
        })
    }

    render() {
        let {current} =this.lyp
        return (
            <View className='wrap'>
                <View className='Tab'>
                    {/* {
                        this.lyp.navList.map((ite, index) => {
                            return (
                                <Text key={index} className={index ===current ? 'active' : ''} onClick={() => { this.itemNav(index) }}>{ite}</Text>
                            )
                        })
                    } */}
                </View>
               
                    {
                        this.state.list.map((item, index) => {
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