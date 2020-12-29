import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import { projectDetail } from '../actions/projectActions';

const SuccessPage = () => {
  const dispatch = useDispatch();

  const projectDetails = useSelector((state) => state.projectDetails);
  const { loading, error, project } = projectDetails;

  let now = moment();
  let d1 = now.format();
  let d2 = moment(project.date);

  let days = d2.diff(d1, 'days');

  React.useEffect(() => {
    dispatch(projectDetail());
  }, [dispatch]);
  return (
    <section className='text-gray-600 body-font'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-col  w-full mb-20'>
          <h1 className='sm:text-4xl text-3xl font-medium title-font text-blue-700'>
            Success 🎉
          </h1>
        </div>
        <div className='flex flex-wrap -m-4'>
          <div className='p-4 md:w-1/2'>
            <div className='h-full w-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
              <div className='h-24 bg-gray-200 flex justify-between items-center'>
                <div className='p-4 font-bold'>{project.name}</div>
                <div className='p-4 font-bold text-blue-600'>
                  ${project.cost}
                </div>
              </div>
              <div className='p-6'>
                <p className='leading-relaxed mb-3'>{project.summary}</p>

                <span className='text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200'>
                  <box-icon name='calendar-week' color='#2222ee'></box-icon>
                  Delivery in {days} days{' '}
                </span>
                <span className='text-gray-400 inline-flex items-center leading-none text-sm'>
                  <box-icon name='file-blank' color='#2222ee'></box-icon>{' '}
                  Attachment
                </span>
              </div>
              <button className='w-36 p-2 rounded-md bg-blue-600 text-white m-4 ml-88'>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessPage;
