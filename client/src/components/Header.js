import React from 'react';
import ProjectModal from './ProjectModal';

const Header = () => {
  return (
    <>
      <header className='text-gray-600 body-font'>
        <div className='container mx-auto flex p-5 flex-col justify-between md:flex-row items-center'>
          <span className='ml-3 text-xl font-extrabold'>CleverX</span>
          <ProjectModal />
        </div>
      </header>
    </>
  );
};

export default Header;
