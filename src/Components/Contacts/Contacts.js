import "./Contacts.css";

function Contacts() {
    function math() {
        alert("just a minute you form will be submit")
    }
    return (
        <div>
            <div className="get_in_touch">
                <h1 className="h1">Get in Touch</h1>
                <p className="p1">Please use the online form below if you require more information</p>
                <form action="https://formspree.io/f/xdojzgrr" method="post" className="form1" method="post" onSubmit={math}>
                    <label className="label1">Full Name</label>
                    <br></br>
                    <input type="text" placeholder="enter you name" name="Name :-" id="id1"></input>
                    <label className="label2">Email</label>
                    <br></br>
                    <input type="email" placeholder="enter you email" name="Email :-" id="id2"></input>
                    <label className="label3">Phone</label>
                    <br></br>
                    <input type="number" placeholder="enter you number" name="Phone :-" id="id3"></input>
                    <label className="label4">Message</label>
                    <br></br>
                    <textarea rows="15" cols="115" name="Message :- " id="id4"></textarea>
                    <button className="button2">SEND</button>
                </form>
            </div>
        </div>
    )
}

export default Contacts;