import React from 'react';

const NoiseOverlay: React.FC = () => {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <div className="scanlines" aria-hidden="true" />
    </>
  );
};

export default NoiseOverlay;
