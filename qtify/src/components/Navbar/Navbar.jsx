import React from "react";
import styles from "./Navbar.module.css"
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import SearchBar from "../SearchBar/SearchBar";

const Navbar  = () => {
    return(
        <>
        <nav className={styles.navbar}>
            <Logo/>
            <SearchBar search = "search a song of your choice" />
            <Button children = {"GiveFeedback"} />
        </nav>
        </>
    );

}

export default Navbar;


