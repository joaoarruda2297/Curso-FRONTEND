import { useEffect } from "react";
import { Container } from "./styles";
import { api } from "../../services/api";

export function SalesReport() {
  useEffect(() => {
    api
      .get("/sales", {withCredentials: true})
  }, []);

  return (
    <Container>
      <h1>Relatório de Vendas</h1>
    </Container>

  )
}