import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./Company.css";

let data2 = [
    {
        id: 1,
        src: "https://th.bing.com/th/id/OIP.o42NIjex8Z_Ld7jeKUEEhwHaE8?w=257&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
        id: 2,
        src: "https://yorkmix.com/wp-content/uploads/2019/07/york-fire-station-apartment-1-1300x867.jpg"
    },
    {
        id: 3,
        src: "https://th.bing.com/th/id/OIP.ORZKx7RTuJx0EDsjH5ZaZgHaE7?pid=ImgDet&rs=1"
    },
    {
        id: 4,
        src: "https://th.bing.com/th/id/OIP.lbQDil4Kv2ydFUhRXH4MwQHaD4?pid=ImgDet&rs=1"
    }
]

function Company() {
    return (
        <div>
            <div className="company_discription">
                <h1>Our Company</h1>
                <p className="p1">"Unitech" specialises in the marketing and sale of real estate to foreign citizens who do not have permanent residency in India.</p>
                <p className="p2">
                    Established in 2008, "indian" is a fully licensed real estate agency created to promote and sell indian residential properties to international buyers.
                </p>
                <p className="p2">"Unitech" is a team of professionals with more than 30 years of business experience in India.</p>

                <p className="p1">We have knowledge and experience in dealing with international clients from different cultures.</p>

                <p className="p2">
                    Our agency aims to help and assist with purchasing real estate in Australia. We offer our assistance and many services free of charge
                </p>

                <p className="p2">From luxury apartments to exclusive villas and penthouses - our company can offer you an obligation-free property tour that will give you an excellent opportunity to view and choose your new home in India.</p>

                <p className="p1">"Unitech" provides a professional, confidential and individual approach.</p>

            </div>
            <div className="carousel2">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={1}
                    infiniteLoop={true}
                    showStatus={false}
                    width={600}
                >
                    {
                        data2.map((obj2) => (
                            <div>
                                <img src={obj2.src} />
                            </div>

                        ))
                    }
                </Carousel>
            </div>
        </div>
    )
}

export default Company;