import React from "react";
//import Information from "../Components/Information";
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

            <ul class="js-filter uk-child-width-1-3 uk-child-width-1-3@m uk-text-center" uk-grid=''>
                <li data-color="white">
                    <div class="" uk-grid=''>
                        <div>
                            <div class="uk-card uk-card-default">
                                <div class="uk-card-media-top">
                                    <img src="" alt="" />
                                </div>
                                <div class="uk-card-body">
                                    <h3 class="uk-card-title">Blue Buffalo Tastefuls</h3>
                                    <p>Natural Pate Wet Cat Food</p>
                                    <a href="#Blue-Buffalo-tastefuls" uk-toggle=''>More Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li data-color="blue">
                <div class="" uk-grid=''>
                        <div>
                            <div class="uk-card uk-card-default">
                                <div class="uk-card-media-top">
                                    <img src="" alt="" />
                                </div>
                                <div class="uk-card-body">
                                    <h3 class="uk-card-title">Assorted Dog Toys</h3>
                                    <p>Dog Chew Toys for Puppies 18PK</p>
                                    <a href="#Assorted-Dog-Toys" uk-toggle=''>More Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li data-color="white">
                <div class="" uk-grid=''>
                        <div>
                            <div class="uk-card uk-card-default">
                                <div class="uk-card-media-top">
                                    <img src="" alt="" />
                                </div>
                                <div class="uk-card-body">
                                    <h3 class="uk-card-title">Blue Buffalo Life</h3>
                                    <p>Natural Adult Dry Small Dog Food</p>
                                    <a href="#Blue-Buffalo-Life" uk-toggle=''>More Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li data-color="white">
                <div class="" uk-grid=''>
                        <div>
                            <div class="uk-card uk-card-default">
                                <div class="uk-card-media-top">
                                    <img src="" alt="" />
                                </div>
                                <div class="uk-card-body">
                                    <h3 class="uk-card-title">Cesar Wet Dog Food</h3>
                                    <p>Variety Pack</p>
                                    <a href="#Cesar-Wet-Dog-Food" uk-toggle=''>More Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li data-color="black">
                <div class="" uk-grid=''>
                        <div>
                            <div class="uk-card uk-card-default">
                                <div class="uk-card-media-top">
                                    <img src="" alt="" />
                                </div>
                                <div class="uk-card-body">
                                    <h3 class="uk-card-title">Blue Buffalo Tastefuls</h3>
                                    <p>Natural Pate Wet Cat Food</p>
                                    <a href="#Blue-Buffalo-tastefuls" uk-toggle=''>More Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li data-color="black">
                <div class="" uk-grid=''>
                        <div>
                            <div class="uk-card uk-card-default">
                                <div class="uk-card-media-top">
                                    <img src="" alt="" />
                                </div>
                                <div class="uk-card-body">
                                    <h3 class="uk-card-title">Blue Buffalo Tastefuls</h3>
                                    <p>Natural Pate Wet Cat Food</p>
                                    <a href="#Blue-Buffalo-tastefuls" uk-toggle=''>More Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li data-color="blue">
                <div class="" uk-grid=''>
                        <div>
                            <div class="uk-card uk-card-default">
                                <div class="uk-card-media-top">
                                    <img src="" alt="" />
                                </div>
                                <div class="uk-card-body">
                                    <h3 class="uk-card-title">Cat Wand Toys Pack</h3>
                                    <p>Interactive cat wand toy.</p>
                                    <a href="#Blue-Buffalo-tastefuls" uk-toggle=''>More Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li data-color="black">
                <div class="" uk-grid=''>
                        <div>
                            <div class="uk-card uk-card-default">
                                <div class="uk-card-media-top">
                                    <img src="" alt="" />
                                </div>
                                <div class="uk-card-body">
                                    <h3 class="uk-card-title">Blue Buffalo Tastefuls</h3>
                                    <p>Natural Pate Wet Cat Food</p>
                                    <a href="#Blue-Buffalo-tastefuls" uk-toggle=''>More Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li data-color="blue">
                <div class="" uk-grid=''>
                        <div>
                            <div class="uk-card uk-card-default">
                                <div class="uk-card-media-top">
                                    <img src="" alt="" />
                                </div>
                                <div class="uk-card-body">
                                    <h3 class="uk-card-title">Blue Buffalo Tastefuls</h3>
                                    <p>Natural Pate Wet Cat Food</p>
                                    <a href="#Blue-Buffalo-tastefuls" uk-toggle=''>More Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li data-color="white">
                <div class="" uk-grid=''>
                        <div>
                            <div class="uk-card uk-card-default">
                                <div class="uk-card-media-top">
                                    <img src="" alt="" />
                                </div>
                                <div class="uk-card-body">
                                    <h3 class="uk-card-title">Purina Friskies Gravy</h3>
                                    <p>Wet cat food Variety Pack</p>
                                    <a href="#Purina-Friskies-Gravy" uk-toggle=''>More Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li data-color="blue">
                <div class="" uk-grid=''>
                        <div>
                            <div class="uk-card uk-card-default">
                                <div class="uk-card-media-top">
                                    <img src="" alt="" />
                                </div>
                                <div class="uk-card-body">
                                    <h3 class="uk-card-title">Blue Buffalo Tastefuls</h3>
                                    <p>Natural Pate Wet Cat Food</p>
                                    <a href="#Blue-Buffalo-tastefuls" uk-toggle=''>More Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li data-color="black">
                <div class="" uk-grid=''>
                        <div>
                            <div class="uk-card uk-card-default">
                                <div class="uk-card-media-top">
                                    <img src="" alt="" />
                                </div>
                                <div class="uk-card-body">
                                    <h3 class="uk-card-title">Blue Buffalo Tastefuls</h3>
                                    <p>Natural Pate Wet Cat Food</p>
                                    <a href="#Blue-Buffalo-tastefuls" uk-toggle=''>More Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <div id="Blue-Buffalo-tastefuls" uk-modal=''>
                <div class="uk-modal-dialog uk-modal-body">
                    <h2 class="uk-modal-title">Blue Buffalo Tastefuls</h2>
                    <p>Natural Pate Wet Cat Food</p>
                    <p class="uk-text-right">
                        <button class="uk-button uk-button-default uk-modal-close" type="button">Back</button>
                        <button class="uk-button uk-button-primary" type="button">Add To Cart</button>
                    </p>
                </div>
            </div>
            <div id="Assorted-Dog-Toys" uk-modal=''>
                <div class="uk-modal-dialog uk-modal-body">
                    <h2 class="uk-modal-title">KIPRITII DOG CHEW TOYS</h2>
                    <p>18 pack of puppy teething chew toys</p>
                    <p class="uk-text-right">
                        <button class="uk-button uk-button-default uk-modal-close" type="button">Back</button>
                        <button class="uk-button uk-button-primary" type="button">Add To Cart</button>
                    </p>
                </div>
            </div>
            <div id="Blue-Buffalo-Life" uk-modal=''>
                <div class="uk-modal-dialog uk-modal-body">
                    <h2 class="uk-modal-title">Blue Buffalo Life Dog Food</h2>
                    <p>For Natural Adult or Small Dogs!</p>
                    <p class="uk-text-right">
                        <button class="uk-button uk-button-default uk-modal-close" type="button">Back</button>
                        <button class="uk-button uk-button-primary" type="button">Add To Cart</button>
                    </p>
                </div>
            </div>
            <div id="Cesar-Wet-Dog-Food" uk-modal=''>
                <div class="uk-modal-dialog uk-modal-body">
                    <h2 class="uk-modal-title">Cesar Wet Dog Food</h2>
                    <p>A variety pack of wet dog food flavors for your pet!</p>
                    <p class="uk-text-right">
                        <button class="uk-button uk-button-default uk-modal-close" type="button">Back</button>
                        <button class="uk-button uk-button-primary" type="button">Add To Cart</button>
                    </p>
                </div>
            </div>
            <div id="Purina-Friskies-Gravy" uk-modal=''>
                <div class="uk-modal-dialog uk-modal-body">
                    <h2 class="uk-modal-title">Purina Friskies in Gravy</h2>
                    <p>Variety of wet cat food soaked in gravy!</p>
                    <p class="uk-text-right">
                        <button class="uk-button uk-button-default uk-modal-close" type="button">Back</button>
                        <button class="uk-button uk-button-primary" type="button">Add To Cart</button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Homepage;