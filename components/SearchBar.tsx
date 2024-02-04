"use client";
import { SearchMenuFacturer } from ".";
import { useState } from "react";

function SearchBar() {
    const [menuFacturer, setMenuFacturer] = useState('');
    const handleSearch = () => {

    }
    
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchMenuFacturer
          menuFacturer={menuFacturer}
          setMenuFacturer={setMenuFacturer}
        />
      </div>
    </form>
  );
}

export default SearchBar