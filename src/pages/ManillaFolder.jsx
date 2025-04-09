import React from "react";
import styles from "./ManillaFolder.module.css";

const ManillaFolder = ({ children, projects }) => {
  const Tabs = () => {
    const tabs = projects ? projects.map((project, key) => (
      <li className={styles.tabs} key={key}>{project.title}</li>
    )) : (<li className={styles.tabs}>Project</li>);

    return (
      <ul>
        {tabs}
      </ul>
    );
  };

  return (
    <div className={styles.manillaFolder}>
      <nav>
        <Tabs />
      </nav>
      <section className={styles.folder}>
        {children}
      </section>
    </div>
  );
};

export default ManillaFolder;
