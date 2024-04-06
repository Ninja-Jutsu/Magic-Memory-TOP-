import React from 'react';

function Section({ label, children }) {
  const headerTitle = label !== undefined && label.toUpperCase();
  return (
    <section className={`section-wrapper`}>
      <h1 className='section-title'>{headerTitle}</h1>
      {children}
    </section>
  );
}

export default Section;
