import { useState } from 'react';

const useForm = initialState => {
  const [values, setValues] = useState(initialState);

  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  }

  function setInitialState(values) {
    setValues({ ...values });
  }

  return {
    handleChange,
    setInitialState,
    values
  };
};

export default useForm;
