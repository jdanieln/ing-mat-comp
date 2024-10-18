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
    title: 'AI-Driven Partitioning Framework for Migrating Monolithic Applications to Microservices',
    authors: 'Ramamoorthi, V.',
    publication: 'Journal of Computational Social Dynamics',
    year: 2023,
    summary: 'Microservice Architecture (MSA) has become a standard for designing scalable and flexible enterprise applications. However, the process of migrating monolithic systems to microservices is fraught with challenges, including the risk of creating distributed monoliths and managing complex distributed transactions. To address these issues, we present CARGO (Context-sensitive lAbel pRopaGatiOn), an AI-guided framework that improves microservice partitioning through the use of System Dependency Graphs (SDGs) and a context-sensitive label propagation algorithm. SDGs enable detailed modeling of both intra-service and inter-service dependencies, capturing critical aspects like call-return, data, heap, and transactional edges. By iteratively refining partition boundaries, CARGO minimizes inter-service coupling, reduces the occurrence of distributed transactions, and enhances service cohesion. Evaluations conducted on benchmark applications such as Daytrader and JPetStore demonstrate that CARGO significantly outperforms state-of-the-art tools like Mono2Micro and CoGCN in terms of transaction purity, latency, throughput, and architectural quality. This work establishes a foundation for automating the migration of monolithic applications into efficient, scalable microservice architectures and opens avenues for applying CARGO to other programming environments like Python and .NET.',
    link: 'https://vectoral.org/index.php/JCSD/article/view/131'
  },
  {
    title: 'Machine learning-based auto-scaling for containerized applications',
    authors: 'Imdoukh, M., Ahmad, I., & Alfailakawi, M. G.',
    publication: 'Neural Computing and Applications',
    year: 2020,
    summary: 'Containers are shaping the new era of cloud applications due to their key benefits such as lightweight, very quick to launch, consuming minimum resources to run an application which reduces cost, and can be easily and rapidly scaled up/down as per workload requirements. However, container-based cloud applications require sophisticated auto-scaling methods that automatically and in a timely manner provision and de-provision cloud resources without human intervention in response to dynamic fluctuations in workload. To address this challenge, in this paper, we propose a proactive machine learning-based approach to perform auto-scaling of Docker containers in response to dynamic workload changes at runtime. The proposed auto-scaler architecture follows the commonly abstracted four steps: monitor, analyze, plan, and execute the control loop. The monitor component continuously collects different types of data (HTTP request statistics, CPU, and memory utilization) that are needed during the analysis and planning phase to determine proper scaling actions. We employ in analysis phase a concise yet fast, adaptive, and accurate prediction model based on long short-term memory (LSTM) neural network to predict future HTTP workload to determine the number of containers needed to handle requests ahead of time to eliminate delays caused by starting or stopping running containers. Moreover, in the planning phase, the proposed gradually decreasing strategy avoids oscillations which happens when scaling operations are too frequent. Experimental results using realistic workload show that the prediction accuracy of LSTM model is as accurate as auto-regression integrated moving average model but offers 600 times prediction speedup. Moreover, as compared with artificial neural network model, LSTM model performs better in terms of auto-scaler metrics related to provisioning and elastic speedup. In addition, it was observed that when LSTM model is used, the predicted workload helped in using the minimum number of replicas to handle future workload. In the experiments, the use of GDS showed promising results in keeping the desired performance at reduced cost to handle cases with sudden workload increase/decrease.',
    link: 'https://link.springer.com/article/10.1007/s00521-019-04507-z'
  },
  {
    title: 'Artificial Intelligence Enabled Microservice Container Orchestration to increase efficiency and scalability for High Volume Transaction System in Cloud Environment',
    authors: 'Singh, A., & Aggarwal, A.',
    publication: 'Journal of Artificial Intelligence Research and Applications',
    year: 2023,
    summary: 'The rapid evolution of microservice architecture and container orchestration in cloud environments has spurred interest in leveraging Artificial Intelligence (AI) to enhance the efficiency and effectiveness of these technologies. This research explores the intersection of AI, microservices, and container orchestration, investigating the potential benefits and challenges of integrating AI into the orchestration of microservices in cloud environments. Through a comprehensive review of the existing literature, the paper delves into the current state of microservice architecture, container orchestration tools, and the role of AI in cloud computing.\n' +
      '\n' +
      'The methodology involves a careful examination of AI models and algorithms suitable for microservice container orchestration, along with practical experimentation to showcase the impact of AI on scalability, reliability, and performance. Real-world case studies provide insights into how organizations have successfully implemented AI in microservices and container orchestration, offering tangible examples of the advantages and potential pitfalls.\n' +
      '\n' +
      'The results and discussion section presents findings from the study, comparing and contrasting with existing literature to draw meaningful conclusions. Additionally, the paper addresses challenges in integrating AI with microservice container orchestration and proposes future directions for research in this dynamic and rapidly evolving field. In conclusion, this research underscores the importance of AI in optimizing microservice container orchestration in cloud environments. The findings contribute to the broader understanding of how AI technologies can be harnessed to unlock new possibilities and address challenges in the deployment and management of microservices in the cloud.',
    link: 'https://aimlstudies.co.uk/index.php/jaira/article/view/23'
  },
  {
    title: 'ACM Computing Surveys (CSUR)',
    authors: 'Zhong, Z., Xu, M., Rodriguez, M. A., Xu, C., & Buyya, R.',
    publication: 'ACM Computing Surveys (CSUR)',
    year: 2022,
    summary: 'Containerization is a lightweight application virtualization technology, providing high environmental consistency, operating system distribution portability, and resource isolation. Existing mainstream cloud service providers have prevalently adopted container technologies in their distributed system infrastructures for automated application management. To handle the automation of deployment, maintenance, autoscaling, and networking of containerized applications, container orchestration is proposed as an essential research problem. However, the highly dynamic and diverse feature of cloud workloads and environments considerably raises the complexity of orchestration mechanisms. Machine learning algorithms are accordingly employed by container orchestration systems for behavior modeling and prediction of multi-dimensional performance metrics. Such insights could further improve the quality of resource provisioning decisions in response to the changing workloads under complex environments. In this article, we present a comprehensive literature review of existing machine learning-based container orchestration approaches. Detailed taxonomies are proposed to classify the current researches by their common features. Moreover, the evolution of machine learning-based container orchestration technologies from the year 2016 to 2021 has been designed based on objectives and metrics. A comparative analysis of the reviewed techniques is conducted according to the proposed taxonomies, with emphasis on their key characteristics. Finally, various open research challenges and potential future directions are highlighted.',
    link: 'https://dl.acm.org/doi/full/10.1145/3510415'
  },
  {
    title: 'Research on Intelligent Monitoring Scheme for Microservice Application Systems',
    authors: 'Jiang, Y., Zhang, N., & Ren, Z.',
    publication: '2020 International Conference on Intelligent Transportation, Big Data & Smart City (ICITBS)',
    year: 2020,
    summary: 'In order to effectively monitor the operation of multiple microservices in the microservice architecture system, to find out problems in time for early warning and to propose solutions and other problems, a set of intelligent monitoring scheme for the microservice application system is proposed, which is more effective to overcome the system monitoring management difficulties caused by the distributed architecture strategy of the microservice application system. The planning and design of the whole scheme start from the analysis of the microservice architecture, through the analysis and comparison of the microservice system monitoring system and various microservice application system monitoring schemes, and further combining the push-pull mode selection of the monitoring system with the analysis of the intelligent alarm scheme. The improvement of the monitoring mode of the microservice application system from the local triggering alarm to the intelligent alarm is finally realized. Experimental results present the plan can more systematically consider the data of all monitoring levels, then analyze and summarize, and finally achieve more timely, more accurately and more effectively monitoring and earlier warning of the microservice application system.',
    link: 'https://ieeexplore.ieee.org/abstract/document/9109991'
  },
  {
    title: 'A Microservices Architecture for Reactive and Proactive Fault Tolerance in IoT Systems',
    authors: 'Power, A., & Kotonya, G.',
    publication: '2018 IEEE 19th International Symposium on" A World of Wireless, Mobile and Multimedia Networks"(WoWMoM)',
    year: 2018,
    summary: 'Providing fault-tolerance (FT) support to Internet of Things (IoT) systems is an open challenge, with many implementations providing static, tightly coupled FT support that does not adapt and evolve like IoT systems do. This paper proposes a pluggable framework based on a microservices architecture that implements FT support as two complementary microservices: one that uses complex event processing for realtime FT detection, and another that uses online machine learning to detect fault patterns and pre-emptively mitigate faults before they are activated. We provide an early evaluation of how our framework can handle a real-world scenario.',
    link: 'https://ieeexplore.ieee.org/abstract/document/8449789'
  },
  {
    title: 'Sage: practical and scalable ML-driven performance debugging in microservices',
    authors: 'Gan, Y., Liang, M., Dev, S., Lo, D., & Delimitrou, C.',
    publication: 'Proceedings of the 26th ACM International Conference on Architectural Support for Programming Languages and Operating Systems',
    year: 2021,
    summary: 'Cloud applications are increasingly shifting from large monolithic services to complex graphs of loosely-coupled microservices. Despite the advantages of modularity and elasticity microservices offer, they also complicate cluster management and performance debugging, as dependencies between tiers introduce backpressure and cascading QoS violations. Prior work on performance debugging for cloud services either relies on empirical techniques, or uses supervised learning to diagnose the root causes of performance issues, which requires significant application instrumentation, and is difficult to deploy in practice.\n' +
      'We present Sage, a machine learning-driven root cause analysis system for interactive cloud microservices that focuses on practicality and scalability. Sage leverages unsupervised ML models to circumvent the overhead of trace labeling, captures the impact of dependencies between microservices to determine the root cause of unpredictable performance online, and applies corrective actions to recover a cloud service’s QoS. In experiments on both dedicated local clusters and large clusters on Google Compute Engine we show that Sage consistently achieves over 93% accuracy in correctly identifying the root cause of QoS violations, and improves performance predictability.',
    link: 'https://dl.acm.org/doi/abs/10.1145/3445814.3446700'
  },
  {
    title: 'Models and Technologies for Autoscaling Based on Machine Learning for Microservices Architecture',
    authors: 'Zubov, D., Kupin, A., Kosei, M., & Holiver, V.',
    publication: '',
    year: 2024,
    summary: 'The subject of the research in the article is machine learning processes in web service systems used for providing online services. The subject of the study is methods and tools for auto-scaling these web services using machine learning. The evolution of web services, their structure including development history, scaling options, key concepts of microservices architecture, and general principles of artificial intelligence and machine learning are analyzed, providing an important foundation for understanding technological innovations and potential enhancements for web services. The most significant aspects of applying machine learning in microservices architecture are identified, including various design patterns and machine learning models, which form the basis for improving the efficiency and capabilities of complex systems. Relevant mathematical models and necessary software are proposed.',
    link: 'https://elibrary.kdpu.edu.ua/handle/123456789/10370'
  },
  {
    title: 'Sinan: ML-based and QoS-aware resource management for cloud microservices',
    authors: 'Zhang, Y., Hua, W., Zhou, Z., Suh, G. E., & Delimitrou, C.',
    publication: 'Proceedings of the 26th ACM international conference on architectural support for programming languages and operating systems',
    year: 2021,
    summary: 'Cloud applications are increasingly shifting from large monolithic services, to large numbers of loosely-coupled, specialized microservices. Despite their advantages in terms of facilitating development, deployment, modularity, and isolation, microservices complicate resource management, as dependencies between them introduce backpressure effects and cascading QoS violations.\n' +
      'We present Sinan, a data-driven cluster manager for interactive cloud microservices that is online and QoS-aware. Sinan leverages a set of scalable and validated machine learning models to determine the performance impact of dependencies between microservices, and allocate appropriate resources per tier in a way that preserves the end-to-end tail latency target. We evaluate Sinan both on dedicated local clusters and large-scale deployments on Google Compute Engine (GCE) across representative end-to-end applications built with microservices, such as social networks and hotel reservation sites. We show that Sinan always meets QoS, while also maintaining cluster utilization high, in contrast to prior work which leads to unpredictable performance or sacrifices resource efficiency. Furthermore, the techniques in Sinan are explainable, meaning that cloud operators can yield insights from the ML models on how to better deploy and design their applications to reduce unpredictable performance.',
    link: 'https://dl.acm.org/doi/abs/10.1145/3445814.3446693'
  },
  {
    title: 'Robust Resource Scaling of Containerized Microservices with Probabilistic Machine learning',
    authors: 'Kang, P., & Lama, P.',
    publication: '2020 IEEE/ACM 13th International Conference on Utility and Cloud Computing (UCC)',
    year: 2020,
    summary: 'Large-scale web services are increasingly being built with many small modular components (microservices), which can be deployed, updated and scaled seamlessly. These microservices are packaged to run in a lightweight isolated execution environment (containers) and deployed on computing resources rented from cloud providers. However, the complex interactions and the contention of shared hardware resources in cloud data centers pose significant challenges in managing web service performance. In this paper, we present RScale, a robust resource scaling system that provides end-to-end performance guarantee for containerized microservices deployed in the cloud. RScale employs a probabilistic machine learning-based performance model, which can quickly adapt to changing system dynamics and directly provide confidence bounds in the predictions with minimal overhead. It leverages multi-layered data collected from container-level resource usage metrics and virtual machine-level hardware performance counter metrics to capture changing resource demands in the presence of multi-tenant performance interference. We implemented and evaluated RScale on NSF Cloud\'s Chameleon testbed using KVM for virtualization, Docker Engine for containerization and Kubernetes for container orchestration. Experimental results with an open-source microservices benchmark, Robot Shop, demonstrate the superior prediction accuracy and adaptiveness of our modeling approach compared to popular machine learning techniques. RScale meets the performance SLO (service-level-objective) targets for various microservice workflows even in the presence of multi-tenant performance interference and changing system dynamics.',
    link: 'https://ieeexplore.ieee.org/abstract/document/9302780'
  },
  {
    title: 'AI Techniques in the Microservices Life-Cycle: A Survey',
    authors: 'Moreschini, S., Pour, S., Lanese, I., Balouek-Thomert, D., Bogner, J., Li, X., ... & Taibi, D.',
    publication: 'arXiv preprint arXiv:2305.16092',
    year: 2023,
    summary: 'Microservices is a popular architectural style for the development of distributed software, with an emphasis on modularity, scalability, and flexibility. Indeed, in microservice systems, functionalities are provided by loosely coupled, small services, each focusing on a specific business capability. Building a system according to the microservices architectural style brings a number of challenges, mainly related to how the different microservices are deployed and coordinated and how they interact. In this paper, we provide a survey about how techniques in the area of Artificial Intelligence have been used to tackle these challenges.',
    link: 'https://arxiv.org/abs/2305.16092'
  },
  {
    title: 'Online machine learning for cloud resource provisioning of microservice backend systems',
    authors: 'Alipour, H., & Liu, Y.',
    publication: '2017 IEEE International Conference on Big Data (Big Data)',
    year: 2017,
    summary: 'Microservices are bundled and generating traffic on the backend systems that need to scale on demand. When microservices generate variant and unexpected, the challenge is to classify the workload on the backend systems and adjust the scaling policy to reflect the resource demand timely and accurately. In this paper, we propose a microservice architecture that encapsulates functions of monitoring metrics and learning workload pattern. Then this service architecture is used to predict the future workload for decision making on resource provisioning. We deploy two machine learning algorithms and predict the resource demand of the backend systems of microservices emulated by a Netflix workload benchmark application. This service architecture presents an integrated solution of implementing self-managing cloud data services under variant workload.',
    link: 'https://ieeexplore.ieee.org/abstract/document/8258201'
  },
  {
    title: 'Microservice Design Space Analysis and Decision Documentation: A Case Study on API Management',
    authors: 'Haselböck, S., Weinreich, R., Buchgeher, G., & Kriechbaum, T.',
    publication: '2018 IEEE 11th Conference on Service-Oriented Computing and Applications (SOCA)',
    year: 2018,
    summary: 'Design space analysis is a method for identifying and organizing potential design options and related concepts. So far, we have used decision models for the design space analysis of various areas of microservice design. Based on the feedback we have received, we refine our approach for design space analysis and extend it to support decision documentation. To validate the refined design space analysis approach and the approach we developed for decision documentation, we conduct a case study of microservice API management together with an industry partner. We present the identified design spaces and decision models created during the design space analysis, and show how the decision models were used for decision documentation. In addition, we draw general conclusions from applying the presented approach and concepts in an industrial context.',
    link: 'https://ieeexplore.ieee.org/abstract/document/8599572'
  },
  {
    title: 'Monitoring Resources of Machine Learning Engine In Microservices Architecture\n',
    authors: 'Parekh, N., Kurunji, S., & Beck, A.',
    publication: '2018 IEEE 9th Annual Information Technology, Electronics and Mobile Communication Conference (IEMCON)',
    year: 2018,
    summary: 'Microservices architecture facilitates building distributed scalable software products, usually deployed in a cloud environment. Monitoring microservices deployed in a Kubernetes orchestrated distributed advanced analytics machine learning engines is at the heart of many cloud resource management solutions. In addition, measuring resource utilization at more granular level such as per query or sub-query basis in an MPP Machine Learning Engine (MLE) is key to resource planning and is also the focus of our work. In this paper we propose two mechanisms to measure resource utilization in Teradata Machine Learning Engine (MLE). First mechanism is the Cluster Resource Monitoring (CRM). CRM is a high-level resource measuring mechanism for IT administrators and analytics users to visualize, plot, generates alerts and perform live and historical-analytics on overall cluster usage statistics. Second mechanism is the Query Resource Monitoring (QRM). QRM enables IT administrators and MLE users to measure compute resource utilization per individual query and its sub-queries. When query takes long time, QRM provides insights. This is useful to identify expensive phases within a query that tax certain resources more and skew the work distribution. We show the results of proposed mechanisms and highlight use-cases.',
    link: 'https://ieeexplore.ieee.org/abstract/document/8614791/'
  }
];
