import axios from '@/app/axios';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

// Interface que define a estrutura completa dos dados do veterinário
interface Veterinarian {
  id: string;
  name: string;
  image?: string;
  coverImage?: string; 
  badge?: string;
  location: string;
  attendanceType: 'domicilio' | 'online';
  presentationText?: string;
  bio?: string; // Biografia do veterinário (para o card de informações pessoais)
  services?: string[]; // Serviços prestados
  academicBackground?: string[]; // Formação acadêmica
  professionalExperience?: string[]; // Experiência profissional
  certificates?: { name: string; url: string; fileType?: string }[]; // Certificados (nome, URL e tipo de arquivo)
  serviceRegions?: string[]; // Locais onde atende
  serviceHours?: string[]; // Horários de atendimento
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
        coverImage: '/assets/images/vetsimulacaocover1.svg',
        badge: 'Especialista em Animais Exóticos',
        location: 'São Paulo, SP',
        attendanceType: 'domicilio',
        presentationText: 'Atendo animais exóticos em domicílio e ofereço suporte online para consultas.',
        bio: 'Especialista com 10 anos de experiência em tratamento de animais exóticos.',
        services: ['Cirurgia', 'Cuidados Intensivos', 'Consultas Domiciliares'],
        academicBackground: ['Graduação em Medicina Veterinária - USP', 'Especialização em Animais Exóticos - Unesp'],
        professionalExperience: ['Veterinária Chefe - Clínica São Francisco', 'Consultora de Animais Exóticos'],
        certificates: [
          { name: 'Certificado de Cirurgia Avançada', url: '/assets/images/certificadosimulacaovet1.svg' },
          { name: 'Certificado de Cuidados Intensivos', url: '/assets/images/certificadosimulacaovet2.svg' },
        ],
        serviceRegions: ['São Paulo - SP', 'Osasco - SP'],
        serviceHours: ['Segunda a Sexta: 9h às 18h', 'Sábado: 9h às 14h'],
      },
      {
        id: '2',
        name: 'Dr. João Silva',
        image: '/assets/images/vetsimulacao2.svg',
        coverImage: '/assets/images/vetsimulacaocover2.svg',
        badge: 'Especialista em Cães',
        location: 'Rio de Janeiro, RJ',
        attendanceType: 'online',
        presentationText: 'Especialista em cães, com atendimento online.',
        bio: 'Veterinário dedicado à saúde de cães, com mais de 15 anos de experiência.',
        services: ['Consultas Online', 'Nutrição Canina', 'Fisioterapia Canina'],
        academicBackground: ['Graduação em Medicina Veterinária - UFRJ'],
        professionalExperience: ['Veterinário - Clínica PetRio'],
        certificates: [
          { name: 'Certificado de Nutrição Canina', url: '/assets/images/certificadosimulacaovet2.svg' },
        ],
        serviceRegions: ['Rio de Janeiro - RJ'],
        serviceHours: ['Segunda a Sexta: 10h às 17h'],
      },
      {
        id: '7',
        name: 'Dra. Renata Marques',
        image: '/assets/images/vetsimulacao3.svg',
        coverImage: '/assets/images/vetsimulacaocover1.svg',
        badge: 'Especialista em Dermatologia Veterinária',
        location: 'Florianópolis, SC',
        attendanceType: 'online',
        presentationText: 'Atendo problemas dermatológicos em pets, oferecendo consultas online com diagnóstico e tratamento personalizado.',
        bio: 'Dermatologista veterinária com 8 anos de experiência, especializada em alergias e doenças de pele.',
        services: ['Diagnóstico Dermatológico', 'Tratamento de Alergias', 'Consulta Online'],
        academicBackground: ['Graduação em Medicina Veterinária - UFSC', 'Pós-Graduação em Dermatologia Veterinária - UnB'],
        professionalExperience: ['Veterinária - Petderma Clínica', 'Consultora em Dermatologia Veterinária'],
        certificates: [
          { name: 'Certificado de Dermatologia Veterinária', url: '/assets/images/certificadosimulacaovet1.svg' },
          { name: 'Certificado de Alergias Veterinárias', url: '/assets/images/certificadosimulacaovet2.svg' },
        ],
        serviceRegions: ['Florianópolis - SC', 'São José - SC'],
        serviceHours: ['Segunda a Sexta: 9h às 18h', 'Sábado: 9h às 13h'],
      },
      {
        id: '8',
        name: 'Dr. Felipe Costa',
        image: '/assets/images/vetsimulacao4.svg',
        coverImage: '/assets/images/vetsimulacaocover2.svg',
        badge: 'Especialista em Nutrição Animal',
        location: 'Fortaleza, CE',
        attendanceType: 'domicilio',
        presentationText: 'Atendo a domicílio com foco em nutrição animal, ajudando seu pet a ter uma dieta balanceada e saudável.',
        bio: 'Nutricionista veterinário com mais de 12 anos de experiência no desenvolvimento de dietas personalizadas para animais de estimação.',
        services: ['Consultoria Nutricional', 'Dieta Personalizada', 'Consulta Domiciliar'],
        academicBackground: ['Graduação em Medicina Veterinária - UFC', 'Pós-Graduação em Nutrição Animal - USP'],
        professionalExperience: ['Veterinário - Nutrivet Fortaleza', 'Consultor Nutricional - Clínica Animal Health'],
        certificates: [
          { name: 'Certificado em Nutrição Veterinária', url: '/assets/images/certificadosimulacaovet1.svg' },
        ],
        serviceRegions: ['Fortaleza - CE', 'Caucaia - CE'],
        serviceHours: ['Segunda a Sexta: 8h às 17h', 'Sábado: 8h às 12h'],
      },
      {
        id: '9',
        name: 'Dra. Cistina Medeiros',
        image: '/assets/images/vetsimulacao5.svg',
        coverImage: '/assets/images/vetsimulacaocover1.svg',
        badge: 'Especialista em Odontologia Veterinária',
        location: 'Brasília, DF',
        attendanceType: 'domicilio',
        presentationText: 'Especializada em odontologia veterinária, ofereço atendimento domiciliar para cuidados dentários de seu pet.',
        bio: 'Veterinária odontológica com 6 anos de experiência em tratamentos dentários para cães e gatos.',
        services: ['Limpeza Dentária', 'Cirurgia Oral', 'Consultas Domiciliares'],
        academicBackground: ['Graduação em Medicina Veterinária - UnB', 'Especialização em Odontologia Veterinária - USP'],
        professionalExperience: ['Odontóloga Veterinária - PetSmile Clínica', 'Consultora de Saúde Oral - VetOral'],
        certificates: [
          { name: 'Certificado de Cirurgia Odontológica', url: '/assets/images/certificadosimulacaovet2.svg' },
        ],
        serviceRegions: ['Brasília - DF', 'Taguatinga - DF'],
        serviceHours: ['Segunda a Sexta: 9h às 18h'],
      },
      {
        id: '10',
        name: 'Dr. Roberto Farias',
        image: '/assets/images/vetsimulacao2.svg',
        coverImage: '/assets/images/vetsimulacaocover2.svg',
        badge: 'Especialista em Fisioterapia Veterinária',
        location: 'Recife, PE',
        attendanceType: 'online',
        presentationText: 'Realizo consultas online para fisioterapia veterinária, ajudando na recuperação e manutenção da saúde do seu pet.',
        bio: 'Fisioterapeuta veterinário com mais de 7 anos de experiência no tratamento de reabilitação de animais.',
        services: ['Fisioterapia Online', 'Exercícios de Reabilitação', 'Tratamento Pós-Cirúrgico'],
        academicBackground: ['Graduação em Medicina Veterinária - UFPE', 'Especialização em Fisioterapia Veterinária - UFRJ'],
        professionalExperience: ['Veterinário Fisioterapeuta - Clínica VetRehab', 'Consultor de Fisioterapia Online'],
        certificates: [
          { name: 'Certificado de Fisioterapia Veterinária', url: '/assets/images/certificadosimulacaovet2.svg' },
        ],
        serviceRegions: ['Recife - PE', 'Olinda - PE'],
        serviceHours: ['Segunda a Sexta: 9h às 18h', 'Sábado: 9h às 13h'],
      },
      {
        id: '11',
        name: 'Dra. Camila Ferreira',
        image: '/assets/images/vetsimulacao3.svg',
        coverImage: '/assets/images/vetsimulacaocover1.svg',
        badge: 'Especialista em Cardiologia Veterinária',
        location: 'Goiânia, GO',
        attendanceType: 'domicilio',
        presentationText: 'Especialista em cardiologia veterinária, atendo a domicílio para garantir o cuidado cardíaco do seu pet.',
        bio: 'Cardiologista veterinária com mais de 9 anos de experiência no diagnóstico e tratamento de doenças cardíacas em pets.',
        services: ['Consultas Domiciliares', 'Ecocardiografia', 'Monitoramento Cardíaco'],
        academicBackground: ['Graduação em Medicina Veterinária - UFG', 'Pós-Graduação em Cardiologia Veterinária - Unesp'],
        professionalExperience: ['Veterinária Cardiologista - Clínica Coração Animal', 'Consultora em Cardiologia Veterinária'],
        certificates: [
          { name: 'Certificado de Ecocardiografia', url: '/assets/images/certificadosimulacaovet1.svg' },
          { name: 'Certificado de Cardiologia Veterinária', url: '/assets/images/certificadosimulacaovet2.svg' },
        ],
        serviceRegions: ['Goiânia - GO', 'Aparecida de Goiânia - GO'],
        serviceHours: ['Segunda a Sexta: 8h às 17h'],
      },
      
    ];

    const veterinarian = simulatedVeterinarians.find(vet => vet.id === id);
    if (!veterinarian) {
      throw new Error('Veterinário não encontrado');
    }
    return veterinarian;
  }

  // Lógica para chamar a API real
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
