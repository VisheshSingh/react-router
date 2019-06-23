import React from 'react';

export default function Rainbow(WrappedComponent) {
  const colors = ['red', 'green', 'brown', 'purple', 'pink', 'blue'];
  const randomColor = colors[Math.floor(Math.random() * 5)];
  const className = randomColor + '-text darken-2';
  return props => {
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    );
  };
}
