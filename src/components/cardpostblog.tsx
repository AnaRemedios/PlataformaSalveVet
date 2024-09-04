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
          maxWidth: 280,
          height: '100%',
          cursor: 'pointer',
          textDecoration: 'none',
          border: '2px solid #1EE0CC',
          borderRadius: '8px',
          padding: '14px',
          boxShadow: 3,
          transition: 'transform 0.3s, box-shadow 0.3s, border-color 0.3s',
          '&:hover': {
            boxShadow: 6,
            background: '#E2FBF9',
            transform: 'scale(1.05)',
          },
          margin: '2% 12%',
        }}
      >
        <CardMedia
          component="img"
          alt={post.title}
          sx={{ height: 200, width: '100%', margin: '0 auto' }}
          image={post.image || '/assets/images/default-blog-post.svg'} // Imagem padrão ou a do post
        />
        <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <Typography gutterBottom variant="h6" component="div" sx={{ textAlign: 'center' }}>
            {post.title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: 12 }}>
            {post.excerpt || 'Nenhum resumo disponível.'}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
