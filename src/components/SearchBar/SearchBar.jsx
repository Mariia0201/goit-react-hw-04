import { useState } from "react";
import toast from "react-hot-toast";
import css from './SearchBar.module.css'

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState(""); 

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
       toast("Please fill in the search field.", {
        style: {
          border: "1px solid #713200",
          padding: "16px",
          color: "#713200",
        },
        iconTheme: {
          primary: "#713200",
          secondary: "#FFFAEE",
        },
      });
      return;
    }

    onSubmit(query);
    setQuery("");
  };


  return (
   <header>
  <form className={css.form} onSubmit={handleSubmit}>
    <input className={css.input}
      type="text"
      autoComplete="off"
      autoFocus
                  placeholder="Search images"
                  onChange={handleChange}
          value={query}
    />
    <button type="submit">Search</button>
  </form>
</header>

  )
}

export default SearchBar
