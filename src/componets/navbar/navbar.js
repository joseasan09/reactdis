import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <div class="d-grid gap-2">
                <button class="btn btn-outline-success" type="button">Dispenser</button>
                <button class="btn btn-outline-success" type="button">Filtros</button>
                <button class="btn btn-outline-success" type="button">Mangueras</button>
            </div>
            <CartWidget/>
      </nav>
    )

}
export default NavBar