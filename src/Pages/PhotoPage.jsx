import { useEffect, useState } from 'react';
import Photo from '../Projects/Photo/Photo';

function PhotoPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [photos, setPhotos] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const categories = [
    { "name": "All" },
    { "name": "Sea" },
    { "name": "Mountains" },
    { "name": "Architecture" },
    { "name": "Cities" }
  ];

  useEffect(() => {
    setIsLoading(true);
    const categories = categoryId ? `category=${categoryId}` : '';

    fetch(`https://659c82a3633f9aee7907af2a.mockapi.io/collection/photos?page=${page}&limit=3&${categories}`)
    .then(res => res.json())
    .then(json => {
      setPhotos(json);
    })
    .catch(err => {
      console.warn(err)
    })
    .finally(() => setIsLoading(false))
  }, [categoryId, page])


  return (
    <div className="Photo">
      <h1>My photo collection</h1>
      <div className='top'>
        <ul className='top__list'>
          {categories.map((obj, idx) => 
            <li 
              onClick={() => setCategoryId(idx)} 
              className={categoryId === idx ? 'active' : ''} 
              key={idx}
            >
              {obj.name}
            </li>
            )
          }
        </ul>
        <input 
          onChange={e => setSearch(e.target.value)} 
          value={search} 
          className='top__search' 
          placeholder='Search for name'
        />
      </div>
      <div className='content'>
        { isLoading 
          ? <h2>Loading...</h2>
          : photos
            .filter(obj =>  obj.name.toLowerCase().includes(search.toLowerCase()))
            .map((obj, idx) => 
                <Photo 
                key={idx}
                name={obj.name}
                images={obj.photos}
              />
            )
        } 
      </div>
        <ul className='pagination'>
          {
            [...Array(3)].map((_, idx) => 
              <li 
                className={page === idx + 1 ? 'active' : ''} 
                onClick={() => setPage(idx + 1)} 
                key={idx}
              >
                {idx + 1}
              </li>
            )
          }
        </ul>
    </div>
  );
}

export default PhotoPage;