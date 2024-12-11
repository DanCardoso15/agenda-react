import { useEffect, useState } from "react";
import { Button, ButtonGroup, Container } from "react-bootstrap";
import Header from "../../components/Header/Header";

function Home() {
  const [agendamentos, setagendamentos] = useState([]);

  async function loadData() {
    const resposta = await fetch("http://localhost:3000/agendamentos");
    const dados = await resposta.json();
    setagendamentos(dados);
  }

  async function excluirAgendamento(id) {
    await fetch(`http://localhost:3000/agendamentos/${id}`, {
      method: "DELETE",
    });
    loadData();
  }

  async function editarAgendamento(id, atual) {
    const nome = window.prompt("Digite um novo nome:", atual.nome);
    const descricao = window.prompt(
      "Digite uma nova descricao:",
      atual.descricao
    );
    const dataAgendamento = window.prompt(
      "Digite uma nova data:",
      atual.dataAgendamento
    );
    const horario = window.prompt("Digite um novo horario:", atual.horario);

    if (nome) {
      await fetch(`http://localhost:3000/agendamentos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome }),
      });
    }
    if (descricao) {
      await fetch(`http://localhost:3000/agendamentos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ descricao }),
      });
    }
    if (dataAgendamento) {
      await fetch(`http://localhost:3000/agendamentos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ dataAgendamento }),
      });
    }
    if (horario) {
      await fetch(`http://localhost:3000/agendamentos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ horario }),
      });
    }

    loadData();
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <Header />
      <Container>
        <div className="border p-4 rounded shadow">
          <h1 className="mb-3 text-center">Lista de Agendamentos</h1>
          <table className="table table-striped table-bordered">
            <thead>
              <tr className="text-center">
                <th>Paciente</th>
                <th>Procedimento</th>
                <th>Data</th>
                <th>Horário</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {agendamentos.map((agendamento) => (
                <tr key={agendamento.id}>
                  <td>{agendamento.nome}</td>
                  <td>{agendamento.descricao}</td>
                  <td className="text-center">{agendamento.dataAgendamento}</td>
                  <td className="text-center">{agendamento.horario}</td>
                  <td style={{ textAlign: "center" }}>
                    <Button
                      variant="primary"
                      size="sm"
                      style={{ width: "7.5rem" }}
                      onClick={() =>
                        editarAgendamento(agendamento.id, agendamento)
                      }
                    >
                      Editar
                    </Button>{" "}
                    <Button
                      variant="primary"
                      size="sm"
                      style={{ width: "7.5rem" }}
                      onClick={() => excluirAgendamento(agendamento.id)}
                    >
                      Excluir
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
}

export default Home;
