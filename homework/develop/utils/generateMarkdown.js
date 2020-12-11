// function to generate markdown for README
const generateMarkdown = (data) => {
  return  `# ${data.title}

  ## Purpose
  
  ${data.purpose}.

  ## Installation

  You need ${data.installation} to install this application

  ## Usage

  ${data.usage}

  ## Credits

  ${data.credits}

  ## License
  ${data.license}

  ## Pictures
  ![${data.pictureAlt}](${data.picture})`
;
}

module.exports = generateMarkdown;
