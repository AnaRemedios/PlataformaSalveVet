import { Card, CardContent, Typography } from '@mui/material';

export default function CardGridTutor() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginTop: '24px' }}>
      {[1, 2, 3, 4, 5, 6].map((_, index) => (
        <Card key={index}>
          <CardContent>
            <Typography variant="h5" component="div">
              Create project
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Deploy your new project in one-click.
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
