# Kotlin Blog App

## Full stack application made with Kotlin
***
## Table of contents
- [Run Project](#runProject)  
- [Introduction](#intro) 
- -> [Tasks](#tasks) 
- -> [Using technologies](#technologies)  
- [Backend](./docs/backend/README.md)
- -> [Configuring project](./docs/backend/1.-configuring-project.md)
- -> [Database](./docs/backend/2.-database.md)
- -> [Model](./docs/backend/3.-model.md)
- [Frontend](./frontend/README.md)
***
<a name="runProject"><h1>Run Project</h1></a>

```text
gradle :backend:build :backend:bootRun :frontend:frontInstall :frontend:frontStart
```
***


<a name="intro"><h1>Introduction</h1></a>
Hi everyone, my name is Alex. In the spring of 2019 I was lucky to get into the first set of [Kotlin school in Minsk](https://bkug.by/course/). I really wanted to go there to learn a new language, the thought of which kept me awake at night. Knowing how cool [Jetbrains](https://www.jetbrains.com/) company products are, I had no doubt that the language they were developing would be very cool.

On courses, we were given the task to choose the theme of the project, on which we would like to work in terms of this time. Since I had no plans to save the world, I decided to limit myself to something simple and understandable. An excellent candidate in my opinion was simple blog app on [Kotlin](https://kotlinlang.org/).

The idea to write a detailed application development guide came to me from the very begin. Since I am just starting to learn this language, I have no idea what I might encounter in the future. And since the technology is quite new, there are not so many detailed manuals. At the moment \(spring 2019\) Kotlin is more used for developing Android applications. But since I am a fullstack developer, I wanted to make a fullstack application.


<a name="tasks"><h2>Tasks</h2></a>
* [x] Basic structure
* [x] Develop database
* [ ] \[ In progress \] Add JWT auth
* [x] Add front/ back modules with separate gradle files
* [x] Add frontend React module
* [ ] Add CRUD


<a name="technologies"><h2>Using technologies:</h2></a>

| Technology | Version |
| :--- | :--- |
| JDK | 1.8 |
| Kotlin | 1.3.30 |
| Gradle | 5.3.1 |
| Springboot | 2.1.4 \(RELEASE\) |
| Ktlint | 0.31.0 |
