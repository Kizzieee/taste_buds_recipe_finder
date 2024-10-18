import "./recipe.css";

export default function RecipeModal(props) {
  function printModalContent(modalId) {
    const modalContent = document.querySelector(
      `#${modalId} .modal-content`
    ).innerHTML;

    const printWindow = window.open("", "_blank");
    printWindow.document.write(`
      <html>
        <head>
          <title>Print Recipe</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              padding: 20px;
            }
            .modal-content {
              max-width: 800px;
              margin: auto;
            }
          </style>
        </head>
        <body>
          ${modalContent}
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  }

  return (
    <div>
      <div
        className="modal fade"
        id={props.id}
        tabIndex="-1"
        aria-labelledby={props.id}
        aria-hidden="true"
      >
        <div className="custom-modal modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fw-bold primary-color" id={props.id}>
                Taste Buds
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body row px-4">
              <div className="col-lg-4 col-image p-0">
                <button
                  className="btn-print"
                  onClick={() => printModalContent(props.id)}
                >
                  <i class="bi bi-printer"></i> Print Recipe
                </button>
                <img
                  src={props.image}
                  alt={props.name}
                  className="img-fluid mb-3"
                />
              </div>
              <div className="col ms-2 scrollable-col">
                <h2 className="fw-bold  primary-color">{props.name}</h2>
                <div className="mb-2">
                  <span className="text-secondary">
                    <i className="bi bi-star-fill star me-1"></i>
                    {props.rating} / ({props.reviewCount})
                  </span>
                </div>
                <div className="mb-2">
                  <span>Preptime: {props.prepTime} mins</span>
                  <span className="ms-2">
                    Cooktime: {props.cookTime}{" "}
                    {props.cookTime < 1 ? "min" : "mins"}
                  </span>
                  <span className="ms-2">
                    Servings: {props.servings}{" "}
                    {props.servings > 1 ? "people" : "person"}
                  </span>
                </div>
                <h5>Ingredients</h5>
                <ul>
                  {props.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>

                <h5>Instructions</h5>
                <ol>
                  {props.instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
