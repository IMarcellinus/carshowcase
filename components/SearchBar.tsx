"use client";
import { iconModel, magnifyingGlass } from "@/public/images";
import { SearchMenuFacturer } from ".";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { menufacturers } from "@/contants";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src={magnifyingGlass}
      alt="maginifying glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

const SearchBar = ({setManufacturer, setModel }) => {
  const [searchMenuFacturer, setSearchMenuFacturer] = useState("");
  const [searchModel, setSearchModel] = useState("");
  const router = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchMenuFacturer === "" && searchModel === "") {
      return alert("Please fill in the search bar");
    }

    setModel(searchModel);
    setManufacturer(searchMenuFacturer);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchMenuFacturer
          selected={searchMenuFacturer}
          setSelected={setSearchMenuFacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src={iconModel}
          alt="car model icon"
          className="absolute w-[20px] h-[20px] ml-4"
          width={25}
          height={25}
        />
        <input
          type="text"
          name="model"
          value={searchModel}
          onChange={(e) => setSearchModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
}

export default SearchBar;
