export default {
  title: 'Components/Breadcrumb',
};
export const Default = () => {
  return /* html */ `
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb__item">
          <a href="#" class="breadcrumb__link">Home</a>
        </li>
        <li class="breadcrumb__item">
          <a href="#" class="breadcrumb__link">About</a>
        </li>
        <li class="breadcrumb__item active">
          <a href="#" class="breadcrumb__link">Contact</a>
        </li>
      </ol>
    </nav>
  `;
};
