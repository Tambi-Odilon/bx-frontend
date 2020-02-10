import AuthenticationService from "../../services/AuthenticationService";
import { TOKEN_NAME } from "../constants/Securityconst";
import axios from "axios";
import { API_URL } from "../constants/Urls";

const jwtToken = AuthenticationService.loadToken();

class UserApi {
    
    // get lists of all users
    getAllUsers() {
        if(jwtToken == null){
            let jwt = AuthenticationService.loadToken(TOKEN_NAME);
            return axios.get(`${API_URL}/users`, {headers: {'Authorization': jwt}});
        }
        else{
            return axios.get(`${API_URL}/users`, {headers: {'Authorization': jwtToken}});
        }
    }

    // delete user with {id}
    deleteUser(idUser) {
        if (jwtToken == null) {
          let jwt = AuthenticationService.loadToken(TOKEN_NAME)
          return axios.delete(`${API_URL}/users/${idUser}`, {headers: { 'Authorization' : jwt}})
        }
        else{
          return axios.delete(`${API_URL}/users/${idUser}`, {headers: { 'Authorization' : jwtToken}})
        }
      }

}

export default new UserApi();
