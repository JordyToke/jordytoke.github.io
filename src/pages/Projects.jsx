import React from "react";
import { Outlet } from "react-router";
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section>
      <article>
        <p>Card 1</p>
      </article>
      <Outlet />
    </section>
  )
}