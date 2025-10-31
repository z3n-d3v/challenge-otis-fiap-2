import { NavLink } from "react-router"
import { Button } from "reactstrap"

export const Header = () => {
  const logout = () => {
    localStorage.clear();

    window.location.reload();
  }

  return (
    <>
      <header className="bg-primary text-white py-4 shadow-sm">
        <div className="container">
          <h1 className="h4 fw-bold mb-1">Sistema de Gestão de Instalações</h1>
          <p className="mb-0 small">Elevadores - América Latina</p>
        </div>
      </header>

      <nav className="bg-white shadow-sm py-3 bottom-0">
        <div className="container d-flex flex-wrap gap-2">
          <NavLink className="btn btn-outline-primary text-capitalize fw-semibold px-3 py-2" to="/">Dashboard</NavLink>
          <NavLink className="btn btn-outline-primary text-capitalize fw-semibold px-3 py-2" to="/sales">Vendas</NavLink>
          <NavLink className="btn btn-outline-primary text-capitalize fw-semibold px-3 py-2" to="/installations">Instalações</NavLink>
          <NavLink className="btn btn-outline-primary text-capitalize fw-semibold px-3 py-2" to="/after-sales">Pós-Venda</NavLink>
          <NavLink className="btn btn-outline-primary text-capitalize fw-semibold px-3 py-2" to="/kpis">KPIs</NavLink>
          <NavLink className="btn btn-outline-primary text-capitalize fw-semibold px-3 py-2" to="/client-feedback">Feedback do Cliente</NavLink>
          <NavLink className="btn btn-outline-primary text-capitalize fw-semibold px-3 py-2" to="/support">Suporte</NavLink>
          <NavLink className="btn btn-outline-primary text-capitalize fw-semibold px-3 py-2" to="/settings">Configurações</NavLink>

          <Button onClick={logout} outline className="text-capitalize fw-semibold px-3 py-2">Logout</Button>
        </div>
      </nav>
    </>
  )
}