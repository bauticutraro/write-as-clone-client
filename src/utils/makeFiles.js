const fs = require('fs');

function makeFiles() {
  const folderName = process.argv[2];
  const path = 'src/containers';

  if (!folderName) return console.log('Folder name required!');

  fs.mkdirSync(`${path}/${folderName}`);

  const files = [
    `${folderName}.jsx`,
    `${folderName.toLowerCase()}Constants.js`,
    `${folderName.toLowerCase()}Actions.js`,
    `${folderName.toLowerCase()}Reducer.js`,
    `${folderName.toLowerCase()}Saga.js`,
    `${folderName.toLowerCase()}Services.js`,
    `${folderName.toLowerCase()}Styles.js`
  ];

  const content = [
    `import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
// styles & components
import Loader from '../../components/Loader/Loader';
import { Container } from './${folderName.toLowerCase()}Styles';

const ${folderName} = () => {
  const dispatch = useDispatch();

  const {list, loading, error} = useSelector( ({${folderName.toLowerCase()}}) => ${folderName.toLowerCase()} );

  if (loading) return <Loader />
  if (error) return <h1>Error</h1>

  return (
    <Container>
      <h1>${folderName}</h1>
   </Container>
  );
};
      
export default ${folderName};`,

    `export const GET_${folderName.toUpperCase()}_START = 'app/${folderName}/GET_${folderName.toUpperCase()}_START';
export const GET_${folderName.toUpperCase()}_SUCCESS = 'app/${folderName}/GET_${folderName.toUpperCase()}_SUCCESS';
export const GET_${folderName.toUpperCase()}_FAILURE = 'app/${folderName}/GET_${folderName.toUpperCase()}_FAILURE';
    `,

    `import * as constants from './${folderName.toLowerCase()}Constants';

export const get${folderName}Start = payload => ({
  type: constants.GET_${folderName.toUpperCase()}_START,
  payload
});

export const get${folderName}Success = payload => ({
  type: constants.GET_${folderName.toUpperCase()}_SUCCESS,
  payload
});

export const get${folderName}Failure = payload => ({
  type: constants.GET_${folderName.toUpperCase()}_FAILURE,
  payload
});

`,

    `import * as constants from './${folderName.toLowerCase()}Constants';

const initialState = {
  list: [],
  loading: true,
  error: null
};
   
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.GET_${folderName.toUpperCase()}_START:
      return { ...state, list: [], loading: true, error: null };

    case constants.GET_${folderName.toUpperCase()}_SUCCESS:
      return {
       ...state,
        list: payload.list,
        loading: false,
        error: null
    };

    case constants.GET_${folderName.toUpperCase()}_FAILURE:
      return { ...state, loading: false, error: payload.error };
      
    default:
      return state;
  }
};
   `,

    `import { all, fork, put, takeLatest } from 'redux-saga/effects';

import * as constants from './${folderName.toLowerCase()}Constants';
import * as actions from './${folderName.toLowerCase()}Actions';
import * as services from './${folderName.toLowerCase()}Services';
   
function* get${folderName}({ payload }) {
  try {
    const user = yield services.get${folderName}();
    if (user) yield put(actions.get${folderName}Success({ user }));
   } catch (err) {
    yield put(actions.get${folderName}Failure({ error: err.message }));
   }
}
    
function* get${folderName}Saga() {
  yield takeLatest(constants.GET_${folderName.toUpperCase()}_START, get${folderName});
}
   
export default function* ${folderName.toLowerCase()}Saga() {
  yield all([fork(get${folderName}Saga)]);
}`,

    `import api from '../../utils/api';

export const get${folderName} = () =>
  api('http://localhost:3000');
   
`,

    `import styled from 'styled-components';

export const Container = styled.div'';

`
  ];

  files.forEach((file, i) =>
    fs.writeFileSync(`${path}/${folderName}/${file}`, content[i])
  );
  console.log('Done!');
}

makeFiles();
