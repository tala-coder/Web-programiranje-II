import React from 'react'
import { useState } from 'react';

// https://www.agirl.codes/complete-guide-build-react-forms-with-usestate-hook

const DodajUredaj = ({ addUredaj }) => {
    const [uredaj, setUredaj] = useState({
        naziv: '',
        cijena: '',
        mobitel: true,
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        addUredaj(uredaj)
        setUredaj({
            naziv: '',
            cijena: '',
            mobitel: true
        });
    };

    return (

        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div>
                    <h3>Add Form</h3>
                </div>
                <div>
                    <input
                        type="text"
                        name="naziv"
                        placeholder="naziv"
                        value={uredaj.naziv}
                        onChange={(e) => setUredaj({ ...uredaj, [e.target.name]: e.target.value })}
                    // onChange={(event)=>this.handleChange(event)}
                    />
                </div> 
                <div>
                    <input
                        type="number"
                        name="cijena"
                        placeholder="cijena"
                        value={uredaj.cijena}
                        onChange={(e) => setUredaj({ ...uredaj, [e.target.name]: e.target.value })}
                    />
                </div> 
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default DodajUredaj