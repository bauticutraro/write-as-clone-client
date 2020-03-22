const fs = require('fs');

function makeComponent() {
  const folderName = process.argv[2];
  const path = 'src/components';

  if (!folderName) return console.log('Folder name required!');

  fs.mkdirSync(`${path}/${folderName}`);

  const files = [`${folderName}.jsx`, `${folderName.toLowerCase()}Styles.js`];

  const content = [
    `import React from 'react';
import PropTypes from 'prop-types';
// styles
import { Container } from './${folderName.toLowerCase()}Styles';

const ${folderName} = () => {
  return (
    <Container>
      <h1>${folderName}</h1>
   </Container>
  );
};
 
${folderName}.propTypes = {

};

export default React.memo(${folderName});`,

    `import styled from 'styled-components';

export const Container = styled.div'';

`
  ];

  files.forEach((file, i) =>
    fs.writeFileSync(`${path}/${folderName}/${file}`, content[i])
  );
  console.log('Done!');
}

makeComponent();
