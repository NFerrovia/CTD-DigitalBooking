export const delay = (delayTime) => {
  if (delayTime === 0) {
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delayTime);
  });
};
