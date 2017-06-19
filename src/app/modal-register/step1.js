import React from 'react';
import { FormComponents } from 'redux-form-ext';

const Step1 = () => (
  <div>
    <h1>Login Details</h1>
    <FormComponents.Text name="username" label="Username" isLabelInline={false} />
  </div>
);

export default Step1;