# sailsauth

a [Sails v1](https://sailsjs.com) application

### plug and play

`git clone repo folder`

`cd folder`

`yarn install`

`sails lift` or

`yarn start` or

`pm2 start app.js`

### url access for tests

http://localhost:1337/teste/login?user=demo&pass=demo

take token and pass it in the Header of url

http://localhost:1337/teste/teste

with `Authorization: token xyz1tuv.abc2def.qwe3rty`

### look changes in

- [/api/services/jwtauth.js
  ](https://github.com/jprando/sailsjs_jwtauth/blob/master/api/services/jwtauth.js)
- [/config/policies.js](https://github.com/jprando/sailsjs_jwtauth/blob/master/config/policies.js)
- [/api/policies/isAuthenticate.js](https://github.com/jprando/sailsjs_jwtauth/blob/master/api/policies/isAuthenticate.js)
- [/api/controllers/teste/login.js
  ](https://github.com/jprando/sailsjs_jwtauth/blob/master/api/controllers/teste/login.js)
- [/api/controllers/teste/teste.js
  ](https://github.com/jprando/sailsjs_jwtauth/blob/master/api/controllers/teste/teste.js)

### Version info

This app was originally generated on Sat Nov 03 2018 23:48:08 GMT-0300 (-03) using Sails v1.0.2.

<!-- Internally, Sails used [`sails-generate@1.15.28`](https://github.com/balderdashy/sails-generate/tree/v1.15.28/lib/core-generators/new). -->

<!--
Note:  Generators are usually run using the globally-installed `sails` CLI (command-line interface).  This CLI version is _environment-specific_ rather than app-specific, thus over time, as a project's dependencies are upgraded or the project is worked on by different developers on different computers using different versions of Node.js, the Sails dependency in its package.json file may differ from the globally-installed Sails CLI release it was originally generated with.  (Be sure to always check out the relevant [upgrading guides](https://sailsjs.com/upgrading) before upgrading the version of Sails used by your app.  If you're stuck, [get help here](https://sailsjs.com/support).)
-->
