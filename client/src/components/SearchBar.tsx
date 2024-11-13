import { useRef } from "react";
import searchIcon from "/src/assets/icons/searchIcon.png";
import "/src/style/SearchBar.css";

interface SearchBarProps {
  setCity: (value: string) => void;
}

export default function SearchBar({ setCity }: SearchBarProps) {
  const inputRef = useRef<null | HTMLInputElement>(null);
  /* 💡 useRef() hook instead of querySelector. 📖 DOC => https://react.dev/reference/react/useRef */

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (inputRef?.current) {
          const value = inputRef.current.value;
          if (value && value.trim().length > 2) {
            setCity(value);
            inputRef.current.value = "";
          }
        }
      }}
    >
      <input
        ref={inputRef}
        type="text"
        id="city-input"
        placeholder="Search a city ..."
      />
      <button className="button-search" type="submit">
        <img className="search-icon" src={searchIcon} alt="" />
      </button>
    </form>
  );
}
