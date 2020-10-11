import React, { Component } from 'react';
import "./listcard.css"
import { Link } from "react-router-dom"
import { connect } from "react-redux"

class Listcard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            memberBootcamp: [
                {foto: "https://media-exp1.licdn.com/dms/image/C5103AQEHNSw5h-XKyQ/profile-displayphoto-shrink_400_400/0?e=1604534400&v=beta&t=q3mdmY5CS8fDIiY3eofXj1bAfJfpHROXfy_j_qAIqwo",
                nama: "Jason Rich Darmawan Onggo Putra",
                quotes: "1. Focus on testing the MVP, everything else can wait 2. Learn from the mistakes.",
                github: "https://github.com/kidfrom"}
                ,
                {foto: "https://bc3-production-assets-cdn.basecamp-static.com/3969846/people/30316027/avatars/avatar-0114179c9e592fa2088f97feceec41e6-128-x1",
                nama: "Fawwaazrahman Arandhana",
                quotes: "Beraki-rakit dahulu berakit-rakit kemudian, bersakit-sakit dahulu bersakit-sakit kemudian.",
                github: "https://github.com/fwzfwz"}
                ,
                {foto: "https://avatars0.githubusercontent.com/u/57663851?s=460&u=7bd2cabb95e920ea9cc3bea599b9f9baff618e9f&v=4",
                nama: "Aisah Taufik Hidayat Abdullah",
                quotes: "Do good and good will come to you",
                github: "https://github.com/athaisyah"}
                ,
                {foto: "https://i.ibb.co/JnZrPVP/Whats-App-Image-2020-03-23-at-09-15-17.jpg",
                nama: "Fauzan Muhtadi",
                quotes: "Today must better than yesterday",
                github: "https://github.com/fauzanmuhtadi"}
                ,
                {foto: "https://docplayer.info/docs-images/70/63667256/images/40-0.jpg",
                nama: "Rifqi Fakhirin",
                quotes: "Being good is about how to combine consistency and integrity",
                github: "https://github.com/rifqifakhirin"}
                ,
                {foto: "https://i.ibb.co/kQMJF86/DSC-7410.jpg",
                nama: "Ryan Suryohadiprojo S",
                quotes: "ASK! Attitude, Skill and Knowledge",
                github: "https://github.com/RYANSUTODIWIRYO"}
                ,
                {foto: "https://i.ibb.co/yFkZY5y/photoku.jpg",
                nama: "Ahmad Nabil",
                quotes: "Seharusnya kamu belajar berjalan dulu, nak! Barulah kamu bisa berlari.",
                github: "https://github.com/nbl77"},
            ]                             
        }
    }
     
    render() {
        const { memberBootcamp } = this.state
        const { dataMember } = this.props.dataMember
        return (
            <div className="listcard">
                {
                    memberBootcamp.map((val) => {
                        return (
                            <div className="unitcard">
                                <img src={val.foto} />
                                <div className="container-card">
                                    <h4><b>{val.nama}</b></h4> 
                                    <p>{val.quotes}</p>
                                    <Link to={val.github}>
                                        <button>Go to my Github</button>
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
                {
                    dataMember.map((val, idx) => {
                        return (
                            <div className="unitcard" key={idx}>
                                <img src={val.foto} />
                                <div className="container-card">
                                    <h4><b>{val.nama}</b></h4> 
                                    <p>{val.quotes}</p>
                                    <Link to={val.github}>
                                        <button>Go to my Github</button>
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
                
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    dataMember: state.auth2.dataMember
})

export default connect(mapStateToProps)(Listcard);
