import React from 'react'
import { useState } from 'react';

// https://www.agirl.codes/complete-guide-build-react-forms-with-usestate-hook

const DodajAuto = ({addCar}) => {
    const [auto, setAuto] = useState({
        boja: "",
        dodatna_oprema: "",
        kolicina: "",
        naziv: "",
        tip: "",
    }); 

    const handleSubmit = (event) => {
        event.preventDefault();
        addCar(auto)
        setAuto({ boja: "", dodatna_oprema: "", kolicina: "", naziv: "", tip: "" });
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
                        name="boja"
                        placeholder="boja"
                        value={auto.boja}
                        onChange={(e) =>  setAuto({ ...auto, [e.target.name]: e.target.value })}
                        // onChange={(event)=>this.handleChange(event)}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="dodatna_oprema"
                        placeholder="dodatna oprema"
                        value={auto.dodatna_oprema}
                        onChange={(e) =>  setAuto({ ...auto, [e.target.name]: e.target.value })}
                    />
                </div>
                <div>
                    <input
                        type="number"
                        name="kolicina"
                        placeholder="Kolicina"
                        value={auto.kolicina}
                        onChange={(e) =>  setAuto({ ...auto, [e.target.name]: e.target.value })}
                    />
                </div>
                <div>
                    <input
                        type="naziv"
                        name="naziv"
                        placeholder="naziv"
                        value={auto.naziv}
                        onChange={(e) =>  setAuto({ ...auto, [e.target.name]: e.target.value })}
                    />
                </div>
                <div>
                    <input
                        type="tip"
                        name="tip"
                        placeholder="tip"
                        value={auto.tip}
                        onChange={(e) =>  setAuto({ ...auto, [e.target.name]: e.target.value })}
                    />
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default DodajAuto