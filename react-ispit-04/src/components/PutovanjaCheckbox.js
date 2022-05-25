import React from 'react'

const PutovanjaCheckbox = ({handleCheck}) => {
    return (
        <>
            <fieldset>
                <legend>Odaberi tip putovanja:</legend> 
                <div>
                    <input type="checkbox" id="proljetno" name="proljetno"
                           onChange={(e) => handleCheck(e, 'proljetno')}/>
                    <label htmlFor="proljetno">proljetno</label>
                </div>

                <div>
                    <input type="checkbox" id="ljetno" name="ljetno"
                           onChange={(e) => handleCheck(e, 'ljetno')}/>
                    <label htmlFor="ljetno">Ljetno</label>
                </div>

                <div>
                    <input type="checkbox" id="zimsko" name="zimsko"
                           onChange={(e) => handleCheck(e, 'zimsko')}/>
                    <label htmlFor="zimsko">Zimsko</label>
                </div>
            </fieldset>
        </>
    );
}

export default PutovanjaCheckbox