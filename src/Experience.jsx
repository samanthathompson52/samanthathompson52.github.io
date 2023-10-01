import { useState } from 'react';
import work from './work.json';

const Experience = () => {
  const [selected, setSelected] = useState(work[0]);

  const workList = work.map((elm) => {
    const className = elm.id === selected.id ? 'selected' : '';
    return (
      <div key={elm.id} className={className}>
        <button type="button" className="experience-menu" onClick={() => { setSelected(elm); }}>
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
    <div id='experience' className="content experience-section">
      <div>
        <h1 className = "md:text-5xl text-4xl mb-5">Experience</h1>
        <div>
          <div className="grid md:grid-cols-6">
            <div className="experience-list pr-5 md:col-span-2">
              {workList}
            </div>   
            <div className="md:col-span-4">          
                <span className = "text-main md:text-3xl text-2xl">{selected.position}</span>              
                <span className ="text-main md:text-3xl text-2xl">
                  {' '}
                -
                  {' '}{selected.company}</span>
              <div className = "workdates">{selected.dates}</div>
              <div>
                <ul>
                  <p>
                  {workBullets}
                  </p>
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
