import React from "react";
import {useDispatch} from "react-redux";
import './index.css';
import TuitStats from "./tuit-stats";

const TuitListItem = ({tuit}) => {
  const dispatch = useDispatch();
  const deleteTuit = (tuit) => {
    dispatch({type: 'delete-tuit', tuit})
  };

  return(
    <li className="list-group-item d-flex border-secondary justify-content-between">
      <img src={tuit.avatarImage} className="img-fluid rounded-circle wd-avatar-icon" alt={tuit.postedBy.username} />
      <div className="ms-2 me-auto w-100">
        <div className="d-flex justify-content-between">
          <div>
            <span className="fw-bold">{tuit.postedBy.username} </span>
            <span className="text-secondary"> @{tuit.handle}</span>
          </div>
          <div><i onClick={() => deleteTuit(tuit)} className="fas fa-remove fa-pull-right"/></div>
        </div>
        <div>{tuit.tuit}</div>
        {
          tuit.attachments && tuit.attachments.image &&
          <div className="my-2">
            <img src={tuit.attachments.image} alt="" className="img-fluid wd-tuit-attachment" />
          </div>
        }
        {
          tuit.attachments && tuit.attachments.video &&
          <div className="my-2">
            <iframe className="embed-responsive-item w-100 wd-tuit-attachment"
                    title="YouTube video player"
                    src={`https://www.youtube.com/embed/${tuit.attachments.video}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen/>
          </div>
        }
        <TuitStats tuit={tuit} />
      </div>
    </li>
  );
};

export default TuitListItem;