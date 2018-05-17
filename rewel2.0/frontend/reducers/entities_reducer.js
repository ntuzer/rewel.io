const initialState = {
  1: {
    id: 1,
    title: 'test',
    body: 'rewel',
  },
};

const entitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default entitiesReducer;
