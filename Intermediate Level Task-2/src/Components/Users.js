import React from 'react'
import Loader from './Loader';
import User from './User'

export default function Users(props) {
    const {userdata,loading,nextpage, prevpage} = props; 

    const Nextbtn = () =>{
        console.log("clicked next button");
        nextpage();
    }

    const Prevbtn = () =>{
        console.log("previous button click");
        prevpage();
    }

    return (
        <>
            <div className='row users-box m-5'>
            {loading && <Loader />}
            {userdata.map((element)=>{
                return <div className='col-md-4 gy-3' key={element.id}>
                    <User firstname={element.first_name} lastname={element.last_name} email={element.email} id={element.id}/>
                </div>
            })}
            </div>
            <div className='d-flex justify-content-around mb-5'>
            <button className='btn btn-primary' onClick={Prevbtn} >Previous</button>
            <button className='btn btn-primary' onClick={Nextbtn}>Next</button>
            </div>
        </>
    )
}

