const loggerMiddleware = store => next => action => {
  console.group(action && action.type);
  console.log('Previous State', store.getState());
  console.log('Action', action);
  next(action); // next function passes this action to next middleware or reducer
  console.log('Next State', store.getState());
  console.groupEnd();
};

export default loggerMiddleware;
