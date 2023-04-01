import React from 'react';

const GifGrid = ({ gifUrls }) => {
  return (
    <div>
      {gifUrls.map(url => (
        <img key={url} src={url} alt="" />
      ))}
    </div>
  );
};

export default GifGrid;