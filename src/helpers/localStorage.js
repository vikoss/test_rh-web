const currentUser = JSON.parse(localStorage.getItem('rh-me'));
const JWT = () => {
  const local = localStorage.getItem('rh-jwt');
  if (!local) {
    return null;
  }
  return JSON.parse(local).access_token;
};

export { currentUser, JWT };
