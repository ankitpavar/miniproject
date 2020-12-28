import React from 'react';
import Modal from 'react-modal';
import DatePicker from 'react-datepicker';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '30%',
  },
};
const Header = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [tax, setTax] = React.useState('$0.00');
  const [total, setTotal] = React.useState('$0.00');
  const [startDate, setStartDate] = React.useState(new Date());

  function openModal() {
    setShowModal(true);
  }
  function closeModal() {
    setShowModal(false);
  }
  return (
    <header className='text-gray-600 body-font'>
      <div className='container mx-auto flex p-5 flex-col justify-between md:flex-row items-center'>
        <span className='ml-3 text-xl font-extrabold'>CleverX</span>

        <button
          onClick={openModal}
          className='inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mr-8 md:mt-0'>
          Create Project
        </button>
        <Modal
          isOpen={showModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel='Example Modal'>
          <div className='flex flex-row justify-between items-center'>
            <h2 className='text-gray-900 text-lg mb-1 font-bold title-font ml-36'>
              Create Project
            </h2>
            <button onClick={closeModal}>
              <box-icon name='x'></box-icon>
            </button>
          </div>
          <p className='leading-relaxed mb-5 text-gray-600'>
            <hr />
          </p>
          <div className='relative mb-4'>
            <input
              type='name'
              placeholder='Title'
              maxLength={80}
              id='name'
              name='name'
              autoComplete='off'
              className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            />
          </div>
          <div className='relative mb-4'>
            <textarea
              id='message'
              name='message'
              maxLength={200}
              autoComplete='off'
              placeholder='Description'
              className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'></textarea>
          </div>
          <div className='relative mb-4'>
            <input
              disabled
              type='name'
              autoComplete='off'
              placeholder='Upload Attachment'
              id='name'
              name='name'
              className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            />
          </div>
          <div className='relative mb-4'>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
          <div className='relative mb-4'>
            <input
              type='name'
              autoComplete='off'
              placeholder='Project Cost'
              id='name'
              name='name'
              className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            />
          </div>
          <div className='relative mb-4 flex flex-row justify-between items-center'>
            <p className='text-gray-400 font-medium'>
              CleverX transection fees (20%)
            </p>
            <p className='text-gray-400 font-medium'>{tax}</p>
          </div>
          <div className='relative mb-4 flex flex-row justify-between items-center'>
            <p className='text-gray-400 font-medium'>Total amount in $USD</p>
            <p className='text-gray-400 font-medium'>{total}</p>
          </div>
          <button className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg ml-36'>
            Create Project
          </button>
        </Modal>
      </div>
    </header>
  );
};

export default Header;
