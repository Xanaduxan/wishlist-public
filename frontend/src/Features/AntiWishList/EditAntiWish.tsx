import { Box, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { editAsyncAntiWish } from './antiWishSlice';
import { AntiWish } from './types/state';

function EditAntiWish({ anti, editShow } : { anti: AntiWish, editShow: () => void }):JSX.Element {
  const [editTitle, setEditTitle] = useState(anti.title);
  const [editImage, setEditImage] = useState(anti.image);
  const [editDescription, setEditDescription] = useState(anti.description);
  const dispatch = useAppDispatch();

  const submitEditAntiWish = (event: React.FormEvent<HTMLFormElement>):void => {
    event.preventDefault();

    dispatch(editAsyncAntiWish({ title: editTitle,
      id: anti.id,
image: editImage,
description: editDescription }));
    editShow();
    setEditTitle('');
    setEditImage('');
    setEditDescription('');
  };
  return (

      <Box
        component="form"
        sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
        noValidate
        autoComplete="off"
        onSubmit={submitEditAntiWish}
      >
          <TextField
            required
            id="outlined-required"
            name="edit"
            label="Название"
            multiline
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => setEditTitle(e.target.value)}
            value={editTitle}
          />
            <TextField
              id="outlined"
              label="Ссылка на картинку"
              onChange={(e:React.ChangeEvent<HTMLInputElement>) => setEditImage(e.target.value)}
              value={editImage}
            />
            <TextField
              id="outlined"
              label="Описание"
              onChange={(e:React.ChangeEvent<HTMLInputElement>) =>
                setEditDescription(e.target.value)}
              value={editDescription}
            />

      <button type="submit" className="btn">
        Добавить

      </button>
      </Box>
  );
}

export default EditAntiWish;
