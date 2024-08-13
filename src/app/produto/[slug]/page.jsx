import styles from "./page.module.css";
import Produto from "@/app/components/Produto";
import { getProdutoPorSlug } from "../../../lib/api";

export default async function ProdutoPage({ params }) {
  const produto = getProdutoPorSlug(params.slug);
  const fetchProduto = fetchProduto()

  return (
    <main className={styles.main}>
      <Produto produto={produto} />
    </main>
  );
}
