import { useCallback, useState } from "react";
import { Alert, Button, Card, CardBody, Modal, ModalBody, ModalFooter, ModalHeader, Spinner } from "reactstrap";
import { useDropzone } from "react-dropzone";
import api from "../api";

export const ImportModal = () => {
  const [modal, setModal] = useState(false);
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const toggle = () => setModal(!modal);

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
      setMessage(null);
      setError(null);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "text/csv": [".csv"] },
    multiple: false,
  });

  const handleUpload = async () => {
    if (!file) {
      setError("Selecione um arquivo CSV antes de enviar.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    setUploading(true);
    setError(null);
    setMessage(null);

    try {
      const response = await api.post("api/importar-csv/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setMessage(response.data.mensagem || "Arquivo enviado com sucesso!");
    } catch (err) {
      setError(err.response?.data?.errors || "Erro ao enviar o arquivo.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <>
      <Button color="primary" onClick={toggle}>
        Importar CSV
      </Button>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Importação CSV</ModalHeader>

        <ModalBody>
          {/* Área de Dropzone */}
          <div
            {...getRootProps()}
            className={`border rounded p-4 text-center ${isDragActive ? "bg-light border-primary" : "border-secondary"
              }`}
            style={{ cursor: "pointer" }}
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <p className="mb-0 text-primary fw-semibold">Solte o arquivo aqui...</p>
            ) : (
              <p className="mb-0 text-muted">
                Arraste e solte um arquivo CSV aqui, ou <strong>clique para selecionar</strong>
              </p>
            )}
          </div>

          {/* Preview do arquivo selecionado */}
          {file && (
            <Alert color="info" className="py-2 mt-2 d-flex justify-content-between align-items-center">
              <span>
                <i className="bi bi-file-earmark-spreadsheet"></i> {file.name}
              </span>
              <Button color="link" size="sm" onClick={() => setFile(null)}>
                Remover
              </Button>
            </Alert>
          )}

          {/* Mensagens de sucesso/erro */}
          {message && <Alert color="success">{message}</Alert>}
          {error && <Alert color="danger">{error}</Alert>}
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={handleUpload} disabled={uploading}>
            {uploading ? (
              <>
                <Spinner size="sm" className="me-2" />
                Enviando...
              </>
            ) : (
              "Enviar CSV"
            )}
          </Button>{' '}

          <Button color="secondary" onClick={toggle}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
};
