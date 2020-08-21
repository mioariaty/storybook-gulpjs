export default {
  title: 'Components/Form',
};

export const Horizontal = () => {
  return /*html*/ `
    <form class="form form--horizontal">
      <div class="form-item row">
        <label class="form-item__label col-desk-3">Email</label>
        <input type="email" class="input-control col-desk-9" >
      </div>
      <div class="form-item row">
        <label class="form-item__label col-desk-3">Password</label>
        <input type="password" class="input-control col-desk-9" >
      </div>
      <button class="btn btn--rounded mx-auto">
        Submit
      </button>
    </form>
  `;
};

export const Vertical = () => {
  return /* html */ `
    <form class="form form--vertical">
      <div class="form-item row">
        <label class="form-item__label ">Email</label>
        <input type="email" class="input-control" >
      </div>
      <div class="form-item row">
        <label class="form-item__label">Password</label>
        <input type="password" class="input-control" >
      </div>
      <button class="btn btn--rounded mx-auto">
        Submit
      </button>
    </form>
  `;
};
