//Buscar uma lista de veterinários.Ideal para a página onde vai exibir vários veterinários, cada um em um card, 

import { useQuery, UseQueryResult } from '@tanstack/react-query';
import axios from '@/app/axios';

interface Veterinarian {
  id: string;
  name: string;
  image?: string;  
  badge?: string;  
  location: string;
  attendanceType: 'domicilio' | 'online';  
  presentationText?: string;  
}

const fetchVeterinarian = async (): Promise<Veterinarian[]> => {
  const backendAvailable = false;

  if (!backendAvailable) {
    return [
      {
        id: '1',
        name: 'Dra. Paula Santos',
        image: '/static/images/avatar/default-profile.png',
        badge: 'Especialista em Animais Exóticos',
        location: 'São Paulo, SP',
        attendanceType: 'domicilio',
        presentationText: 'Atendo animais exóticos em domicílio e ofereço suporte online para consultas.',
      },
      {
        id: '2',
        name: 'Dr. João Silva',
        image: '/static/images/avatar/default-profile2.png',
        badge: 'Especialista em Cães',
        location: 'Rio de Janeiro, RJ',
        attendanceType: 'online',
        presentationText: 'Especialista em cães, com atendimento online.',
      },
      {
        id: '7',
        name: 'Dra. Renata Marques',
        image: '/static/images/avatar/default-profile7.png',
        badge: 'Especialista em Dermatologia Veterinária',
        location: 'Florianópolis, SC',
        attendanceType: 'online',
        presentationText: 'Atendo problemas dermatológicos em pets, oferecendo consultas online com diagnóstico e tratamento personalizado.',
      },
      {
        id: '8',
        name: 'Dr. Felipe Costa',
        image: '/static/images/avatar/default-profile8.png',
        badge: 'Especialista em Nutrição Animal',
        location: 'Fortaleza, CE',
        attendanceType: 'domicilio',
        presentationText: 'Atendo a domicílio com foco em nutrição animal, ajudando seu pet a ter uma dieta balanceada e saudável.',
      },
      {
        id: '9',
        name: 'Dra. Cistina Medeiros',
        image: '/static/images/avatar/default-profile9.png',
        badge: 'Especialista em Odontologia Veterinária',
        location: 'Brasília, DF',
        attendanceType: 'domicilio',
        presentationText: 'Especializada em odontologia veterinária, ofereço atendimento domiciliar para cuidados dentários de seu pet.',
      },
      {
        id: '10',
        name: 'Dr. Roberto Farias',
        image: '/static/images/avatar/default-profile10.png',
        badge: 'Especialista em Fisioterapia Veterinária',
        location: 'Recife, PE',
        attendanceType: 'online',
        presentationText: 'Realizo consultas online para fisioterapia veterinária, ajudando na recuperação e manutenção da saúde do seu pet.',
      },
      {
        id: '11',
        name: 'Dra. Camila Ferreira',
        image: '/static/images/avatar/default-profile11.png',
        badge: 'Especialista em Cardiologia Veterinária',
        location: 'Goiânia, GO',
        attendanceType: 'domicilio',
        presentationText: 'Especialista em cardiologia veterinária, atendo a domicílio para garantir o cuidado cardíaco do seu pet.',
      },
    ];
  }

  const { data } = await axios.get('/veterinarios');
  return data;
};

export function useVeterinarians(): UseQueryResult<Veterinarian[], unknown> {
  return useQuery<Veterinarian[]>({
    queryKey: ['veterinarians'],
    queryFn: fetchVeterinarian,
    staleTime: 1000 * 60 * 5,
  });
}
