interface Product {
  name: string;
  price: string;
}

interface AbandonedCart {
  id: string;
  customer: string;
  email: string;
  whatsapp: string;
  products: Product[];
  totalAmount: string;
  dateAbandoned: string; // Data e hora do abandono
  deviceType: string; // Mobile ou Desktop
  timeSpent: string; // Tempo gasto no site/checkout
}

// Definição dos carrinhos abandonados
const abandonedCarts: AbandonedCart[] = [
  {
    id: "001",
    customer: "Maria Silva",
    email: "maria.silva@example.com",
    whatsapp: "+55 11912345678",
    products: [
      { name: "Curso de Marketing Digital", price: "$300.00" },
    ],
    totalAmount: "$300.00",
    dateAbandoned: "2023-09-05 15:30",
    deviceType: "Mobile",
    timeSpent: "8 minutos",
  },
  {
    id: "002",
    customer: "José Souza",
    email: "jose.souza@example.com",
    whatsapp: "+55 11987654321",
    products: [
      { name: "Ebook de Finanças Pessoais", price: "$150.00" },
    ],
    totalAmount: "$150.00",
    dateAbandoned: "2023-09-05 14:20",
    deviceType: "Desktop",
    timeSpent: "12 minutos",
  },
  {
    id: "003",
    customer: "Ana Oliveira",
    email: "ana.oliveira@example.com",
    whatsapp: "+55 11911223344",
    products: [
      { name: "Consultoria de Negócios", price: "$500.00" },
    ],
    totalAmount: "$500.00",
    dateAbandoned: "2023-09-04 17:45",
    deviceType: "Mobile",
    timeSpent: "5 minutos",
  },
  {
    id: "004",
    customer: "Carlos Pereira",
    email: "carlos.pereira@example.com",
    whatsapp: "+55 11955667788",
    products: [
      { name: "Curso de Desenvolvimento Web", price: "$400.00" },
    ],
    totalAmount: "$400.00",
    dateAbandoned: "2023-09-04 16:30",
    deviceType: "Desktop",
    timeSpent: "10 minutos",
  },
  {
    id: "005",
    customer: "Fernanda Souza",
    email: "fernanda.souza@example.com",
    whatsapp: "+55 11922334455",
    products: [
      { name: "Consultoria em Vendas", price: "$350.00" },
    ],
    totalAmount: "$350.00",
    dateAbandoned: "2023-09-04 14:15",
    deviceType: "Mobile",
    timeSpent: "7 minutos",
  },
  {
    id: "006",
    customer: "Lucas Silva",
    email: "lucas.silva@example.com",
    whatsapp: "+55 11966778899",
    products: [
      { name: "Ebook de Investimentos", price: "$200.00" },
    ],
    totalAmount: "$200.00",
    dateAbandoned: "2023-09-03 18:40",
    deviceType: "Desktop",
    timeSpent: "6 minutos",
  },
  {
    id: "007",
    customer: "Paula Lima",
    email: "paula.lima@example.com",
    whatsapp: "+55 11933445566",
    products: [
      { name: "Curso de Fotografia", price: "$380.00" },
    ],
    totalAmount: "$380.00",
    dateAbandoned: "2023-09-03 15:00",
    deviceType: "Mobile",
    timeSpent: "9 minutos",
  },
  {
    id: "008",
    customer: "Roberto Ferreira",
    email: "roberto.ferreira@example.com",
    whatsapp: "+55 11999887766",
    products: [
      { name: "Consultoria em Finanças", price: "$600.00" },
    ],
    totalAmount: "$600.00",
    dateAbandoned: "2023-09-03 13:25",
    deviceType: "Desktop",
    timeSpent: "15 minutos",
  },
  {
    id: "009",
    customer: "Larissa Gomes",
    email: "larissa.gomes@example.com",
    whatsapp: "+55 11944332211",
    products: [
      { name: "Ebook de Marketing Digital", price: "$220.00" },
    ],
    totalAmount: "$220.00",
    dateAbandoned: "2023-09-02 11:50",
    deviceType: "Mobile",
    timeSpent: "4 minutos",
  },
  {
    id: "010",
    customer: "Ricardo Alves",
    email: "ricardo.alves@example.com",
    whatsapp: "+55 11977665544",
    products: [
      { name: "Curso de Programação", price: "$420.00" },
    ],
    totalAmount: "$420.00",
    dateAbandoned: "2023-09-02 10:30",
    deviceType: "Desktop",
    timeSpent: "11 minutos",
  },
  {
    id: "011",
    customer: "Juliana Nascimento",
    email: "juliana.nascimento@example.com",
    whatsapp: "+55 11955554433",
    products: [
      { name: "Consultoria de Negócios", price: "$550.00" },
    ],
    totalAmount: "$550.00",
    dateAbandoned: "2023-09-01 16:45",
    deviceType: "Mobile",
    timeSpent: "8 minutos",
  },
  {
    id: "012",
    customer: "Marcos Souza",
    email: "marcos.souza@example.com",
    whatsapp: "+55 11911112222",
    products: [
      { name: "Curso de Design Gráfico", price: "$330.00" },
    ],
    totalAmount: "$330.00",
    dateAbandoned: "2023-09-01 14:00",
    deviceType: "Desktop",
    timeSpent: "10 minutos",
  }
];

// Exportar os carrinhos abandonados
export default abandonedCarts;