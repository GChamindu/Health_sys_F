import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Protected(props) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('user-info')) {
      navigate('/register');
    }
  }, [navigate]);

  return <div>{props.children}</div>;
}
