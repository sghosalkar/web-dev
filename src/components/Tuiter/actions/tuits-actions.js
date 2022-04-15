import * as service from '../services/tuits-service';

export const CREATE_TUIT = 'CREATE_TUIT';
export const FIND_ALL_TUITS = 'FIND_ALL_TUITS';
export const UPDATE_TUIT = 'UPDATE_TUIT';
export const DELETE_TUIT = 'DELETE_TUIT';

export const createTuit = async (dispatch, tuitParams) => {
  const tuit = {
    postedBy: {
      username: `${tuitParams.profile.firstName} ${tuitParams.profile.lastName}`,
    },
    handle: tuitParams.profile.handle,
    time: "now",
    tuit: tuitParams.tuit,
    avatarImage: tuitParams.profile.profilePicture,
    stats: {
      retuits: 0,
      likes: 0,
      comments: 0
    },
  };

  const newTuit = await service.createTuit(tuit);
  dispatch({
             type: CREATE_TUIT,
             newTuit
           });
}

export const findAllTuits = async (dispatch) => {
  const tuits = await service.findAllTuits();
  dispatch({
             type: FIND_ALL_TUITS,
             tuits
           });
}

export const updateTuit = async (dispatch, tuit) => {
  const status = await service.updateTuit(tuit);
  dispatch({
             type: UPDATE_TUIT,
             tuit
           });
}

export const deleteTuit = async (dispatch, tuit) => {
  const response = await service.deleteTuit(tuit);
  dispatch({
             type: DELETE_TUIT,
             tuit
           })
}
