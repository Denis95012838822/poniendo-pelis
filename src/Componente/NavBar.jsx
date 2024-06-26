
import { Badge } from '@mui/base/Badge';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to='/carrito'>Carrito</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" to='/compras'>Compras</NavLink>
                        </li>
                    </ul>
                    
                    <NavLink to='/comprar'>
                        <Badge badgeContent={3}>
                            <AddShoppingCartIcon />
                        </Badge>
                    </NavLink>

                </div>
            </div>
        </nav>
    )
}
