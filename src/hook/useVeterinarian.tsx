//hook para a pagina de perfil do veterinário

import axios from '@/app/axios';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

// Interface que define a estrutura dos dados do veterinário
interface Veterinarian {
  id: string;
  name: string;
  image?: string;
  badge?: string;
  location: string;
  attendanceType: 'domicilio' | 'online';
  presentationText?: string;
}

// Função para buscar os dados de um veterinário específico
const fetchVeterinarian = async (id: string): Promise<Veterinarian> => {
  const backendAvailable = false; // Simulação de backend indisponível

  if (!backendAvailable) {
    const simulatedVeterinarians: Veterinarian[] = [
      {
        id: '1',
        name: 'Dra. Paula Santos',
        image: '/assets/images/vetsimulacao1.svg',
        badge: 'Especialista em Animais Exóticos',
        location: 'São Paulo, SP',
        attendanceType: 'domicilio',
        presentationText: 'Atendo animais exóticos em domicílio e ofereço suporte online para consultas.',
      },
      {
        id: '2',
        name: 'Dr. João Silva',
        image: '/assets/images/vetsimulacao2.svg',
        badge: 'Especialista em Cães',
        location: 'Rio de Janeiro, RJ',
        attendanceType: 'online',
        presentationText: 'Especialista em cães, com atendimento online.',
      },
      {
        id: '7',
        name: 'Dra. Renata Marques',
        image: '/assets/images/vetsimulacao3.svg',
        badge: 'Especialista em Dermatologia Veterinária',
        location: 'Florianópolis, SC',
        attendanceType: 'online',
        presentationText: 'Atendo problemas dermatológicos em pets, oferecendo consultas online com diagnóstico e tratamento personalizado.',
      },
      {
        id: '8',
        name: 'Dr. Felipe Costa',
        image: '/assets/images/vetsimulacao4.svg',
        badge: 'Especialista em Nutrição Animal',
        location: 'Fortaleza, CE',
        attendanceType: 'domicilio',
        presentationText: 'Atendo a domicílio com foco em nutrição animal, ajudando seu pet a ter uma dieta balanceada e saudável.',
      },
      {
        id: '9',
        name: 'Dra. Cistina Medeiros',
        image: '/assets/images/vetsimulacao5.svg',
        badge: 'Especialista em Odontologia Veterinária',
        location: 'Brasília, DF',
        attendanceType: 'domicilio',
        presentationText: 'Especializada em odontologia veterinária, ofereço atendimento domiciliar para cuidados dentários de seu pet.',
      },
      {
        id: '10',
        name: 'Dr. Roberto Farias',
        image: '/assets/images/vetsimulacao2.svg',
        badge: 'Especialista em Fisioterapia Veterinária',
        location: 'Recife, PE',
        attendanceType: 'online',
        presentationText: 'Realizo consultas online para fisioterapia veterinária, ajudando na recuperação e manutenção da saúde do seu pet.',
      },
      {
        id: '11',
        name: 'Dra. Camila Ferreira',
        image: '/assets/images/vetsimulacao3.svg',
        badge: 'Especialista em Cardiologia Veterinária',
        location: 'Goiânia, GO',
        attendanceType: 'domicilio',
        presentationText: 'Especialista em cardiologia veterinária, atendo a domicílio para garantir o cuidado cardíaco do seu pet.',
      },

    ];

    const veterinarian = simulatedVeterinarians.find(vet => vet.id === id);
    if (!veterinarian) {
      throw new Error('Veterinário não encontrado');
    }
    return veterinarian;
  }

  const { data } = await axios.get(`/veterinarios/${id}`);
  return data;
};

// Hook customizado para buscar os dados de um veterinário específico
export function useVeterinarian(id: string): UseQueryResult<Veterinarian, unknown> {
  return useQuery<Veterinarian>({
    queryKey: ['veterinarian', id],
    queryFn: () => fetchVeterinarian(id),
    staleTime: 1000 * 60 * 5, // 5 minutos
  });
}
