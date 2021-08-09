import React from "react";
import search from "../../images/search.png";

export default function SearchInput() {
    return <div className="search-container">
        <form>
            <label htmlFor="search"></label>
            <button type="submit"><img src={search} /></button>
            <input type="text" id="search" placeholder="Search" name="search" />
        </form>
    </div>
}
