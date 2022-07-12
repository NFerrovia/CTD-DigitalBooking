export const saveAuthToken = (token) => {
  localStorage.setItem("token", token);
  return;
};

export const getAuthToken = () => {
  return localStorage.getItem("token");
};

export const saveRefreshToken = (refreshToken) => {
  localStorage.setItem("refreshToken", refreshToken);
  return;
};

export const getRefreshToken = () => {
  return localStorage.getItem("refreshToken");
};

export const saveUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
  return;
};

export const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export const removeAuthToken = () => {
  localStorage.removeItem("token");
};

export const removeRefreshToken = () => {
  localStorage.removeItem("refreshToken");
};

export const removeUser = () => {
  localStorage.removeItem("user");
};
