import React from 'react';
import Rainbow from '../hoc/Rainbow';

function About() {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint omnis
        dignissimos doloremque soluta laboriosam tempore numquam quod voluptatem
        earum? Expedita illum saepe est voluptates explicabo.
      </p>
    </div>
  );
}

export default Rainbow(About);
