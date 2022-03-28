import {useDispatch} from "react-redux";
import React from "react";

const TuitStats = ({tuit}) => {
  const dispatch = useDispatch();
  const likeTuit = () => {
    dispatch({type: 'like-tuit', tuit});
  };

  return (
    <div className="row">
      <span className="col-3">
        <i className="fa-regular fa-comment"/> {tuit.stats.comments}
      </span>
      <span className="col-3">
        <i className="fa fa-retweet"/> {tuit.stats.retuits}
      </span>
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
  );
}
export default TuitStats;

