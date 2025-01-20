import { useState } from 'react';
import { TbWorld } from 'react-icons/tb';

const Language = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const languages = ['English', 'Spanish', 'French', 'German', 'Chinese'];

  const handleSelect = language => {
    setSelectedLanguage(language);
  };

  return (
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-outline m-1">
        {selectedLanguage}{' '}
        <span className="ml-2 hidden md:block">
          {' '}
          <TbWorld className="size-8" />
        </span>
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        {languages.map(language => (
          <li key={language}>
            <button
              onClick={() => handleSelect(language)}
              className="btn btn-ghost text-left"
            >
              {language}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Language;
