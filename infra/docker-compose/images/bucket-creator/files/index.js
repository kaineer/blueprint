const Minio = require('minio');

const bucketName = 'projects';

const createMinioBucket = () => {
  const client = new Minio.Client({
    endPoint: 's3',
    port: 9000,
    useSSL: false,
    accessKey: 's3admin',
    secretKey: 's3password'
  });

  client.bucketExists(bucketName, (err, exists) => {
    if (err) {
      throw err;
    }

    if (!exists) {
      client.makeBucket('projects', 'eu-center-1', (err) => {
        if (err) {
          throw err;
        }

        console.log("Bucket projects is created");
      });
    }
  });
};

// minio needs some time to startup
setTimeout(createMinioBucket, 5000);
