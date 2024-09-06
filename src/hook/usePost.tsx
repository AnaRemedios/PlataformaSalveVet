import axios from '@/app/axios';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

// Interface que define a estrutura dos dados do post
interface Post {
  id: string;
  title: string;
  image?: string;
  excerpt?: string;
}

// Função para buscar os dados de um post específico
const fetchPost = async (id: string): Promise<Post> => {
  const backendAvailable = false; // Simulação de backend indisponível

  if (!backendAvailable) {
    const simulatedPosts: Post[] = [
      {
        id: '1',
        title: 'Cães e Gatos: Como Promover uma Convivência Pacífica',
        image: '/assets/images/blog1.svg',
        excerpt: 'Aprenda a cuidar de pets idosos e garantir qualidade de vida.',
      },
      {
        id: '2',
        title: 'Dicas de Alimentação para Cães',
        image: '/assets/images/blog2.svg',
        excerpt: 'Descubra as melhores dicas de alimentação para o seu cão.',
      },
      {
        id: '3',
        title: 'A Importância da Vacinação de Pets',
        image: '/assets/images/blog3.svg',
        excerpt: 'Saiba por que manter seu pet vacinado é essencial para a saúde dele.',
      },
      {
        id: '4',
        title: 'Como Preparar Seu Pet para uma Viagem',
        image: '/assets/images/blog4.svg',
        excerpt: 'Dicas práticas para garantir uma viagem tranquila com seu pet.',
      },
      {
        id: '5',
        title: 'Cuidado com as Pulgas e Carrapatos',
        image: '/assets/images/blog5.svg',
        excerpt: 'Métodos eficazes de prevenção e tratamento contra parasitas.',
      },
      {
        id: '6',
        title: 'Como Escolher o Melhor Veterinário',
        image: '/assets/images/blog6.svg',
        excerpt: 'Dicas para encontrar um veterinário confiável e especializado.',
      },
      {
        id: '7',
        title: 'A Importância da Castração de Animais',
        image: '/assets/images/blog7.svg',
        excerpt: 'Conheça os benefícios da castração para a saúde do seu pet.',
      },
      {
        id: '8',
        title: 'Como Introduzir um Novo Pet na Família',
        image: '/assets/images/blog8.svg',
        excerpt: 'Passos importantes para a adaptação de um novo pet em casa.',
      },
      {
        id: '9',
        title: 'Como Cuidar de um Pet Idoso',
        image: '/assets/images/blog9.svg',
        excerpt: 'Entenda como o banho e a tosa podem melhorar a saúde do seu pet.',
      },
      {
        id: '10',
        title: 'Os Benefícios do Banho e Tosa Regulares ',
        image: '/assets/images/blog10.svg',
        excerpt: 'Dicas para fazer cães e gatos conviverem harmoniosamente.',
      }
    ];

    const post = simulatedPosts.find(post => post.id === id);
    if (!post) {
      throw new Error('Post não encontrado');
    }
    return post;
  }

  const { data } = await axios.get(`/posts/${id}`);
  return data;
};

// Hook customizado para buscar os dados de um post específico
export function usePost(id: string): UseQueryResult<Post, unknown> {
  return useQuery<Post>({
    queryKey: ['post', id],
    queryFn: () => fetchPost(id),
    staleTime: 1000 * 60 * 5, // 5 minutos
  });
}
