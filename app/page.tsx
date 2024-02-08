'use client';
import { Hero, SearchBar, CustomFilter, CarCard, ShowMore } from '@/components';
import { yearsOfProduction, fuels } from '@/contants';
import { HomeProps } from '@/types';
import { fetchCars } from "@/utils";
import { useState,useEffect } from 'react';

export default function Home({searchParams}: HomeProps) {
  const [allCars, setAllCars] = useState([]);
  console.log(allCars)
  const [loading, setLoading] = useState(false);
  // search states
  const [manufacturer, setManufacturer] = useState("");  
  const [model, setModel] = useState("");  
  // filter states
  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState(2022);
  // pagination states
  const [limit, setLimit] = useState(10);

  const getCars = async () => {
    setLoading(true);
    try {
      const result = await fetchCars({
        manufacturer: manufacturer || "",
        year: year || 2022,
        fuel: fuel || "",
        limit: limit || 10,
        model: model || "",
      });
      setAllCars(result);
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false);
    }
  }
  
  useEffect(() => {
    getCars();
  }, [fuel, year, model, limit, manufacturer]);
  
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar setManufacturer={setManufacturer} setModel={setModel} />
          <div className="home__filter-container">
            <CustomFilter options={fuels} title="fuel" setFilter={setFuel} />
            <CustomFilter options={yearsOfProduction} title="year" setFilter={setYear} />
          </div>
        </div>

        {allCars.length > 0 ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car}/>
              ))}
            </div>
            <ShowMore
              pageNumber={limit / 10}
              isNext={limit > allCars.length}
              setLimit={setLimit}
            />
          </section>
        ) : (
          <div>
            <h2 className="text-black text-xl font-bold">gak ada mobil</h2>
          </div>
        )}
      </div>
    </main>
  );
}
