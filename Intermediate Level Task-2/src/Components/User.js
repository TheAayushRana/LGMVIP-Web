import React from 'react'
import './Home.css'

export default function User(props) {
    return (
        <>
        <div className="card text-white bg-dark mb-3 align-items-center">
            <img src={`https://reqres.in/img/faces/${props.id}-image.jpg`} className="card-img" alt={props.firstname} />
            <div className="card-body text-center">
            <h5 className="card-title">{props.firstname} {props.lastname}</h5>
            <p className="card-text">{props.email}</p>
            </div>
        </div>

        </>
    )
}
