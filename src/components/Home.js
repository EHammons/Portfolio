import React, { Component } from "react";
import "../styles/Home.css";
import Headshot from "../assets/images/Headshot.jpg";

class Home extends Component {
    state={
    };

    render () {
        return (
            <div className="container">
                <h1>About Me</h1>
                <figure className="image auth-image">
                    <img className="is-square" src={Headshot} alt="Elise Hammons Headshot" />
                </figure>
                <p>
                    Originally from New Jersey, I moved to Texas in 2015.
                    My father was born here, so I have a lot of family in the area.
                    Being the aunt of 7 kids (and counting!) being around for family events has been a blessing.
                    Coming from an area with a cold, dark winter that lasts too long, I prefer the heat by a vast majority.
                    "Up north, you spend winter inside because it's too cold to go out. In the south, you spend summer inside because it's too hot to go out. The difference is you don't have to shovel sunshine." - My (very wise) mother.
                </p>
                <p>
                    For 10 years, I have worked as a Graphic Designer for two different companies. Both focused more on technical, standards-driven design rather than the creative, client-driven design found in most Graphic Design jobs.
                    Unfortunately, this translates to most Graphic Design jobs who don't like my portfolio.
                    I've always liked coding. I wrote programs on my TI-83 calculator in high school, used HTML to make my myspace page include gifs and pictures in the main section, and my favorite design class was Flash.
                    I even created my original website completely in Flash because I loved the coding.
                    Of course, Flash is no longer used at all and has been phased out of everything.
                </p>
            </div>
        );
    }
}

export default Home;
