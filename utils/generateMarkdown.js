const fs = require("fs");

// function to generate markdown for README
function generateMarkdown(answers) {
  const {title, description, installation, usage, license, email, tests, github_URL} = answers
  const content =  `# ${title}

## Description
${description}

## Table of content

- [Title](#title)
- [Description](#description)
- [Table of content](#table-of-content)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
  
## Installation

${installation}

## Usage

${usage}

## License  
${license}

## Contributing

If you would like to contribute to this project, please contact me via email: ${email}.

I will provide you with contribution guidelines.

## Tests

${tests}

## Questions
To view my GitHub profile, please click [this link](${github_URL}).

If you have any questions, please contact me: ${email}.

`;
writeToFile('./generated_readme/README.md', content)

}

function writeToFile(fileName, content){
  fs.writeFile(fileName, content, err => {
  if (err) {
    console.error(err);
  } else {
    console.log('File written successfully')
  }
});

}

module.exports = generateMarkdown;
