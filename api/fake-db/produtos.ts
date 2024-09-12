// Definição dos produtos simulados
const produtos: Product[] = [
  {
    id: "001",
    paymentType: "Cartão de Crédito",
    deliveryMethod: "Download Digital",
    productName: "Ebook de Finanças Pessoais",
    description: "Guia completo para gerenciar suas finanças pessoais e economizar mais.",
    salesPage: "https://example.com/financas-pessoais",
    status: "Ativo", 
    price: "R$ 29,90",
    totalSales: 150,
    createdAt: "2023-06-01",
    productType: "ebook" // Tipo de produto
  },
  {
    id: "002",
    paymentType: "Pix",
    deliveryMethod: "Acesso ao Curso Online",
    productName: "Curso de Desenvolvimento Web",
    description: "Aprenda a criar sites e aplicações web modernas do zero.",
    salesPage: "https://example.com/desenvolvimento-web",
    status: "Ativo",
    price: "R$ 199,90",
    totalSales: 230,
    createdAt: "2023-05-15",
    productType: "curso" // Tipo de produto
  },
  {
    id: "003",
    paymentType: "Boleto Bancário",
    deliveryMethod: "Download Digital",
    productName: "Ebook de Marketing Digital",
    description: "Estratégias de marketing digital para aumentar sua presença online.",
    salesPage: "https://example.com/marketing-digital",
    status: "Lixo",
    price: "R$ 49,90",
    totalSales: 90,
    createdAt: "2023-04-10",
    productType: "ebook" // Tipo de produto
  },
  {
    id: "004",
    paymentType: "Cartão de Crédito",
    deliveryMethod: "Acesso ao Grupo VIP",
    productName: "Consultoria de Vendas",
    description: "Acesse dicas exclusivas para melhorar suas técnicas de vendas.",
    salesPage: "https://example.com/consultoria-vendas",
    status: "Arquivado",
    price: "R$ 299,90",
    totalSales: 45,
    createdAt: "2023-07-20",
    productType: "servico" // Tipo de produto
  },
  {
    id: "005",
    paymentType: "Cartão de Débito",
    deliveryMethod: "Download Digital",
    productName: "Ebook de Produtividade",
    description: "Aumente sua produtividade com técnicas comprovadas.",
    salesPage: "https://example.com/produtividade",
    status: "Ativo",
    price: "R$ 19,90",
    totalSales: 310,
    createdAt: "2023-03-05",
    productType: "ebook" // Tipo de produto
  }
];

// Função para buscar um produto pelo ID
export function getProductById(id: string) {
  return produtos.find((product) => product.id === id);
}

// Exportar os produtos simulados
export default produtos;
