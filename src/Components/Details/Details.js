import "./Details.css";
import { useParams } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Contacts from "../Contacts/Contacts";
function Details() {
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
    let user_id = useParams();
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
    return (
        <div className="details_main">
            <div className="img_container">
                <img src="https://www.leaderbiography.com/wp-content/uploads/2019/01/Unitech-Group.jpg" />
            </div>
            <div className="propertiess">
                <h1 className="h1">View our Properties</h1>
                <p className="p1">Let us guide you to find your dream home in India</p>
                <hr></hr>
                {
                    data3.map((obj4) => (
                        obj4.id === parseInt(user_id.id)
                            ?
                            <div>
                                <h1 className="h2">{obj4.title}</h1>
                                <h1 className="h3">{obj4.location}</h1>
                                <p className="p1">{obj4.price}</p>
                                <p className="p2">{obj4.bedrooms}</p>
                                <p className="p3">{obj4.bathroom}</p>
                                <p className="p4">{obj4.carspaces}</p>
                                <Carousel responsive={responsive} className="carousel_1"
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
                <div className="det_img">
                <img src={obj4.src}/>
                <p className="disc_p1">{obj4.dis}</p>
                </div>
                            </div>
                            :
                            console.log("Happy")
                    ))
                }
                
            </div>
            <Contacts/>
        </div>
    )
}

export default Details;