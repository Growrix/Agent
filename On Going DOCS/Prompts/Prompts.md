***I can see there are 14 warnnings , and I want the 0 gate pass system. so I will never have any single warnnings. I want you to add necessary files in the Agent system in order to avoid this kind of outcome in future. make it generic and not project specific  so that Agent follows it stricktly. 
*** and also I need the agents will do all the envronment settings after the build so that I can run the dev server with npm run dev from the terminal. So update the necessary agent files for that . 
*** For the frontend , I always need the APP like mobile version. the mobile componenets can be different than the desktop and rutime can be separate in some cases but the Mobile version should look like native app. so the frotend designer agent must focus on that stricktly. 
And there are a lot of concerns about the frontend planning , now the site has very low contents, the styles, designs, no animations, and nohing much actually just the structure and basic design. even some pages are not well done. This overall frontend build is very simple and not up to the mark and it will never standout. So I want you to update the frontend designer agent and add more instructions and contexts to make sure that the frontend will be more attractive, with good animations, styles, and overall design. I want the site to look modern and appealing to the users. So please make sure to enhance the frontend design and make it more engaging for the visitors.
Each pages need content planning as well. section design planning as well. there is no HOME page in the menu, so users cant get back to home page. 

*** Also I want the backend to be very robust and scalable so the backend developer agent must follow the best practices for that and also make sure to avoid any warnnings in the code. 
*** I want the code to be clean and well documented so that any new developer can easily understand the codebase and contribute without facing any issues. So the code reviewer agent must ensure that all the code is clean, well-structured, and properly documented before merging it into the main branch. 
*** I also want to have a comprehensive test suite that covers all the critical functionalities of the application. So the testing agent must focus on writing unit tests, integration tests, and end-to-end tests to ensure the application is stable and free of bugs. 

*** additionally I want you to check back the above chats , and indentify any missing contexts or instructions that are necessary for the agents to perform their tasks effectively. If you find any gaps, please add the relevant contexts and instructions to the respective agent files to ensure that all agents have a clear understanding of their responsibilities and the project requirements. Becuase i found the AI is still updating the files while I asked to run the dev server, and also did installations. and also failed to run the dev server because of that. so I want to make sure that all the necessary contexts and instructions are in place for the agents to avoid such issues in the future. 

*** Finally, I want to have a continuous integration and continuous deployment (CI/CD) pipeline in place to automate the testing and deployment process. So the DevOps agent must set up a CI/CD pipeline that runs all tests and deploys the application to production automatically after successful tests.
Make sure that all the agents are aligned with these requirements and that they work together seamlessly to achieve the desired outcome. Regularly review the agents' performance and make adjustments as needed to ensure that they continue to meet the project's goals and maintain a high standard of quality. 


*** as you will be updating the existing agent and relevant files , so becareful to avoid making chaos with duplicate contexts. only add the necessary contexts and instructions to the existing agent files without creating any duplicates or conflicts. Make sure to review the existing contexts in the agent files before adding new ones to ensure that they are not already covered. The goal is to enhance the agents' capabilities while maintaining a clean and organized codebase. Make it generic and not project specific so that it can be applied to any future projects without requiring significant modifications.




build a solar installation service company website. never Build with hard coded UI.  Use a headless CMS and a component-based framework for dynamic content.  It should be scalable and SEO friendly. Additionally, integrate a blog section for industry insights and customer testimonials to build credibility.  Ensure a responsive design for all devices. The website should also feature a clear call-to-action for quote requests and contact information.  Also include a portfolio showcasing past projects with detailed case studies.  Lastly, implement user registration and login functionality for personalized experiences and content delivery. 



Optimizing tool selection...Here is a prompt for Repit AI to build the frontend only, strictly following the frontend protocol E2E, with all necessary file references and project root location:

---

**Prompt for Repit AI: Frontend-Only Build (Next.js, Protocol-Compliant)**

