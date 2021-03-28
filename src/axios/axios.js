import axios from "axios";

const instance = axios.create({
  baseURL: "http://www.filltext.com/?rows=100&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&adress={addressObject}&description={lorem|32}"
})

export const dataAPI = {
  getData() {
    return instance.get().then(response => response.data);
  }
}