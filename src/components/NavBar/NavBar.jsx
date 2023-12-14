import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>Shop</h3>
            <div>
                <button>Skills</button>
                <button>Spells</button>
                <button>Enhancements</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar