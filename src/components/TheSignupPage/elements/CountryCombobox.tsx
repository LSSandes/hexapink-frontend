import React, { useState } from "react";
import { Combobox } from "@headlessui/react";
import { ChevronDownIcon, CheckIcon } from "@heroicons/react/20/solid";
import { countries } from "countries-list"; // Importing the countries object

interface Country {
  id: number;
  name: string;
}

interface CountryData {
  name: string;
  // Add other properties if needed
}

// Convert countries object to an array of countries
const countryArray: Country[] = Object.keys(countries).map((key, index) => {
  const country = countries[key as keyof typeof countries] as CountryData;
  return {
    id: index + 1,
    name: country.name,
  };
});

const CountryCombobox = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(
    countryArray[0]
  );
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const filteredCountries =
    query === ""
      ? countryArray
      : countryArray.filter((country) =>
          country.name.toLowerCase().includes(query.toLowerCase())
        );

  return (
    <Combobox
      as="div"
      value={selectedCountry}
      onChange={(country: Country) => {
        setQuery("");
        setSelectedCountry(country);
        setIsOpen(false); 
      }}
    >
      <label
        className={`block text-sm font-[raleway-semibold] ${
          isOpen ? "text-pink-500" : "text-gray-900"
        }`}
      >
        COUNTRY *
      </label>
      <div className="relative mt-2">
        <Combobox.Input
          className="peer block w-[300px] font-[raleway-medium] bg-transparent py-1.5 pl-3 pr-12 text-base text-gray-900 placeholder:text-gray-400 border-b-2 border-gray-300 focus:border-pink-500 focus:outline-none sm:text-sm"
          onChange={(event) => setQuery(event.target.value)}
          onBlur={() => setQuery("")}
          displayValue={(country: Country) => country?.name}
        />
        <Combobox.Button
          className="absolute inset-y-0 right-0 flex items-center px-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <ChevronDownIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Combobox.Button>

        {filteredCountries.length > 0 && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
            {filteredCountries.map((country) => (
              <Combobox.Option
                key={country.id}
                value={country}
                className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-pink-500 data-[focus]:text-white data-[focus]:outline-none"
              >
                <span className="block font-[raleway-medium] truncate group-data-[selected]:font-[raleway-semibold]">
                  {country.name}
                </span>

                <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-pink-500 group-data-[selected]:flex group-data-[focus]:text-white">
                  <CheckIcon className="h-5 w-5" aria-hidden="true" />
                </span>
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  );
}

export default CountryCombobox;