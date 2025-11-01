import { Button, Card, Spinner } from "reactstrap";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { CreateInstallmentModal } from "../components/CreateInstallmentModal";
import { ImportModal } from "../components/ImportModal";
import { useState } from "react";
import api from "../api";

export const Installations = () => {
  const [loading, setLoading] = useState(false);

  const fetchInstallations = () => {

  };

  const handleExport = async () => {
    setLoading(true);

    try {
      const response = await api.get("api/csv-export/", {
        responseType: "blob", // importante pra receber o arquivo binário
      });

      // Cria um blob URL e simula o download
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "dados.csv");
      document.body.appendChild(link);
      link.click();
      link.remove();

    } catch (error) {
      console.error("Erro ao exportar CSV:", error);
      alert("Erro ao exportar os dados. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />

      <main className="container mt-4 p-4 bg-white shadow rounded" style={{ marginBottom: 100 }}>
        <div className="container my-4">
          <h2 className="h4 fw-bold mb-4">Instalações</h2>

          <div className="d-flex flex-row gap-2 mb-4">
            <CreateInstallmentModal />
            <ImportModal />

            <Button color="secondary" onClick={handleExport} disabled={loading} outline>
              {loading ? (
                <>
                  <Spinner size="sm" className="me-2" /> Exportando...
                </>
              ) : (
                <>
                  <i className="bi bi-download me-2"></i> Exportar CSV
                </>
              )}
            </Button>
          </div>

          <div className="mb-5">
            <Card className="p-3 border-0">
              <h3 className="h5 fw-semibold mb-4">Indicadores de Instalação</h3>

              <div className="d-flex flex-row justify-content-between">
                <Card className="bg-primary-subtle bg-opacity-10 p-3">
                  <p className="mb-0">Instalações em andamento: 12</p>
                </Card>

                <Card className="bg-success-subtle bg-opacity-10 p-3">
                  <p className="mb-0">Instalações concluídas este mês: 9</p>
                </Card>

                <Card className="bg-danger-subtle bg-opacity-10 p-3">
                  <p className="mb-0">Atrasos registrados: 2</p>
                </Card>

                <Card className="bg-warning-subtle bg-opacity-10 p-3">
                  <p className="mb-0">Média de dias por instalação: 14</p>
                </Card>
              </div>
            </Card>
          </div>

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
        </div>
      </main>

      <Footer />
    </>
  )
};