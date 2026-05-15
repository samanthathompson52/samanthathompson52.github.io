const Tech = () => {
  const categories = [
    {
      title: 'Project Management',
      certs: ['PMP®'],
      skills: ['Agile', 'Scrum', 'Kanban', 'Roadmapping', 'Hybrid', 'Stakeholder Management', 'Budgeting & Invoicing'],
    },
    {
      title: 'Technical',
      certs: [],
      skills: ['SQL', 'AWS', 'C#', 'TypeScript / JavaScript', '.NET', 'Python', 'Vue.js', 'React', 'Tailwind CSS', 'Java'],
    },
    {
      title: 'Tools',
      certs: [],
      skills: ['Jira', 'Confluence', 'GitHub Projects', 'Figma', 'Git', 'Slack', 'Claude Code' , 'Windsurf', 'Cursor'],
    },
  ];

  return (
    <div className="bg-mainlight py-20 px-6 mb-20">
      <span id="tech"></span>
      <div className="max-w-6xl mx-auto">
        <h1 className="md:text-5xl text-4xl bold text-center mb-14">Skills & Tools</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="flex flex-col bg-white rounded-2xl p-8 border-t-4 border-main shadow-sm"
            >
              <h2 className="text-main font-extrabold text-lg tracking-wide mb-6 pb-3 border-b border-gray-100">
                {cat.title}
              </h2>
              <ul className="flex flex-wrap gap-3">
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    className="tech text-sm font-semibold px-4 py-2 bg-mainlight rounded-lg border border-blue-100 text-gray-700"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
              {cat.certs.length > 0 && (
                <div className="mt-auto pt-6 border-t border-gray-100 mt-6">
                  <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-3">Certification</p>
                  {cat.certs.map((cert) => (
                    <a
                      key={cert}
                      href="https://www.credly.com/badges/30623d2d-75ea-40b6-aa20-c563f2819df0/public_url"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between w-full bg-main text-white font-bold text-sm px-4 py-3 rounded-xl hover:opacity-90 transition-opacity"
                    >
                      <span className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 shrink-0" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.403 12.652a3 3 0 0 0 0-5.304 3 3 0 0 0-3.75-3.751 3 3 0 0 0-5.305 0 3 3 0 0 0-3.751 3.75 3 3 0 0 0 0 5.305 3 3 0 0 0 3.75 3.751 3 3 0 0 0 5.305 0 3 3 0 0 0 3.751-3.75Zm-2.546-4.46a.75.75 0 0 0-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
                        </svg>
                        {cert}
                      </span>
                      <span className="text-xs font-medium opacity-80 flex items-center gap-1">
                        Verify
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3" aria-hidden="true">
                          <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Zm6.75-3a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V4.56l-4.97 4.97a.75.75 0 1 1-1.06-1.06l4.97-4.97h-3.69a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tech;
