import React from "react";
import { Routes, Route } from "react-router";
import ProjectsHome from './ProjectsHome';
import styles from './Projects.module.css';
import ManillaFolder from './ManillaFolder'

const Projects = () => {
  return (
    <section className={styles.projects}>
      <ManillaFolder>
        <Routes>
          <Route index element={<ProjectsHome />} />
        </Routes>
      </ManillaFolder>
    </section>
  )
};

export default Projects;