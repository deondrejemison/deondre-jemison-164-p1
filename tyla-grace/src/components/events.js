import React, { Component } from 'react';

class Events extends Component {
    render() {
        return(
            <div>
                <h1 className="page-title">Events</h1>
                <h2>Upcoming Events</h2>
                <section className="event">
                    <h3>April 2th, 2020</h3>
                    <img
                    
                    src="http://s3-media2.ak.yelpcdn.com/bphoto/8VY45nivSt-V2jM7Mnb8bw/l.jpg"
                    alt="apr2" width="535" height="400"
                    />
                    <h2 className="event-title">Book Signing</h2>
                    <p className="desc">Visit us at the Barnes and Nobles in MayFair Mall for a Book Signing! The amazing Rubie Mizell will be there along with
                        featured authors to sign your favorite books. Don't forget to stop by our Slime store to have messy, good fun with slime!
                    </p>
                </section>
                
                <h2>Past Events</h2>
                <section className="event">
                <h3>December 8th, 2019</h3>
                <img
                
                src="https://static.wixstatic.com/media/c1688e_393174198bc64558b9eeae1647ccf4b1~mv2_d_8450_11375_s_4_2.jpg/v1/fill/w_600,h_808,al_c,q_85,usm_0.66_1.00_0.01/FLYER.webp"
                alt="dec8" width="600" height="808"
                />
                <h2 className="event-title">Meet And Greet</h2>
                <p className="desc">Come meet with our talented authors, creators of the wonderful books: Tyla Loves Being Brown and Ricky Overcomes Fear. Chat with local authors and
                    help young children discover their passion for reading. For a small fee, you can grab a plate of deliciously home-cooked after you've reemerged
                    the reading advernture that awaits.
                </p>
                </section>

                <section className="event">
                <h3>March 17th, 2019</h3>
                <img
                
                src="https://s3-media0.fl.yelpcdn.com/bphoto/RMfI118_kCWXQQeOifo8hA/o.jpg"
                alt="dec8" width="600" height="808"
                />
                <h2 className="event-title">Grand Opening</h2>
                <p className="desc">Fans, we are proud to announce the Grand Opening of Tyla Grace World of Slime And Fun! This brand new addition to Mayfair Mall
                    will be a hub to our wonderful company as a whole that your children will love. With fun activities such as slime molding,
                     and sculpturing, your kids will be begging you to take them back. Come visit us at our new address:
                     2500 N Mayfair Rd, Milwaukee, WI 53226
                     (414) 253-3033
                </p>
                </section>
            </div>
        )
    }
}

export default Events;