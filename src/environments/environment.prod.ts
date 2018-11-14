export const environment = {
  production: true
};

export let APIURL;

switch (window.location.hostname) {
  // this is the deployed angular application
  case 'nightbuzz-plzzz-wurk.herokuapp.com':
    // this is the full url of your deployed API
    APIURL = 'https://nitebuzz2018v1.herokuapp.com'
    break;
  default:
    // this is the local host name of your API
    APIURL = 'https://nitebuzz2018v1.herokuapp.com';
}
