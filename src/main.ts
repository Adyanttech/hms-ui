import makeServer from './server';

(async () => {
  const server = await makeServer();

  // Listen on 0.0.0.0 and use PORT from environment, fallback to 3000 locally
  server.listen({ port: process.env.PORT ? parseInt(process.env.PORT) : 3000, host: '0.0.0.0' }, (err) => {
    if (err) {
      console.error('Error starting server:', err);
      process.exit(1);
    }
    console.log(`Server listening on port ${process.env.PORT || 3000}`);
  });
})();