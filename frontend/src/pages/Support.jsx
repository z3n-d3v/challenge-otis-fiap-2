import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const Support = () => {
  return (
    <>
      <Header />

      <main role="main" className="container mt-4 p-4 bg-white shadow rounded" style={{ marginBottom: 100 }}>
        <div className="container my-4">
          <h2 className="h4 fw-bold mb-4">Suporte</h2>

          <section className="mb-5">
            <h3 className="h5 fw-semibold mb-3">Abertura de Tickets</h3>
            <form className="mx-auto" style={{ maxWidth: "600px" }}>
              <div className="mb-3">
                <label htmlFor="cliente" className="form-label fw-medium">
                  Cliente
                </label>
                <input
                  type="text"
                  id="cliente"
                  name="cliente"
                  className="form-control"
                  placeholder="Nome do cliente"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="assunto" className="form-label fw-medium">
                  Assunto
                </label>
                <input
                  type="text"
                  id="assunto"
                  name="assunto"
                  className="form-control"
                  placeholder="Resumo do problema"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="descricao" className="form-label fw-medium">
                  Descrição
                </label>
                <textarea
                  id="descricao"
                  name="descricao"
                  rows="4"
                  className="form-control"
                  placeholder="Detalhes do problema"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary px-4">
                Enviar Ticket
              </button>
            </form>
          </section>

          <section>
            <h3 className="h5 fw-semibold mb-3">Tickets Abertos</h3>
            <div className="table-responsive shadow-sm rounded">
              <table className="table table-bordered align-middle mb-0">
                <thead className="table-primary text-primary">
                  <tr>
                    <th>Ticket #</th>
                    <th>Cliente</th>
                    <th>Status</th>
                    <th>Data de Abertura</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>10234</td>
                    <td>Edifício Central</td>
                    <td className="text-warning fw-semibold">Em análise</td>
                    <td>20/05/2025</td>
                  </tr>
                  <tr>
                    <td>10238</td>
                    <td>Residencial Azul</td>
                    <td className="text-success fw-semibold">Resolvido</td>
                    <td>18/05/2025</td>
                  </tr>
                  <tr>
                    <td>10245</td>
                    <td>Shopping Central</td>
                    <td className="text-danger fw-semibold">Aberto</td>
                    <td>15/05/2025</td>
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