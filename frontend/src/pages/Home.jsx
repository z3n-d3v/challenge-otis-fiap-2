import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const Home = () => {
  return (
    <>
      <Header />

      <main className="container my-4 p-4 bg-white shadow rounded">
        <div className="container my-4">
          <h2 className="h4 fw-bold mb-4">Dashboard</h2>

          <div className="row g-4">
            <div className="col-12 col-sm-6 col-md-4">
              <div className="p-4 rounded shadow bg-primary-subtle">
                <h3 className="fw-semibold text-primary mb-2">Instalações Ativas</h3>
                <p className="display-6 fw-bold text-primary mb-0">128</p>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4">
              <div className="p-4 rounded shadow" style={{ backgroundColor: "#d1e7dd" }}>
                <h3 className="fw-semibold text-success mb-2">Projetos no Prazo</h3>
                <p className="display-6 fw-bold text-success mb-0">93%</p>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4">
              <div className="p-4 rounded shadow" style={{ backgroundColor: "#f8d7da" }}>
                <h3 className="fw-semibold text-danger mb-2">Tickets Abertos</h3>
                <p className="display-6 fw-bold text-danger mb-0">47</p>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="h5 fw-semibold mb-3 text-secondary">Resumo Semanal</h3>
            <ul className="text-muted ps-3">
              <li>20 novas instalações iniciadas</li>
              <li>15 instalações finalizadas com sucesso</li>
              <li>3 reclamações registradas no suporte</li>
              <li>Índice de satisfação: 4.6/5</li>
            </ul>
          </div>
        </div>

      </main>

      <Footer />
    </>
  )
};
