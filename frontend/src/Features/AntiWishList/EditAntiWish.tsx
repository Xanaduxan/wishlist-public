import { TextField } from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { editAsyncAntiWish } from './antiWishSlice';
import { AntiWish } from './types/state';

function EditAntiWish({ anti } : { anti: AntiWish }):JSX.Element {
  const [editTitle, setEditTitle] = useState('');
  const dispatch = useAppDispatch();
  const [show, setShow] = useState(false);
  const submitEditAntiWish = (event: React.FormEvent<HTMLFormElement>):void => {
    event.preventDefault();
    console.log(anti.id, editTitle);
    dispatch(editAsyncAntiWish({ title: editTitle, id: anti.id }));
    setShow(false);
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

      <button type="submit" className="btn">
        Добавить

      </button>
    </form>
  );
}

export default EditAntiWish;
