import app from './app';

const server = app.listen(3000, () => {
  const address = server.address();
  if (typeof address === 'string') {
    console.log(`App running at ${address}`);
  } else {
    console.log(`App running at http://localhost:${address.port}/`);
  }
});
