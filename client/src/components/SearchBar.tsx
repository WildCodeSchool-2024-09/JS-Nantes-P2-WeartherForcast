import { useRef } from "react";

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
      <label htmlFor="city-input">Enter a city</label>

      <input ref={inputRef} type="text" id="city-input" />
      <button type="submit">Chercher</button>
    </form>
  );
}
