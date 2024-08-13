import { getTodosProdutos } from "@/lib/api";
import { NextResponse } from "next/server";

export async function GET(req, context){
  console.log(context);

  const { params } = context;

  const produtos = getTodosProdutos();

  if (!produtos) {
    return new Response(null, { status: 404 });
  }

  const produtoFiltrado = produtos.filter(item => item.slug === params.slug);

  if (!produtoFiltrado){
    return new Response(null, { status: 404 });
  }
  
  return NextResponse.json({
    produtoFiltrado
  })
}