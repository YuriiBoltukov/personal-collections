import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function SearchComponent() {
  const [search, setSearch] = useState('');
  const history = useNavigate();

  const handleSearch = () => {
    history(`/searchResult`);
  };

  const handleChange = (value: string) => {
    setSearch(value);
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="SearchComponent"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        value={search}
        onChange={({ target: { value } }) => handleChange(value)}
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={handleSearch}
        >
          SearchComponent
        </button>
      </div>
    </div>
  );
}
