const getAll = async (request, response) => {

  // response.statusCode = 200;
  // response.setHeader("Content-type", "application/json")
  // response.end(JSON.stringify({
  //   greet: "Hello man!"
  // }))
  
  response.status(200).json({
      greet: "Hello man!, Im a doggy"
  });
}

export default getAll;