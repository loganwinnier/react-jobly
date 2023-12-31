const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // Remember, the backend needs to be authorized with a token
  // We're providing a token you can use to interact with the backend API
  // DON'T MODIFY THIS TOKEN
  // static token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
  //   "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
  //   "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

  static async request(endpoint, data = {}, method = "GET") {
    const url = new URL(`${BASE_URL}/${endpoint}`);
    const headers = {
      authorization: `Bearer ${JoblyApi.token}`,
      'content-type': 'application/json',
    };

    url.search = (method === "GET")
      ? new URLSearchParams(data).toString()
      : "";

    // set to undefined since the body property cannot exist on a GET method
    const body = (method !== "GET")
      ? JSON.stringify(data)
      : undefined;

    const resp = await fetch(url, { method, body, headers });

    //fetch API does not throw an error, have to dig into the resp for msgs
    if (!resp.ok) {
      console.error("API Error:", resp.statusText, resp.status);
      const { error } = await resp.json();

      if (Array.isArray(error.message)) {
        throw error.message;
      }
      else {
        console.log(error.message);
        throw [error.message];
      }

    }

    return await resp.json();
  }

  // Individual API routes

  /** Register a new user
   * Returns a string token  */
  static async registerUser(body) {

    let res = await this.request('auth/register', body, 'POST');

    return res.token;
  }

  /** Login an existing user
  * Returns a string token  */
  static async loginUser(body) {
    let res = await this.request('auth/token', body, 'POST');

    return res.token;
  }

  /** Update an existing user profile information
  * Returns a string token  */
  static async updateUser(username, body) {

    let res = await this.request(`users/${username}`, body, 'PATCH');

    return res.user;
  }

  /** Get details on a user by username.
   * Returns an object {username: 'testuser', firstName: 'Test',
   * lastName: 'User', email: 'joel@joelburton.com', isAdmin: false}
  */

  static async getUser(username) {
    let res = await this.request(`users/${username}`);
    //console.log('RES USER', res.user)
    return res.user;
  }



  /** Get list of companies
   * optional parameter term to filter search by name
   */
  static async getCompanies(term) {

    let res = await this.request('companies', term ? { nameLike: term } : "");
    return res.companies;
  }

  /** Get details on a company by handle. */
  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }


  /** Get list of jobs
  * optional parameter term to filter search by name*/
  static async getJobs(term) {

    let res = await this.request('jobs', term ? { title: term } : "");
    return res.jobs;
  }


  // obviously, you'll add a lot here ...

}

export default JoblyApi;