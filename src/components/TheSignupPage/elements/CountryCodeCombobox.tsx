import React, { useState, useEffect } from "react";
import { Combobox } from "@headlessui/react";
import { ChevronDownIcon, CheckIcon } from "@heroicons/react/20/solid";
import { countries } from "countries-list";

interface Country {
  id: number;
  name: string;
  code: string;
  phone: string;
}

const countryArray: Country[] = Object.entries(countries).map(
  ([code, country], index) => ({
    id: index + 1,
    name: country.name,
    code: code,
    phone: country.phone.join(", "),
  })
);

interface CountryCodeComboboxProps {
  countryName: string;
}

export default function CountryCodeCombobox({ countryName }: CountryCodeComboboxProps) {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const country = countryArray.find(c => c.name.toLowerCase() === countryName.toLowerCase());
    if (country) {
      setSelectedCountry(country);
    }
  }, [countryName]);

  const filteredCountries =
    query === ""
      ? countryArray
      : countryArray.filter(
          (country) =>
            country.name.toLowerCase().includes(query.toLowerCase()) ||
            country.phone.includes(query) ||
            country.code.toLowerCase().includes(query.toLowerCase())
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
        PHONE *
      </label>
      <div className="flex justify-center items-bottom">
        <div className="relative mt-2">
          <Combobox.Input
            className="peer block w-[100px] font-[raleway-medium] bg-transparent py-1.5 pl-3 pr-12 text-base text-gray-900 placeholder:text-gray-400 border-b-2 border-gray-300 focus:border-pink-500 focus:outline-none sm:text-sm"
            onChange={(event) => setQuery(event.target.value)}
            onBlur={() => setQuery("")}
            displayValue={(country: Country) =>
              country ? `+${country.phone}` : ""
            }
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
                    +{country.phone}
                  </span>

                  <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-pink-500 group-data-[selected]:flex group-data-[focus]:text-white">
                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                </Combobox.Option>
              ))}
            </Combobox.Options>
          )}
        </div>
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
            }
          }}
          className="block w-[200px] border-gray-300 text-[15px] font-[raleway-medium] border-b focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none p-0 m-0 leading-none align-bottom"
        />
      </div>
    </Combobox>
  );
}
