exports.handler = async event => {
  const { WHO_AM_I } = process.env;

  return {
    statusCode: 200,
    body: `Hello ${WHO_AM_I}!`
  };
}
