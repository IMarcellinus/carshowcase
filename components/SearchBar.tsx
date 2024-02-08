"use client";
import { iconModel, magnifyingGlass } from "@/public/images";
import { SearchMenuFacturer } from ".";
import { useState } from "react";
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { menufacturers } from "@/contants";

const SearchButton = ({otherClasses} : {otherClasses:string}) => (
    <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
        <Image src={magnifyingGlass} alt="maginifying glass" width={40} height={40} className="object-contain" />
    </button>
)

function SearchBar() {
    const [menuFacturer, setMenuFacturer] = useState('');
    const [model, setModel] = useState('');
    const router = useRouter();
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(menuFacturer === '' && model === ''){
            return alert('Please fill in the search bar')
        }

        updateSearchParams(model.toLowerCase(), menuFacturer.toLowerCase());
    }

    const updateSearchParams = (model: string, menufacturer: string) => {
        const searchParams = new URLSearchParams(window.location.search);
        if(model) {
            searchParams.set('model', model)
        } else {
            searchParams.delete('model')
        }
        if(menufacturer) {
            searchParams.set('menufacturer', menufacturer)
        } else {
            searchParams.delete('menufacturer')
        }
        const newPathName = `${window.location.pathname}?${searchParams.toString()}`
        router.push(newPathName);
    }
    
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchMenuFacturer
          menuFacturer={menuFacturer}
          setMenuFacturer={setMenuFacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image src={iconModel} alt="car model icon" className="absolute w-[20px] h-[20px] ml-4" width={25} height={25} />
        <input type="text" name="model" value={model} onChange={(e) => setModel(e.target.value)} placeholder="Tiguan" className="searchbar__input" />
        <SearchButton otherClasses="sm:hidden" />
      </div>
        <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
}

export default SearchBar