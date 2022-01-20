export const petIncrement = (number) => {
  return {
    type: "PET_INCREASED",
    payload: number,
  };
};

export const petDecrement = () => {
  return {
    type: "PET_DECREASED",
  };
};

export const petFAVORITE_INCREASED = (number) => {
  return {
    type: "PET_FAVORITE_INCREASED",
    payload: number,
  };
};

export const petfavDECREASED = () => {
  return {
    type: "PET_FAVORITE_DECREASED",
  };
};


export const getUsers = () => {
  return {
    type: "GET_USERS_REQUESTED",
  };
};
