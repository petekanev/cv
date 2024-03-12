import * as React from "react";
import Photo from "./assets/photo.png";
import "./index.css";
import { JobDescription } from "../components/job-description";
import { SkillsList } from "../components/skill-list";
import { leftBullets, jobs, bullets, certs, education } from "../data";
import { Certifications } from "../components/certifications";

const Header = () => (
  <header>
    <div>
      <img src={Photo} />
    </div>
    <div>
      <div>
        <h1>Peter Kanev</h1>
        <p>Senior Software Engineer</p>
      </div>
      <div>
        <ul>
          <li>
            <a href="https://github.com/petekanev">github.com/petekanev</a>
          </li>
          <li>
            <a href="mailto:pete.kanev@gmail.com">
              pete.kanev@gmail.com
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/peterkanev/">
              linkedin.com/in/peterkanev/
            </a>
          </li>
          <li>
            <a href="tel:+4550640294">+45 50640294</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
);

export const Page = () => (
  <main>
    <Header />
    <article>
      <header>
        <h2>Programming Expertise</h2>
      </header>
      <SkillsList
        skills={[...bullets, ...leftBullets].sort(
          (a, b) => (a.prio ?? 1000) - (b.prio || 1000)
        )}
      />
    </article>
    <article>
      <header>
        <h2>Work Experience</h2>
      </header>
      {jobs.map((j) => (
        <JobDescription key={`${j.position} ${j.location}`} job={j} />
      ))}
    </article>
    <article>
      <header>
        <h2>Education & Certification</h2>
      </header>
      {education.map((e) => (
        <JobDescription positionEmoji="🎓" key={`${e.position} ${e.time}`} job={e} />
      ))}
      <Certifications certs={certs} />
    </article>
  </main>
);
