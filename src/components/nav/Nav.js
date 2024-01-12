import React, { Component } from 'react'
import logo from '../../commonResource/images/icons/logo-sm.png'
import search from '../../commonResource/images/icons/search-icon-sm.png'
import cart from '../../commonResource/images/icons/cart-sm.png'
import HeaderLink from './HeaderLink'
export default class Nav extends Component {
  render() {
    return (
     
        <div className="nav-wrapper fixed-top">
        <div className="container">
            <nav className="navbar navbar-toggleable-sm navbar-expand-md">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target=".navbar-collapse">
                    ☰
                </button>
                <a className="navbar-brand mx-auto" href="#"><img src={logo}/></a>

                <div className="navbar-collapse collapse">
                    <ul className="navbar-nav nav-justified w-100 nav-fill">
                       <HeaderLink  LinkUrl="#" LinkName="iphone"/>
                       <HeaderLink  LinkUrl="#" LinkName="ipad"/>
                       <HeaderLink  LinkUrl="#" LinkName="watch"/>
                       <HeaderLink  LinkUrl="#" LinkName="tv"/>
                       <HeaderLink  LinkUrl="#" LinkName="Music"/>
                       <HeaderLink  LinkUrl="#" LinkName="support"/>
                       <HeaderLink  LinkUrl="/search/" img={search}/>
                       <HeaderLink  LinkUrl="/search/" img={cart}/>
                      
                    </ul>
                  
                </div>
            </nav>
        </div>
    </div>
    
    )
  }
}
