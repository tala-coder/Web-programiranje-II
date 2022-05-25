import React from 'react'

const PutovanjaCheckbox = ({ handleCheck }) => {
    return (
        <>
            <fieldset>
                <legend>Odaberi Tip Pametnog Uredaja:</legend> 

                <div>
                    <input type="checkbox" id="mobitel" name="mobitel"
                        onChange={(e) => handleCheck(e, 'mobitel')} />
                    <label htmlFor="mobitel">mobitel</label>
                </div>

                <div>
                    <input type="checkbox" id="frizider" name="frizider"
                        onChange={(e) => handleCheck(e, 'frizider')} />
                    <label htmlFor="frizider">frizider</label>
                </div>

                <div>
                    <input type="checkbox" id="sat" name="sat"
                        onChange={(e) => handleCheck(e, 'sat')} />
                    <label htmlFor="sat">sat</label>
                </div>

            </fieldset>
        </>
    )
}

export default PutovanjaCheckbox