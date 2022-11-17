import React from 'react';
import Customerinformation from './Customerinformation';

function app() {
const customer = {firstName: "Joe", lastName: "Brittain"};
return (
  <Customerinformation info={customer}/>
);
};

export default app