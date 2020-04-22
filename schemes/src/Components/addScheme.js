import React, {useState} from 'react';
import axios from 'axios';

function AddScheme() {
    const [scheme, setScheme] = useState('');

    const handleScheme = e => {
        setScheme(e.target.value)
    }
    
    function submitData() {
        axios
            .put('https://arw-node-db3-project.herokuapp.com/api/schemes', {
                scheme_name: scheme
            })
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={submitData}>
                <input
                    type='text'
                    name='scheme'
                    value={scheme}
                    onChange={handleScheme}
                />
                <button>Submit</button>
            </form>
        </div>
    )
    
}

export default AddScheme;