import styles from "./page.module.css";
import Produto from "@/app/components/Produto";
import { getProdutoPorSlug } from "../../../lib/api";

async function fetchProdutoEspecifico(slug){
  const res = await fetch(`http://localhost:3000/api/produto/${slug}`);

  if (!res.ok){
    throw new Error ("Produto não encontrado");
  }
  const produto = res.json()

  return produto;
}

export default async function ProdutoPage({ params }) {
  const slugProduto = params.slug;

  const { produtoFiltrado } = await fetchProdutoEspecifico(slugProduto);

  return (
    <main className={styles.main}>
      <Produto produto={produtoFiltrado[0]} />
    </main>
  );
}
