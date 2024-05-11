import { makeObservable, observable, action, computed } from "mobx";
import axios from "../utils/middleware";
import { Root } from "./root";
import { iRoot } from "./root";
import Cookies from "universal-cookie";
const cookies = new Cookies();
export class Auth {
  accessToken: string = "";
  refreshToken: string = "";
  root: iRoot;
  constructor(root: Root) {
    makeObservable(this, {
      accessToken: observable,
      refreshToken: observable,
      fetchToken: action,
      logout: action,
        register: action,
      orgRegister:action,
      getAccessToken: computed,
      getRefreshToken: computed,
    });
    this.root = root;
  }
  async fetchToken(email: string, password: string) {
    const data = {
      email:email,
      password: password,
    };
    const response = await axios.post("", data);
    this.accessToken = response.data.accessToken;
      this.refreshToken = response.data.accessToken;
        cookies.set("accessToken", this.accessToken);
        cookies.set("refreshToken", this.refreshToken);
  }
  async register(
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    gender: string,
    phone: string,
  ) {
    const data = {
email:email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      gender: gender,
      phone: phone,
    };
    const response = await axios.post("", data);
    this.accessToken = response.data.accessToken;
      this.refreshToken = response.data.accessToken;
    cookies.set("accessToken", this.accessToken);
    cookies.set("refreshToken", this.refreshToken);
  }
  async orgRegister(
      email:string,
    password: string,
    firstName: string,
    lastName: string,
    gender: string,
    phone: string,
  ) {
      const data = {
        email:email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      gender: gender,
      phone: phone,
    };
    const response = await axios.post("", data);
    this.accessToken = response.data.accessToken;
      this.refreshToken = response.data.accessToken;
              cookies.set("accessToken", this.accessToken);
              cookies.set("refreshToken", this.refreshToken);
  }
  logout() {
    this.accessToken = "";
      this.refreshToken = "";
              cookies.remove("accessToken");
              cookies.remove("refreshToken");
  }
  get getAccessToken() {
    return this.accessToken;
  }
  get getRefreshToken() {
    return this.refreshToken;
  }
}
