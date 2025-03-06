// BlogList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Particle from '../Particle';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const sampleBlogs = [
    {
      imageUrl: 'https://via.placeholder.com/150',
      blogUrl: '/blog/post-1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      createdTime: '2025-03-01'
    },
    {
      imageUrl: 'https://via.placeholder.com/150',
      blogUrl: '/blog/post-2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      createdTime: '2025-02-28'
    }
  ];

  const fetchBlogs = async () => {
    try {
      // Replace with your API Gateway endpoint
      //const response = await axios.get('https://your-api-gateway-endpoint.amazonaws.com/prod/blogs');
      setBlogs(sampleBlogs);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch blog posts');
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Container fluid className='project-section'>
      <Particle />
    
    <Container  className="my-4">
    <h1 className="project-heading">
          Blogs <strong className="purple">Notes </strong>
        </h1>
        <p style={{ color: "white" }}>
          "Imagination is way above than knowledge and reading and writing pushes it beyond the usual".
        </p>
      {blogs.map((blog, index) => (
        <Row key={index} className="mb-4 align-items-center" style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Column 1 - Image */}
          <Col md={4} className="project-card">
            <Card.Img
              variant="top"
              src={blog.imageUrl}
              alt="Blog preview"
              className="img-fluid"
            />
          </Col>

          {/* Column 2 - Blog details */}
          <Col md={8} className='project-card'>
            <Card>
              <Card.Body>
                <Card.Title>
                  <a href={blog.blogUrl} className="text-decoration-none">
                    Read Blog Post
                  </a>
                </Card.Title>
                <Card.Text>{blog.description}</Card.Text>
                <Card.Text>
                  <small className="text-muted">
                    Posted on: {new Date(blog.createdTime).toLocaleDateString()}
                  </small>
                </Card.Text>
                <Button variant="primary" href={blog.blogUrl}>
                  Read More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}
    </Container>
    </Container>
  );
};


export default BlogList;