import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { addAsyncGroups } from './groupSlice';
import './GroupList.css';

function AddGroupList(): JSX.Element {
    const { id } = useSelector((state:RootState) => state.user);

    const [name, setName] = useState('');
    const [adminId, setAdminId] = useState(id);
    const [picture, setPicture] = useState('');
    const [description, setDescription] = useState('');

    const dispatch = useAppDispatch();

    const submitAddGroupList = (event: React.FormEvent<HTMLFormElement>):void => {
        event.preventDefault();

        dispatch(addAsyncGroups({id, name, adminId, picture, description}));
        setName('');
        setAdminId(id);
        setPicture('');
        setDescription('');
    };
    return(<>
    
    </>)
}

export default AddGroupList;