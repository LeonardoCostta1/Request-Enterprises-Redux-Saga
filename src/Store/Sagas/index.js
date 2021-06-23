import { call, put, select, takeLatest } from "redux-saga/effects";
import Api from "../../Services/api";

function* fetchUser(action) {
  const state = yield select();
  try {
    const response = yield call(Api.get, `/enterprises/${action.payload}`, {
      headers: {
        "access-token": state.auth.token,
        client: state.auth.client,
        uid: state.auth.uid,
      },
    });
    yield put({ type: "@ENTERPRISE", payload: response.data });
  } catch (e) {
    console.log(e);
  }
}
function* listEnterprise() {
  const state = yield select();
  try {
    const response = yield call(Api.get, "enterprises/", {
      headers: {
        "access-token": state.auth.token,
        client: state.auth.client,
        uid: state.auth.uid,
      },
    });
    yield put({ type: "@LIST_ENTERPRISE_ALL", payload: response.data });
  } catch (e) {
    console.log(e);
  }
}
function* mySaga() {
  yield takeLatest("@ENTERPRISE_ID", fetchUser);
  yield takeLatest("@LIST_ENTERPRISES", listEnterprise);
}

export default mySaga;
