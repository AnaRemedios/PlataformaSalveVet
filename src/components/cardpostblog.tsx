'use client';
import { usePost } from '@/hook/usePost';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import Link from 'next/link';


export default function CardPostBlog({ id }: { id: string }) {
  const { data: post, isLoading, error } = usePost(id);

  if (isLoading) {
    return <div>Carregando...</div>; // Indicador de carregamento
  }

  if (error || !post) {
    return <div>Erro ao carregar os dados do post.</div>; // Mensagem de erro
  }

  return (
    <Link href={`/blog/${post.id}`} passHref>
      <Card
        sx={{
          width: '100%',
          maxWidth: 294,
          height: '90%',
          cursor: 'pointer',
          textDecoration: 'none',
          border: '2px solid #1EE0CC',
          borderRadius: '8px',
          padding: '16px',
          boxShadow: 3,
          transition: 'transform 0.3s, box-shadow 0.3s, border-color 0.3s',
          '&:hover': {
            boxShadow: 6,
            background: '#E2FBF9',
            transform: 'scale(1.05)',
          },
          margin: '2% 8%',
          '@media (max-width: 640px)': {
            height: 'auto', // Aumenta a altura em telas menores
          },
          '@media (min-width: 640px)': {
            maxWidth: '80%', // Ajusta o tamanho para tablets
          },
          '@media (min-width: 1024px)': {
            maxWidth: '294px', // Ajusta o tamanho para desktops
          },
        }}
      >
        <CardMedia
          component="img"
          alt={post.title}
          sx={{
            height: 200,
            width: '100%',
            margin: '0 auto',
            '@media (max-width: 640px)': {
              height: 250, // Aumenta a altura da imagem para telas pequenas
            },
            '@media (min-width: 640px)': {
              height: 200, // Reduz a altura da imagem para tablets
            },
            '@media (min-width: 1024px)': {
              height: 200, // Ajusta a altura da imagem para desktops
            },
          }}
          image={post.image || '/assets/images/default-blog-post.svg'} // Imagem padrão ou a do post
        />
        <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <Typography gutterBottom variant="h6" component="div" sx={{ textAlign: 'center', fontSize: 20 }}>
            {post.title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: 12, mt: 2 }}>
            {post.excerpt || 'Nenhum resumo disponível.'}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
