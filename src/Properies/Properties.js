import Cards from "../Components/Cards/Cards";
import "./Properties.css";

function Properties() {
    function math() {
        alert("just a minute you form will be submit")
    }
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
        <div>
            <div className="properties">
                <h1>View Our Properties</h1>
                <p>Let us guide you to find your dream home in india</p>
            </div>
            <div className="cards1">
                {
                    data3.map((obj3) => (
                        <Cards obj3={obj3} />
                    ))
                }
            </div>
            <hr className="hr1"></hr>
            <div className="offer">
                <h2>We offer exceptional properties for exceptional clients</h2>
                <p className="offer_p1">
                    We are committed to helping our international clients find the best property in Australia, regardless of where they are.
                    If you’ve been browsing and haven’t found something you genuinely like, please send us your request,
                    and we will try to find your new property based on your goals and preferences.</p>
            </div>
            <hr className="hr1"></hr>
        </div>
    )
}

export default Properties;