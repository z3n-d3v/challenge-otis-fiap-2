import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const KPIs = () => {
  return (
    <>
      <Header />

      <main className="container mt-4 p-4 bg-white shadow rounded" style={{ marginBottom: 100 }}>
        <div className="container my-4">
          <h2 className="h4 fw-bold mb-4">KPIs</h2>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="bg-light border-start border-4 border-primary p-4 rounded shadow-sm">
                <h3 className="fw-semibold text-primary mb-2">Prazo Médio de Instalação</h3>
                <p className="h3 fw-bold text-primary mb-0">14 dias</p>
                <p className="text-muted small mt-1">Meta: 12 dias</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="bg-light border-start border-4 border-success p-4 rounded shadow-sm">
                <h3 className="fw-semibold text-success mb-2">Custo Médio por Projeto</h3>
                <p className="h3 fw-bold text-success mb-0">$ 25.000</p>
                <p className="text-muted small mt-1">Meta: $ 23.000</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="bg-light border-start border-4 border-danger p-4 rounded shadow-sm">
                <h3 className="fw-semibold text-danger mb-2">Índice de Qualidade</h3>
                <p className="h3 fw-bold text-danger mb-0">92%</p>
                <p className="text-muted small mt-1">Meta: 95%</p>
              </div>
            </div>
          </div>

          <section className="mt-5">
            <h3 className="h5 fw-semibold mb-3">Detalhes por Região</h3>
            <div className="table-responsive shadow-sm rounded">
              <table className="table table-bordered align-middle mb-0">
                <thead className="table-primary text-primary">
                  <tr>
                    <th>Região</th>
                    <th>Prazo Médio (dias)</th>
                    <th>Custo Médio ($)</th>
                    <th>Índice de Qualidade (%)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Brasil</td>
                    <td>13</td>
                    <td>24.000</td>
                    <td>94%</td>
                  </tr>
                  <tr>
                    <td>Argentina</td>
                    <td>15</td>
                    <td>26.000</td>
                    <td>90%</td>
                  </tr>
                  <tr>
                    <td>Chile</td>
                    <td>14</td>
                    <td>25.500</td>
                    <td>91%</td>
                  </tr>
                  <tr>
                    <td>México</td>
                    <td>16</td>
                    <td>27.000</td>
                    <td>89%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
};