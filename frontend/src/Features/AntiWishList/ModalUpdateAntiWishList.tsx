import { Box, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useAppDispatch } from '../../store';
import { editAsyncAntiWish } from './antiWishSlice';
import { AntiWish } from './types/state';

export default function ModalUpdateAntiWishList({ anti } : { anti: AntiWish }):JSX.Element {
    const [modalActive, setModalActive] = useState(false);
    const [titles, setTitle] = useState(anti.title);
    const [images, setImage] = useState(anti.image);
    const [descriptions, setDescription] = useState(anti.description);
    const dispatch = useAppDispatch();
    const useModal = () => {
        dispatch(editAsyncAntiWish({ title: titles, image: images, description: descriptions, id: anti.id }));
        setModalActive(false);
    };
    return (
        <div className="updatebutton">
          <img src="/img/edit.png" className="updateWish" onClick={() => setModalActive(true)} />
            <div className={modalActive ? 'modal active' : 'modal'} onClick={() => setModalActive(false)}>
                <div className={modalActive ? 'modal__content active' : 'modal__content'} onClick={(e) => e.stopPropagation()}>

                    <p>Измените необходимые данные</p>
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
            className="modal-class"
            id="outlined-required"
            name="edit"
            label="Название"
            multiline
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
            value={titles}
          />
            <TextField
              className="modal-class"
              id="outlined"
              label="Ссылка на картинку"
              onChange={(e:React.ChangeEvent<HTMLInputElement>) => setImage(e.target.value)}
              value={images}
            />
            <TextField
              className="modal-class"
              id="outlined"
              label="Описание"
              onChange={(e:React.ChangeEvent<HTMLInputElement>) =>
                setDescription(e.target.value)}
              value={descriptions}
            />
      <button type="submit" className="btn" onClick={useModal}>
        Изменить
      </button>
                    </Box>
                </div>
            </div>
        </div>
  );
}
