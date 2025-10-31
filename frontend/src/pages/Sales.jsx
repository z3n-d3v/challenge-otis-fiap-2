import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const Sales = () => {
  return (
    <>
      <Header />

      <main className="container my-4 p-4 bg-white shadow rounded">
        <div className="container my-4">
          <h2 className="h4 fw-bold mb-4">Vendas</h2>

          <div className="table-responsive shadow-sm rounded">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-primary text-primary">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Cliente</th>
                  <th scope="col">País</th>
                  <th scope="col">Modelo</th>
                  <th scope="col">Status</th>
                  <th scope="col">Data da Venda</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>001</td>
                  <td>Construtora Ágil</td>
                  <td>Brasil</td>
                  <td>EcoLift 3000</td>
                  <td className="text-success fw-semibold">Aprovado</td>
                  <td>15/05/2025</td>
                </tr>
                <tr>
                  <td>002</td>
                  <td>Edifícios Torre Alta</td>
                  <td>Chile</td>
                  <td>LuxRide 5000</td>
                  <td className="text-warning fw-semibold">Em Análise</td>
                  <td>18/05/2025</td>
                </tr>
                <tr>
                  <td>003</td>
                  <td>Residencial Andino</td>
                  <td>Peru</td>
                  <td>UrbanLift 2000</td>
                  <td className="text-danger fw-semibold">Rejeitado</td>
                  <td>10/05/2025</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-5">
            <h3 className="h5 fw-semibold mb-3">Resumo de Vendas</h3>
            <ul className="text-muted ps-3">
              <li>Total de propostas enviadas: 45</li>
              <li>Vendas aprovadas: 32</li>
              <li>Negociações em andamento: 8</li>
              <li>Propostas recusadas: 5</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
};