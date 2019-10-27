/* eslint-disable import/prefer-default-export */
export const initLocals = (req, res, next) => {
  Object.assign(res, {
    locals: {
      response: {
        data: {},
        status: 200,
        message: 'success',
      },
      data: {},
    },
  });
  next();
};

export const resMethodsOverride = (req, res, next) => {
  res.setData = (data) => {
    res.locals.data = data;
  };

  res.setResponse = (status, message, data) => {
    res.locals.response = { status, message, data };
  };

  next();
};

export const customResponse = (req, res) => {
  const { status, data, message } = res.locals.response;
  return res.status(status).send({
    status,
    message,
    data,
  });
};
