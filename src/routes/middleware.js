/* eslint-disable import/prefer-default-export */
export const initLocals = (req, res, next) => {
  Object.assign(res, {
    locals: {
      data: {},
      status: 200,
      message: 'success',
    },
  });
  next();
};

export const customResponse = (req, res) => {
  const { status, data, message } = res.locals;
  return res.status(status).send({
    status,
    message,
    data,
  });
};
