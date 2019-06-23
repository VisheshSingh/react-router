import React from 'react';

export default function Contact(props) {
  console.log(props);
  setTimeout(() => {
    props.history.push('/');
  }, 3000);
  return (
    <div className="container">
      <h4 className="center">Contact</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint omnis
        dignissimos doloremque soluta laboriosam tempore numquam quod voluptatem
        earum? Expedita illum saepe est voluptates explicabo.
      </p>
    </div>
  );
}
