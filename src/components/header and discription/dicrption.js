import React, { Component } from 'react'

export default class Dicrption extends Component {
  render() {
    const {wrapperClass} = this.props;
    return (
        // <div class="container">

        // <div class="new-alert">
        //     New
        // </div>

        // <div class="title-wraper bold black">
        //    {this.props.productName}
        // </div> 

		// 	<div class="description-wrapper black">
		// 		{this.props.productDiscription}
		// 	</div>

		// 	<div class="price-wrapper grey">
        //     {this.props.productPrice}
		// 	</div>

        // <div class="links-wrapper">
        //     <ul>
        //         <li><a href="">Learn more</a></li>
        //         <li><a href="">Buy</a></li>
        //     </ul> 
        // </div>
    // </div>
  
    <section class={wrapperClass}>
		<div class="container">
{this.props.new &&
    <div class="new-alert">
    {this.props.new}
    </div>
}
			

			<div class="title-wraper bold black">
				iPad Pro 
			</div> 

			<div class="links-wrapper">
				<ul>
					<li><a href="">Learn more</a></li>
					<li><a href="">Order</a></li>
				</ul> 
			</div>
{/* 
			<div class="ipod-caption row">
				<div class="col-sm-12 col-md-6 text-md-right">iPad Pro available starting 3.25</div>
				<div class="col-sm-12 col-md-6 text-md-left">Magic Keyboard coming in May</div>
			</div> */}
		</div>
	</section>
    )
  }
}
