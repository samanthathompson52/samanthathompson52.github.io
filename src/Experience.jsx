import React, { useState } from 'react';
import work from './work.json';

const Experience = () => {
  const [selected, setSelected] = useState(work[0]);

  const workList = work.map((elm) => {
    const className = elm.id === selected.id ? 'selected' : '';
    return (
      <div key={elm.id} className={className}>
        <button type="button" className="btn click" onClick={() => { setSelected(elm); }}>
          <span>{elm.position}</span>
        </button>
      </div>
    );
  });

  const workBullets = selected.description.map((elm, key) => (
    <li key={`bullet${key}`}>
      {elm}
    </li>
  ));

  return (
    <div className="content h-screen">
      <div>
        <h1 className = "text-5xl bold mb-5">Experience</h1>
        <div>
          <div className="grid grid-cols-6">
            <div className="pr-5 col-span-2">
              {workList}
            </div>
        
          <div className="col-span-4">          
              <span className = "experience">{selected.position}</span>              
              <span className ="experience">
                 {' '}
               -
                {' '}{selected.company}</span>
        
            <div className = "workdates">{selected.dates}</div>
            <div>
              <ul><h5>
                {workBullets}
                </h5>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Experience;
