import { Footer } from "../components/Footer"
import { Header } from "../components/Header"

export const Settings = () => {
  return (
    <>
      <Header />

      <main className="container my-4 p-4 bg-white shadow rounded">
        <div className="container my-4">
          <h2 className="h4 fw-bold mb-4">Configurações do Sistema</h2>

          <form className="mx-auto" style={{ maxWidth: 600 }}>
            <div className="mb-3">
              <label for="email" className="form-label fw-medium">Email de Notificações</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="exemplo@empresa.com"
              />
            </div>

            <div className="mb-3">
              <label for="alertas" className="form-label fw-medium">Alertas de Sistema</label>
              <select id="alertas" name="alertas" className="form-select">
                <option value="todos">Todos os alertas</option>
                <option value="criticos">Somente críticos</option>
                <option value="desligar">Desligar alertas</option>
              </select>
            </div>

            <div className="mb-4">
              <label for="idioma" className="form-label fw-medium">Idioma</label>
              <select id="idioma" name="idioma" className="form-select">
                <option value="pt">Português</option>
                <option value="en">Inglês</option>
                <option value="es">Espanhol</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary px-4">
              Salvar Configurações
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </>
  )
};