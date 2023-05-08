let displayLicense = require("../index.js");
// const lastItem = questions[questions.length - 1];
// const badges = {
//   GPLv3_B: `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`,
  
//   apache2_B: `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`,
  
//   bsd3_B: `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`,
  
//   mit_B: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  
//   }
  
// const {GPLv3_B, apache2_B, bsd3_B, mit_B } = badges;

// function to generate markdown for README
function generateMarkdown(answers) {
  const {title, description, installation, usage, license, email, tests, github_URL} = answers

  // let displayLicense = []
  // [GPLv3, apache2, bsd3, mit ] = questions.choices;
  
  // for(let i = 0; i < answers.license.length; i++){
  //   switch(answers.license[i]){
  //     case GPLv3:
  //       console.log(GPLv3_B)
  //       // displayLicense.push(GPLv3_B)
  //       // console.log(GPLv3_B);
  //       break;
  //     case answers.license.apache2:
  //       displayLicense.push(apache2_B);
  //       console.log(apache2_B);
  //       break;
  //     case answers.license.bsd3:
  //       displayLicense.push(bsd3_B);
  //       console.log(bsd3_B);
  //       break;
  //     case answers.license.mit:
  //       displayLicense.push(mit_B);
  //       console.log(mit_B);
  //       break;
  //     default:
  //       console.log("Sorry, there are no other options");
  //   }
  // }



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
return content;

}

module.exports = generateMarkdown;
