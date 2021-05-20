import React from 'react';

function UploadForm({titleSet, ageSet, emailSet, passwordSet, upload}) {




    return (
        <div className="uploadForm">
            <input type="text" onChange={(e) => titleSet(e.target.value)} placeholder="Vartotojo vardas"/>
            <input type="text" onChange={(e) => ageSet(e.target.value)} placeholder="Vartotojo amžius"/>
            <button>Pridėti vartoto amžiu</button>
            <input type="text" onChange={(e) => emailSet(e.target.value)} placeholder="Vartotojo paštas"/>
            <button>Pridėti vartoto el.paštą</button>
            <input type="text" onChange={(e) => passwordSet(e.target.value)} placeholder="Vartotojo slaptažodis"/>
            <button>Pridėti vartoto slaptažodį</button>

            <div className="largeButton" onClick={upload}>Pridėti vartotoją</div>
        </div>
    );
}

export default UploadForm;