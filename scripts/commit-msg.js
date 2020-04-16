const inquirer = require('inquirer');
module.exports = {
  prompter,
  formatCommit,
};
// When a user runs `git cz`, prompter will
// be executed. We pass you cz, which currently
// is just an instance of inquirer.js. Using
// this you can ask questions and get answers.
//
// The commit callback should be executed when
// you're ready to send back a commit template
// to git.

function prompter(cz, commit) {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'type',
        message: "Select the type of change that you're committing:",
        choices: ['fix', 'feat', 'chore', 'break'],
      },
      {
        type: 'input',
        name: 'issues',
        message: 'Issue ID(s) (required):\n',
        validate(input) {
          if (!input) {
            return 'Must specify issue IDs, otherwise, just use a normal commit message';
          }
          return true;
        },
      },
      {
        type: 'input',
        name: 'message',
        message: 'GitHub commit message (required):\n',
        validate(input) {
          if (!input) {
            return 'empty commit message';
          }
          return true;
        },
      },
    ])
    .then(answers => {
      formatCommit(commit, answers);
    });
}
function formatCommit(commit, answers) {
  commit(
    filter([answers.type, ':', answers.issues, answers.message]).join(' '),
  );
}
function filter(array) {
  return array.filter(item => {
    return !!item;
  });
}