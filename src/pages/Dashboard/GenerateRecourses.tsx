import React from 'react';
import { useParams } from 'react-router-dom';

export const GenerateRecourses = () => {
  const { taskId } = useParams();
  return <div>CardPage {taskId}</div>;
};
