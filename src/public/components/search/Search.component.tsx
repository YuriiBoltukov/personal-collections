import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Search from 'antd/es/input/Search';

export function SearchComponent() {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  const history = useNavigate();

  const handleSearch = () => {
    history(`/searchResult`);
  };

  const handleChange = (value: string) => {
    setLoading(true);
    setTimeout(() => {
      setSearch(value);
      console.log('pppp', search);

      handleSearch();
    }, 3000);
  };

  return (
    <Search
      placeholder="input search text"
      enterButton="Search"
      size="large"
      loading={loading}
      onSearch={value => handleChange(value)}
    />
  );
}
