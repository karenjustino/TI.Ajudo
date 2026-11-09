/* ui/spreadsheet.js — modelo, importação e exportação em .xlsx (biblioteca SheetJS, carregada por <script> no HTML). */
import { TRAILS } from "../data/catalog.js";
import { $, setStatus } from "./dom.js";

const normalize = (value) =>
  String(value).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();

function download(rows, sheetName, fileName, columnWidths) {
  const XLSX = window.XLSX;
  if (!XLSX) {
    setStatus("A biblioteca de planilhas não carregou. Verifique sua conexão e recarregue a página.");
    return;
  }
  const sheet = XLSX.utils.json_to_sheet(rows);
  sheet["!cols"] = columnWidths.map((wch) => ({ wch }));
  const book = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(book, sheet, sheetName);
  XLSX.writeFile(book, fileName);
}

function catalogRows() {
  return TRAILS.flatMap((trail) =>
    trail.steps.flatMap((step, i) =>
      step.links.map((link) => ({
        "Trilha": trail.name, "Etapa": i + 1, "Título da etapa": step.title, "Conteúdo": link.label, "Link": link.url,
      }))));
}

/** Baixa o plano da trilha recomendada, com colunas para acompanhar o progresso. */
export function exportPlan(profile) {
  const rows = profile.trail.steps.flatMap((step, i) =>
    step.links.map((link) => ({
      "Etapa": i + 1, "Título da etapa": step.title, "Conteúdo": link.label, "Link": link.url, "Concluído": "", "Anotações": "",
    })));
  download(rows, "Meu plano", "meu-plano-ti-ajudo.xlsx", [8, 30, 28, 50, 12, 30]);
}

/** Lê a planilha e troca as etapas das trilhas citadas. Retorna quantas linhas valeram. */
async function importFile(file, onCatalogChange) {
  try {
    const XLSX = window.XLSX;
    const book = XLSX.read(await file.arrayBuffer());
    const rows = XLSX.utils.sheet_to_json(book.Sheets[book.SheetNames[0]]);
    const byTrail = {};
    let valid = 0, invalid = 0;

    rows.forEach((raw) => {
      const row = Object.fromEntries(Object.entries(raw).map(([key, value]) => [normalize(key), value]));
      const trailIndex = TRAILS.findIndex((t) => normalize(t.name) === normalize(row.trilha ?? ""));
      const stepNumber = parseInt(row.etapa, 10);
      const label = String(row.conteudo ?? "").trim();
      const url = String(row.link ?? "").trim();

      if (trailIndex < 0 || !(stepNumber >= 1 && stepNumber <= 30) || !label || !/^https?:\/\//i.test(url)) {
        invalid++;
        return;
      }
      const steps = (byTrail[trailIndex] ??= {});
      const step = (steps[stepNumber] ??= { title: String(row["titulo da etapa"] ?? `Etapa ${stepNumber}`).trim(), links: [] });
      step.links.push({ label, url });
      valid++;
    });

    Object.entries(byTrail).forEach(([trailIndex, steps]) => {
      TRAILS[trailIndex].steps = Object.keys(steps).map(Number).sort((a, b) => a - b).map((n) => steps[n]);
    });

    if (!valid) {
      setStatus("Nenhuma linha válida. Baixe o modelo e confira os nomes das colunas e das trilhas.");
      return;
    }
    const ignored = invalid ? ` e ${invalid} linha(s) ignorada(s) por dados inválidos.` : ".";
    setStatus(`Importação concluída: ${valid} conteúdos em ${Object.keys(byTrail).length} trilha(s)${ignored}`);
    onCatalogChange();
  } catch {
    setStatus("Não foi possível ler esse arquivo. Use .xlsx ou .csv.");
  }
}

export function initSpreadsheet({ onCatalogChange }) {
  $("tpl").addEventListener("click", () => {
    download(catalogRows(), "Conteudos", "modelo-conteudos-ti-ajudo.xlsx", [24, 8, 30, 28, 50]);
    setStatus("Modelo baixado. Edite as linhas, salve e use Importar planilha.");
  });
  $("imp").addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) importFile(file, onCatalogChange);
    e.target.value = "";
  });
}