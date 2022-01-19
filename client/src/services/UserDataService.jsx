import {UserModel} from '../models/UserModel'

/**   @object UserDataService */
/*  ----------------------------------------------------------------
*  -> Retrieves id in URL (if none  default id is provided)
*  -> Casts retrieved data into a user object ( --- TO REVIEW : userProfile component should delegate the entire task to this service)?
* */
const UserDataService = {
        
        /** @function retrieveIdFromUrl */
        /** @returns {number} userId*/
        retrieveIdFromUrl: function() {
                // !GITHUB PAGES ONLY (without express)! PROD deploy  => use of 'HASHROUTER' (instead of 'BrowserRouter') makes the following wrong
                // url is now, e.g, 'http://localhost:3001/#/userProfile/18'
                let location = window.location;
                let defaultId = 12;
                let currentId = null;
                let idInUrl = parseInt(location.pathname.split('/userProfile/')[1]); 
                // console.log('ID URL===', parseInt(idInUrl))
                !idInUrl || idInUrl !== defaultId ? currentId = idInUrl : currentId = defaultId;
                return currentId;
        },

        /** @function castUserDataIntoUserModel */
        /** used only when fetching api data */
        /** @param {object} user */
        /** @returns {object} currentUser  */
        castUserDataIntoUserModel: function(user) {
                
                let currentUser = new UserModel();
                currentUser.userMainData = user[0].data;
                currentUser.userActivityData = user[1].data;
                currentUser.userSessionLengthData = user[2].data.sessions;
                currentUser.userPerfData = user[3].data;
                // console.log('CURRENT USER AFTER REMAP==>',currentUser )
                return currentUser;
        },
        /** @function castUserMockDataIntoUserModel */
        /** used only when fetching mock data */
        /** @param {object} user */
        /** @returns {object} currentUser  */
        castUserMockDataIntoUserModel: function(user) {
                
                let currentUser = new UserModel();
                currentUser.userId = user.id;
                currentUser.userMainData = user.data[0];
                currentUser.userActivityData = user.data[1];
                currentUser.userSessionLengthData = user.data[2].sessions;
                currentUser.userPerfData = user.data[3];
                // console.log('CURRENT USER AFTER REMAP==>',currentUser )
                return currentUser;
        }
}
export default UserDataService





