import { Outlet, Link, useLoaderData } from "react-router-dom";
import { getContacts } from "../contacts.js";

export async function loader() {
  const contacts = await getContacts();
  return { contacts };
}

export default function Root() {
  const { contacts } = useLoaderData();
  return (
    <>
      <header>
        <hgroup>
          <h1>Jordy Toke</h1>
          <p>Welcome to my website!</p>
        </hgroup>
      </header>
      <nav id="navbar">
        <ul>
          <li>
            <Link to="blog">Blog</Link>
          </li>
          <li>
            <Link to="projects">Projects</Link>
          </li>
          <li>
            <Link to="utilities">Utilities</Link>
          </li>
          <li>
            <Link to="about/vite+react">About</Link>
          </li>
          <li>
            <Link to="utilities/contacts/:contactId">Contacts</Link>
          </li>
          <li className="hidden">
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div id="search-spinner" aria-hidden hidden={true} />
              <div className="sr-only" aria-live="polite"></div>
              <input type="submit" value="Search" />
            </form>
          </li>
        </ul>
      </nav>
      <main id="detail">
        <Outlet />
      </main>
    </>
  );
}
