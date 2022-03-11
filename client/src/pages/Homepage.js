import React from "react";

function Homepage() {

    return (
        <div uk-filter="target: .js-filter">

            <ul class="uk-subnav uk-subnav-pill uk-flex uk-flex-center">
                <li class="uk-active" uk-filter-control=''><a href="#">All Products</a></li>
                <li uk-filter-control="[data-color='white']"><a href="#">Food</a></li>
                <li uk-filter-control="[data-color='blue']"><a href="#">Toys</a></li>
                <li uk-filter-control="[data-color='black']"><a href="#">Gear</a></li>
                <li uk-filter-control="[data-color='Health']"><a href="#">Health</a></li>
            </ul>

            <ul class="js-filter uk-child-width-1-2 uk-child-width-1-3@m uk-text-center" uk-grid=''>
                <li data-color="white">
                    <div className="uk-child-width-1-2@m" uk-grid>
                        <div>
                            <div class="uk-card uk-card-default">
                                <div class="uk-card-media-top">
                                    <img src="./src/assets/images/food/bbtastefulcat.png" alt="" />
                                </div>
                                <div class="uk-card-body">
                                    <h3 class="uk-card-title">Media Top</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li data-color="blue">
                    <div class="uk-card uk-card-primary uk-card-body">Item</div>
                </li>
                <li data-color="white">
                    <div class="uk-card uk-card-default uk-card-body">Item</div>
                </li>
                <li data-color="white">
                    <div class="uk-card uk-card-default uk-card-body">Item</div>
                </li>
                <li data-color="black">
                    <div class="uk-card uk-card-secondary uk-card-body">Item</div>
                </li>
                <li data-color="black">
                    <div class="uk-card uk-card-secondary uk-card-body">Item</div>
                </li>
                <li data-color="blue">
                    <div class="uk-card uk-card-primary uk-card-body">Item</div>
                </li>
                <li data-color="black">
                    <div class="uk-card uk-card-secondary uk-card-body">Item</div>
                </li>
                <li data-color="blue">
                    <div class="uk-card uk-card-primary uk-card-body">Item</div>
                </li>
                <li data-color="white">
                    <div class="uk-card uk-card-default uk-card-body">Item</div>
                </li>
                <li data-color="blue">
                    <div class="uk-card uk-card-primary uk-card-body">Item</div>
                </li>
                <li data-color="black">
                    <div class="uk-card uk-card-secondary uk-card-body">Item</div>
                </li>
            </ul>
        </div>
    )
}

export default Homepage;