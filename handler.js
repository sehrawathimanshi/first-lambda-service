module.exports.hello = async (event) => {
  console.log(event.pathParameters.name);
  const {first, second} = event;
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        returnName: `Hello ${event.pathParameters.name}`
        // input: event,
      },
      null,
      2
    ),
  };
  /* When we need to throw error
    throw('soomething went wrong')
  */


  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};