import {Article} from "../app/models/Article";

export const ARTICLES: Article[] = [
  {
    title: 'A Systematic Literature Review on Microservices',
    authors: 'Hulya Vural, Murat Koyuncu & Sinem Guney',
    publication: 'Part of the book series: Lecture Notes in Computer Science ((LNTCS,volume 10409))',
    year: 2017,
    summary: 'The cloud is an emerging paradigm which leads the way for different approaches and standards. The architectural styles are evolving based on the requirements of the cloud as well. In recent years microservices is seen as the architecture style for scalable, fast evolving cloud applications. As part of this paper, a systematic mapping study was carried out around microservices. It is aiming to find out the current trends around microservices, the motivation behind microservices research, emerging standards and the possible research gaps. The obtained results can help researchers and practitioner in software engineering domain who want to be aware of new trends about SOA and cloud computing.',
    link: 'https://link.springer.com/chapter/10.1007/978-3-319-62407-5_14'
  },
  {
    title: 'Microservices: a definition of this new architectural term',
    authors: 'Lewis, J., & Fowler, M.',
    publication: 'Article published on Martin Fowler\'s official website',
    year: 2014,
    summary: 'The term “Microservice Architecture” has sprung up over the last few years to describe a particular way of designing software applications as suites of independently deployable services. While there is no precise definition of this architectural style, there are certain common characteristics around organization around business capability, automated deployment, intelligence in the endpoints, and decentralized control of languages and data.',
    link: 'http://martinfowler.com/articles/microservices.html'
  },
  {
    title: 'PF4MD: A Microservice Decomposition Tool Combining Problem Frames',
    authors: 'Li, Y., Li, Z., Bu, Y., Xiao, H., & Deng, Y.',
    publication: 'IEEE 31st International Requirements Engineering Conference (RE)',
    year: 2023,
    summary: 'Microservices have an important position in today\'s software development, enabling a highly cohesive and low-coupling way of service organization. To address the complexity issues of inter-service communication, data consistency and distributed system management in the microservice decomposition process, we extend the traditional problem diagram based on the commonality of microservice decomposition and problem frames: the causal domain in the problem domain is further divided into communication components and business components. We design a microservice decomposition tool PF4MD to visualize service requirements and design problem decomposition and complexity calculation rules. We evaluated it with cases such as the Smart Building system and obtained a strategy similar to manual decomposition but with more intuitive and finer granularity, thus helping architects to make more efficient decisions and understand the decomposition process more clearly in system requirements.',
    link: 'https://ieeexplore.ieee.org/abstract/document/10260891'
  },
  {
    title: 'Smells and refactorings for microservices security: A multivocal literature review',
    authors: 'Ponce, F., Soldani, J., Astudillo, H., & Brogi, A.',
    publication: 'Journal of Systems and Software',
    year: 2022,
    summary: 'Securing microservices is crucial, as many IT companies are delivering their businesses through microservices. If security “smells” affect microservice-based applications, they can possibly suffer from security leaks and need to be refactored to mitigate the effects of security smells therein. As the available knowledge on securing microservices is scattered across different pieces of white and grey literature, our objective here is to distill well-known smells for securing microservices, together with the refactorings enabling to mitigate their effects. To capture the state of the art and practice in securing microservices, we conducted a multivocal review of the existing white and grey literature on the topic. We systematically analysed 58 primary studies, selected among those published from 2011 until the end of 2020. Ten bad smells for securing microservices are identified, which we organized in a taxonomy, associating each smell with the security properties it may violate and the refactorings enabling to mitigate its effects. The security smells and the corresponding refactorings have pragmatic value for practitioners, who can exploit them in their daily work on securing microservices. They also serve as a starting point for researchers wishing to establish new research directions on securing microservices.',
    link: 'https://www.sciencedirect.com/science/article/abs/pii/S016412122200111X'
  },
  {
    title: 'On the definition of microservice bad smells',
    authors: 'Taibi, D., & Lenarduzzi, V.',
    publication: 'IEEE software',
    year: 2018,
    summary: 'Code smells and architectural smells (also called bad smells) are symptoms of poor design that can hinder code understandability and decrease maintainability. Several bad smells have been defined in the literature for both generic architectures and specific architectures. However, cloud-native applications based on microservices can be affected by other types of issues. In order to identify a set of microservice-specific bad smells, researchers collected evidence of bad practices by interviewing 72 developers with experience in developing systems based on microservices. Then, they classified the bad practices into a catalog of 11 microservice-specific bad smells frequently considered harmful by practitioners. The results can be used by practitioners and researchers as a guideline to avoid experiencing the same difficult situations in the systems they develop.',
    link: 'https://ieeexplore.ieee.org/abstract/document/8354414'
  },
  {
    title: 'Domain-driven design: tackling complexity in the heart of software',
    authors: 'Evans, E.',
    publication: 'Addison-Wesley Professional',
    year: 2004,
    summary: 'Eric Evans has written a fantastic book on how you can make the design of your software match your mental model of the problem domain you are addressing.\n' +
      '\n' +
      '“His book is very compatible with XP. It is not about drawing pictures of a domain; it is about how you think of it, the language you use to talk about it, and how you organize your software to reflect your improving understanding of it. Eric thinks that learning about your problem domain is as likely to happen at the end of your project as at the beginning, and so refactoring is a big part of his technique.\n' +
      '\n' +
      '“The book is a fun read. Eric has lots of interesting stories, and he has a way with words. I see this book as essential reading for software developers—it is a future classic',
    link: 'https://books.google.es/books?hl=es&lr=&id=xColAAPGubgC&oi=fnd&pg=PR9&dq=E.+Evans,+Domain-driven+design:+tackling+complexity+in+the+heart+of+software.+Addison-Wesley+Professional,+2004.&ots=qdUI9kNO1v&sig=N0IKHSAekAiQ-kuJWXUTDHrvq0Q#v=onepage&q=E.%20Evans%2C%20Domain-driven%20design%3A%20tackling%20complexity%20in%20the%20heart%20of%20software.%20Addison-Wesley%20Professional%2C%202004.&f=false'
  },
  {
    title: 'Does domain-driven design lead to finding the optimal modularity of a microservice?',
    authors: 'H Vural, M Koyuncu',
    publication: 'IEEE Access',
    year: 2021,
    summary: 'Information systems are moving into the cloud. The new requirements enforced by cloud standards are high availability, high scalability, and a reduced mean time to recovery. Due to these new requirements, information system architecture styles are also evolving. Microservice architecture is becoming the de facto standard for developing highly modular cloud information systems. Since microservices were introduced, there has been an ongoing debate concerning how to choose the granularity of a microservice. In this study, the optimal point of granularity for microservices is examined based on coupling and cohesion values. The present study is based on two design examples generated in previous studies that applied domain-driven design in proposing microservices. Both examples are modified to generate more and less granular microservices. The coupling and cohesion values of the original examples are compared to those of the more and less granular microservices. We observe that domain-driven design has delivered a good end result for finding modular microservices.',
    link: 'https://ieeexplore.ieee.org/abstract/document/9359794'
  },
  {
    title: 'Domain-driven design for microservices: An evidence-based investigation',
    authors: 'C Zhong, S Li, H Huang, X Liu, Z Chen, Y Zhang, H Zhang',
    publication: 'IEEE Transactions on Software Engineering',
    year: 2024,
    summary: 'MicroService Architecture (MSA), a predominant architectural style in recent years, still faces the arduous task of identifying the boundaries of microservices. Domain-Driven Design (DDD) is regarded as one of the major design methods for addressing this task in practice, which aims to iteratively build domain models using a series of patterns, principles, and practices. The adoption of DDD for MSA ( DDD4M in short) can, however, present considerable challenges in terms of a sufficient understanding of the methodological requirements and the application domains. It is imperative to establish a systematic understanding about the various aspects of employing DDD4M and provide effective guidance. This study reports an empirical inquiry that integrates a systematic literature review and a confirmatory survey. By reviewing 34 scientific studies and consulting 63 practitioners, this study reveals several distinctive findings with regard to the state and challenges of as well as the possible solutions for DDD4M applications, from the 5W1H perspectives: When , Where , Why , Who , What , and How . The analysis and synthesis of evidence show a wide variation in understanding of domain modeling artifacts. The status quo indicates the need for further methodological support in terms of application process, domain model design and implementation, and domain knowledge acquisition and management. To advance the state-of-the-practice, our findings were organized into a preliminary checklist that intends to assist practitioners by illuminating a DDD4M application process and the specific key considerations along the way.',
    link: 'https://ieeexplore.ieee.org/abstract/document/10495888'
  },
  {
    title: 'A Systematic Mapping Study in Microservice Architecture',
    authors: 'Alshuqayran, N., Ali, N., & Evans, R',
    publication: '2016 IEEE 9th international conference on service-oriented computing and applications (SOCA)',
    year: 2016,
    summary: 'The accelerating progress of network speed, reliability and security creates an increasing demand to move software and services from being stored and processed locally on users\' machines to being managed by third parties that are accessible through the network. This has created the need to develop new software development methods and software architectural styles that meet these new demands. One such example in software architectural design is the recent emergence of the microservices architecture to address the maintenance and scalability demands of online service providers. As microservice architecture is a new research area, the need for a systematic mapping study is crucial in order to summarise the progress so far and identify the gaps and requirements for future studies. In this paper we present a systematic mapping study of microservices architectures and their implementation. Our study focuses on identifying architectural challenges, the architectural diagrams/views and quality attributes related to microsevice systems.',
    link: 'https://ieeexplore.ieee.org/abstract/document/7796008'
  },
  {
    title: 'GreenMicro: Identifying Microservices From Use Cases in Greenfield Development',
    authors: 'Bajaj, D., Goel, A., & Gupta, S. C',
    publication: 'IEEE Access',
    year: 2022,
    summary: 'Microservices architecture is a new paradigm for developing a software system as a collection of independent services that communicate via lightweight protocols. In greenfield development, identifying the microservices is not a trivial task, as there is no legacy code lying around and no old development to start with. Thus, identification of microservices from requirements becomes an important decision during the analysis and design phase. Use cases play a vital role in the requirements analysis modeling phases in a model-driven software engineering process. Use cases capture the high-level user functions and the scope of system. In this paper, we propose GreenMicro, an automatic microservice identification technique that utilizes the use cases model and the database entities. Both features are the artifacts of analysis and design phase that depict complete functionality of an overall system. In essence, a collection of related use cases indicates a bounded context of the system that can be grouped in a suitable way as microservices. Therefore, our approach GreenMicro clusters close-knit use cases to recover meaningful microservices. We investigate and validate our approach on an in-house proprietary web application and three sample benchmark applications. We have mapped our approach to the state-of-the-art software quality assessment attributes and have presented the results. Preliminary results are motivating and the proposed methodology works as anticipated in identifying functionally cohesive and loosely coupled microservice candidate recommendations. Our approach enables the system architects to identify microservice candidates at an early analysis and design phase of development.',
    link: 'https://ieeexplore.ieee.org/abstract/document/9794673'
  },
  {
    title: 'SEMGROMI—a semantic grouping algorithm to identifying microservices using semantic similarity of user stories',
    authors: 'Vera-Rivera, F. H., Cuadros, E. G. P., Perez, B., Astudillo, H., & Gaona, C.',
    publication: 'PeerJ Computer Science',
    year: 2023,
    summary: 'Microservices is an architectural style for service-oriented distributed computing, and is being widely adopted in several domains, including autonomous vehicles, sensor networks, IoT systems, energy systems, telecommunications networks and telemedicine systems. When migrating a monolithic system to a microservices architecture, one of the key design problems is the “microservice granularity definition”, i.e., deciding how many microservices are needed and allocating computations among them. This article describes a semantic grouping algorithm (SEMGROMI), a technique that takes user stories, a well-known functional requirements specification technique, and identifies number and scope of candidate microservices using semantic similarity of the user stories’ textual description, while optimizing for low coupling, high cohesion, and high semantic similarity. Using the technique in four validation projects (two state-of-the-art projects and two industry projects), the proposed technique was compared with domain-driven design (DDD), the most frequent method used to identify microservices, and with a genetic algorithm previously proposed as part of the Microservices Backlog model. We found that SEMGROMI yields decompositions of user stories to microservices with high cohesion (from the semantic point of view) and low coupling, the complexity was reduced, also the communication between microservices and the estimated development time was decreased. Therefore, SEMGROMI is a viable option for the design and evaluation of microservices-based applications. The proposed semantic similarity-based technique (SEMGROMI) is part of the Microservices Backlog model, which allows to evaluate candidate microservices graphically and based on metrics to make design-time decisions about the architecture of the microservices-based application.',
    link: 'https://peerj.com/articles/cs-1380/'
  },
  {
    title: 'Can architecture knowledge guide software development with generative AI?',
    authors: 'Ipek Ozkaya',
    publication: 'IEEE Software',
    year: 2023,
    summary: 'Incorporating architecture knowledge into data that large language models are trained on and to tools that software engineers use to solve large scoped development problems ranging from technology upgrades, language translation, to software evolution is an unexplored area with challenging problems, but exciting applications if successful.',
    link: 'https://ieeexplore.ieee.org/abstract/document/10273784/'
  },
  {
    title: 'CARGO: AI-Guided Dependency Analysis for Migrating Monolithic Applications to Microservices Architecture',
    authors: 'Nitin, V., Asthana, S., Ray, B., & Krishna, R.',
    publication: 'Proceedings of the 37th IEEE/ACM International Conference on Automated Software Engineering',
    year: 2022,
    summary: 'Microservices Architecture (MSA) has become a de-facto standard for designing cloud-native enterprise applications due to its efficient infrastructure setup, service availability, elastic scalability, dependability, and better security. Existing (monolithic) systems must be decomposed into microservices to harness these characteristics. Since manual decomposition of large scale applications can be laborious and error-prone, AI-based systems to decompose applications are gaining popularity. However, the usefulness of these approaches is limited by the expressiveness of the program representation and their inability to model the application’s dependency on critical external resources such as databases. Consequently, partitioning recommendations offered by current tools result in architectures that result in (a) distributed monoliths, and/or (b) force the use of (often criticized) distributed transactions. This work attempts to overcome these challenges by introducing CARGO (short for Context-sensitive lAbel pRopaGatiOn)—a novel un-/semi-supervised partition refinement technique that uses a context- and flow-sensitive system dependency graph of the monolithic application to refine and thereby enrich the partitioning quality of the current state-of-the-art algorithms. CARGO was used to augment four state-of-the-art microservice partitioning techniques (comprised of 1 industrial tool and 3 open-source projects). These were applied on five Java EE applications (comprised of 1 proprietary and 4 open source projects). Experiments show that CARGO is capable of improving the partition quality of all four partitioning techniques. Further, CARGO substantially reduces distributed transactions, and a real-world performance evaluation of a benchmark application (deployed under varying loads) shows that CARGO also lowers the overall the latency of the deployed microservice application by 11% and increases throughput by 120% on average.',
    link: 'https://dl.acm.org/doi/abs/10.1145/3551349.3556960'
  },
  {
    title: 'Helping Novice Architects to Make Quality Design Decisions Using an LLM-Based Assistant',
    authors: 'Díaz-Pace, J. A., Tommasel, A., & Capilla, R.',
    publication: 'European Conference on Software Architecture',
    year: 2024,
    summary: 'Architectural knowledge and specifically design decisions have become first-class entities to be captured routinely in a design process. However, the quality of the decisions captured is often low. Part of the problem is that reflections intended to criticize, and thus improve, the decisions are seldom made in architecture teams, particularly when involving novice architects. To improve reflective practices and capture better decisions, we propose an design assistant approach based on generative AI techniques. Our assistant, called ArchMind, relies on two information sources: architectural knowledge about patterns, and information about the system under design. Furthermore, the assistant takes advantage of LLMs to progressively aid users in selecting and assessing alternative decisions, until capturing them using an Architecture Decision Record format. ArchMind mainly targets novice architects as discussed in an initial experiment using the assistant off-line for a classroom project. The generated ADRs were concrete and well-justified in their design rationale, although they tended to miss system-specific details.',
    link: 'https://link.springer.com/chapter/10.1007/978-3-031-70797-1_21'
  },
  {
    title: 'A Survey on Microservices Architecture: Principles, Patterns and Migration Challenges',
    authors: 'Velepucha, V., & Flores, P.',
    publication: 'IEEE Access',
    year: 2023,
    summary: 'Microservices architecture is a new trend embraced by many organizations as a way to modernize their legacy applications. However, although there is work related to the migration process, there is a gap in the body of knowledge related to the principles they should adopt when implementing a microservices architecture. This work presents a comprehensive survey, gathering literature that explores the fundamental principles underlying the object-oriented approach and how these concepts are related to monolithic and microservices architectures. In addition, our research encompasses both monolithic architectures and microservices, along with an investigation into the design patterns and principles utilized within microservices. Our contribution is present a list of patterns used in microservices architecture, the comparation between the principles expounded by the experts in the decomposition of microservices architectures, Martin Fowler and Sam Neuman, and the forerunner of the Principle of Information Hiding, David Parnas, who discusses modularization as a mechanism to improve flexibility and understanding of a system. Additionally, we expose the advantages and disadvantages of monolithic and microservices architectures obtained from the literature review carried out in summary form, which can help as a reference for researchers from academia and industry and finally reveal the trends of microservices architectures today.',
    link: 'https://ieeexplore.ieee.org/abstract/document/10220070'
  },
  {
    title: 'Architecting Microservices: Practical Opportunities and Challenges',
    authors: 'Baškarada, S., Nguyen, V., & Koronios, A.',
    publication: 'Journal of Computer Information Systems',
    year: 2020,
    summary: 'Contemporary highly dynamic technology and business environments, coupled with digitally savvy customers, are forcing both private and public organizations to continuously innovate and update their Information and Communication Technology (ICT) service offerings. In order to decrease the development cycles and ensure continuous delivery, many organizations are adopting new practices aimed at unifying software development and operations (i.e., DevOps). However, monolithic architectures of many large systems underpinning ICT services are severely restricting the effectiveness of such efforts. Although the latest architectural trend, microservices, is promising to solve many of the problems associated with monolithic software architectures, there is significant disagreement on when microservice architecture should be adopted, as well as how it may be best implemented. Given the limited empirical research on the topic, this paper identifies and discusses a range of opportunities and challenges associated with the adoption and implementation of microservices. The findings presented in the paper have been derived from in-depth interviews with 19 ICT architects with significant experience in large corporate systems, middleware, service oriented architectures, and, to a somewhat more limited extent, microservices.',
    link: 'https://www.tandfonline.com/doi/10.1080/08874417.2018.1520056'
  },
  {
    title: 'A Holistic Machine Learning-based Autoscaling Approach for Microservice Applications',
    authors: 'Goli, A., Mahmoudi, N., Khazaei, H., & Ardakanian, O.',
    publication: 'CLOSER, 1',
    year: 2021,
    summary: 'Microservice architecture is the mainstream pattern for developing large-scale cloud applications as it allows\n' +
      'for scaling application components on demand and independently. By designing and utilizing autoscalers for\n' +
      'microservice applications, it is possible to improve their availability and reduce the cost when the traffic load\n' +
      'is low. In this paper, we propose a novel predictive autoscaling approach for microservice applications which\n' +
      'leverages machine learning models to predict the number of required replicas for each microservice and the\n' +
      'effect of scaling a microservice on other microservices under a given workload. Our experimental results show\n' +
      'that the proposed approach in this work offers better performance in terms of response time and throughput\n' +
      'than HPA, the state-of-the-art autoscaler in the industry, and it takes fewer actions to maintain a desirable\n' +
      'performance and quality of service level for the target application.',
    link: 'https://www.scitepress.org/PublishedPapers/2021/104077/104077.pdf'
  },
  {
    title: 'Microservices and API Deployment Optimization using AI',
    authors: 'Charankar, N., & Pandiya, D. K.',
    publication: 'International Journal on Recent and Innovation Trends in Computing and Communication',
    year: 2024,
    summary: 'Artificial intelligence (AI) is expected to take a large part in the domain of software development, bringing a lot of innovative devices\n' +
      'and methods that can possibly change how applications are made and distributed. However, various tools like machine learning, natural\n' +
      'language processing, and computer vision help AI to be convincingly integrated into all phases of the software development life cycle,\n' +
      'opening up new development opportunities for designers to improve solutions, streamline processes, and enhance movement. In software\n' +
      'development AI is helping out with a lot of significant tasks, including code generation and bug revealing, automatic testing and\n' +
      'optimization of the performance. AI controls instruments to examine huge data sets containing patterns and provide the engineers with\n' +
      'intelligent advice to help them make more informed decisions. On the other hand, this information helps engineers with the development\n' +
      'process with higher efficiency and accuracy.',
    link: 'https://www.researchgate.net/profile/Nilesh-Charankar/publication/380583816_Microservices_and_API_Deployment_Optimization_using_AI/links/6661b53ba54c5f0b944ed504/Microservices-and-API-Deployment-Optimization-using-AI.pdf'
  },
  {
    title: 'Learning life cycle in autonomous intelligent systems',
    authors: 'Ierache, J., García-Martínez, R., & De Giusti, A.',
    publication: 'IFIP International Conference on Artificial Intelligence in Theory and Practice',
    year: 2008,
    summary: 'Autonomous Intelligent Systems (AIS) integrate planning, learning, and execution in a closed loop, showing an autonomous intelligent behavior. A Learning Life Cycle (LLC) for AISs is proposed. The LLC is based on three different learned operators’ layers: Built-in Operators, Trained Base Operators and World Interaction Operators. The extension of the original architecture to support the new type of operators is presented.',
    link: 'https://link.springer.com/chapter/10.1007/978-0-387-09695-7_46'
  },
  {
    title: 'Microservice-based projects in agile world: A structured interview',
    authors: 'Ünlü, H., Kennouche, D. E., Soylu, G. K., & Demirörs, O.',
    publication: '2024',
    year: 2024,
    summary: 'During the last decade, Microservice-based software architecture (MSSA) has been a preferred design paradigm for a growing number of companies. MSSA, specifically in the form of reactive systems, has substantial differences from the more conventional design paradigms, such as object-oriented analysis and design. Therefore, adaptation demands software organizations to transform their culture. However, there is a lack of research studies that explore common practices utilized by software companies that implement MSSAs. In this study, our goal is to get an insight into how practices such as an agile methodology, software analysis, design, test, size measurement, and effort estimation are performed in software projects which embrace the Microservice-based software architecture paradigm. Together with the identification of practices utilized for the MSSA paradigm, we aim to determine the challenges organizations face to adopt microservice-based software architectures. We performed a structured interview with participants coming from 20 different organizations over different roles, domains, and countries to collect information on their views, experience, and the challenges faced. Our results reveal that organizations find agile development compatible with microservices. In general, they continue to use traditional object-oriented modeling notations for analysis and design in an abstract way. They continue to use the same subjective size measurement and effort estimation approaches that they were using previously in traditional architectures. However, they face unique challenges in developing microservices. Although organizations face challenges, practitioners continue to use familiar techniques that they have been using for traditional architectures. The results provide a snapshot of the software industry that utilizes microservices.',
    link: 'https://www.sciencedirect.com/science/article/abs/pii/S0950584923001891'
  },
  {
    title: "Systematic literature reviews in software engineering–a tertiary study",
    authors: "Kitchenham, B., Pretorius, R., Budgen, D., Brereton, O. P., Turner, M., Niazi, M., & Linkman, S.",
    publication: "Inf Softw Technol",
    year: 2010,
    summary: "Estudio terciario sobre revisiones sistemáticas en ingeniería de software.",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0950584910000467"
  },
  {
    title: 'Artificial Intelligence in Software Requirements Engineering: State-of-the-Art',
    authors: 'Liu, K., Reddivari, S., & Reddivari, K.',
    publication: '2022 IEEE 23rd International Conference on Information Reuse and Integration for Data Science (IRI)',
    year: 2022,
    summary: 'Requirements Engineering (RE) is a very important activity in the software development life cycle. Poorly executed RE steps can result in poor quality software and expensive maintenance cost. Although researchers have previously related and applied artificial intelligence (AI) to RE, little is known about the specific role of AI in RE process. In particular, there are insufficient understandings about how AI should be incorporated in the RE process to produce high quality, clear and detailed requirements. In this paper, we present the current state-of-the-art of AI in RE. We reviewed the literature published between January 2015 to December 2021 in order to understand how the state of the art of AI branches such as machine learning, classification, and natural language processing (NLP) has advanced the field of RE. Each recent study is summarized and the advancement to the RE field is presented. There is an apparent direction of applying NLP techniques and supervised learning techniques such as classification to requirements documents. This study provides a summary and direction of the AI applications in the field of RE.',
    link: 'https://ieeexplore.ieee.org/abstract/document/9874229'
  },
  {
    title: 'From user stories to models: A machine learning empowered automation',
    authors: 'Kochbati, T., Li, S., Gérard, S., & Mraidha, C.',
    publication: 'MODELSWARD 2022-9th International Conference on Model-Driven Engineering and Software Development',
    year: 2021,
    summary: 'In modern software development, manually deriving architecture models from software requirements expressed in natural language becomes a tedious and time-consuming task particularly for more complex systems. Moreover, the increase in size of the developed systems raises the need to decompose the software system into subsystems at early stages since such decomposition aids to better design the system architecture. In this paper, we propose a machine learning based approach to automatically breakdown the system into subsystems and generate preliminary architecture models from natural language user stories in the Scrum process. Our approach consists of three pillars. Firstly, we compute word level similarity of requirements using word2vec as a prediction model. Secondly, we extend it to the requirement level similarity computation, using a scoring formula. Thirdly, we employ the Hierarchical Agglomerative Clustering algorithm to group the semantically similar requirements and provide an early decomposition of the system. Finally, we implement a set of specific Natural Language Processing heuristics in order to extract relevant elements that are needed to build models from the identified clusters. Ultimately, we illustrate our approach by the generation of subsystems expressed as UML use-case models and demonstrate its applicability using three case studies.',
    link: 'https://cea.hal.science/cea-04485122/'
  },
  {
    title: 'Mono2Micro: an AI-based toolchain for evolving monolithic enterprise applications to a microservice architecture',
    authors: 'Kalia, A. K., Xiao, J., Lin, C., Sinha, S., Rofrano, J., Vukovic, M., & Banerjee, D.',
    publication: 'Proceedings of the 28th ACM Joint Meeting on European Software Engineering Conference and Symposium on the Foundations of Software Engineering',
    year: 2020,
    summary: 'Mono2Micro is an AI-based toolchain that provides recommendations for decomposing legacy web applications into microservice partitions. Mono2Micro consists of a set of tools that collect static and runtime information from a monolithic application and process the information using an AI-based technique to generate recommendations for partitioning the application classes. Each partition represents a candidate microservice or a grouping of classes with similar business functionalities. Mono2Micro takes a temporo-spatial clustering approach to compute meaningful and explainable partitions. It generates two types of partition recommendations. First, it computes business-logic-seams-based partitions that represent a desired encapsulation of business functionalities. However, such a recommendation may cut across data dependencies between classes, accommodating which could require significant application updates. To address this, Mono2Micro computes natural-seams-based partitions, which respect data dependencies. We describe the set of tools that comprise Mono2Micro and illustrate them using a well-known open-source JEE application.',
    link: 'https://dl.acm.org/doi/abs/10.1145/3368089.3417933'
  },
  {
    title: 'Deep Q Learning for Self Adaptive Distributed Microservices Architecture',
    authors: 'MAGABLEH, B., & ALMIANI23, M. U. D. E. R.',
    publication: 'IEEE Acess',
    year: 2019,
    summary: 'One desired aspect of a self-adapting microservices architecture is the ability to continuouslymonitor  the  operational  environment,  detect  and  observe  anomalous  behavior,  and  provide  a  reasonablepolicy for self-scaling, self-healing, and self-tuning the computational resources in order to dynamicallyrespond to a sudden change in its operational environment. The behaviour of a microservices architecture iscontinuously changing overtime, which makes it a challenging task to use a statistical model to identify boththe normal and abnormal behaviour of the services running. The performance of the microservices clustercould fluctuate around the demand to accommodate scalability, orchestration and load balancing demands.To achieve the desired high levels of self-adaptability, this research implements microservices architecturesmodel following the MAPE-K model. Our proposed architecture employs Markov decision process (MDP)to identify the transition from one cluster state to another. Our proposed architecture employs a deep Q-learning network (DQN) for dynamically selecting the adaptation action that yield the highest reward. Thispaper evaluates the effectiveness of using DQN and MDP agent to achieve high level of self-adaptabilityof  microservice  architecture.  We  argue  in  this  paper  that  such  integration  between  DQN  and  MDP  inMAPE-K model offers microservice architecture with self-adaptability against the contextual changes in theoperational environment. The self-adaptation property is achieved by allowing the MDP agent to explorethe observation space and lets the DQN to select the adaptation policy with the highest reward, then theMDP agent executes the adaptation action and observes the changes. We believe integrating DQN into theadaptation action selection process improves the effectiveness of the adaptation and reduces the adaptationrisk including resources over-provisioning and thrashing. The proposed model preserves the cluster state andpreventing multiple actions to taking place at the same time. Our model also guarantees that the executedadaptation action fits the current execution context and achieves the adaptation goals.',
    link: 'https://core.ac.uk/reader/301304710'
  },
  {
    title: 'Can LLMs Generate Architectural Design Decisions? -An Exploratory Empirical study\n',
    authors: 'Dhar, R., Vaidhyanathan, K., & Varma, V.',
    publication: 'arXiv preprint arXiv:2403.01709',
    year: 0,
    summary: 'Architectural Knowledge Management (AKM) involves the organized handling of information related to architectural decisions and design within a project or organization. An essential artifact of AKM is the Architecture Decision Records (ADR), which documents key design decisions. ADRs are documents that capture decision context, decision made and various aspects related to a design decision, thereby promoting transparency, collaboration, and understanding. Despite their benefits, ADR adoption in software development has been slow due to challenges like time constraints and inconsistent uptake. Recent advancements in Large Language Models (LLMs) may help bridge this adoption gap by facilitating ADR generation. However, the effectiveness of LLM for ADR generation or understanding is something that has not been explored. To this end, in this work, we perform an exploratory study that aims to investigate the feasibility of using LLM for the generation of ADRs given the decision context. In our exploratory study, we utilize GPT and T5-based models with 0-shot, few-shot, and fine-tuning approaches to generate the Decision of an ADR given its Context. Our results indicate that in a 0-shot setting, state-of-the-art models such as GPT-4 generate relevant and accurate Design Decisions, although they fall short of human-level performance. Additionally, we observe that more cost-effective models like GPT-3.5 can achieve similar outcomes in a few-shot setting, and smaller models such as Flan-T5 can yield comparable results after fine-tuning. To conclude, this exploratory study suggests that LLM can generate Design Decisions, but further research is required to attain human-level generation and establish standardized widespread adoption.',
    link: 'https://arxiv.org/abs/2403.01709'
  },
  {
    title: '',
    authors: '',
    publication: '',
    year: 0,
    summary: '',
    link: ''
  },
  {
    title: '',
    authors: '',
    publication: '',
    year: 0,
    summary: '',
    link: ''
  },
  {
    title: '',
    authors: '',
    publication: '',
    year: 0,
    summary: '',
    link: ''
  },
  {
    title: '',
    authors: '',
    publication: '',
    year: 0,
    summary: '',
    link: ''
  },
  {
    title: '',
    authors: '',
    publication: '',
    year: 0,
    summary: '',
    link: ''
  }
];
