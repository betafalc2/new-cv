import React from 'react';
import styles from './HomePage.module.css';
import { useNavigate } from 'react-router-dom';

const projects = [
    { id: 1, name: 'Task List', color: '#ffdfc8' },
    { id: 2, name: 'e-Commerce Review', color: '#d8e2dc' },
    { id: 3, name: 'Weather Forecast', color: '#fec5bb' },
    { id: 4, name: 'Translator', color: '#e8e8e4' },
    { id: 5, name: 'Frontend Web Showcase', color: '#ffe5d9' },
    { id: 6, name: 'Feedback/Contact', color: '#faf7f0'},
];

const HomePage = () => {
    const navigate = useNavigate();

    const handleStartClick = (project) => {
        if (project.name === 'Feedback/Contact') {
            navigate('/Feedback');
        } else if (project.name === 'Task List') {
            navigate('/todo');
        } else if (project.name === 'e-Commerce Review'){
            navigate('/Multistep');
        } else if(project.name === 'Weather Forecast'){
            navigate('Weather');
        }else if ( project.name === 'Translator'){
            navigate('/Translator');
        }else if( project.name === 'Frontend Web Showcase'){
            navigate('/EmbeddedWebsite');
        }
        else {
            navigate(`/projects/${project.id}`);
        }
    };

    return (
        <div className={styles.homepage}>
            <div className={styles['Homegrid-container']}>
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className={styles['Homegrid-item']}
                        style={{ backgroundColor: project.color }}
                        onClick={() => handleStartClick(project)}
                    >
                        <span className={styles['Homeproject-name']}>{project.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
