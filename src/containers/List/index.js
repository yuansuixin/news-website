import React, { Component } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';
import { List } from 'antd';


class PageList extends Component {
  constructor(props){
    super(props);
    this.state = {
      data:[]
    }
  }
  componentWillReceiveProps(nextProps){
    const id = nextProps.match.params.id;
    const url = 'http://www.dell-lee.com/react/api/list.json?id='+ id;
    axios.get(url).then(res=>{
      // console.log('list=====',res.data.data);
      this.setState({
        data: res.data.data
      });
    })
  }
  componentDidMount(){
    let url = 'http://www.dell-lee.com/react/api/list.json';
    const id = this.props.match.params.id;
    if(id){
        url += '?id='+id;
    }
    axios.get(url)
    .then((res)=>{
        this.setState({
            data:res.data.data
        });
    })
  }


  render() {
    return (
      <List
      style={{background:'#fff'}}
      bordered
      dataSource={this.state.data}
      renderItem={item => 
      <List.Item>
        <Link to={`/detail/${item.id}`}>{item.title}</Link>
      </List.Item>}
    />
    )
  }
}
export default PageList;
