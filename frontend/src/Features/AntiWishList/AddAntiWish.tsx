import { Box, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { addAsyncAntiWish } from './antiWishSlice';
import './AntiWishList.css';
import ModalAntiWishList from './ModalAntiWishList';

function AddAntiWish():JSX.Element {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useAppDispatch();
const { id } = useSelector((state:RootState) => state.user);

  return (
<>
     <Typography variant="h4" gutterBottom>
        Я не хочу получить в подарок:
     </Typography>

<ModalAntiWishList/>
</>
    );
}

export default AddAntiWish;
