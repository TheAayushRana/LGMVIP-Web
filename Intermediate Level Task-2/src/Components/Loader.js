import React from 'react';
import loading from "../loading.gif"

export default function Loader() {
  return <div  className='container d-flex justify-content-center'>
      <img src={loading} alt=''></img>
  </div>;
}
