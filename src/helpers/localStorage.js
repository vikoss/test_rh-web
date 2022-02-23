const currentUser = () => {
  const local = localStorage.getItem('rh-me');
  if (!local) {
    return null;
  }
  return JSON.parse(local);
};

const JWT = () => {
  const local = localStorage.getItem('rh-jwt');
  if (!local) {
    return null;
  }
  return JSON.parse(local).access_token;
};

export { currentUser, JWT };
