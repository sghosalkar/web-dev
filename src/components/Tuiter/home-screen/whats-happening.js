import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {createTuit} from "../actions/tuits-actions";

const WhatsHappening = () => {
  const [newTuit, setNewTuit] = useState('');
  const dispatch = useDispatch();

  return (
    <>
      <textarea value={newTuit}
                onChange={(event) => setNewTuit(event.target.value)}
                placeholder="What's happening?"
                className="form-control bg-body text-white border-bottom border-dark">
      </textarea>
      <div className="d-flex justify-content-end">
        <button className="btn btn-primary btn-block rounded-pill my-2" onClick={() => createTuit(dispatch, newTuit)}>Tuit</button>
      </div>
    </>
  );
}
export default WhatsHappening;

