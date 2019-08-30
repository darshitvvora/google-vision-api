# Google Vision AI integration of OCR

Vision AI - https://cloud.google.com/vision/

Client Library used - https://www.npmjs.com/package/@google-cloud/vision

This is a pay per hit pricing model. Please use it carefully


## Requirements
>Get a key.json for your Google Vision Service Account (https://cloud.google.com/vision/docs/before-you-begin) and add it to parent folder. The file should be similar to key.sample.json

>Add .env file in project similar to sample.env file

>This project works on NodeJS - ^8.13.0 || >=10.10. Recommended to use NVM(Node version manager) and select node version 8.13.0 (nvm install 8.13.0 and nvm use 8.13.0)

## Usage
```
npm install
```
__Please note__: If you run into trouble compiling native add-ons during the installation, follow [`node-gyp`](https://github.com/nodejs/node-gyp)'s short guide on [required compilation tools](https://github.com/nodejs/node-gyp#installation).

```sh
npm run start:server
```
## API Requests (Short Documentation to use this service)
#### Node - Get Aadhar Number from Image
```javascript
    var request = require("request");

    var options = { method: 'POST',
      url: 'http://localhost:3015/api/documents/aadharno',
      headers: 
       { 
         'cache-control': 'no-cache',
         'content-type': 'application/json' },
      body: { 
        url: 'https://eduzphere.in/wp-content/uploads/2018/05/Aadhar-Card-Front.png',
        clientKey: 'quezx',
        clientSecret: 'DgdY4dffd55@df@TdgF'
      },
      json: true };

    request(options, function (error, response, body) {
      if (error) throw new Error(error);

      console.log(body);
    });
```    
#### cURL - Get Aadhar Number from Image
```shell script
      curl -X POST \
       http://localhost:3015/api/documents/aadharno \
        -H 'cache-control: no-cache' \
        -H 'content-type: application/json' \       
        -d '{
          "url":"https://eduzphere.in/wp-content/uploads/2018/05/Aadhar-Card-Front.png",
          "clientKey": 'quezx',
          "clientSecret": 'DgdY4dffd55@df@TdgF'
      },
         }'
```         
         
#### Node - Get PAN Number from Image
```javascript
const request = require("request");

const options = { method: 'POST',
  url: 'http://localhost:3015/api/documents/panno',
  headers: 
   {
     'cache-control': 'no-cache',
     'content-type': 'application/json' },
  body: { 
    url: 'http://taxxcel.com/images/PAN-card.jpg',
    clientKey: 'quezx',
    clientSecret: 'DgdY4dffd55@df@TdgF'
  },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
```
    
#### cURL - Get PAN Number from Image
```shell script


      curl -X POST \
    http://localhost:3015/api/documents/panno \
    -H 'cache-control: no-cache' \
    -H 'content-type: application/json' \    
    -d '{
      "url":"http://taxxcel.com/images/PAN-card.jpg",
      "clientKey": 'quezx',
      "clientSecret": 'DgdY4dffd55@df@TdgF'
      }
    }'        
```

    
## NginX Configuration

Install NginX on machine and add following configuration
```sh
 server {
  listen  80;
  server_name    google-ocr.example.com;
  return         301 https://$server_name$request_uri;
 }
 
 server {
   listen 443 ssl;
   server_name google-ocr.example.com;
   ssl on;
   ssl_certificate /etc/nginx/ssl/ssl-bundle.crt;
   ssl_certificate_key /etc/nginx/ssl/star.example.com.key;
 
   location = /favicon.ico {
     alias  /home/user/example/favicon.ico;
     access_log off;
     expires max;
   }
 
   location / {
     proxy_redirect off;
     proxy_set_header   X-Real-IP         $remote_addr;
     proxy_set_header   X-Forwarded-For   $proxy_add_x_forwarded_for;
     proxy_set_header   X-Forwarded-Proto $scheme;
     proxy_set_header   Host              $http_host;
     proxy_pass http://127.0.0.1:3015;
   }
 }

```

## Debug

Sometimes the process is not killed. To explicitly kill process on 3015 run below command

```shell script
sudo kill $(sudo lsof -t -i:3015)
```

## License

[MIT license](https://opensource.org/licenses/MIT)
