import { Link } from "react-router-dom";
export default function MenuHeader() {
  return (
    <section>
    <nav>
      <Link to="/">Geolocalise me</Link>
      <Link to="/myCities">My cities</Link>
      <Link to="/preferenciesWear">My preferencies</Link>
    </nav>
    </section>
  )
}