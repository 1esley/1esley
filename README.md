<div align="center">

# Wesley de Oliveira Fernandes

**Desenvolvedor em formação | Backend · Full Stack · Análise de Dados**

Estudante de Análise e Desenvolvimento de Sistemas no IFPB — Campus Cajazeiras.
Busco transformar problemas reais em soluções organizadas, funcionais e bem escritas.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/wesley-de-oliveira-fernandes/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/1esley)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:wesleyof.dev@gmail.com)

</div>

---

## Sobre mim

Sou estudante de Análise e Desenvolvimento de Sistemas no IFPB — Campus Cajazeiras, com previsão de conclusão em 2028. Meu interesse principal está em desenvolvimento backend e full stack, mas também gosto de trabalhar com dados — entender o que eles dizem e como organizá-los para que façam sentido.

Ao longo da graduação, venho construindo projetos acadêmicos e pessoais que envolvem desde interfaces web interativas até integração com APIs, comunicação em tempo real e manipulação de dados. Participei do processo seletivo da **LOOPIS Jr.** (empresa júnior do IFPB — Cajazeiras), onde desenvolvi uma aplicação web completa como parte da seleção. Atualmente atuo como **Consultor de Projetos** na empresa, contribuindo com o desenvolvimento backend, implementação de novas funcionalidades e correções no **Museu Virtual da ETE PMAFA**.

O que me motiva é resolver problemas com lógica e código: entender um requisito, pensar na estrutura, implementar a solução e melhorá-la aos poucos. Estou em busca de oportunidades de estágio ou primeiro emprego onde eu possa aplicar o que aprendi, contribuir com projetos reais e continuar evoluindo tecnicamente.

---

## Projetos em destaque

### Conexão PET — Plataforma de Adoção de Animais

Plataforma web para incentivar a adoção responsável de animais, conectando pets disponíveis a possíveis adotantes. Desenvolvida como projeto acadêmico na disciplina de Linguagem de Script para Web.

**O que a aplicação faz:**
- Cadastro de animais com upload de imagem (FileReader API) e validação de formulário
- Listagem dinâmica de pets com filtros combinados por espécie, porte e idade (encadeamento de `filter()`)
- Sistema de favoritos com `find()` e persistência via API
- Fluxo completo de adoção: interesse → favorito → adoção, com atualização automática do status
- Estatísticas em tempo real (pets disponíveis, favoritos, adoções)
- Edição de pets cadastrados com modal dinâmico
- Operações CRUD completas via API REST (GET, POST, PUT, DELETE)

**Tecnologias:** HTML5, CSS3, JavaScript ES6+, JSON Server (API REST local), Node.js

**Decisões técnicas:** a persistência utiliza JSON Server como API REST local, permitindo operações assíncronas com `fetch` e `async/await`. A interface é construída inteiramente com manipulação do DOM (`createElement`, `appendChild`, event listeners).

**Situação:** funcional localmente. O GitHub Pages está disponível, mas requer a API rodando em localhost para funcionar completamente.

**Projeto em equipe** — desenvolvido com Douglas Rodrigues, Marcos Antônio e Rafael Silva.

