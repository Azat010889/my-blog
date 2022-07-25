import React from "react";
import AboutCard from "./AboutCard";
import PopularPost from "./PopularPost";
import Tags from "./Tags";

const IntroductionMenu = () => {

    return(
        <>
            {/* Introduction menu */}
            <div className="w3-col l4">
                <AboutCard/>
                <PopularPost/>
                <Tags/>
            </div>
        </>


    )
}
export default IntroductionMenu;