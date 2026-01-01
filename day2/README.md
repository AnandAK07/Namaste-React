 1. package.son is a configuration for npm 
 2. packages are also known as dependency

 <!-- Budler -->
 1. The most imp package in our project is Budler
 2. Budler budles/packages our project to push to production
    ex: Webpack, parcel, vite
    create-react-app Webpack and babel to bild project

<!-- There are 2 types of Dependecy -->
1. Dev dependecy
    It's required in development
2. Normal dependecy is used in production

<!-- ^(carot) and ~(telda) -->
^ if we have 2.8.3 we got 2.8.4 new update it update minor version automatically
~ it will update the Major version automatically 
it safe to update minor version always.
if we update the major it may break our project due to lot of changes

<!-- What is diff b/w package.json and package-lock.json -->
package.json will is configuration of the npm and 
it will update the minor/major version as well 
it keep the track of what version of package is installed

package-lock.json keep the track of exact version that is installed

<!-- integrity -->
integrity keep the hash(sha512) verify whatever in my m/c it the same version being deployed to production

<!-- nodemodule -->
1. nodemodule will have all the code that we fetched from the npm
2. we have installed only the parcel but have other code also
    Transitive dependency- it is because parcel is having the depency & those dependency have there own depedency & those dependency have there own depencency.

<!-- We don't need to push node_modules github -->
If we have package.json and package-lock.json we can regenerate the node_modules

<!-- npx parcel index.html -->
npx parcel index.html(it's a source) for dev
npx parcel build index.html for prod
npx means excecute our project
parcel created server for us and our app is avalable at http://localhost:1234
previous url http://127.0.0.1:5500/day2/index.html
current http://localhost:1234/

build a development build for our app & host our app at http://localhost:1234/

<!-- cdn is not good way to bring react to our -->
0. another way to get react is npm = react at the end of the it's package 
1. With cdn link it will call the external api to get the react it's a costly operation. If we had react in our local inside node_module it will be fast and easy.
2. We have react@18 cdn url https://unpkg.com/react@18/umd/react.development.js. what if react is update 19 & 20 we need to keep on changing the link. So it's better to keep in local with package.json

npm i react (not -D) because we need as a normal dependency

# parcel is beast
1. Dev build
2. Local server for us
3. it's doing HMR(Hot module replacement)
after changing in react something it's automatically refreshing the page
File watching algorithm(written in C++)= HMR is using File watching algorithm for this.
4. Cache- Faster Builds 
5. Image optimization
6. Minification files also
7. Budling files also
8. Compress files also 
9. Consistent Hashing aslo
10. Code spliting
11. Differential budling-To support older browser 
12. Error Handling
13. Diagnostics it give butifull Error
14. Give a way to host in HTTPS 
15. Tree shaking algorithm- will remove unused code for us.
16. Diff Dev and Prod Bildes

1. React is fast there are other packages also that making react.

local        ->Git           -> Server          -> End User 
package.json package.json      package.json
nodemodule                     exactly same nodemodule
                               npm i nodemodule we can regenerate
                               diff dist folder
                               .parcel-cache 

# browserlist make our project work in the browers
  "browserlist": [
    "last 10 Chrome versions",
    "last 3 Firefox versions",
    "last 2 versions"
  ]