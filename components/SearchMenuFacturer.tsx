"use client";
import { SearchMenuFacturerProps } from "@/types";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import { logoMiniCar } from "@/public/images";
import { useState, Fragment } from "react";
import { menufacturers } from "@/contants";

function SearchMenuFacturer({
  selected,
  setSelected,
}: SearchMenuFacturerProps) {
  const [query, setQuery] = useState("");
  const filteredMenuFacturers =
    query === ""
      ? menufacturers
      : menufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="search-menufacturer">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              alt="Car Logo Mini"
              src={logoMiniCar}
              width={20}
              height={20}
              className="ml-4"
            />
          </Combobox.Button>

          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            displayValue={(menuFacturer: string) => menuFacturer}
            onChange={(e) => setQuery(e.target.value)}
          ></Combobox.Input>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options>
              {filteredMenuFacturers.map((item) => (
                <Combobox.Option
                  key={item}
                  className={({ active }) => `
                                relative search-manufacturer__option ${
                                  active
                                    ? "bg-primary-blue text-white"
                                    : "text-gray-900"
                                }`}
                  value={item}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {item}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? "text-white" : "text-pribg-primary-purple"
                          }`}
                        >
                          {/* Some content for the selected state */}
                        </span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}

export default SearchMenuFacturer;
