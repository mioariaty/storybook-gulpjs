export default {
  title: 'Components/Form',
};

export const Horizontal = () => {
  return /*html*/ `
    <form class="form form--horizontal">
      <div class="form__item row">
        <label class="form__label col-desk-2">Email</label>
        <input type="email" class="input-control col-desk-10" >
      </div>
      <div class="form__item row">
        <label class="form__label col-desk-2">Password</label>
        <input type="password" class="input-control col-desk-10" >
      </div>
      <div class="form__item row">
        <label class="form__label col-desk-2">Message</label>
        <textarea name="" id="" cols="30" rows="10" class="input-control col-desk-10"></textarea>
      </div>
      <button class="btn btn--rounded btn--secondary mx-auto">
        Submit
      </button>
    </form>
  `;
};

export const Vertical = () => {
  return /* html */ `
    <form class="form form--vertical">
      <div class="form__item row">
        <label class="form__label ">Email</label>
        <input type="email" class="input-control" >
      </div>
      <div class="form__item row">
        <label class="form__label">Password</label>
        <input type="password" class="input-control" >
      </div>
      <button class="btn btn--rounded  mx-auto">
        Submit
      </button>
    </form>
  `;
};
