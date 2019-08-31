import React from 'react';

const Form = props => (
  <div>
  <form onSubmit={props.currencyMethod}>
{props.error &&
<button>Получть курс валют</button>}
</form>
<form onSubmit={props.clearMethod}>
  {!props.error && <button>Сбросить</button>}
  </form>
  </div>
  );

export default Form;