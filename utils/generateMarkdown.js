// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

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

GNU General Public License, version 3 (GPLv3)
Apache License 2.0
Berkeley Software Distribution (BSD)
MIT License


## Contributing

If you would like to contribute to this project, please contact me via email: ${email}.
I will provide you with contribution guidelines.

## Tests

${tests}

## Questions
To view my GitHub profile, please click [this link](${github_URL}).

If you have any questions, please contact me: ${email}.


`;
}

module.exports = generateMarkdown;
