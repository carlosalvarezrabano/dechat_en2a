const fs = require('fs');
const f = 'node_modules/@angular-devkit/build-angular/src/angular-cli-files/models/webpack-configs/browser.js';

fs.readFile(f, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace(/node: false/g, 'node: {crypto: true, stream: true, fs: \'empty\'}');

  fs.writeFile(f, result, 'utf8', function (err) {
    if (err) return console.log(err);
  });
});



const f2 = 'node_modules/@comunica/actor-init-sparql/lib/ActorInitSparql-browser.js';

fs.readFile(f2, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace(/operation = (await this.mediatorOptimizeQueryOperation.mediate({ context, operation })).operation;/g, '//operation = (await this.mediatorOptimizeQueryOperation.mediate({ context, operation })).operation;');

  fs.writeFile(f, result, 'utf8', function (err) {
    if (err) return console.log(err);
  });
});
