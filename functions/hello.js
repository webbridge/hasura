exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: {
      message: 'Hello, World',
    },
    statusText: 'Hello',
  }
}
