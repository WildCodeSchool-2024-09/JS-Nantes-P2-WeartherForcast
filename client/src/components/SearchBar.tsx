import { useRef } from "react";
import searchIcon from "/src/assets/icons/searchIcon.png";
import "/src/style/SearchBar.css";

interface SearchBarProps {
  setCity: (value: { cityUser: string }) => void;
}

export default function SearchBar({ setCity }: SearchBarProps) {
  const inputRef = useRef<null | HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (inputRef?.current) {
          const value = inputRef.current.value;
          if (value && value.trim().length > 2) {
            setCity({ cityUser: value });
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
      <button className="buttonSearch" type="submit">
        <img className="searchIcon" src={searchIcon} alt="" />
      </button>
    </form>
  );
}
