import React from 'react';
import DatePicker from 'react-date-picker';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createProject } from '../actions/projectActions';
import { Button } from '@material-ui/core';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 4, 3),
  },
}));

const ProjectModal = () => {
  const classes = useStyles();
  const { register, handleSubmit, formState, errors } = useForm({
    mode: 'onBlur',
  });
  const history = useHistory();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  const [tax, setTax] = React.useState('$0.00');
  const [total, setTotal] = React.useState('$0.00');
  const [date, onChange] = React.useState(new Date());
  const [name, setName] = React.useState('');
  const [summary, setSummary] = React.useState('');
  const [cost, setCost] = React.useState('');

  React.useEffect(() => {
    const taxAmount = (20 / 100) * cost;
    setTax(taxAmount);
    setTotal(Number(cost) + Number(taxAmount));
  },[cost]);

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(data);
  };
  const handleClick = () => {
    dispatch(createProject(name, summary, total, date));
    history.push('/success');
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className='inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mr-8 md:mt-0'>
        Create Project
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'>
        <div style={modalStyle} className={classes.paper}>
          <div className='flex flex-row justify-between items-center'>
            <h2 className='text-gray-900 text-lg mb-1 font-bold title-font ml-24'>
              Create Project
            </h2>
            <button onClick={handleClose}>
              <box-icon name='x'></box-icon>
            </button>
          </div>
          <p className='leading-relaxed mb-5 text-gray-600'>
            <hr />
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='relative mb-4'>
              <input
                type='text'
                placeholder='Title'
                maxLength={80}
                onChange={(e) => setName(e.target.value)}
                value={name}
                name='title'
                ref={register({
                  required: true,
                  maxLength: 80,
                })}
                autoComplete='off'
                className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
              />
              {errors.title && errors.title.type === 'required' && (
                <span class='leading-7 text-sm text-red-600'>
                  Title is required.
                </span>
              )}
              {errors.title && errors.title.type === 'maxLength' && (
                <span class='leading-7 text-sm text-red-600'>
                  Title is too long.
                </span>
              )}
            </div>
            <div className='relative mb-4'>
              <textarea
                autoComplete='off'
                onChange={(e) => setSummary(e.target.value)}
                value={summary}
                name='description'
                placeholder='Description'
                ref={register({
                  required: true,
                  maxLength: 200,
                })}
                className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'></textarea>
              {errors.description && errors.description.type === 'required' && (
                <span class='leading-7 text-sm text-red-600'>
                  Description is required.
                </span>
              )}
              {errors.description &&
                errors.description.type === 'maxLength' && (
                  <span class='leading-7 text-sm text-red-600'>
                    Description is too long.
                  </span>
                )}
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
                className='w-full text-gray-400 rounded'
                onChange={onChange}
                calendarIcon=''
                clearIcon=''
                value={date}
                placeholder='Select a day'
                minDate={new Date()}
              />
            </div>
            <div className='relative mb-4'>
              <input
                type='text'
                autoComplete='off'
                placeholder='Project Cost'
                onChange={(e) => setCost(e.target.value)}
                value={cost}
                name='cost'
                ref={register({
                  required: true,
                })}
                className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
              />
              {errors.cost && errors.cost.type === 'required' && (
                <span class='leading-7 text-sm text-red-600'>
                  Cost is required.
                </span>
              )}
            </div>
            <div className='relative mb-4 flex flex-row justify-between items-center'>
              <p className='text-gray-400 font-medium'>
                CleverX transection fees (20%)
              </p>
              <p className='text-gray-400 font-medium'>${tax}</p>
            </div>
            <div className='relative mb-4 flex flex-row justify-between items-center'>
              <p className='text-gray-400 font-medium'>Total amount in $USD</p>
              <p className='text-gray-400 font-medium'>${total}</p>
            </div>
            <Button
              disabled={!formState.isValid || formState.isSubmitting}
              variant='contained'
              type='submit'
              style={{ marginLeft: '5rem' }}
              color='primary'
              onClick={handleOpen1}>
              Create Project
            </Button>
            <Modal
              open={open1}
              onClose={handleClose1}
              aria-labelledby='simple-modal-title'
              aria-describedby='simple-modal-description'>
              <div style={modalStyle} className={classes.paper}>
                <div className='flex flex-row justify-between items-center'>
                  <h2 className='text-gray-900 text-lg mb-1 font-bold title-font ml-24'>
                    Choose Card
                  </h2>
                  <button onClick={handleClose}>
                    <box-icon name='x'></box-icon>
                  </button>
                </div>
                <p className='leading-relaxed mb-5 text-gray-600'>
                  <hr />
                </p>
                <div className='flex flex-col '>
                  <div className='border border-blue-400 rounded h-12 w-full bg-white mb-4 flex justify-between items-center'>
                    <div className='flex'>
                      <box-icon
                        name='checkbox-checked'
                        color='#26e051'></box-icon>
                      <box-icon
                        name='visa'
                        type='logo'
                        className='font-medium'
                        color='#2668e0'></box-icon>
                    </div>
                    <span className='mr-4 font-medium'>
                      Visa credit card ending with 7845
                    </span>
                  </div>
                  <div className='border  rounded h-12 w-full bg-white mb-4 flex justify-between items-center'>
                    <div className='ml-4'>
                      <box-icon
                        name='visa'
                        type='logo'
                        className='font-medium'
                        color='#2668e0'></box-icon>
                    </div>
                    <span className='mr-4 font-medium'>
                      Visa credit card ending with 7845
                    </span>
                  </div>
                  <div className='border  rounded h-12 w-full bg-white mb-4 flex  items-center '>
                    <div className='ml-4'>
                      <box-icon name='plus' color='#101318'></box-icon>
                    </div>
                    <span className='ml-8 font-medium'>Add New Card</span>
                  </div>
                  <button
                    type='submit'
                    onClick={handleClick}
                    className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
                    Pay
                  </button>
                </div>
              </div>
            </Modal>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default ProjectModal;
