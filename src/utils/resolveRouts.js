const resolveRouts = (route) => {
  if (route.length <= 3) {
    let valitRoute = route === '/' ? route : '/:id';
    return valitRoute;
  }
  return `/${route}`; // /about NPI
};

export default resolveRouts;