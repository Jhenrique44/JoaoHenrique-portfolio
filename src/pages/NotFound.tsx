import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const NotFound = () => { 
    const location = useLocation();

    useEffect(() => { 
        console.error(
            "404 Not Found: No route found for " + location.pathname
        );
    }, [location. pathname]);

    return(
        <div className="">
            <div className="">
                <h1>404</h1>
                <p>Ops! Page not found</p>
                <a href="/">Return Home</a>
            </div>
        </div>
    )
}
