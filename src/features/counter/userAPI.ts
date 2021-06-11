import { ErrorMessage } from "../../app/consts/error-code";
import { ErrorCode } from "../../app/consts/error-message";
import { ServiceError } from "../../app/errors/service.error";

// A mock function to mimic making an async request for data
export function listUserInfoAsync() {
  try {
    const result = fetch("http://localhost:3000", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        // throw new Error();
        console.log(res);
        return res;
      });
    return result;
  } catch (e) {
    throw new ServiceError(
      ErrorCode.USER_ERR_CODE_001,
      ErrorMessage.USER_ERR_MESSAGE_001,
      e
    );
  }
}

export function userDetailInfoAsync(id) {
  try {
    const result = fetch(`http://localhost:3000/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        return res;
      });
    return result;
  } catch (e) {
    throw new ServiceError(
      ErrorCode.USER_ERR_CODE_001,
      ErrorMessage.USER_ERR_MESSAGE_001,
      e
    );
  }
}
