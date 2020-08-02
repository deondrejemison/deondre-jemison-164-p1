import React, { Component } from 'react';
//import { Switch, Route, Link} from 'react-router-dom';
//import nature from '../images/nature-background.jpg'


class FAQ extends Component {
    render() {
        return(
            <div className="faq-container"  >
                <h1 className="faq-title">Frequently Asked Questions</h1>
                <ul>
                    <li>
                        <h3 className="question">How do you order books?</h3>
                        <p className="answer">We don't handle delivery directly ourselves.
                            External comapnies such as Ebay and Amazon handle our our orders.
                             An account is required on either of those sites.
                              You can Sign in through 
                             <a href="https://www.amazon.com/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2F%3Fref_%3Dnav_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&"
                              target="_blank" rel="noreferrer noopener"> Amazon </a>
                              and
                              <a href="https://reg.ebay.com/reg/PartialReg?ru=https%3A%2F%2Fwww.ebay.com%2F"
                              target="_blank" rel="noreferrer noopener"> Ebay</a> here</p>
                    </li>
                    <li>
                        <h3 className="question">Is there a way to contact you?</h3>
                        <p className="answer">Yes, by clicking the contact tab at either the top or bottom of the page. For obvious
                         reasons, I will not give out the contact information of anyone or any entity displayed on TylaGrace.com.</p>
                    </li>
                    <li>
                        <h3 className="question">The search bar/form isn't working.</h3>
                        <p className="answer">As time goes on, we will continue to add more content and change features. The
                            search function will be available once we finish updating the website. Check back in the future
                             to see what's new.
                        </p>
                    </li>
        </ul>
            <img className="faq-img" src="https://th.bing.com/th/id/OIP.ZV9sqxmHjkdJq92da7HcogHaE8?w=266&h=177&c=7&o=5&pid=1.7"
                        alt="DBZ1" />
            </div>
        )
    }
}

export default FAQ;