You are to build the frontend only for the Electrical Service Company website. Do not generate backend, CMS, or deployment code. You must strictly follow the frontend protocol and planning artifacts, ensuring E2E coverage and design system compliance.

**Project Root:**  
web (Next.js project root, already initialized)

**Frontend Protocol & Planning Artifacts (MUST FOLLOW):**
- Canonical frontend plan:  
  `../DOC/PROJECT PLAN/Frontend/electrical-frontend-plan.md`
- Page-by-page planning pack:  
  `../DOC/PROJECT PLAN/Frontend/Pages/ai-context.yaml`  
  `../DOC/PROJECT PLAN/Frontend/Pages/README.md`  
  All files in: `../DOC/PROJECT PLAN/Frontend/Pages/`
- Design system and UI/UX standards:  
  `../DOC/Universal/Enterprise Level Guide/frontend/ui-ux-standards.md`  
  `../DOC/Universal/Enterprise Level Guide/frontend/frontend-rules-and-design-system.md`

**Strict Requirements:**
- Only generate code and files inside web (the Next.js app).
- Implement all pages, navigation, and components as defined in the planning pack.
- Use only the design tokens, layout, and component rules from the referenced design system docs.
- Do not invent backend APIs, CMS schemas, or integrations—consume only what is defined in the shared contracts.
- All code must be TypeScript, use the App Router, and be ready for Tailwind CSS.
- Ensure accessibility, SEO, and mobile app-like navigation as specified.
- Do not touch or reference any backend, CMS, or deployment files.

**Deliverables:**  
- All Next.js pages, components, and styles as per the planning docs, inside web.
- No backend, CMS, or serverless code.

---

Use this prompt to instruct Repit AI for a protocol-compliant, frontend-only build.You've used 100% of your weekly rate limit. Your weekly rate limit will reset on May 11 at 6:00 AM. [Learn More](https://aka.ms/github-copilot-rate-limit-error)



I want to update the workflow and use of the agents in the vs code. I want to break the workflow into multiple stages and assign specific agents to each stage. This way we can ensure that each aspect of the project is handled by a specialized agent, and we can maintain a clear separation of concerns throughout the development process.
***Planning Phase***
What I want now: 
- The Frontend planner will be responsible for the entire frontend architecture, design, and planning. They will work on creating the master UI architecture document, defining the site map, navigation models, and overall frontend structure. They will also ensure that the frontend design is modern, engaging, and follows best practices for user experience. also will foolow the skills, rules, knowledges, e2e . 
- Must prepare the necessary documentations of the plan as it is suppose to create as per rules and protocols. 
- The Frontend designer will focus on the visual and interaction design of the frontend. They will work closely with the frontend planner to ensure that the design aligns with the overall architecture and user experience goals. They will also be responsible for creating visual comps, defining animations, and ensuring that the design is appealing and modern. also will follow the skills, rules, knowledges, e2e .
- The Goal is to build world class frontend that is not only functional but also visually stunning and engaging for users. We want to create a website that stands out in the industry and provides an exceptional user experience.
- This frontend planner capability is = and more that a pro level frontend architect and strategist. They must have a deep understanding of frontend technologies, design principles, and user experience best practices. They should be able to create a comprehensive frontend plan that covers all aspects of the frontend development process, from architecture to design to implementation. They should also be able to work closely with the frontend designer to ensure that the design aligns with the overall architecture and user experience goals.
- Lets not limit ai with limited scoped templates. if needed then build the templates as per the needs of the project and the agents. The goal is to provide the agents with all the necessary contexts, instructions, and guidelines to perform their tasks effectively and efficiently. We want to empower the agents to make informed decisions and produce high-quality work that meets the project's goals and requirements. So let's be flexible with the templates and ensure that they serve the needs of the agents and the project as a whole.

# Backend Planner : This agent will be responsible for planning the backend architecture, including the choice of technologies, database design, API structure, and scalability considerations. They will work closely with the frontend planner to ensure that the backend supports the frontend requirements and provides a robust and scalable foundation for the application.

