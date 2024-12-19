/* eslint-disable @typescript-eslint/no-require-imports */
'use client';

import ReactMarkdown from 'react-markdown';
const aboutProjectMardownFile = require('../../../docs/aboutProject.md');

const Documentation = () => {
  const renderReactMarkdown = () => {
    if (aboutProjectMardownFile?.default) {
      return <ReactMarkdown>{aboutProjectMardownFile?.default}</ReactMarkdown>;
    }
    return null;
  };

  return (
    <div className="grid">
      <div className="col-12">
        <div className="card">
          <h5>About Project</h5>
          {renderReactMarkdown()}
        </div>
      </div>
    </div>
  );
};

export default Documentation;
