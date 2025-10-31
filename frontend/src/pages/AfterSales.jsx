import { Footer } from "../components/Footer"
import { Header } from "../components/Header"

export const AfterSales = () => {
  return (
    <>
      <Header />

      <main className="container mt-4 p-4 bg-white shadow rounded" style={{ marginBottom: 100 }}>
        <div className="container my-4">
          <h2 className="h4 fw-bold mb-4 text-primary">Pós-venda</h2>

          <div className="row g-4">
            <div className="col-md-6">
              <div className="p-3 bg-success bg-opacity-10 rounded shadow-sm">
                <h3 className="h6 fw-semibold text-success mb-2">Chamados Ativos</h3>
                <ul className="list-disc list-inside text-dark ps-3">
                  <li>Cliente: Edifício Central - Verificação de ruído no motor</li>
                  <li>Cliente: Hospital Vida - Botão de emergência com falha</li>
                  <li>Cliente: Residencial Azul - Solicitação de ajuste na velocidade</li>
                </ul>
              </div>
            </div>

            <div className="col-md-6">
              <div className="p-3 bg-warning bg-opacity-10 rounded shadow-sm">
                <h3 className="h6 fw-semibold text-warning mb-2">Agendamentos Futuros</h3>
                <ul className="list-disc list-inside text-dark ps-3">
                  <li>28/05/2025 - Revisão periódica - Shopping Center Norte</li>
                  <li>30/05/2025 - Instalação de atualização de software - Torre Sul</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="h5 fw-semibold mb-2 text-secondary">Resumo Operacional</h3>
            <ul className="list-disc list-inside text-muted ps-3">
              <li>Chamados resolvidos este mês: 22</li>
              <li>Tempo médio de resposta: 6h</li>
              <li>Satisfação do cliente: 91%</li>
              <li>Equipe técnica ativa: 14 profissionais</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}