[![Repositório](https://img.shields.io/badge/Ver_código-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/1esley/ConexaoPet-LSW)

---

### CineBox — Plataforma de Filmes

Aplicação web inspirada no Letterboxd, desenvolvida como projeto acadêmico no curso de ADS. Permite que usuários naveguem por filmes, visualizem detalhes e deixem avaliações.

**O que a aplicação faz:**
- Navegação por gêneros de filmes (Ação, Comédia, Ficção, Romance, Animações)
- Listagem de filmes por categoria com cards individuais
- Página de detalhes com sinopse e área de comentários
- Sistema de cadastro e login com armazenamento local (LocalStorage)
- Sistema de comentários e avaliação por filme
- Múltiplas páginas com navegação estruturada (home, login, cadastro, filme)

**Tecnologias:** HTML5, CSS3, JavaScript puro, LocalStorage

**Decisões técnicas:** o projeto foi desenvolvido inteiramente com JavaScript puro (sem frameworks), com separação de responsabilidades entre arquivos (`data.js`, `filmes.js`, `filmeReview.js`, scripts de autenticação). Os dados são persistidos via LocalStorage — não há backend. A autenticação é simulada no navegador.

**Situação:** funcional. Melhorias planejadas incluem integração com API de filmes (TMDB), avaliação por estrelas e persistência com backend.

**Projeto em equipe** — desenvolvido com Andressa Victórya e Kaique Santos.

[![Repositório](https://img.shields.io/badge/Ver_código-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/1esley/projetoCineBox)

---

### VitalCorp — Plataforma de Bem-Estar Corporativo

Aplicação web desenvolvida como parte do processo seletivo da **LOOPIS Jr.** (empresa júnior do IFPB — Cajazeiras). A plataforma permite que colaboradores de empresas realizem check-ins rápidos e anônimos sobre como estão se sentindo, transformando respostas em dados para gestão de clima organizacional.

**O que a aplicação faz:**
- Landing page institucional com seções de apresentação, benefícios e instruções de uso
- Sistema de check-in emocional para colaboradores
- Tela de login e cadastro de usuários
- Dashboard para visualização de dados e indicadores
- Design responsivo com navegação mobile (menu toggle)
- Estrutura multi-páginas com organização clara de rotas

**Tecnologias:** HTML5, CSS3, JavaScript, Remixicon (ícones)

**Contexto:** projeto desenvolvido individualmente como atividade prática do processo seletivo da LOOPIS Jr. O repositório inclui também mini-tarefas das áreas de comercial, gestão de pessoas e marketing, demonstrando a abordagem multidisciplinar do processo.

**Situação:** protótipo funcional frontend. Não possui backend integrado.

[![Repositório](https://img.shields.io/badge/Ver_código-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/1esley/ps-loopis)

---

### Chat em Tempo Real — Minicurso WebSocket (SertãoComp)

Aplicação de chat em tempo real desenvolvida durante o minicurso de WebSockets no evento **SertãoComp** do IFPB — Cajazeiras, ministrado por Moacir David.

**O que a aplicação faz:**
- Chat em tempo real com múltiplos usuários conectados simultaneamente
- Comunicação bidirecional via WebSocket com Socket.io
- Frontend em Next.js com React e TypeScript
- Backend em Node.js com Express e Socket.io

**Tecnologias:** Next.js, React, TypeScript, Node.js, Express, Socket.io

**O que aprendi:** comunicação em tempo real entre cliente e servidor, arquitetura de aplicações fullstack com frontend e backend separados, uso de TypeScript em projetos práticos.

**Situação:** funcional localmente (frontend na porta 3000, backend na porta 3001).

[![Repositório](https://img.shields.io/badge/Ver_código-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/1esley/MinicursoWebSocket)

---

### Museu Virtual da ETE PMAFA — Projeto LOOPIS Jr.

Participação no desenvolvimento e manutenção do site do Museu Virtual da ETE PMAFA, no contexto das atividades da **LOOPIS Jr.**

**Sobre o projeto:** o Museu Virtual é um site institucional desenvolvido pela LOOPIS Jr. para a Escola Técnica Estadual Professor Moacyr de Albuquerque Ferraz Araújo. O projeto envolve preservação de memória e conteúdo institucional em formato digital.

**Minha atuação:**
- Desenvolvimento backend
- Implementação de novas funcionalidades
- Correção de bugs e manutenção do sistema

**Tecnologias utilizadas:** React, TypeScript, Vite, SQLite

> **Nota:** os repositórios de frontend e backend deste projeto são privados.

🔗 [museu.etepmafa.com.br](https://museu.etepmafa.com.br)

---

## Outros projetos acadêmicos

| Projeto | Linguagem | Descrição |
|---|---|---|
| [EstruturaDeDados](https://github.com/1esley/EstruturaDeDados) | C | Atividades da disciplina de Estrutura de Dados: matrizes, structs, ponteiros, alocação de memória, listas encadeadas, pilhas, filas e manipulação de arquivos CSV |
| [projetoUnidadeII](https://github.com/1esley/projetoUnidadeII) | Python | Sistema de gerenciamento de salas de cinema — projeto da disciplina de Algoritmos e Lógica de Programação |
| [projetoUnidadeIII](https://github.com/1esley/projetoUnidadeIII) | Python | Evolução do projeto de cinemas com funcionalidades adicionais e envio de e-mails |
| [POO_INTERFACE](https://github.com/1esley/POO_INTERFACE) | Java | Projeto de Programação Orientada a Objetos com foco em interfaces e abstrações |

---

## Competências técnicas

### Linguagens de programação
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![Java](https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white)
![C](https://img.shields.io/badge/C-A8B9CC?style=flat-square&logo=c&logoColor=black)
![PHP](https://img.shields.io/badge/PHP-777BB4?style=flat-square&logo=php&logoColor=white)

### Frontend
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)

### Backend e APIs
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=flat-square&logo=socketdotio&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=flat-square&logo=springboot&logoColor=white)

### Bancos de dados
![SQLite](https://img.shields.io/badge/SQLite-003B57?style=flat-square&logo=sqlite&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white)

### Ferramentas e versionamento
![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)
![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=flat-square&logo=visualstudiocode&logoColor=white)

### Em aprendizado
![Flutter](https://img.shields.io/badge/Flutter-02569B?style=flat-square&logo=flutter&logoColor=white)
![Dart](https://img.shields.io/badge/Dart-0175C2?style=flat-square&logo=dart&logoColor=white)

> **Nota sobre classificação:** as tecnologias acima refletem o que utilizei em projetos, atividades de formação ou minicursos com certificação. Spring Boot e PostgreSQL foram estudados em minicursos e formação técnica; as demais foram aplicadas em projetos acadêmicos ou profissionais. Tecnologias em "Em aprendizado" ainda não possuem projetos públicos que as comprovem.

---

## Formação acadêmica

**Análise e Desenvolvimento de Sistemas (ADS)**
IFPB — Instituto Federal da Paraíba, Campus Cajazeiras
Previsão de conclusão: 2028

### Atividades e eventos
- **VI SertãoComp** (mai. 2026) — Evento de tecnologia do IFPB Cajazeiras. Participação no evento e em dois minicursos com certificação:
  - Desenvolvimento de aplicações em tempo real com WebSocket (Next.js + Node.js + Socket.io)
  - Spring Boot e Spring Data JPA: Persistência de Dados Eficiente em Aplicações Backend
- **Processo Seletivo LOOPIS Jr.** — Aprovado no processo seletivo da empresa júnior do IFPB Cajazeiras, com desenvolvimento de projeto web (VitalCorp) e atividades multidisciplinares

### Cursos e certificações

| Certificação | Plataforma | Data |
|---|---|---|
| Minicurso: WebSocket — VI SertãoComp | Even3 | Mai. 2026 |
| Minicurso: Spring Boot e Spring Data JPA — VI SertãoComp | Even3 | Mai. 2026 |
| Certificado EF SET Inglês 61/100 (C1 — Proficiência Eficaz) | EF SET | Set. 2026 |
| Habilidades comportamentais e técnicas | Even3 | Nov. 2024 |
| Minicurso: Introdução ao Desenvolvimento IoT | Even3 | Nov. 2024 |
| Curso Online de PHP | Rocketseat | Out. 2024 |
| NLW Pocket: Javascript — Programação Iniciante | Rocketseat | Set. 2024 |

---

## Experiência e colaboração

### LOOPIS Jr. — Empresa Júnior do IFPB Cajazeiras
**Consultor de Projetos** · Março de 2026 — Presente

Atuação na empresa júnior LOOPIS Jr., vinculada ao IFPB — Campus Cajazeiras, com foco em desenvolvimento de software e colaboração em projetos da empresa.

**Projeto em destaque:** Museu Virtual da ETE PMAFA — desenvolvimento backend, implementação de novas funcionalidades e correções em site institucional para preservação de memória escolar. Tecnologias: React, TypeScript, Vite, SQLite.

---

## Objetivos profissionais

- Conquistar uma oportunidade de **estágio** ou **primeiro emprego** em desenvolvimento de software
- Aprofundar conhecimentos em **desenvolvimento backend** (Java/Spring Boot, APIs REST, bancos de dados)
- Evoluir em **desenvolvimento full stack** com projetos mais complexos
- Desenvolver competências práticas em **análise e visualização de dados**
- Contribuir com projetos reais, aprender com equipes experientes e crescer como profissional

---

## Idiomas

| Idioma | Nível | Certificação |
|---|---|---|
| Português | Nativo | — |
| Inglês | C1 — Proficiência Eficaz | EF SET 61/100 (Set. 2026) |
| Espanhol | — | — |

---

<div align="center">

### Vamos conversar?

Se você está buscando alguém com vontade de aprender, capacidade de resolver problemas e comprometimento com código de qualidade, entre em contato.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/wesley-de-oliveira-fernandes/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/1esley)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:wesleyof.dev@gmail.com)

---

<img src="https://github-readme-stats.vercel.app/api?username=1esley&show_icons=true&theme=github_dark&hide_border=true&count_private=true&hide_title=true" alt="GitHub Stats" height="160"/>
<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=1esley&layout=compact&theme=github_dark&hide_border=true&hide_title=true" alt="Linguagens mais usadas" height="160"/>

</div>
