export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  stack: string[];
  imageUrl: string;
  imageAlt: string;
  liveUrl?: string;
  repoUrl?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Dashboard Analytics',
    shortDescription: 'Painel de métricas e gráficos em tempo real para negócios.',
    fullDescription:
      'Dashboard completo com autenticação, gráficos interativos (Chart.js), filtros por período, exportação de relatórios e tema claro/escuro. Integração com API REST e cache para performance.',
    stack: ['React', 'TypeScript', 'Tailwind', 'Chart.js', 'Node.js'],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    imageAlt: 'Dashboard com gráficos e métricas',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: '2',
    title: 'E-commerce Full-Stack',
    shortDescription: 'Loja virtual com carrinho, pagamento e painel admin.',
    fullDescription:
      'E-commerce com catálogo, carrinho, checkout simulado, painel administrativo para produtos e pedidos. API com Node.js, banco PostgreSQL, upload de imagens e notificações por e-mail.',
    stack: ['Next.js', 'PostgreSQL', 'Stripe', 'Prisma', 'Tailwind'],
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    imageAlt: 'E-commerce e loja online',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: '3',
    title: 'API REST Documentada',
    shortDescription: 'Backend escalável com documentação OpenAPI/Swagger.',
    fullDescription:
      'API REST para gestão de recursos com autenticação JWT, rate limiting, validação com Zod, documentação Swagger e testes automatizados. Deploy em container Docker.',
    stack: ['Node.js', 'Express', 'PostgreSQL', 'Docker', 'Swagger'],
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
    imageAlt: 'Código e API',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: '4',
    title: 'App de Tarefas',
    shortDescription: 'Gerenciador de tarefas com drag-and-drop e filtros.',
    fullDescription:
      'To-do app com listas, subtarefas, prioridades, drag-and-drop (dnd-kit), filtros e persistência local. PWA com suporte offline e notificações.',
    stack: ['React', 'TypeScript', 'Zustand', 'Tailwind', 'PWA'],
    imageUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80',
    imageAlt: 'Lista de tarefas',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: '5',
    title: 'Blog com CMS',
    shortDescription: 'Blog com editor rich text e comentários.',
    fullDescription:
      'Blog com artigos, categorias, comentários, busca e CMS headless (Markdown). SSG com Next.js, syntax highlight para código e SEO otimizado com meta tags dinâmicas.',
    stack: ['Next.js', 'MDX', 'Tailwind', 'Vercel'],
    imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80',
    imageAlt: 'Blog e artigos',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: '6',
    title: 'Chat em Tempo Real',
    shortDescription: 'Sala de chat com WebSockets e presença online.',
    fullDescription:
      'Chat com salas, mensagens em tempo real via Socket.io, indicador de digitação, histórico e notificações. Front em React com estados otimizados e back em Node.js.',
    stack: ['React', 'Socket.io', 'Node.js', 'Tailwind', 'Redis'],
    imageUrl: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&q=80',
    imageAlt: 'Chat e mensagens',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: '7',
    title: 'Portfólio Interativo',
    shortDescription: 'Site pessoal com animações e seções dinâmicas.',
    fullDescription:
      'Portfólio com seções Hero, Sobre, Projetos, Habilidades e Contato. Animações com Framer Motion, design responsivo, modo escuro e performance otimizada com lazy loading.',
    stack: ['Next.js', 'Framer Motion', 'Tailwind', 'TypeScript'],
    imageUrl: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
    imageAlt: 'Portfólio e site pessoal',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: '8',
    title: 'Clima & Previsão',
    shortDescription: 'App de previsão do tempo com geolocalização.',
    fullDescription:
      'Aplicativo de clima com busca por cidade, geolocalização, previsão de 5 dias, ícones dinâmicos e persistência de favoritos. Consumo de API externa com cache e tratamento de erros.',
    stack: ['React', 'TypeScript', 'OpenWeather API', 'Tailwind'],
    imageUrl: 'https://images.unsplash.com/photo-1504386106331-3e4e71712b38?w=800&q=80',
    imageAlt: 'Previsão do tempo',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: '9',
    title: 'Autenticação & Perfis',
    shortDescription: 'Sistema de login, registro e perfil de usuário.',
    fullDescription:
      'Fluxo completo de auth: registro, login, recuperação de senha, verificação de e-mail e perfil editável. JWT + refresh token, bcrypt para senhas e proteção de rotas no front e back.',
    stack: ['Next.js', 'NextAuth', 'Prisma', 'PostgreSQL', 'Tailwind'],
    imageUrl: 'https://images.unsplash.com/photo-1633265486064-086b457458ec?w=800&q=80',
    imageAlt: 'Login e autenticação',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: '10',
    title: 'Landing Page SaaS',
    shortDescription: 'Landing de produto com formulários e CTA.',
    fullDescription:
      'Landing page para produto SaaS com hero, features, pricing, depoimentos e formulário de contato. Integração com Resend para e-mails, analytics e A/B testing de headlines.',
    stack: ['Next.js', 'Tailwind', 'Resend', 'Vercel Analytics'],
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    imageAlt: 'Landing page e SaaS',
    liveUrl: '#',
    repoUrl: '#',
  },
];
