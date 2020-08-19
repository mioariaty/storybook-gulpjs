export default {
  title: 'Layouts/Grid',
};

const styles = {
  columnColor: `background-color: #563d7c26; border: 1px solid #563d7c33; text-align: center; margin-bottom: 1rem`,
};

export const LayoutSystem = () => {
  return /*html*/ `
    <div class="container">
      <div class="grid-fluid">
        <div
          class="col-desk-12"
          style="${styles.columnColor}">
          col-desk-12
        </div>
      </div>

      <div class="grid-fluid">
        <div class="col-desk-6 col-mob-12" style="${styles.columnColor}">
          col-desk-6
        </div>
        <div class="col-desk-6 col-mob-12" style="${styles.columnColor}">
          col-desk-6
        </div>
      </div>

      <div class="grid-fluid">
        <div class="col-desk-3 col-tab-6 col-mob-12" style="${styles.columnColor}">
          col-desk-3
        </div>
        <div class="col-desk-3 col-mob-12" style="${styles.columnColor}">
          col-desk-3
        </div>
        <div class="col-desk-3 col-mob-12" style="${styles.columnColor}">
          col-desk-3
        </div>
        <div class="col-desk-3 col-mob-12" style="${styles.columnColor}">
          col-desk-3
        </div>
      </div>

      <div class="grid-fluid">
        <div class="col-desk-4 col-tab-6 col-mb-12" style="${styles.columnColor}">
          col-desk-4
        </div>
        <div class="col-desk-4 col-tab-6 col-mb-12" style="${styles.columnColor}">
          col-desk-4
        </div>
        <div class="col-desk-4 col-tab-6 col-mb-12" style="${styles.columnColor}">
          col-desk-4
        </div>
      </div>
    </div>
  `;
};
