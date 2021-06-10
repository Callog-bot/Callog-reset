const shell = require('shelljs');
require('dotenv').config();

const sleep = (sec) => {
  return new Promise((resolve) => setTimeout(resolve, sec * 1000));
};

async function main() {
  shell.exec(`git clone "${process.env.REPO_URL}"`);
  await sleep(1);
  shell.exec(`${process.env.USER}`);
  await sleep(1);
  shell.exec(`${process.env.PWD}`);
  await sleep(5);
  shell.exec('cd Callog-reset');
  shell.exec(`git config --global user.email "${process.env.EMAIL}"`);
  shell.exec(`git config --global user.name "${process.env.USER}"`);
  shell.exec('git commit --allow-empty -m reset');
  shell.exec('git push origin main:main');
}
main();
