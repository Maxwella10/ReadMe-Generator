// function to generate markdown for README
//function generateMarkdown(data) {
//return `# ${data.title}

//`;
//}

//module.exports = generateMarkdown;// Purpose: This file contains the function that generates the markdown for the README file.// function to generate markdown for README
// ? Use handlebars or mustache to generate templated markdown
function generateMarkdown(data) {
    // TODO: Add icon to top of README file based on switch case
    // When a user chooses a license for their application from a list of options, a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under.

    let licenseIcon = "";
    switch (data.license) {
        case "Apache 2.0":
            licenseIcon =
                "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
            break;
        case "MIT":
            licenseIcon =
                "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
            break;
        case "BSD 3.0":
            licenseIcon =
                "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
            break;
        case "CC0 1.0":
            licenseIcon =
                "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
            break;
        case "GPL v3":
            licenseIcon =
                "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
            break;
        case "MPL 2.0":
            licenseIcon =
                "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
            break;
        default:
            licenseIcon =
                "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
            break;
    }

    return `# ${data.title}
  ${licenseIcon}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing
  ${data.contributers}

  ## Tests
  ${data.tests}

  ## Questions
  For any questions on this repo, you can reach the maintainer on [GitHub](https://github.com/${data.github}) or via email at ${data.email}.
`;
}

// Changed below to export default with ESM
module.exports = generateMarkdown;
//export default generateMarkdown;