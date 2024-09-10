// perfilveterinarios/[id].tsx
import CardFormacaoAcademicaVet from '@/components/cardformacaoacademicavet';
import CardImagemVet from '@/components/cardimagemvet';
import CardInfoPessoalVet from '@/components/cardinfopessoalvet';
import { useUpdateVeterinarianProfile } from '@/hook/useUpdateVeterinarianProfile'; // Hook de atualização
import { useVeterinarian } from '@/hook/useVeterinarian';
import { useSession } from 'next-auth/react'; // Para autenticação (se estiver usando next-auth)
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function PerfilVeterinario() {
  const router = useRouter();
  const { id } = router.query; // Captura o ID da URL
  const { data: session } = useSession(); // Obter informações do usuário logado
  const [isEditing, setIsEditing] = useState(false);

  // Verificar se o usuário logado é o proprietário do perfil
  const isOwner = session?.user?.id === id; // tem haver com o token

  // Hook para buscar o perfil do veterinário
  const { data: veterinarianData, isLoading } = useVeterinarian(id as string);

  // Hook para atualizar o perfil do veterinário
  const mutation = useUpdateVeterinarianProfile();


  if (isLoading) return <div>Carregando...</div>;
  if (!veterinarianData) return <div>Dados não encontrados</div>;

  return (
    <div>

    </div>
  );
}
