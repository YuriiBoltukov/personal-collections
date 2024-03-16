import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function Search() {
  const [search, setSearch] = useState('');
  const history = useNavigate();

  const handleSearch = () => {
    history(`/searchResult`);
  };

  const handleChange = event => {
    setSearch(event.target.value);
  };
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        value={search}
        onChange={handleChange}
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
}
