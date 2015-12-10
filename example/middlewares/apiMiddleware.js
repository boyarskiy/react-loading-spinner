export default store => next => action => {
  const { promise, types } = action;
  
  if (!promise) {
    return next(action);
  }

  const [REQUEST, SUCCESS, ERROR] = types;

  next({ type: REQUEST });

  return promise.then(
    (result) => next({
      type: SUCCESS,
      result
    }),
    (error) => next({
      type: ERROR,
      error: error.message || 'Something bad happened'
    })
  );
};
