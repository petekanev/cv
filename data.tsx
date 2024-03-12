import { Certification } from "./components/certifications";
import type { Job } from "./components/job-description";

export const leftBullets = [
  { prio: 1, header: `Languages`, items: [`TypeScript`, `JavaScript`, `C++ (limited proficiency)`] },
  { prio: 5, header: `Frameworks`, items: [`React Native`, `NativeScript`, `React`, `AngularJS`, 'Express.js', `NestJS`, 'Serverless'] },
  { prio: 20, header: `Databases`, items: [`Redis`, `MongoDB`, 'SQL (limited proficiency)'] }
]

export const bullets = [
  { prio: 11, header: `AWS`, items: [`EC2`, `IAM`, `S3`, `Lambda`, `Elasticsearch`] },
  { prio: 12, header: `Azure Cloud`, items: [`API`, `Marketplace Apps`, `Bot Services`] },
  { prio: 10, header: `DevOps`, items: [`Incident Management and SRE`, `Terraform`, `Bash`, `Gitlab CI/CD`, 'Docker'] },
  { prio: 13, header: `Tools`, items: [`Git`, `Sentry`, `NewRelic`, 'Grafana'] },
]

export const jobs: readonly Job[] = [
  {
    position: `Principal Software Engineer`,
    time: `04/22 - 07/23`,
    location: `OfficeRnD, Sofia`,
    description: `Leading a team of 10 engineers in designing, developing and growing OfficeRnD's latest in its porfolio - OfficeRnD Hybrid.`,
    responsibilites:
      `Planned and lead technical initiatives based on product requirements, and oversaw their progress.
Designed and implemented a resilient infrastructure for high availability and fault tolerance.
Identified and managed technical debt.
Contributed to company wide initiatives for technical conventions and improvements.`.split(
        `\n`
      ),
    techStack: `TypeScript, NestJS, AWS, CI/CD, APMs, React, React Native`.split(`, `),
  },
  {
    position: `Senior Software Engineer`,
    time: `06/18 - 04/22`,
    location: `OfficeRnD, Sofia`,
    description: `Architecting and implementing of complex systems and features. Adept at driving product growth, enhancing efficiency, and ensuring scalability. `,
    responsibilites:
      `I spearheaded dynamic initiatives and played a pivotal role in the evolution of our products, contributing to four years of continuous growth and innovation.
      Product Growth: Led and executed initiatives that significantly contributed to product growth and enhanced customer acquisition, showcasing a strategic and results-driven approach.
      Architectural Leadership: Instrumental in engineering and deciding on architectural approaches for implementing complex systems and features, showcasing a deep understanding of the intricacies involved in creating robust and scalable solutions.
      Efficiency Improvements and Scalability: Engineered comprehensive optimizations across the board, ensuring scalability to accommodate the expanding needs of our customer base. Demonstrated a commitment to enhancing and optimizing system efficiency.
      Incident Management and DevOps Leadership: Assumed the role of Incident Manager/Site Reliability Engineer and acted as a stand-in DevOps resource, guaranteeing the uninterrupted functionality of interconnected systems, underscoring my dedication to system reliability.
      Mobile App Rework: Overhauled the ReactNative mobile app, implementing cutting-edge best practices to ensure a framework that facilitates continuous improvement, setting the groundwork for sustained quality in the development of the app.
      Mentorship and Team Onboarding: Played a key role in mentoring and onboarding numerous Junior and Regular Full-stack engineers, ensuring a seamless integration into organizational processes and projects.
      OfficeRnD Hybrid: Led the development and deployment of OfficeRnD Hybrid in 2021, addressing a new market need. Successfully launched the product within a few months, contributing to the expansion of the OfficeRnD portfolio.`.split(
        `\n`
      ),
    techStack: `TypeScript, NestJS, AWS, Node.js, Express, Redis, MongoDB, SRE, CI/CD, React, React Native, Test Automation`.split(
      `, `
    ),
  },
  {
    position: `Software Engineer`,
    time: `03/16 - 04/18`,
    location: `Progress, Sofia`,
    description: `Primary engineer responsible for the development of the NativeScript "Android bridge" - a pivotal component facilitating seamless communication between JavaScript and the underlying native Android APIs. Fostered open-source community engagement and growth.`,
    responsibilites:
      `As an Engineer on the NativeScript project, among other initiatives, I mainly participated in the active development of the "Android bridge," a pivotal component facilitating seamless communication between the developers' JavaScript code and the underlying native Android APIs. This involved intricate problem-solving and a deep understanding of JavaScript, V8 - the JavaScript engine, and Android development, resulting in a more efficient and streamlined development process.
      Spearheaded the implementation of a multi-threading model in NativeScript for Android.
      Beyond my technical contributions, I actively engaged in fostering the growth of the open-source community surrounding the NativeScript project. I dedicated time to support fellow community members, providing guidance and assistance to enhance their projects. That commitment contributed to the overall success and sustainability of the NativeScript ecosystem at the time.
      Furthermore, I took the initiative to implement native support for debugging NativeScript Android apps using the Chrome Dev Tools. This enhancement significantly improved the debugging experience for developers, facilitating more effective troubleshooting and ultimately accelerating the development lifecycle.`.split(
        `\n`
      ),
    techStack:
      `JavaScript, C++, V8, Java, Gradle, ObjectiveC`.split(`, `),
  }
];

export const certs: Certification[] = [
]

export const education = [
  {
    position: `Computer Software Engineering`,
    location: `Telerik Academy, Sofia`,
    time: `2015 - 2016`,
    description: `Top performing student in the 14-months intensive bootcamp program`
  }
]
