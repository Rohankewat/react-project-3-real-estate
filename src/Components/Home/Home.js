import "./Home.css";
import Cards from "../Cards/Cards";
import { useState } from "react";
import Company from "../Company/Company";
import Services from "../Services/Services";
import Properties from "../../Properies/Properties";
import Contacts from "../Contacts/Contacts";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Home() {
    let data3 = [
        {
            id: 1,
            price: "Price in INR : SOLD",
            bedrooms: "Bedrooms : 2",
            bathroom: "Bathroom : 1",
            carspaces: "Car Spaces : 1",
            title: "Modern Home",
            location: "Delhi | western ring road",
            dis: "Great location with a close proximity to the city of delhi. Modern and delightful house offers every member of the family their own space to relax. Great inverstment opportunity!",
            src: "https://th.bing.com/th/id/OIP.tJjRpXbgVUdkacsNDPSIswHaFj?pid=ImgDet&rs=1"
        },
        {
            id: 2,
            price: "Price in INR : 50 Lakh",
            bedrooms: "Bedrooms : 2",
            bathroom: "Bathroom : 2",
            carspaces: "Car Spaces : 3",
            title: "Riverside Luxury",
            location: "Indore | ring road",
            dis: "upmarket property is conveniently located only 30 minutes from indore rau and within easy reach to schools, shopping and public transport.This is your real opportunity to be part of indore's permies residential community.",
            src: "https://th.bing.com/th/id/OIP.EFlWzuKQ5eqEBRsDzgvN1gHaE8?pid=ImgDet&rs=1"
        },
        {
            id: 3,
            price: "Price in INR : SOLD",
            bedrooms: "Bedrooms : 2",
            bathroom: "Bathroom : 1",
            carspaces: "Car Spaces : 1",
            title: "Outstanding Single Storey",
            location: "chennai | IT park",
            dis: "TGhis spacious 4-bedroom home boasts the ultimate modern home boasts the ultimate modern living in western india.The stylish and expensive design provides various luxury features for the whole family.",
            src: "https://th.bing.com/th/id/OIP.UHp_1qj17NNdbFIqcdyl_QHaE8?pid=ImgDet&rs=1"
        },
        {
            id: 4,
            price: "Price in INR : 30 Lakh",
            bedrooms: "Bedrooms : 1",
            bathroom: "Bathroom : 3",
            carspaces: "Car Spaces : 2",
            title: "Stuning WaterFront",
            location: "Banglore | Jubilee Hills",
            dis: "This is amazing property is located with a gated upmarket residential resort with a private golf club and all modern facilities required by today's high living standard. shopes are just a buggy ride from home",
            src: "https://th.bing.com/th/id/OIP.pM4EI-rpJeGamv2o8xTEawHaEF?pid=ImgDet&rs=1"
        },
        {
            id: 5,
            price: "Price in INR : 85 Lakh",
            bedrooms: "Bedrooms : 2",
            bathroom: "Bathroom : 1",
            carspaces: "Car Spaces : 1",
            title: "Modern Townhouse",
            location: "pune | Pimpri",
            dis: "This is amazing property is located with a gated upmarket residential resort with a private golf club and all modern facilities required by today's high living standard. shopes are just a buggy ride from home",
            src: "https://th.bing.com/th/id/OIP.iSVSlTaGZl7n_dg2QY8jjwHaE7?pid=ImgDet&rs=1"
        }
    ]
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    function math() {
        alert("just a minute you form will be submit")
    }
    let data = [
        {
            id: 1,
            src: "https://wallpapercave.com/wp/wp2003539.jpg"
        },
        {
            id: 2,
            src: "https://images.alphacoders.com/847/84751.jpg"
        },
        {
            id: 3,
            src: "https://new-img.patrika.com/upload/2017/12/09/unitech_2-m.jpg"
        }
    ]

    return (
        <div>
            <div className="home_main_container">
                <img src="https://www.leaderbiography.com/wp-content/uploads/2019/01/Unitech-Group.jpg" />
            </div>
            <div className="carousel_1">
            <Carousel responsive={responsive} 
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                    >
                        {
                            data3.map((obj4)=> (
                                <div className="multi_1">
                                    <img src={obj4.src}/>
                                </div>
                            ))
                        }
                </Carousel>;
            </div>
            <Company />
            <Services />
            <Properties />
            <Contacts />

            <div className="contacts">
                <h1>Our Contacts</h1>
                <p className="phone">Phone :- <pre>9399310390</pre></p>
                < p className="company">Company :-</p>
                <p className="p1">We are committed to providing a quality service, and our friendly staff is ready to assist you with any enquiry</p>
                <p className="address">Address :-<pre>Vijay Nagar near c21 Mall indore india</pre></p>
            </div>
        </div>
    )

}

export default Home;