import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Button,
  Link,
  useTheme,
  Container,
} from '@mui/material';

/**
 * We import Avatar only where we need a circular shape (the educator’s portrait).
 * For icons/images in subsequent blocks, we'll use <Box> or <img>.
 */
import Avatar from '@mui/material/Avatar';

const About: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }}>
      {/* ===================
          1. Hero Banner
      =================== */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: '50vh', md: '60vh' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: '#fff',
          background: `
            linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), 
            url('/path/to/about-hero-image.jpg') center/cover no-repeat
          `,
        }}
      >
        <Box sx={{ position: 'relative', zIndex: 1, px: 2, maxWidth: 900 }}>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 'bold',
              textShadow: '0 2px 5px rgba(0,0,0,0.6)',
              mb: 2,
              fontSize: { xs: '2rem', md: '3rem' },
            }}
          >
            Refine, Express, Excel
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 3,
              fontSize: { xs: '1rem', md: '1.25rem' },
              textShadow: '0 1px 3px rgba(0,0,0,0.5)',
            }}
          >
            Personalized Online English Coaching for Young Minds
          </Typography>
          <Button variant="contained" color="secondary" size="large">
            Book Your Session
          </Button>
        </Box>
      </Box>

      {/* =============================
          2. Full-Width Pastel Blocks
      ============================= */}

      {/* 
        A) EMPOWERING COMMUNICATORS
        - Educator portrait in a circular container (left)
      */}
      <Box
        sx={{
          width: '100%',
          backgroundColor: theme.palette.info.light, // Pastel from your theme
          py: { xs: 6, md: 8 },
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={4}
            alignItems="center"
            sx={{
              boxShadow: 1,
              p: { xs: 2, md: 4 },
              borderRadius: 2,
              transition: 'box-shadow 0.3s ease',
              '&:hover': { boxShadow: 4 },
            }}
          >
            {/* LEFT: Circular portrait */}
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Avatar
                  src="/path/to/educator-photo.jpg"
                  alt="Educator"
                  sx={{
                    width: { xs: 180, md: 220 },
                    height: { xs: 180, md: 220 },
                    borderRadius: '50%', // Ensures circular shape
                  }}
                />
              </Box>
            </Grid>

            {/* RIGHT: TEXT */}
            <Grid item xs={12} md={8}>
              <Typography variant="h5" gutterBottom fontWeight="bold">
                Empowering Confident Communicators & Skilled Writers
              </Typography>
              <Typography variant="body1" paragraph>
                With over 30 years of teaching experience and 3 years of guiding
                students globally— from the USA to Australia, Singapore, Hong
                Kong, and Dubai—I’m committed to nurturing young minds. My
                tailored lessons help children speak confidently, write
                compellingly, and master the finer points of language.
              </Typography>
              <Typography variant="body1" paragraph>
                Whether your child needs help polishing public speaking,
                deepening writing immersion, or boosting grammar and vocabulary,
                I’m here for support. I also provide guidance with school tasks
                to ensure a holistic academic experience. Join me on this
                journey to unlock your child’s full potential!
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                fontStyle="italic"
              >
                “Refine, Express, Excel—one lesson at a time.”
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 
        B) QUALIFICATIONS & CERTIFICATIONS
        - Square icon on the right
      */}
      <Box
        sx={{
          width: '100%',
          backgroundColor: theme.palette.warning.light,
          py: { xs: 6, md: 8 },
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={4}
            alignItems="center"
            direction={{ xs: 'column', md: 'row-reverse' }} // Switch image to the right on md+
            sx={{
              boxShadow: 1,
              p: { xs: 2, md: 4 },
              borderRadius: 2,
              transition: 'box-shadow 0.3s ease',
              '&:hover': { boxShadow: 4 },
            }}
          >
            {/* RIGHT: Square icon/image */}
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box
                  component="img"
                  src="/path/to/certifications-icon.jpg"
                  alt="Certifications Icon"
                  sx={{
                    width: { xs: 180, md: 220 },
                    height: { xs: 180, md: 220 },
                    borderRadius: 0, // Strictly square
                    objectFit: 'cover',
                  }}
                />
              </Box>
            </Grid>

            {/* LEFT: TEXT */}
            <Grid item xs={12} md={8}>
              <Typography variant="h4" gutterBottom>
                Qualifications & Certifications
              </Typography>
              <Typography variant="body1" paragraph>
                My continuous pursuit of professional development keeps me at
                the forefront of educational best practices. Qualifications
                include:
              </Typography>
              <ul>
                <li>
                  <Typography variant="body1">
                    Master’s in Education & Bachelor’s in English Literature
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    Accredited TEFL/TESOL Certifications (e.g., CELTA)
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    Ongoing advanced training in child psychology and pedagogy
                  </Typography>
                </li>
              </ul>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 
        C) PROFESSIONAL EXPERIENCE
        - Square icon on the left
      */}
      <Box
        sx={{
          width: '100%',
          backgroundColor: theme.palette.success.light,
          py: { xs: 6, md: 8 },
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={4}
            alignItems="center"
            sx={{
              boxShadow: 1,
              p: { xs: 2, md: 4 },
              borderRadius: 2,
              transition: 'box-shadow 0.3s ease',
              '&:hover': { boxShadow: 4 },
            }}
          >
            {/* LEFT: Square icon/image */}
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box
                  component="img"
                  src="/path/to/experience-icon.jpg"
                  alt="Experience Icon"
                  sx={{
                    width: { xs: 180, md: 220 },
                    height: { xs: 180, md: 220 },
                    borderRadius: 0,
                    objectFit: 'cover',
                  }}
                />
              </Box>
            </Grid>

            {/* RIGHT: TEXT */}
            <Grid item xs={12} md={8}>
              <Typography variant="h4" gutterBottom>
                Professional Experience & Background
              </Typography>
              <Typography variant="body1" paragraph>
                Having worked in diverse environments—from brick-and-mortar
                classrooms to dynamic online academies—I’ve cultivated
                innovative curricula catering to varying skill levels and
                cultural contexts.
              </Typography>
              <Typography variant="body1">
                My global teaching journey has helped me appreciate the nuances
                of each learner’s pace and challenges, ensuring that every
                lesson is adapted to match individual strengths and areas of
                growth.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 
        D) TEACHING PHILOSOPHY
        - Square icon on the right
      */}
      <Box
        sx={{
          width: '100%',
          backgroundColor: theme.palette.primary.light,
          py: { xs: 6, md: 8 },
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={4}
            alignItems="center"
            direction={{ xs: 'column', md: 'row-reverse' }} // Image on right
            sx={{
              boxShadow: 1,
              p: { xs: 2, md: 4 },
              borderRadius: 2,
              transition: 'box-shadow 0.3s ease',
              '&:hover': { boxShadow: 4 },
            }}
          >
            {/* RIGHT: Square icon/image */}
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box
                  component="img"
                  src="/path/to/philosophy-icon.jpg"
                  alt="Philosophy Icon"
                  sx={{
                    width: { xs: 180, md: 220 },
                    height: { xs: 180, md: 220 },
                    borderRadius: 0,
                    objectFit: 'cover',
                  }}
                />
              </Box>
            </Grid>

            {/* LEFT: TEXT */}
            <Grid item xs={12} md={8}>
              <Typography variant="h4" gutterBottom>
                Teaching Philosophy & Methodologies
              </Typography>
              <Typography variant="body1" paragraph>
                I believe in a balanced approach that merges structured learning
                with creative exploration:
              </Typography>
              <ul>
                <li>
                  <Typography variant="body1">
                    <strong>Interactive Sessions:</strong> Games, role-play, and
                    collaborative tasks to foster curiosity and active
                    engagement
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    <strong>Targeted Feedback:</strong> Personalized evaluations
                    and regular progress updates for parents
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    <strong>Holistic Learning:</strong> Emphasis on real-world
                    application, communication skills, and analytical thinking
                  </Typography>
                </li>
              </ul>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 
        E) PERSONAL ANECDOTES
        - Square icon on the left
      */}
      <Box
        sx={{
          width: '100%',
          backgroundColor: theme.palette.info.light,
          py: { xs: 6, md: 8 },
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={4}
            alignItems="center"
            sx={{
              boxShadow: 1,
              p: { xs: 2, md: 4 },
              borderRadius: 2,
              transition: 'box-shadow 0.3s ease',
              '&:hover': { boxShadow: 4 },
            }}
          >
            {/* LEFT: Square icon/image */}
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box
                  component="img"
                  src="/path/to/anecdotes-icon.jpg"
                  alt="Anecdotes Icon"
                  sx={{
                    width: { xs: 180, md: 220 },
                    height: { xs: 180, md: 220 },
                    borderRadius: 0,
                    objectFit: 'cover',
                  }}
                />
              </Box>
            </Grid>

            {/* RIGHT: TEXT */}
            <Grid item xs={12} md={8}>
              <Typography variant="h4" gutterBottom>
                Personal Anecdotes & Stories
              </Typography>
              <Typography variant="body1" paragraph>
                One of my most fulfilling moments was working with a shy student
                in Hong Kong who feared public speaking. Through consistent
                praise, interactive practice, and small-group exercises, she
                found her voice and delivered a remarkable speech to her peers.
                Such transformations reaffirm my commitment to every child’s
                success.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 
        F) EXPLORE YOUTUBE
        - Square icon on the right
      */}
      <Box
        sx={{
          width: '100%',
          backgroundColor: theme.palette.warning.light,
          py: { xs: 6, md: 8 },
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={4}
            alignItems="center"
            direction={{ xs: 'column', md: 'row-reverse' }} // Image on right
            sx={{
              boxShadow: 1,
              p: { xs: 2, md: 4 },
              borderRadius: 2,
              transition: 'box-shadow 0.3s ease',
              '&:hover': { boxShadow: 4 },
            }}
          >
            {/* RIGHT: Square icon/image (YouTube icon or thumbnail) */}
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box
                  component="img"
                  src="/path/to/youtube-icon.jpg"
                  alt="YouTube Icon"
                  sx={{
                    width: { xs: 180, md: 220 },
                    height: { xs: 180, md: 220 },
                    borderRadius: 0,
                    objectFit: 'cover',
                  }}
                />
              </Box>
            </Grid>

            {/* LEFT: TEXT + Video Thumbnails */}
            <Grid item xs={12} md={8}>
              <Typography variant="h4" gutterBottom>
                Explore My YouTube Channel
              </Typography>
              <Typography variant="body1" paragraph>
                Want a quick glimpse into my teaching style? Check out these
                videos from my channel— where I share tips, extended lessons,
                and fun short clips for English enthusiasts. Click on any
                thumbnail below:
              </Typography>

              <Grid container spacing={2}>
                {[1, 2, 3, 4].map((num) => (
                  <Grid item xs={12} sm={6} md={6} key={num}>
                    <Card>
                      <CardActionArea
                        href="https://www.youtube.com/watch?v=SAMPLE_VIDEO"
                        target="_blank"
                      >
                        <CardMedia
                          component="img"
                          height="140"
                          image={`/path/to/thumbnail-${num}.jpg`}
                          alt={`Video Thumbnail ${num}`}
                        />
                        <CardContent>
                          <Typography variant="subtitle1" gutterBottom>
                            YouTube Video Title {num}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            A brief description about video {num} content...
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              <Box sx={{ textAlign: 'center', mt: 3 }}>
                <Button
                  variant="contained"
                  color="primary"
                  href="https://www.youtube.com/channel/YOUR_CHANNEL_LINK"
                  target="_blank"
                >
                  Visit My Channel
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ======================
          3. CONTACT CTA
      ====================== */}
      <Box
        sx={{
          position: 'relative',
          backgroundColor: theme.palette.secondary.main,
          color: 'white',
          textAlign: 'center',
          py: 4,
          px: 2,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Get in Touch
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          For inquiries or bookings, reach out via{' '}
          <Link href="mailto:educator@example.com" color="inherit">
            educator@example.com
          </Link>
          .<br />
          Office Hours: Monday – Friday, 9 AM – 6 PM
        </Typography>
        <Button variant="contained" color="primary" sx={{ mr: 2 }}>
          Book a Session
        </Button>
        <Button variant="outlined" color="primary">
          Learn More
        </Button>
      </Box>
    </Box>
  );
};

export default About;
