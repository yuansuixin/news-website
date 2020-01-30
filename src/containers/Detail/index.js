import React, { Component } from "react";
import axios from 'axios';
import { Card } from 'antd';
import './style.css';

class Detail extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: 'title',
            content: 'content'
        }
    }
  render() {
    return (
        <Card title={this.state.title}>
            <div className='detail' dangerouslySetInnerHTML={{__html:this.state.content}}></div>
        </Card>
    )
  }
  componentDidMount(){
      const id = this.props.match.params.id;
      let url = 'http://www.dell-lee.com/react/api/detail.json?id=' + id;
      axios.get(url).then(res=>{
        //   console.log('res.data.data==',res.data.data)
          this.setState(res.data.data)
      })
  }
}
export default Detail;
