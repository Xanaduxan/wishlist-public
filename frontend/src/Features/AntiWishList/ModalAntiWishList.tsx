import { Box, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { addAsyncAntiWish } from './antiWishSlice';

export default function ModalAntiWishList() {
    const [modalActive, setModalActive] = useState(false);
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useAppDispatch();
    const { id } = useSelector((state:RootState) => state.user);
    const useModal2 = () => {
        dispatch(addAsyncAntiWish({title, id, image, description}));
        setModalActive(false);
        setTitle('');
        setImage('');
        setDescription('');
    }
  return (
   <>
   <button type="submit" className="btn" onClick={() => setModalActive(true)}>
    Добавить
  </button>
    <div className={modalActive ? 'modal active' : 'modal'} onClick={()=>setModalActive(false)}>
        <div className={modalActive ? 'modal__content active' : 'modal__content'} onClick={e => e.stopPropagation()}>
    <Box
        component="form"
        sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
        noValidate
        autoComplete="off"
      >
          <TextField
            required
            id="outlined-required"
            label="Название"
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
            value={title}
          />
            <TextField
              id="outlined"
              label="Ссылка на картинку"
              onChange={(e:React.ChangeEvent<HTMLInputElement>) => setImage(e.target.value)}
              value={image}
            />
            <TextField
              id="outlined"
              label="Описание"
              onChange={(e:React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
              value={description}
            />
            <button type="submit" className="btn" onClick={useModal2} >
    Добавить Antiwishlist
  </button>
      </Box>
      </div>
            </div>
            </>
  )
}