import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const ClientFeedback = () => {
  return (
    <>
      <Header />

      <main className="container mt-4 p-4 bg-white shadow rounded" style={{ marginBottom: 100 }}>
        <div className="container my-4">
          <h2 className="h4 fw-bold mb-4 text-primary">Feedback do Cliente</h2>

          <section className="mb-5">
            <h3 className="h5 fw-semibold mb-3 text-secondary">Avaliações Recentes</h3>
            <ul className="list-unstyled">
              <li className="p-3 mb-3 border rounded shadow-sm bg-success bg-opacity-10">
                <p className="mb-1"><strong>Cliente:</strong> Condomínio Sol Nascente</p>
                <p className="mb-1"><strong>Comentário:</strong> Excelente atendimento, rapidez na resolução.</p>
                <p className="mb-1 text-muted"><strong>Data:</strong> 20/05/2025</p>
                <p className="mb-0 text-warning fw-semibold"><strong>Satisfação:</strong> ⭐⭐⭐⭐⭐</p>
              </li>

              <li className="p-3 mb-3 border rounded shadow-sm bg-warning bg-opacity-10">
                <p className="mb-1"><strong>Cliente:</strong> Edifício Azul Marinho</p>
                <p className="mb-1"><strong>Comentário:</strong> Técnico atencioso, mas demora na troca de peças.</p>
                <p className="mb-1 text-muted"><strong>Data:</strong> 18/05/2025</p>
                <p className="mb-0 text-warning fw-semibold"><strong>Satisfação:</strong> ⭐⭐⭐⭐☆</p>
              </li>

              <li className="p-3 mb-3 border rounded shadow-sm bg-danger bg-opacity-10">
                <p className="mb-1"><strong>Cliente:</strong> Shopping Central</p>
                <p className="mb-1"><strong>Comentário:</strong> Problema não resolvido no prazo esperado.</p>
                <p className="mb-1 text-muted"><strong>Data:</strong> 15/05/2025</p>
                <p className="mb-0 text-warning fw-semibold"><strong>Satisfação:</strong> ⭐⭐☆☆☆</p>
              </li>
            </ul>
          </section>

          <section>
            <h3 className="h5 fw-semibold mb-3 text-secondary">Resumo Geral</h3>
            <ul className="list-disc list-inside text-muted ps-3">
              <li><strong>Feedbacks recebidos este mês:</strong> 45</li>
              <li><strong>Satisfação média:</strong> 88%</li>
              <li><strong>Tempo médio de resposta:</strong> 4 horas</li>
              <li><strong>Comentários positivos:</strong> 70%</li>
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
};