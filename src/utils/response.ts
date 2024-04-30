import {Message} from "@arco-design/web-react";
import {responseType} from "../types";

export const resolveResponse = (response: responseType) => {
  console.log(response);
  if (response.code === 200) {
    return Message.success(response.message);
  }
  return Message.error(response.message);
}
