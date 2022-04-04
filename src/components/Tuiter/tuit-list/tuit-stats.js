import React from "react";
import {useDispatch} from "react-redux";
import {updateTuit} from "../actions/tuits-actions";

const TuitStats = ({tuit}) => {
  const dispatch = useDispatch();
  const likeTuit = () => {
    if (tuit.liked) {
      tuit.stats.likes = tuit.stats.likes - 1;
      tuit.liked = false;
    } else {
      tuit.stats.likes = tuit.stats.likes + 1;
      tuit.liked = true;
    }

    updateTuit(dispatch, tuit);
  }

  return (
    <>
      {
        tuit.stats &&
        <div className="row">
          {
            tuit.stats.comments &&
            <span className="col-3">
              <i className="fa-regular fa-comment"/> {tuit.stats.comments}
            </span>
          }
          {
            tuit.stats.retuits &&
            <span className="col-3">
              <i className="fa fa-retweet"/> {tuit.stats.retuits}
            </span>
          }
          <span className="col-3" onClick={likeTuit}>
            {
              tuit.liked && <i className="fas fa-heart me-1" style={{color: 'red'}}/>
            }
            {
              !tuit.liked && <i className="far fa-heart me-1"/>
            }
            {tuit.stats && tuit.stats.likes}
          </span>
          <span className="col-3">
            <i className="fa fa-arrow-up-from-bracket"/>
          </span>
        </div>
      }
    </>
  );
}
export default TuitStats;

