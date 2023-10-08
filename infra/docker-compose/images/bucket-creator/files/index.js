const Minio = require('minio');

const bucketName = 'projects';

const createMinioBuckets = () => {
  const client = new Minio.Client({
    endPoint: 's3',
    port: 9000,
    useSSL: false,
    accessKey: 's3admin',
    secretKey: 's3password'
  });

  const createBucket = (name) => {
    client.bucketExists(name, (err, exists) => {
      if (err) {
        throw err;
      }

      if (!exists) {
        client.makeBucket(name, 'eu-center-1', (err) => {
          if (err) {
            throw err;
          }

          console.log("Bucket " + name + " is created");
        });
      }
    });
  }

  createBucket("projects");
  createBucket("results");
};

// minio needs some time to startup
setTimeout(createMinioBuckets, 5000);
