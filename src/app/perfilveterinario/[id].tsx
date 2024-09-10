import CardAtendimentoVet from '@/components/cardatendimentovet';
import CardCertificadosVet from '@/components/cardcertificadosvet';
import CardExperienciaProfissionalVet from '@/components/cardexperienciaprofissionalvet';
import CardFormacaoAcademicaVet from '@/components/cardformacaoacademicavet';
import CardImagemVet from '@/components/cardimagemvet';
import CardInfoPessoalVet from '@/components/cardinfopessoalvet';
import { useUpdateVeterinarianProfile } from '@/hook/useUpdateVeterinarianProfile'; // Hook de atualização
import { useVeterinarian } from '@/hook/useVeterinarian';
import { useSession } from 'next-auth/react'; // Para autenticação
import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function PerfilVeterinario() {
  const params = useParams(); // Captura os parâmetros da URL
  const id = params?.id as string; // Captura o ID do veterinário

  const { data: session } = useSession(); // Obter informações do usuário logado
  const [isEditing, setIsEditing] = useState(false);

  // Verificar se o usuário logado é o proprietário do perfil
  const isOwner = session?.user?.id === id;

  // Hook para buscar os dados do veterinário
  const { data: veterinarianData, isLoading, error } = useVeterinarian(id);

  const mutation = useUpdateVeterinarianProfile();

  if (isLoading) return <div>Carregando os dados do veterinário...</div>;
  if (error || !veterinarianData) return <div>Erro ao carregar os dados ou veterinário não encontrado</div>;

  // Função de salvar alterações
  const handleSave = (updatedData: any) => {
    mutation.mutate({ ...veterinarianData, ...updatedData }, {
      onSuccess: () => setIsEditing(false),
      onError: (error) => console.error('Erro ao atualizar perfil:', error),
    });
  };

  return (
    <div>
      {/* Card de Imagem e Informações Principais */}
      <CardImagemVet
        id={veterinarianData.id}
        coverImage={veterinarianData.coverImage}
        profileImage={veterinarianData.image}
        name={veterinarianData.name}
        badge={veterinarianData.badge}
        location={veterinarianData.location}
        attendanceType={veterinarianData.attendanceType}
        isOwner={isOwner}
        onSave={handleSave}
      />

      {/* Card de Informações Pessoais */}
      <CardInfoPessoalVet
        id={veterinarianData.id}
        bio={veterinarianData.bio}
        services={veterinarianData.services}
        isOwner={isOwner}
        onSave={handleSave}
      />

      {/* Card de Formação Acadêmica */}
      <CardFormacaoAcademicaVet
        id={veterinarianData.id}
        academicBackground={veterinarianData.academicBackground || []}
        isOwner={isOwner}
        onSave={handleSave}
      />

      {/* Card de Experiência Profissional */}
      <CardExperienciaProfissionalVet
        id={veterinarianData.id}
        professionalExperience={
          (veterinarianData.professionalExperience || []).map((exp: string) => ({
            title: exp,
            company: '',
            period: '',
            description: ''
          }))
        }
        isOwner={isOwner}
        onSave={handleSave}
      />

      {/* Card de Certificados */}
      <CardCertificadosVet
        id={veterinarianData.id}
        certificates={veterinarianData.certificates || []}
        isOwner={isOwner}
        onSave={handleSave}
      />

      {/* Card de Atendimento */}
      <CardAtendimentoVet
        id={veterinarianData.id}
        serviceRegions={veterinarianData.serviceRegions || []}
        serviceHours={veterinarianData.serviceHours || []}
        isOwner={isOwner}
        onSave={handleSave}
      />

      {/* Botão de alternar entre edição e visualização */}
      {isOwner && (
        <button onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? 'Visualizar' : 'Editar'}
        </button>
      )}
    </div>
  );
}
