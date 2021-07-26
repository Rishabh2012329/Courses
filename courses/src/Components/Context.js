import React, { Component } from 'react'
import axios from 'axios'
//import { FaMapPin } from 'react-icons/fa';

const MyContext = React.createContext();
const durl="http://localhost:5000/"
const purl="https://thawing-temple-60747.herokuapp.com/"
export default class Context extends Component {
    constructor(){
        super()
        this.state={
            isLogged:"",
            isAdmin:false,
            isTeacher:false,
            user:{},
            course:"",
            setLog:(value)=>{
                this.setState({isLogged:value})
            },
            setUser:(value)=>{
                this.setState({user:value})
            },
            findByName:(name)=>{
              
                if(this.state.course!=""){
                 
                    var data;
                    this.state.course.map((obj)=>{
                        if(obj.name==name)
                             data=obj;
                    })
                    
                    console.log("data",data)
                    return data
                }else {
                    return"";
                }
                   
            }
        }
    }
    componentDidMount(){
        axios.get(durl+'course/getCourses').then((res)=>{
            this.setState({course:res.data||""})
            console.log(res.data)
        }).catch((error)=>{
            console.log(error.response||"")
        })
       axios.get(durl+'auth/refresh',{withCredentials:true}).then((res)=>{
           console.log(res)
       }).catch((err)=>{
           console.log(err)
       })
       axios.get(durl+'auth/dashboard',{withCredentials:true})
        .then((res)=>{
                console.log(res.data._doc)
        
                this.setState({isLogged:true},()=>{
                    console.log("done")
                })
                
                this.setState({isTeacher:res.data._doc.isTeacher,isAdmin:res.data._doc.isAdmin})
                this.setState({user:res.data._doc})
          
        }).catch((error)=>{
            this.setState({isLogged:false})
            console.log(error)
        })
        
    }
    
    render() {
        return (
            <MyContext.Provider value={this.state}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export const context=MyContext;