const shell = require('shelljs');
require('dotenv').config();

const wait = (seconds, cb) => {
  return new Promise(
    setInterval(() => {
      cb();
      Promise.resolve();
    }, seconds * 1000)
  );
};

async function main() {
  shell.exec(`git clone "${process.env.REPO_URL}"`);
  await wait(5, shell.exec('cd Callog-reset'));
  shell.exec(`git config --global user.email "${process.env.EMAIL}"`);
  shell.exec(`git config --global user.name "${process.env.USER}"`);
  shell.exec('git commit --allow-empty -m reset');
  shell.exec('git push origin main:main');
  await wait(1, shell.exec(`${process.env.USER}`));
  await wait(1, shell.exec(`${process.env.PWD}`));
}
main();
