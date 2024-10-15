import "./recipe.css";

export default function RecipeModal(props) {
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
              <h5 className="modal-title" id={props.id}>
                Taste Buds
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body row">
              {/* Add the recipe details here */}

              <div className="col">
                <img
                  src={props.image}
                  alt={props.name}
                  className="img-fluid mb-3"
                />
              </div>
              <div className="col">
                <h2 className="fw-bold">{props.name}</h2>
                <div>
                  <span className="text-secondary">
                    <i className="bi bi-star-fill star me-1"></i>
                    {props.rating} / ({props.reviewCount})
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
