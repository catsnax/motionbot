import createAuth0Client from '@auth0/auth0-spa-js';
import auth0Config from './auth0-config';

let auth0Client = null;

export async function initAuth0() {
  auth0Client = await createAuth0Client({
    domain: auth0Config.domain,
    client_id: auth0Config.clientId,
    redirect_uri: auth0Config.redirectUri,
  });
}

export async function login() {
  await auth0Client.loginWithRedirect();
}

export async function logout() {
  await auth0Client.logout();
}

export async function handleRedirectCallback() {
  await auth0Client.handleRedirectCallback();
}

export function isAuthenticated() {
  return auth0Client.isAuthenticated();
}

export async function getToken() {
  return await auth0Client.getTokenSilently();
}