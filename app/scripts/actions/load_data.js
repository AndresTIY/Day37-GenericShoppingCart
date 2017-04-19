import api from "../api.js";
import { connect } from "react-redux";
import container from "../containers/all.js";

export default function loadData() {
  $.ajax({
    url: api.url,
    method: "GET",
    headers: {
      "application-id": api.appId,
      "secret-key": api.restKey,
      "Content-Type": "application/json",
      "application-type": "REST"
    }
  }).then(data => {
    store.dispatch({ type: "LOAD_DATA", data: data });
  });
}
