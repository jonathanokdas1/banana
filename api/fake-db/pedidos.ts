// Definição dos tipos
interface Product {
  name: string;
  price: string; // Ou number, dependendo da sua escolha
}

interface Fee {
  standardRate: number;
  fixedFee: number;
}

interface Order {
  id: string;
  customer: string;
  email: string;
  type: string;
  status: string;
  date: string; // Ou Date, se preferir
  amount: string; // Ou number, dependendo de como você pretende trabalhar com valores
  paymentMethod: string;
  products: Product[];
  transactionId: string;
  fees: Fee;
}

// Definição dos pedidos
const pedidos: Order[] = [
  { 
    id: "001", 
    customer: "Liam Johnson", 
    email: "liam@example.com", 
    type: "Ebook", 
    status: "Pago", 
    date: "2023-06-23", 
    amount: "$250.00", 
    paymentMethod: "Visa", 
    products: [
      { name: "Ebook de Finanças", price: "$150.00" },
      { name: "Ebook de Investimentos", price: "$100.00" }
    ],
    transactionId: "TX123456789",
    fees: {
      standardRate: 5.99,
      fixedFee: 1.00,
    },
  },
  { 
    id: "002", 
    customer: "Olivia Smith", 
    email: "olivia@example.com", 
    type: "Consultoria", 
    status: "Recusado", 
    date: "2023-06-24", 
    amount: "$150.00", 
    paymentMethod: "PIX", 
    products: [
      { name: "Consultoria em Marketing", price: "$150.00" }
    ],
    transactionId: "TX987654321",
    fees: {
      standardRate: 5.99,
      fixedFee: 1.00,
    },
  },
  { 
    id: "003", 
    customer: "Noah Williams", 
    email: "noah@example.com", 
    type: "Curso", 
    status: "Pago", 
    date: "2023-06-25", 
    amount: "$350.00", 
    paymentMethod: "Visa", 
    products: [
      { name: "Curso de Programação", price: "$350.00" }
    ],
    transactionId: "TX456789123",
    fees: {
      standardRate: 5.99,
      fixedFee: 1.00,
    },
  },
  { 
    id: "004", 
    customer: "Emma Brown", 
    email: "emma@example.com", 
    type: "Ebook", 
    status: "Pago", 
    date: "2023-07-01", 
    amount: "$200.00", 
    paymentMethod: "Mastercard", 
    products: [
      { name: "Ebook de Saúde", price: "$200.00" }
    ],
    transactionId: "TX123456788",
    fees: {
      standardRate: 5.99,
      fixedFee: 1.00,
    },
  },
  { 
    id: "005", 
    customer: "Ava Johnson", 
    email: "ava@example.com", 
    type: "Consultoria", 
    status: "Pago", 
    date: "2023-07-02", 
    amount: "$180.00", 
    paymentMethod: "PIX", 
    products: [
      { name: "Consultoria de Finanças", price: "$180.00" }
    ],
    transactionId: "TX123456787",
    fees: {
      standardRate: 5.99,
      fixedFee: 1.00,
    },
  },
  { 
    id: "006", 
    customer: "Isabella Garcia", 
    email: "isabella@example.com", 
    type: "Ebook", 
    status: "Pago", 
    date: "2023-07-03", 
    amount: "$220.00", 
    paymentMethod: "Visa", 
    products: [
      { name: "Ebook de Marketing", price: "$220.00" }
    ],
    transactionId: "TX123456786",
    fees: {
      standardRate: 5.99,
      fixedFee: 1.00,
    },
  },
  { 
    id: "007", 
    customer: "Sophia Martinez", 
    email: "sophia@example.com", 
    type: "Curso", 
    status: "Pago", 
    date: "2023-07-04", 
    amount: "$300.00", 
    paymentMethod: "Mastercard", 
    products: [
      { name: "Curso de Design", price: "$300.00" }
    ],
    transactionId: "TX123456785",
    fees: {
      standardRate: 5.99,
      fixedFee: 1.00,
    },
  },
  { 
    id: "008", 
    customer: "Mia Wilson", 
    email: "mia@example.com", 
    type: "Consultoria", 
    status: "Pago", 
    date: "2023-07-05", 
    amount: "$160.00", 
    paymentMethod: "PIX", 
    products: [
      { name: "Consultoria em Desenvolvimento Pessoal", price: "$160.00" }
    ],
    transactionId: "TX123456784",
    fees: {
      standardRate: 5.99,
      fixedFee: 1.00,
    },
  },
  { 
    id: "009", 
    customer: "James Johnson", 
    email: "james@example.com", 
    type: "Ebook", 
    status: "Recusado", 
    date: "2023-07-06", 
    amount: "$140.00", 
    paymentMethod: "Visa", 
    products: [
      { name: "Ebook de Autodesenvolvimento", price: "$140.00" }
    ],
    transactionId: "TX123456783",
    fees: {
      standardRate: 5.99,
      fixedFee: 1.00,
    },
  },
  { 
    id: "010", 
    customer: "Benjamin Davis", 
    email: "benjamin@example.com", 
    type: "Curso", 
    status: "Pago", 
    date: "2023-07-07", 
    amount: "$400.00", 
    paymentMethod: "Mastercard", 
    products: [
      { name: "Curso de Desenvolvimento Web", price: "$400.00" }
    ],
    transactionId: "TX123456782",
    fees: {
      standardRate: 5.99,
      fixedFee: 1.00,
    },
  },
  { 
    id: "011", 
    customer: "Lucas Brown", 
    email: "lucas@example.com", 
    type: "Ebook", 
    status: "Pago", 
    date: "2023-07-08", 
    amount: "$270.00", 
    paymentMethod: "Visa", 
    products: [
      { name: "Ebook de Negócios", price: "$270.00" }
    ],
    transactionId: "TX123456781",
    fees: {
      standardRate: 5.99,
      fixedFee: 1.00,
    },
  },
  { 
    id: "012", 
    customer: "Ella Thompson", 
    email: "ella@example.com", 
    type: "Consultoria", 
    status: "Pago", 
    date: "2023-07-09", 
    amount: "$190.00", 
    paymentMethod: "PIX", 
    products: [
      { name: "Consultoria em Vendas", price: "$190.00" }
    ],
    transactionId: "TX123456780",
    fees: {
      standardRate: 5.99,
      fixedFee: 1.00,
    },
  },
  { 
    id: "013", 
    customer: "Aiden Martinez", 
    email: "aiden@example.com", 
    type: "Curso", 
    status: "Pago", 
    date: "2023-07-10", 
    amount: "$380.00", 
    paymentMethod: "Mastercard", 
    products: [
      { name: "Curso de Fotografia", price: "$380.00" }
    ],
    transactionId: "TX123456779",
    fees: {
      standardRate: 5.99,
      fixedFee: 1.00,
    },
  },
];

// Exportar os pedidos
export default pedidos;
