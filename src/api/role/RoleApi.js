import AuthenticationService from "../../services/AuthenticationService";
import { TOKEN_NAME } from "../constants/Securityconst";
import axios from "axios";
import { API_URL } from "../constants/Urls";

const jwtToken = AuthenticationService.loadToken();

class UserApi {
    
getAllRoles() {
    if (jwtToken == null) {
      let jwt = AuthenticationService.loadToken(TOKEN_NAME)
      return axios.get(`${API_URL}/roles`, {headers: { 'Authorization' : jwt}})
    }
    else{
      return axios.get(`${API_URL}/roles`, {headers: { 'Authorization' : jwtToken}})
    }
  }
}

export default new UserApi();