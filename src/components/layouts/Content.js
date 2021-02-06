import React,{Component} from 'react'
import Axios from 'axios'
import uuid from 'react-uuid'


 /* const Content =()=>{
     console.log('Content working by jojo');
     return<content>
        Content
     </content>
 }; */
class Content extends React.Component{
    constructor(){
        super();
        console.log('constuctor...');
        this.state={
            is_loading:false,
            datas: [],
        };
    }
    componentWillMount(){
        console.log('componentWillMount');
    }
    componentDidMount(){
        console.log('componentDidMount');
        //call API

        /* Axios.get('http://localhost:1337/shops',{
            headers:{
                Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMTYzYzE0MDViNWViMzQzYzhlNGI5ZCIsImlhdCI6MTYxMjA3NjM2OCwiZXhwIjoxNjE0NjY4MzY4fQ.u6kNn09dAe4M4ysJ2yUraIHWDCvjkdf_a6dnWa5Yokc' */
                Axios.get('http://pnixpro.com/api/v2/product-shop',{
            headers:{
                Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRjbUFkbWluIiwiaWF0IjoxNjEyMjUxNDI5LCJleHAiOjE2MTIyODc0Mjl9.6jNVuBIx46hxn2l-DT1mDcTdndIeG72kAlFBwPvqylE',
                
            },params:{prductshopid:2}
        })
        .then((response)=>{
            console.log('response',response.data)
            this.setState({
                datas:response.data,
                is_loading:true,
            })
        })
        .catch((err)=>{
            console.log('error',err)
        });
        setTimeout(()=>{
            this.setState({is_loading: true});
        },5000);
    }
    render(){
        console.log('render of content')
        if(!this.state.is_loading){
            return <div>loading</div>;
        }
        return <content >
        {this.state.datas.map((data)=>{
            return <div key={uuid()}>{data.productName} <img src={data.productImg} /> {data.productImg}</div>
        })}
        </content>
    }
};

 export default Content;