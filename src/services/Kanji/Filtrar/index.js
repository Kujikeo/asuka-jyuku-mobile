import api from "../../api";

export default async function filtrar(dados) {
  return await api.get("/kanjis", { params: dados });
}
