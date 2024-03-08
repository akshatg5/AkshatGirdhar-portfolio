import React from "react";
import { Link } from "react-router-dom";

export const LandingPage = () => {
    return (
        <div>
        <div className="flex" >
            <Link to="/youtubeClone" >
                <img src="/youtube-logo.jpg" className="w-20 h-20" />
                <button>Youtube Clone</button>
            </Link>
            <Link to="/dukaanAssignment" >
                <button>Dukaan Assignment</button>
            </Link>
        </div>
        </div>
    )
}