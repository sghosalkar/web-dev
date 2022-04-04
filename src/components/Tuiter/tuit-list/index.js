import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findAllTuits} from "../actions/tuits-actions";
import TuitListItem from "./tuit-list-item";
import './index.css';

const TuitList = () => {
  const tuits = useSelector(state => state.tuits);
  const dispatch = useDispatch();
  useEffect(() => {findAllTuits(dispatch)}, []);
  const [newTuit, setNewTuit] = useState({tuit: 'New tuit'});

  return (
    <ul className="ttr-tuits list-group">
      {
        tuits.map && tuits.map(tuit => <TuitListItem key={tuit._id} tuit={tuit}/>)
      }
    </ul>
  );
}

export default TuitList;