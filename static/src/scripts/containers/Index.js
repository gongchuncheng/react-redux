/*
** 页面容器组件，负责页面逻辑，基本不参与展示功能
*/
import React,{Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as Actions from '../actions/actions';


class Index extends Component{

	constructor(props) {
	    super(props);
	}

	componentDidMount(){
	}

	render(){
		return (
			<div onClick={ this.props.actions.addnum }>111</div>
		);
	}
}

function mapStateToProps(state) {

    return {
    	state: state.reducer1
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Index);