- This planning phase will be inclding the devops planning as well, so the backend planner will also be responsible for defining the CI/CD pipeline, deployment strategy, and infrastructure requirements. They will ensure that the backend is not only functional but also secure, maintainable, and scalable to support future growth and feature additions. 
- shortly , we are breaking the planning phase into frontend planning and the rest of agents will work on this phase as well but the backend planner will be the lead for this phase and will ensure that all aspects of the backend and devops planning are covered comprehensively and align with the overall project goals and requirements. also will plan the integrations and third party services if needed. also will follow the skills, rules, knowledges, e2e .

*** Finally we make planning phase done in 2 prompts and 2 agents. The first prompt is for the frontend planner and the second prompt is for the backend planner. This way we can ensure that both aspects of the planning phase are given the necessary attention and expertise, and we can maintain a clear separation of concerns between the frontend and backend planning processes. Each agent will focus on their respective areas of expertise while also collaborating to ensure that the overall plan is cohesive and aligned with the project goals.

### Now I want you to do this separation, also update the .github agent files accordingly. name them properly that is recognizable. 

***Execution Agents***
- The Frontend Developer agent will be responsible for implementing the frontend based on the plan created by the frontend planner and the design created by the frontend designer. They will work on building the pages, components, and styles as per the planning documents and design specifications. They will also ensure that the frontend is responsive, accessible, and follows best practices for performance and SEO. They will collaborate closely with the backend developer to ensure that the frontend integrates seamlessly with the backend APIs and services. also will follow the skills, rules, knowledges, e2e . 
- must follow the frontend protocol strictly and ensure that all code is generated inside the web directory of the Next.js project. They should not generate any backend, CMS, or deployment code, and should only consume the APIs and contracts defined in the planning documents. The goal is to create a high-quality, modern, and engaging frontend that provides an exceptional user experience while adhering to the defined architecture and design principles.
- Also create tests script for frontend testing agent to work on it later.
- create necessary logical files and folders for the frontend development process, such as components, pages, styles, and utilities. This will help in maintaining a clean and organized codebase and will facilitate the development process for the frontend developer agent.
- But make sure to focus on buidling the frontend with high quality, modern design, and engaging user experience. The frontend should not only be functional but also visually appealing and user-friendly. The frontend developer agent should pay attention to details such as animations, transitions, and overall aesthetics to create a website that stands out and provides an exceptional experience for the users.
- We will only build the frontend in the first phase, so the backend developer agent will not be involved in this phase. The frontend developer agent will focus solely on implementing the frontend based on the planning and design created by the frontend planner and designer. Once the frontend is complete, we can then move on to the backend development phase where the backend developer agent will take the lead. This way we can ensure that each phase of the project is given the necessary attention and expertise, and we can maintain a clear separation of concerns between the frontend and backend development processes.

