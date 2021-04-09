import React from 'react';
import {Link} from "react-router-dom";
import {ROUTES} from "../../../../routes/routesNames";

const HomePageLayout = () => {
    return (
        <div>
            <h1>Home page</h1>
            <Link to={ROUTES.COUNTER_PAGE}>
                <button>Go to counter page</button>
            </Link>
        </div>


    );
};

export default HomePageLayout;