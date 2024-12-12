import { Button, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function AgendamentoForm() {
  const [agendamentos, setagendamentos] = useState([]);
  const { handleSubmit, register, reset } = useForm();

  async function loadData() {
    const resposta = await fetch("http://localhost:3000/agendamentos");
    const dados = await resposta.json();
    setagendamentos(dados);
  }

  async function salvarAgendamento(dados) {
    await fetch("http://localhost:3000/agendamentos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dados),
    });
    loadData();
    reset();
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <Header />
      <Container className="d-flex justify-content-center mt-4">
        <div className="border p-4 rounded shadow" style={{ width: "35rem" }}>
          <h1 className="mb-3 text-center">Novo Agendamento</h1>

          <Form onSubmit={handleSubmit(salvarAgendamento)}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="nome">Nome do Paciente:</Form.Label>
              <Form.Control type="text" id="nome" {...register("nome")} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="descricao">Procedimento:</Form.Label>
              <Form.Control
                as="textarea"
                type="text"
                id="descricao"
                {...register("descricao")}
              />
            </Form.Group>

            <Row>
              <Form.Group as={Col}>
                <Form.Label htmlFor="dataAgendamento">
                  Data de Agendamento:
                </Form.Label>
                <Form.Control
                  type="text"
                  id="dataAgendamento"
                  {...register("dataAgendamento")}
                />
                <Form.Text id="passwordHelpBlock" muted>
                  Formato: AAAA-MM-DD
                </Form.Text>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label htmlFor="horario">Horário:</Form.Label>
                <Form.Control
                  type="time"
                  id="horario"
                  {...register("horario")}
                />
              </Form.Group>
            </Row>

            <Button type="submit" className="w-100 mt-3" variant="primary">
              Adicionar
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
}

export default AgendamentoForm;