- The Backend Developer agent will be responsible for implementing the backend based on the plan created by the backend planner. They will work on building the APIs, database schema, and server-side logic as per the planning documents. They will also ensure that the backend is secure, scalable, and follows best practices for performance and maintainability. They will collaborate closely with the frontend developer to ensure that the backend integrates seamlessly with the frontend and provides the necessary functionality to support the user experience goals. also will follow the skills, rules, knowledges, e2e .
- The backend developer agent will focus on building a robust and scalable backend that can support the frontend requirements and provide a solid foundation for the application. They will implement the APIs, database schema, and server-side logic as defined in the planning documents, ensuring that the backend is secure, maintainable, and performant. They will also work on setting up the CI/CD pipeline and deployment strategy as planned by the backend planner to ensure smooth and automated deployment of the application to production. The goal is to create a backend that not only meets the functional requirements but also adheres to best practices for security, scalability, and maintainability.
- We will focus on building the frontend in the first phase, so the backend developer agent will not be involved in this phase. The backend developer agent will focus solely on implementing the backend based on the planning created by the backend planner once we move on to the backend development phase. This way we can ensure that each phase of the project is given the necessary attention and expertise, and we can maintain a clear separation of concerns between the frontend and backend development processes.
- The integration phase is also included in this phase along with the core backend development, so the backend developer agent will also be responsible for integrating any third-party services or APIs as defined in the planning documents. They will ensure that the integrations are seamless and do not introduce any security or performance issues to the application. The backend developer agent will work closely with the frontend developer to ensure that the integrations support the frontend requirements and provide a smooth user experience. The goal is to create a backend that not only meets the functional requirements but also integrates well with any necessary third-party services to enhance the overall functionality of the application.
- the CMS , email , payment gateway, analytics, and any other integrations that are planned will be implemented by the backend developer agent in this phase. They will ensure that all integrations are properly configured, secure, and do not introduce any performance issues to the application. The backend developer agent will work closely with the frontend developer to ensure that the integrations support the frontend requirements and provide a seamless user experience. The goal is to create a backend that not only meets the functional requirements but also integrates well with all necessary third-party services to enhance the overall functionality of the application.
- supabase , DB ets all should be done in this phase e2e. including Devops and CI/CD pipeline setup. The backend developer agent will take the lead on setting up the database, server-side logic, and integrations, as well as configuring the CI/CD pipeline to automate testing and deployment. They will ensure that all aspects of the backend development are covered comprehensively and align with the overall project goals and requirements. The goal is to create a robust, scalable, and secure backend that supports the frontend requirements and provides a solid foundation for the application while also ensuring smooth and automated deployment to production.
- This phase will actually close the production by delivering a complete, functional, and well-integrated application that meets all the defined requirements and goals. The backend developer agent will ensure that the backend is fully implemented, secure, and scalable, while also ensuring that all integrations are properly configured and do not introduce any issues to the application. The frontend developer agent will ensure that the frontend is fully implemented, visually appealing, and provides an exceptional user experience. Together, they will deliver a high-quality application that stands out in the industry and provides value to the users.

### Overall we need to separate existing workkflow into 2 parts: frontend and rest of the work planner, and Fronentd and the rest of the work developer. 

The goals is to give AI more space to focus on each type of focus building. 

### read the existing agent files and update them accordingly to reflect this separation of concerns and specialization. Make sure to update the agent names, responsibilities, and workflows in the .github/agents directory to align with this new structure.



lets plan to build frontend for a solar installation service company website. never Build with hard coded UI.  Use a headless CMS and a component-based framework for dynamic content.  It should be scalable and SEO friendly. Additionally, integrate a blog section for industry insights and customer testimonials to build credibility.  Ensure a responsive design for all devices. The website should also feature a clear call-to-action for quote requests and contact information.  Also include a portfolio showcasing past projects with detailed case studies.  Lastly, implement user registration and login functionality for personalized experiences and content delivery.

Plan each pages e2e with all the necessary details and contexts. Make sure to follow the frontend protocol strictly and ensure that all code is generated inside the web directory of the Next.js project. Do not generate any backend, CMS, or deployment code, and only consume the APIs and contracts defined in the planning documents. The goal is to create a high-quality, modern, and engaging frontend that provides an exceptional user experience while adhering to the defined architecture and design principles.

- Make it image heavy , with good animations, modern design, and engaging user experience. The frontend developer agent should pay attention to details such as animations, transitions, and overall aesthetics to create a website that stands out and provides an exceptional experience for the users.
- add whatsap, call and AI assistant chat support icons and the chat assistant BOT modal also. 
- Add a instant Quote calculator with good UI and UX.
- the rest you plan as per your agent protocol and the planning documents. Make sure to cover all the necessary aspects of the frontend development process, including architecture, design, implementation, and testing, while adhering to the defined protocols and standards. The goal is to create a frontend that not only meets the functional requirements but also provides a visually stunning and engaging user experience that stands out in the industry.