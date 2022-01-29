import React, { useState} from 'react'
import "./Home.css"
import Users from './Users';

export default function Navbar() {

    const [userdata, setUserdata ] = useState([]);
    const [Loading, setLoading ] = useState(true);
    const [btnText, setBtnText] = useState("Get Users");
    const [page, setPage] = useState(1);

    const fetchUsers = async () => {
        const url = `https://reqres.in/api/users?page=${page}`;
        setLoading(false);
        let data = await fetch(url);
        let parsedData = await data.json();
        setUserdata(parsedData.data)
        setBtnText("Hide Users");
    };
    const updateNextPage = () => {
        setPage(page + 1);
        fetchUsers();
      };
    
      const updatePreviousPage = () => {
        setPage(page - 1);
        fetchUsers();
      };

    return (
        <>
            <div className="navbar">
                <div className='left'>
                    <a href="/"><h1>FetchUserApp</h1></a>
                </div>
                <div className='right'>
                    <button onClick={fetchUsers}>{btnText}</button>
                </div>
            </div>
            <Users userdata={userdata} loading={Loading} nextpage={updateNextPage} prevpage={updatePreviousPage}/>
        </>
    )
}
