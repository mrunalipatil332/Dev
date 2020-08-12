import React, { Component } from 'react';
import { FaCocktail, FaHiking,  FaBeer, FaBicycle, } from "react-icons/fa";
import Title from './Title';
export default class Services extends Component {

    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "Free Cocktails",
                info:
                    "Fine drinks combined with good music make for just the perfect ending to your holiday days."
            },
            {
                icon: <FaHiking />,
                title: "Endless Hiking",
                info:
                    "A complimentary Woodie-style tram takes guests to the resort’s beautiful beach with its curving stretch of golden sand. It’s the perfect spot to try a body boarding lesson or stand-up paddleboarding (SUP) with a surf host."
            },
            {
                icon: <FaBicycle />,
                title: "Free Shuttle",
                info:
                    "Cycling is one of the best exercise as well as refreshing activity.connecting you with the nature. As the activity is adventurous by its nature you will enjoy it for sure."
            },
            {
                icon: <FaBeer />,
                title: "Strongest Beer",
                info:
                    "Fine drinks combined with good music make for just the perfect ending to your holiday days."
            }
        ]
    };

    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map(item => {
                        return (
                            <article key={`item-${item.title}`} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        );
                    })}
                </div>
            </section>
        );
    }
}