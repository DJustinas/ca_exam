import React from 'react';

function UploadPreview({title, age, email, password}) {
    return (
        <div>
            <h3>{title}</h3>
            <div>
                {age}
            </div>
            <div>
                {email}
            </div>
            <div>
                {password}
            </div>
        </div>

    );
}

export default UploadPreview;