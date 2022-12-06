import { TextField } from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { editAsyncAntiWish } from './antiWishSlice';
import { AntiWish } from './types/state';

function EditAntiWish({ anti, editShow } : { anti: AntiWish, editShow: () => void }):JSX.Element {
  const [editTitle, setEditTitle] = useState('');
  const [editImage, setEditImage] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const dispatch = useAppDispatch();
 

  const submitEditAntiWish = (event: React.FormEvent<HTMLFormElement>):void => {
    event.preventDefault();

    dispatch(editAsyncAntiWish({ title: editTitle, 
      id: anti.id, image: editImage, description: editDescription }));
    editShow();
    setEditTitle('');
    setEditImage('');
    setEditDescription('');
  };
  return (
    <form className="profile-edit" onSubmit={submitEditAntiWish}>

          <TextField
            required
            id="outlined-required"
            name="edit"
            label="Required"
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
    </form>
  );
}

export default EditAntiWish;
