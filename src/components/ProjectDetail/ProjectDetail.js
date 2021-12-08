import React, { useEffect, useState } from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const [projectDetail, setProjectDetail] = useState({});
  useEffect(() => {
    fetch('/projects.json')
      .then(res => res.json())
      .then(data => {
        const singleDetail = data.filter(pd => pd.id == id);
        setProjectDetail(singleDetail[0]);
      })
  }, [id])

  return (
    <>
      <Navigation />
      <div className="project-info">
        <Container>
          <Row>
            <Col md={5}>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={projectDetail?.screenShot?.[0]}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={projectDetail?.screenShot?.[1]}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={projectDetail?.screenShot?.[2]}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </Col>
            <Col md={7}>
              <div className="single-project-detail">
                <div className="project-title">
                  <h4>{projectDetail.title}</h4>
                </div>
                <div className="project-description">
                  <p>{projectDetail.description}</p>
                </div>
                <div className="project-description">
                  <h4>Features</h4>
                  <div className="features">
                    <ul>
                      {
                        projectDetail?.features?.map((feature, index) => <li key={index}>{feature}</li>)
                      }
                    </ul>
                  </div>
                </div>
                <div className="technology-used">
                  <h4>Technology used</h4>
                  <div className="technology-list">
                    {
                      projectDetail?.technologies?.map((technology, index) => <span key={index}>{technology}</span>)
                    }
                  </div>
                </div>
                <div className="projects-links">
                  <ul className="preview">
                    <li><a href={projectDetail?.liveSite} target="_blank" rel="noreferrer"><i className="fas fa-external-link-alt"></i></a></li>
                    <li><a href={projectDetail?.github?.[0]} target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a></li>
                    {
                      projectDetail?.github?.[1] && <li><a href={projectDetail?.github?.[1]} target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a></li>
                    }
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default ProjectDetail;