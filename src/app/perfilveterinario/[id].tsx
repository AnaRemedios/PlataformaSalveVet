import { useUpdateVeterinarianProfile } from '@/hook/useUpdateVeterinarianProfile'; // Hook de atualização
import { useVeterinarianProfile } from '@/hook/useVeterinarianProfile'; // Hook de busca de perfil
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
  const { data: veterinarianData, isLoading } = useVeterinarianProfile(id as string);

  // Hook para atualizar o perfil do veterinário
  const mutation = useUpdateVeterinarianProfile();

  // Função de envio de formulário de atualização
  const handleUpdateProfile = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Dados do formulário
    const formData = {
      name: (event.currentTarget.elements.namedItem('name') as HTMLInputElement).value,
      email: (event.currentTarget.elements.namedItem('email') as HTMLInputElement).value,
      bio: (event.currentTarget.elements.namedItem('bio') as HTMLTextAreaElement).value,
      specialties: (event.currentTarget.elements.namedItem('specialties') as HTMLInputElement).value.split(','),
      location: (event.currentTarget.elements.namedItem('location') as HTMLInputElement).value,
      experience: (event.currentTarget.elements.namedItem('experience') as HTMLInputElement).value,
    };
    console.log(formData);

    // Chamada ao hook de atualização com os dados do formulário
    mutation.mutate(formData, {
      onSuccess: () => {
        setIsEditing(false); // Volta para a visualização
      },
      onError: (error) => {
        console.error('Erro ao atualizar perfil:', error);
      },
    });
  };

  if (isLoading) return <div>Carregando...</div>;
  if (!veterinarianData) return <div>Dados não encontrados</div>;

  return (
    <div>
      <h1>{isEditing ? 'Editar Perfil' : 'Perfil do Veterinário'}</h1>

      {isOwner && (
        <button onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? 'Visualizar' : 'Editar'}
        </button>
      )}

      {isEditing ? (
        <form onSubmit={handleUpdateProfile}>
          <input
            type="text"
            name="name"
            defaultValue={veterinarianData.name}
            placeholder="Nome"
          />
          <textarea
            name="bio"
            defaultValue={veterinarianData.bio}
            placeholder="Biografia"
          />
          <input
            type="text"
            name="specialties"
            defaultValue={veterinarianData.specialties.join(',')}
            placeholder="Especialidades (separadas por vírgula)"
          />
          <input
            type="text"
            name="location"
            defaultValue={veterinarianData.location}
            placeholder="Localização"
          />
          <input
            type="text"
            name="experience"
            defaultValue={veterinarianData.experience}
            placeholder="Experiência"
          />
          <button type="submit">Salvar</button>
        </form>
      ) : (
        <div>
          <h2>{veterinarianData.name}</h2>
          <p>{veterinarianData.bio}</p>
          <p>{veterinarianData.specialties.join(', ')}</p>
          <p>{veterinarianData.location}</p>
          <p>{veterinarianData.experience}</p>
        </div>
      )}
    </div>
  );
}
