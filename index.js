const shell = require('shelljs');
require('dotenv').config();

shell.exec(`git clone "${process.env.REPO_URL}"`);
shell.exec('Callog-bot');
shell.exec(`${process.env.PWD}`);

setTimeout(()=> {
  shell.exec('git commit --allow-empty -m reset');
}, 10000)
