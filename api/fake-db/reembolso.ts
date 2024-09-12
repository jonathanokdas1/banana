// Definição dos tipos
interface Product {
  name: string;
  price: string; 
}

interface RefundRequest {
  orderId: string;
  date: string;
  product: string;
  customerName: string;
  cpf: string;
  email: string;
  refundDate: string;
  justification: string;
}

// Definição dos reembolsos solicitados
const reembolsos: RefundRequest[] = [
  {
    orderId: "001",
    date: "2023-06-23",
    product: "Ebook de Finanças",
    customerName: "Liam Johnson",
    cpf: "108.562.169-33",
    email: "liam@example.com",
    refundDate: "2023-07-01",
    justification: "Produto não correspondeu às expectativas.",
    totalAmount: "R$10"
  },
  {
    orderId: "002",
    date: "2023-06-24",
    product: "Consultoria em Marketing",
    customerName: "Olivia Smith",
    cpf: "123.456.789-00",
    email: "olivia@example.com",
    refundDate: "2023-07-03",
    justification: "Não foi possível agendar a consultoria.",
  },
  {
    orderId: "003",
    date: "2023-06-25",
    product: "Curso de Programação",
    customerName: "Noah Williams",
    cpf: "987.654.321-00",
    email: "noah@example.com",
    refundDate: "2023-07-05",
    justification: "Conteúdo abaixo do esperado.",
  },
  {
    orderId: "004",
    date: "2023-07-01",
    product: "Ebook de Saúde",
    customerName: "Emma Brown",
    cpf: "111.222.333-44",
    email: "emma@example.com",
    refundDate: "2023-07-10",
    justification: "Já possuo este material.",
  },
  {
    orderId: "005",
    date: "2023-07-02",
    product: "Consultoria de Finanças",
    customerName: "Ava Johnson",
    cpf: "555.666.777-88",
    email: "ava@example.com",
    refundDate: "2023-07-11",
    justification: "Não pude comparecer à consultoria.",
  },
  {
    orderId: "006",
    date: "2023-07-03",
    product: "Ebook de Marketing",
    customerName: "Isabella Garcia",
    cpf: "333.444.555-66",
    email: "isabella@example.com",
    refundDate: "2023-07-12",
    justification: "Material desatualizado.",
  },
  {
    orderId: "007",
    date: "2023-07-04",
    product: "Curso de Design",
    customerName: "Sophia Martinez",
    cpf: "777.888.999-00",
    email: "sophia@example.com",
    refundDate: "2023-07-13",
    justification: "O curso não atendeu minhas expectativas.",
  },
  {
    orderId: "008",
    date: "2023-07-05",
    product: "Consultoria em Desenvolvimento Pessoal",
    customerName: "Mia Wilson",
    cpf: "222.333.444-55",
    email: "mia@example.com",
    refundDate: "2023-07-15",
    justification: "Mudança de planos.",
  },
  {
    orderId: "009",
    date: "2023-07-06",
    product: "Ebook de Autodesenvolvimento",
    customerName: "James Johnson",
    cpf: "111.111.111-11",
    email: "james@example.com",
    refundDate: "2023-07-16",
    justification: "Já possuo o conteúdo.",
  },
  {
    orderId: "010",
    date: "2023-07-07",
    product: "Curso de Desenvolvimento Web",
    customerName: "Benjamin Davis",
    cpf: "999.888.777-66",
    email: "benjamin@example.com",
    refundDate: "2023-07-17",
    justification: "Falta de tempo para realizar o curso.",
  },
  {
    orderId: "011",
    date: "2023-07-08",
    product: "Ebook de Negócios",
    customerName: "Lucas Brown",
    cpf: "666.555.444-33",
    email: "lucas@example.com",
    refundDate: "2023-07-18",
    justification: "Conteúdo superficial.",
  },
  {
    orderId: "012",
    date: "2023-07-09",
    product: "Consultoria em Vendas",
    customerName: "Ella Thompson",
    cpf: "444.333.222-11",
    email: "ella@example.com",
    refundDate: "2023-07-19",
    justification: "Consultoria não foi agendada corretamente.",
  },
];

// Exportar os reembolsos
export default reembolsos;
