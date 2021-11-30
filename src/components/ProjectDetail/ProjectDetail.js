import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

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
    <div>

    </div>
  );
};

export default ProjectDetail;