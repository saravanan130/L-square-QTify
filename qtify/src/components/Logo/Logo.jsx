import React from "react";
import LogoImg from "../../assets/logo.png"
import styles from "./Logo.module.css"

const Logo = () =>{
    return(
        <div className= {styles.logodiv}>
            <img src={LogoImg} alt="" className="src" />
        </div>
    )
}
export default Logo;