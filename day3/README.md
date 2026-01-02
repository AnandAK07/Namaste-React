<!-- Configuring script inside package.json -->
scripts configure so that it make our life easy
npm run start=npm start
but npm run build !=npm build
  "scripts": {
    "start":"parcel index.html",
    "build":"parcel build index.html",
    "test": "jest"
  },
