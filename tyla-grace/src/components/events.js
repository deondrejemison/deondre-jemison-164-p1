import React, { Component } from 'react';

class Events extends Component {
    render() {
        return(
            <div className="events-container">
                <h1 className="event-title">Activities</h1>
                <h2 className="event-header">Upcoming Events</h2>
                <article className="event">
                    <h3>April 2th, 2020</h3>
                    <img
                    
                    src="http://s3-media2.ak.yelpcdn.com/bphoto/8VY45nivSt-V2jM7Mnb8bw/l.jpg"
                    alt="apr2" width="535" height="400"
                    />
                    <h2 className="activity-title">Book Signing</h2>
                    <p className="desc">Visit us at the Barnes and Nobles in MayFair Mall for a Book Signing! The amazing Rubie Mizell will be there along with
                        featured authors to sign your favorite books. Don't forget to stop by our Slime store to have messy, good fun with slime!
                    </p>
                </article>
                
                <h2 className="event-header">Past Events</h2>
                <article className="event">
                <h3>December 8th, 2019</h3>
                <img
                
                src="https://static.wixstatic.com/media/c1688e_393174198bc64558b9eeae1647ccf4b1~mv2_d_8450_11375_s_4_2.jpg/v1/fill/w_600,h_808,al_c,q_85,usm_0.66_1.00_0.01/FLYER.webp"
                alt="dec8" width="600" height="808"
                />
                <h2 className="activity-title">Meet And Greet</h2>
                <p className="desc">Come meet with our talented authors, creators of the wonderful books: Tyla Loves Being Brown and Ricky Overcomes Fear. Chat with local authors and
                    help young children discover their passion for reading. For a small fee, you can grab a plate of deliciously home-cooked food after you've reemerged from
                    the reading advernture that awaits.
                </p>
                </article>

                <article className="event">
                <h3>November 20th, 2019</h3>
                <img
                
                src="https://lh3.googleusercontent.com/sluSpQEdo9wN4dNO2RBxHlnfMTnGe-Gzk8KHCvBsvQNMefIbcS7Ej9PbXIbkNr-G8VPS_hKYyypPy26ZtlfXbr8py-1bSV1pfi5UTthvaeNNP9LFSU_pjkqMYz4D_mNXb4UPOe0cJKMH8-JlmYzJp9wpJ8qxUhhDw-yiYh5JKSxXYEDkphtN9IiMUtqe05A2OZc4L7Vp8yGo3J2LcaPJH5YgTrzbta-f6EYtVU3d4wF0Joa9XkZOB0qDnA-0yO4ovtyf5FYqLUka88w-rcO0hnWd1W7mXH-Pcgf9TUjNEFE4BKUmjOSS4f-DxkNA1R8mDqI7rPWRF7rYEyymMGLr43R9T92xyW1fHcZJhVV39wP0qOGN-wAzipjJRAnit0WFc1z0POXvfDZ5R90P7so8HNcJFxhfYOmnCGZik7sj0cMhrOboNcoHj7qNsQOBJQhZTMHX6M_PG1R-U1GZBcpCl5Ql6PwfXkH3rvTmyXjAS8vRuDa8F1lhvUql-OqgCVydPd-GFdb5hm-gkh6mNvXBtR-xY--g3Zi1jPVQcscBzNmDlDCpR-qN_Ryoikp40Wt7UxIEKvNE5PgbesvCF0dnM45UTgYTFTJY_50eYea4rSVO-JCtlM2vvquSTC1eoXs3s9T1ts0OQ2ZzKuLitRG7iDF9d5KYNKzZ9BG1F-zynMWG_RCHNfoC8HT72n0=w443-h625-no?authuser=0"
                alt="nov20" width="600" height="808"
                />
                <h2 className="activity-title">#BlackLivesMatter</h2>
                <p className="desc">This day we discuss the problems the black community face such as police brutality and
                 gang violence. We will dissect the situations that plague our young men and women and explore solutionns
                  so that our children can be safe when going about their lives.
                </p>
                </article>

                <article className="event">
                <h3>March 17th, 2019</h3>
                <img
                
                src="https://s3-media0.fl.yelpcdn.com/bphoto/RMfI118_kCWXQQeOifo8hA/o.jpg"
                alt="dec8" width="600" height="808"
                />
                <h2 className="activity-title">Grand Opening</h2>
                <p className="desc">Fans, we are proud to announce the Grand Opening of Tyla Grace World of Slime And Fun! This brand new addition to Mayfair Mall
                    will be a hub to our wonderful company as a whole that your children will love. With fun activities such as slime molding,
                     and sculpturing, your kids will be begging you to take them back. Come visit us at our new address:
                     2500 N Mayfair Rd, Milwaukee, WI 53226
                     (414) 253-3033
                </p>
                </article>
            </div>
        )
    }
}

export default Events;