import React from 'react';
import { FormComponents } from 'redux-form-ext';

const Step2 = () => (
  <div>
    <h1>User Details</h1>
    <FormComponents.Text name="firstname" label="Firstname" isLabelInline={false} />
        <FormComponents.Text name="lastname" label="Lastname" isLabelInline={false} />
  </div>
);

export default Step2;