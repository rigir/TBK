import { Link } from "react-router-dom";

export default function index() {
  return (
    <div>
      <p>
        Nie znaleziono elementu: {window.location.pathname}
      </p>
    </div>
  )
}