import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const Installations = () => {
  return (
    <>
      <Header />

      <main className="container mt-4 p-4 bg-white shadow rounded" style={{ marginBottom: 100 }}>
        <div className="container my-4">
          <h2 className="h4 fw-bold mb-4">Instalações</h2>

          <div className="table-responsive shadow-sm rounded">
            <table className="table table-bordered align-middle mb-0">
              <thead className="table-primary text-primary">
                <tr>
                  <th>#</th>
                  <th>Projeto</th>
                  <th>País</th>
                  <th>Data de Início</th>
                  <th>Status</th>
                  <th>Responsável</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>101</td>
                  <td>Residencial São Pedro</td>
                  <td>Brasil</td>
                  <td>01/05/2025</td>
                  <td className="text-primary fw-semibold">Em Andamento</td>
                  <td>Carlos Mendes</td>
                </tr>
                <tr>
                  <td>102</td>
                  <td>Centro Empresarial Lima</td>
                  <td>Peru</td>
                  <td>10/04/2025</td>
                  <td className="text-success fw-semibold">Concluído</td>
                  <td>Lucía Fernández</td>
                </tr>
                <tr>
                  <td>103</td>
                  <td>Torre Del Sol</td>
                  <td>México</td>
                  <td>22/05/2025</td>
                  <td className="text-warning fw-semibold">Aguardando Materiais</td>
                  <td>Fernando Ruiz</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-5">
            <h3 className="h5 fw-semibold mb-2">Indicadores de Instalação</h3>
            <ul className="text-muted">
              <li>Instalações em andamento: 12</li>
              <li>Instalações concluídas este mês: 9</li>
              <li>Atrasos registrados: 2</li>
              <li>Média de dias por instalação: 14</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
};