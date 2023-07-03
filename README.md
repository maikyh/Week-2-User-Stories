<h1 align="center">Ans2Ask</h1>

<div align="center">
  
**Project Plan:** [Miguel Garza - Meta U Eng Project Plan](https://docs.google.com/document/d/1sODIOBoNPjGYA7svBBwlI6oFuucbcb_NxHpgq47s6sk/edit?usp=sharing)

| Table of contents               |
| ------------------------------- |
| [Overview](#overview)           |
| [User Roles](#user-roles)       |
| [User Personas](#user-personas) |
| [User Stories](#user-stories)   |
| [Endpoints](#endpoints)         |
| [Models](#models)               |
| [Wireframes](#wireframes)       |
| [Screens flow](#screens-flow)   |

</div>

## Overview:
Ans2Ask is about a Q&A network in which users will ask their questions (this will cost digital points), but to continue asking (as they will be running out of points), they will have to answer other’s question (this will allow users to earn digital points and at the same time improve their rating).

- **Category**: Education.
- **Story**: A Q&A network would have users sign up, ask their questions and respond to other’s questions.
- **Market**: Students and Employees.
- **Habit**: Being curious, having questions is part of human behavior, each day there will always be more questions to ask!
- **Scope**: As a Q&A network, the content will be questions, answers and guides/courses.

## User Roles:
- **User**: This user can engage in two primary activities: 
  - **Question Seeker**: A user who desires to ask questions and seek assistance with their problems, tasks, projects, or exams.
  - **Problem Solver**: A user who derives satisfaction from answering questions and helping others by offering solutions and insights. 
- **Recruiter**: individuals who are looking for potential candidates.

*To accumulate points and continue asking questions, users must either solve problems for others or purchase points. However, the only way to earn trust points and improve their rating is by providing answers to questions.*

## User Personas:
- Persona 1 - User (Question Seeker):
  - Name: Sarah
  - Location: New York City, USA
  - Age: 25
  - Technology Access: Regularly uses a smartphone and a laptop for daily tasks.
  - Motivation: Sarah wants to seek assistance from knowledgeable individuals to overcome challenges in her work projects and tasks.
  - Pain Points: Sarah often struggles to find reliable sources to ask her questions, resulting in delays in completing her tasks.
- Persona 2 - User (Problem Solver):
  - Name: John
  - Location: London, UK
  - Age: 30
  - Technology Access: Tech-savvy and proficient in using various devices, including smartphones, tablets, and computers.
  - Motivation: John enjoys sharing his expertise and helping others by providing accurate answers and solutions to their questions.
  - Pain Points: John finds it challenging to find a platform where he can contribute his knowledge and receive recognition for his efforts.
- Persona 3 - Recruiter:
  - Name: Emma
  - Location: San Francisco, USA
  - Age: 35
  - Technology Access: Regularly uses a smartphone, laptop, and other tech devices for work.
  - Motivation: Emma works as a recruiter for a tech company and wants to connect with potential candidates who have the right skills and knowledge.
  - Pain Points: Emma has difficulty finding a reliable platform where she can easily connect with qualified individuals and reach out to them for job opportunities.
- Persona 4 - Recruiter:
  - Name: Michael
  - Location: Sydney, Australia
  - Age: 28
  - Technology Access: Proficient in using smartphones, laptops, and other digital devices for work.
  - Motivation: Michael works as a recruiter in an advertising agency and aims to discover talented individuals for creative roles.
  - Pain Points: Michael struggles to find a platform that caters specifically to the creative industry and provides a pool of qualified candidates. He often spends significant       time searching for potential candidates and reaching out to them individually.

## User Stories:
### Required
  1. As a user, I want to create an account, so that I can access all the features and functionalities of the platform.
  2. As a user, I want to login, so that I can securely access my account and personalize my experience.
  3. As a user, I want to create/edit/delete questions, so that I can manage the content I post.
  4. As a user, I want to pick a subject on the creation of each question, so that I can categorize them and receive relevant responses.
  5. As a user, I want to respond to questions, so that I can share my thoughts or provide answers.
  6. As a user, I want to view a feed of questions/courses of the selected subject, so that I can stay updated on the discussions.
  7. As a user, I want to search for questions, so that I can find specific topics or information easily.
  8. As a user, I want to thank answers, so that I can provide them the points they earned.
  9. As a user, I want to see my profile, so that I can view my personal information and activity history.
### Optional
  11. As a user, I want to edit my profile information, so that I can keep it up-to-date.
  12. As a user, I want to see badges on my profile, so that I can showcase my achievements.
  13. As a user, I want to get notifications when someone answers my question, so that I can stay updated on the responses.
  14. As a user, I want to get notifications when someone asks a question related to my area of expertise, so that I can share my knowledge.
  15. As a user, I want to mark questions as urgent, so that they receive immediate attention.
  16. As a user, I want to see a ranking of the top-rated problem solvers, so that I can identify knowledgeable contributors.
  17. As a user, I want to be certified as a recruiter, so that I can have credibility and access additional features related to recruiting.
  18. As a recruiter, I want to reach out to users, so that I can connect with potential candidates.

## Endpoints
| HHTP Verb | Name                               | Description                                                          | User Stories |
| --------- | ---------------------------------- | -------------------------------------------------------------------- | ------------ |
| POST      | users                              | Creates new user account                                             | 1, 17        | 
| GET       | users/me                           | Gets current user information                                        | 1, 2, 12, 18 |
| PUT       | users/me                           | Updates current user information                                     | 11           |
| POST      | questions                          | Creates a new question                                               | 3, 4, 15     |
| GET       | courses/subject                    | Gets the courses based on the subject                                | 6            |
| GET       | questions/subject                  | Gets the questions based on the subject                              | 6            |
| GET       | questions/query                    | Get a question based on a query                                      | 7            |
| GET       | questions/:questionId              | Get a question based on the ID                                       | 5, 6, 8      |
| PUT       | questions/:questionId              | Updates a question based on the ID                                   | 3            |
| DELETE    | questions/:questionId              | Deletes a question based on the ID                                   | 3            |
| GET       | questions/me                       | Gets the questions that the user has asked                           | 9            |
| GET       | questions/answered                 | Gets the questions that the user has answered                        | 9, 16        |

## Models
### Users
| Column Name | Type    | Description                  |
| ----------- | ------- | ---------------------------- |
| id          | integer | primary key                  |
| name        | text    | user name                    |
| email       | text    | user email                   |
| title       | text    | user title                   |
| isRecruiter | bool    | user or recruiter            |
| passoword   | text    | hashed password              |
| token       | text    | password reset token         |
| createdAt   | date    | date the account was created |

### Questions
| Column Name | Type    | Description      |
| ----------- | ------- | ---------------- |
| id          | integer | primary key      |
| title       | text    | question title   |
| text        | text    | question text    |
| subject     | text    | question subject |

### Answers
| Column Name | Type    | Description      |
| ----------- | ------- | ---------------- |
| id          | integer | primary key      |
| id_user     | text    | user id          |
| text        | text    | answer text      |
| thanks      | bool    | answer thanked   |

### Question_Answer
| Column Name | Type    | Description |
| ----------- | ------- | ----------- |
| id_question | integer | question id |
| id_answer   | integer | answer id   |

### User_Question
| Column Name | Type    | Description |
| ----------- | ------- | ----------- |
| id_user     | integer | user id     |
| id_question | integer | question id |

## Wireframes:
![MacBook Pro 16_ - 1](https://github.com/maikyh/Ans2Ask/assets/98727536/c9fb4db9-4315-4969-a339-719650ef21b8)
![MacBook Pro 16_ - 2](https://github.com/maikyh/Ans2Ask/assets/98727536/ad859f2b-64f0-402d-ad68-ea0a737954ec)
![MacBook Pro 16_ - 4](https://github.com/maikyh/Ans2Ask/assets/98727536/53c1b2c6-c003-4e48-b99f-31f513239483)
![MacBook Pro 16_ - 3](https://github.com/maikyh/Ans2Ask/assets/98727536/24eb63a0-45ae-4bd5-a92f-ac0437a039bb)
![MacBook Pro 16_ - 6](https://github.com/maikyh/Ans2Ask/assets/98727536/8aa610ab-1fcd-4fb7-abf7-2d290dc3f688)
![MacBook Pro 16_ - 5](https://github.com/maikyh/Ans2Ask/assets/98727536/cbebdb6c-c6bf-484d-8bd0-4f2caea7ad60)
![MacBook Pro 16_ - 7](https://github.com/maikyh/Ans2Ask/assets/98727536/264b2a4b-9e0f-47f6-8c94-df685475a0f3)

## Screens flow:
![New Note](https://github.com/maikyh/Ans2Ask/assets/98727536/d321ae23-8179-43c2-9931-669d2c2aea2b)
