import React from 'react';
import {Link} from 'react-router-dom';

function Page404() {
    return (
        <div>
            <Link to="/">Home</Link>
            <h1>Nu exista pagina cautata!</h1>
        </div>
    )
}

export default Page404
