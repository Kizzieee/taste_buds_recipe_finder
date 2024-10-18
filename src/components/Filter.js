import "./filter.css";
export default function Filter() {
  return (
    <div className="padding-ltr">
      <div className="filter">
        <div class="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Sort by
          </button>
          <ul class="dropdown-menu dropdown-menu-dark">
            <li>
              <a className="dropdown-item active" href="#">
                Popularity
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                A-Z List
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
