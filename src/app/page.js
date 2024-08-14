import styles from "./page.module.css";
import { Categorias } from "./components/Categorias";
import { Produtos } from "./components/Produtos";
import { getCategorias, getTodosProdutos } from "../lib/api";

async function fetchProdutosApi(){
  const res = await fetch("https://gist.githubusercontent.com/luscabap/8aa335daadfad559693b229daa7df5db/raw/a5cf15e340988df87fd2fcf523637e5205fd97e0/gistfile1.txt");
  

  if (!res.ok) {
    throw new Error("Não foi possível obter os dados")
  }

  const data = await res.json();

  return {
    produtos: data.produtos
  };
}

async function fetchCategoriasApi(){
  const res = await fetch("https://gist.githubusercontent.com/luscabap/8aa335daadfad559693b229daa7df5db/raw/a5cf15e340988df87fd2fcf523637e5205fd97e0/gistfile1.txt");

  if (!res.ok) {
    throw new Error("Não foi possível encontrar as categorias")
  }

  const data = await res.json();

  return {
    categorias: data.categorias
  };
}

export default async function Home() {
  const { produtos } = await fetchProdutosApi();
  const { categorias } = await fetchCategoriasApi();

  return (
    <>
      <main className={styles.main}>
        <Categorias categorias={categorias} />
        <Produtos produtos={produtos} />
      </main>
    </>
  );
}
