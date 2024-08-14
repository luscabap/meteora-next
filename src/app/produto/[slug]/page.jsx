import styles from "./page.module.css";
import Produto from "@/app/components/Produto";
import { getProdutoPorSlug } from "../../../lib/api";

async function fetchProdutoEspecifico(slug){
  const res = await fetch(`https://gist.githubusercontent.com/luscabap/8aa335daadfad559693b229daa7df5db/raw/a5cf15e340988df87fd2fcf523637e5205fd97e0/gistfile1.txt`);

  if (!res.ok){
    throw new Error ("Produto não encontrado");
  }
  const produto = await res.json();

  const produtoFiltrado = produto.produtos.find(item => item.slug === slug)
  
  return {
    produtoFiltrado: produtoFiltrado
  };
}

export default async function ProdutoPage({ params }) {
  const slugProduto = params.slug;

  const { produtoFiltrado } = await fetchProdutoEspecifico(slugProduto);

  return (
    <main className={styles.main}>
      <Produto produto={produtoFiltrado} />
    </main>
  );
}
