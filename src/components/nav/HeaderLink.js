import React, { Component } from 'react'

export default class HeaderLink extends Component {
  render() {
    const{LinkName,LinkUrl,img}=this.props
    return (
  
         <li className="nav-item">{LinkName ?(
         <a className="nav-link js-scroll-trigger" href={LinkUrl}>{this.props.LinkName}</a>)      
         :
         (
         <a className="nav-link js-scroll-trigger" href={LinkUrl}><img src={img}/></a>
             )
        }
         </li>
     
         
    )
  }
}
