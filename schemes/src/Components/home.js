import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

function Home() {
    const [schemes, setSchemes] = useState([]);

    useEffect(() => {
        function fetchData() {
            axios
                .get('https://arw-node-db3-project.herokuapp.com/api/schemes')
                .then(res => {
                    console.log(res.data);
                    setSchemes(res.data)
                })
                .catch(err => console.log(err))
        }
        fetchData();
    },[]);

    return(
        <div>
            <h1>Schemes Home Page</h1>
            <Link to='/addScheme'>
                <button>Add Scheme</button>
            </Link>            
            {schemes.map(scheme => (
                <div key={scheme.id}>
                    <p>{scheme.scheme_name}</p>
                </div>
            ))}
        </div>
    )
}

export default Home;


