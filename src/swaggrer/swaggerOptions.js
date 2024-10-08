const swaggerOptions = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'API Documentation',
        version: '1.0.0',
        description: 'API for managing users and tasks'
      },
      servers: [
        {
          url: 'http://localhost:3000',  
        },
      ],
    },
    apis: ['./src/routes/*.js'],
  };

module.exports = swaggerOptions