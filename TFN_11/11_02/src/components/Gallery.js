import React, { useContext } from 'react';

import GalleryItem from './GalleryItem.js';
import { MealesContext } from '../context/Meales.js';
import useFetch from "../hooks/useFetch";

export default function Gallery() {
  const { meales } = useContext(MealesContext);
  const { data, setData } = useFetch();

  return (
    <div className='container'>
      <input
        type="text"
        placeholder="Search meal by name"
        value={data.slug}
        onChange={(e) => setData({ ...data, slug: e.target.value })}
      />
      <select
        name="querylist"
        value={data.endpoint}
        defaultValue={'default'}
        onChange={(e) => setData({ ...data, endpoint: e.target.value })}
      >
        <option value="search.php?s">Search meal by names</option>
        <option value="filter.php?c">Filter by Category</option>
        <option value="filter.php?a">Filter by Area</option>
      </select>
      <div className='showcase'>
        {Array.isArray(meales)
          ? meales.map((value, i) => (
            <GalleryItem key={i} meal={value} />
          )) : null}
      </div>
    </div>
  );
}

  // const sortImagesByDate = () => {
  //   const sortedData = [...gallery].sort(
  //     (a, b) => new Date(b.date) - new Date(a.date)
  //   );
  //   updateGallery(sortedData);
  // };

  // const sortImagesByTitle = () => {
  //   const sortedData = [...gallery].sort((a, b) =>
  //     b.title.localeCompare(a.title)
  //   );
  //   updateGallery(sortedData);
  // };

  // const sortImagesByRandom = () => {
  //   const sortedData = [...gallery].sort(() => 0.5 - Math.random());
  //   updateGallery(sortedData);
  // };

  // const handleRemoveItem = (id) => {
  //   console.log(gallery);
  //   updateGallery((arr) => arr.filter((item) => item.id !== id));
  // };



