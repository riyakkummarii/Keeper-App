import React from "react";

function Footer(){
    const d=new Date();
    const currentYear=d.getFullYear();
    return (<footer><p>Copyright <span>&#169;</span> {currentYear}</p></footer>)
}
export default Footer;