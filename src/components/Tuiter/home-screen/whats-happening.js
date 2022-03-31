import React, {useState} from "react";
import {useDispatch} from "react-redux";

const WhatsHappening = () => {
  let [whatsHappening, setWhatsHappening] = useState('');
  const dispatch = useDispatch();
  const tuitClickHandler = () => {
    dispatch({type: 'create-tuit', tuit: whatsHappening});
  }

  return (
    <>
      <textarea value={whatsHappening}
                onChange={(event) => setWhatsHappening(event.target.value)}
                placeholder="What's happening?"
                className="form-control bg-body border-bottom border-dark">
      </textarea>
      <div className="d-flex justify-content-end">
        <button className="btn btn-primary btn-block rounded-pill my-2" onClick={tuitClickHandler}>Tuit</button>
      </div>
    </>
  );
}
export default WhatsHappening;

