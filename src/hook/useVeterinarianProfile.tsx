import { useQuery, UseQueryResult } from '@tanstack/react-query';

// Interface que define a estrutura dos dados do veterinário
interface VeterinarianProfile {
  id: string;
  name: string;
  email: string;
  bio: string;
  specialties: string[];
  location: string;
  experience: string;
  image?: string;
}

// Função simulada para buscar o perfil de um veterinário
const fetchVeterinarianProfile = async (id: string): Promise<VeterinarianProfile> => {
  // Simulação de dados
  const simulatedProfile: VeterinarianProfile = {
    id: id,
    name: 'Dr. Paula Santos',
    email: 'paula.santos@example.com',
    bio: 'Especialista em animais exóticos com 10 anos de experiência.',
    specialties: ['Animais Exóticos', 'Cirurgia'],
    location: 'São Paulo, SP',
    experience: '10 anos',
    image: '/assets/images/veterinarian-profile.svg',
  };

  // Simula um pequeno atraso na requisição
  await new Promise((resolve) => setTimeout(resolve, 500));
  return simulatedProfile;

  // Quando o backend estiver pronto, remova o código acima e use a chamada real com axios
  /*
  const { data } = await axios.get(`/api/veterinarians/${id}`);
  return data;
  */
};

// Hook para buscar o perfil do veterinário
export function useVeterinarianProfile(id: string): UseQueryResult<VeterinarianProfile, unknown> {
  return useQuery<VeterinarianProfile>({
    queryKey: ['veterinarianProfile', id],
    queryFn: () => fetchVeterinarianProfile(id),
    staleTime: 1000 * 60 * 5, // 5 minutos
  });
}
