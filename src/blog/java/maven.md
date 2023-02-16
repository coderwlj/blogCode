---
title: Maven Tutorials
author: coderwlj
article: true
editLink: false
comment: false
star: true
---

<!-- more -->

## What?

core file : pom.xml (project object model)
It uses POM file to manage project’s build, dependency and documentation

**Note** : The most powerful futures of maven are to download the project dependency libraries automatically and to create the right project structure.

**Maven helps to manage the following:**

- Builds
- Documentation
- Reporting
- Dependencies
- SCMs
- Releases
- Distribution

## Tutorials

### Apache Maven Features

It is developed by **Apache group** to build multiple projects together, to publish project information and to share JARs across multiple projects.

- Simple project setup that follows best practices.
- Consistent usage across all projects.
- **Dependency management**
- Ability to easily work with multiple projects at the same time.
- **Maven Repository**
- **Extensible via plug-ins**
- **Model based builds:** Maven is able to build any number of projects into predefined output types such as a JAR, WAR and metadata.
- Coherent site of project information: Using the same metadata as for the build process, Maven is able to generate a web site or PDF including any documentation.
- **Release management and distribution publication**
- Better Error and Integrity Reporting

### Install Maven On Windows

1. Check Java installation on your machine. Use c:\> `java –version` command to verify the java installation. Install the java software development kit if it is not installed.

2. Add `JAVA_HOME` environment variable if it is not added. Right click on MyComputer -> properties -> Advanced System Settings -> Environment variables -> click new button. Add `JAVA_HOME` in variable name and `java path` (like C:\Program Files\Java\jdk1.7.0_60) in variable value. Now append the `java compiler location` up to bin folder (C:\Program Files\Java\jdk1.7.0.60\bin) to the system variable, `Path`.

3. Download apache maven from [here](https://maven.apache.org/download.cgi).

4. Extract the maven archive file (like apache-maven-3.3.1-bin.zip) to the location where we want to install it. E.g. C:\Program Files\Apache Software Foundation\apache-maven-3.3.1.

5. Add maven environment variables. Right click on MyComputer -> properties -> Advanced System Settings -> Environment variables -> click new button. Add `M2_HOME` in variable name and `maven path` (like C:\Program Files\Apache Software Foundation\apache-maven-3.3.1) in variable value. Now append the `maven bin` folder (C:\Program Files\Apache Software Foundation\apache-maven-3.3.1\bin) to the system variable, `Path`.

6. Verify maven installation using c:\> `mvn –version` command.

### Install maven on linux:

1. Check Java installation on your machine. Use $ java -version command to verify the java installation. Install the java software development kit if it is not installed.

2. Add `JAVA_HOME` environment variable if it is not added. `Export JAVA_HOME=/usr/local/java-current`. `export PATH=JAVA_HOME/bin/`.

3. Download apache maven from here.

4. Extract the maven archive file (like apache-maven-3.3.1-bin.tar.gz) to the location where we want to install it. E.g. /usr/local/apache-maven.

5. Add maven environment variables. Use command export M2_HOME=/usr/local/apache-maven/apache-maven-3.3.1. Now append the maven bin folder. Use command `export PATH=/usr/local/apache-maven/apache-maven-3.3.1/bin`.

6. Verify maven installation using $ mvn –version command.

### Install maven on Mac:

1. Check Java installation on your machine. Use machine:~ $ `java -version` command to verify the java installation. Install the java software development kit if it is not installed.

2. Add `JAVA_HOME` environment variable if it is not added. Use command `export JAVA_HOME=/Library/Java/Home`.

3. Download apache maven from here.

4. Extract the maven archive file (like apache-maven-3.3.1-bin.tar.gz) to the location where we want to install it. E.g. /usr/local/apache-maven.

5. Add maven environment variables. Use command `export M2_HOME=/usr/local/apache-maven/apache-maven-3.3.1`. Now append the maven bin folder. Use command `export PATH=/usr/local/apache-maven/apache-maven-3.3.1/bin`.

6. Verify maven installation using machine:~ $ `mvn –version` command.

### Maven Architecture

**The most powerful futures of maven are to download the project dependency libraries automatically and to create the right project structure.**

### Maven Core Concepts

- POM Files
- Build Life Cycles, Phases and Goals
- Dependencies and Repositories
- Build Plugins
- Build Profiles

### Maven Pom Xml File

**Commonly used elements of maven pom.xml file**

```xml
<!-- 标识 -->
<?xml version="1.0" encoding="UTF-8"?>
<!-- root element of pom.xml file -->
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <!-- Model version should be 4.0.0. -->
    <modelVersion>4.0.0</modelVersion>
    <!-- pecifies the id for the project group -->
    <groupId>org.coderwlj</groupId>
    <!-- It specifies the id for the project. This is generally refers to the name of the project. The artifact ID is also used as part of the name of the JAR, WAR or EAR file produced when building the project. -->
    <artifactId>javase</artifactId>
    <!-- It specifies the version of the project -->
    <version>1.0-SNAPSHOT</version>
    <!-- It is used to define the packaging type such as jar, war etc. -->
    <packaging>jar</packaging>
    <!-- It is used to define the name of the maven project. -->
    <name>xxx</name>
    <!-- It is used to define the url of the project. -->
    <url>xxx</url>
    <!-- It is used to define the dependencies for this project. -->
    <dependencies>
    <!-- It is used to define a dependency. It is used inside dependencies element. -->
        <dependency>
            <groupId>cn.hutool</groupId>
            <artifactId>hutool-all</artifactId>
            <version>5.8.4</version>
            <!-- It is used to define the scope for this maven project. It can be compile, provided, runtime, test and system. -->
            <scope>test</scope>
        </dependency>
    </dependencies>
    <!-- The profiles element is used to specify the maven build profiles inside the POM file.
    We can use settings.xml file to tell maven which profile is to be executed. Another way is to add "-P profile-name" to the Maven command line. -->
    <profiles>
      <profile>
          <id>test-app</id>
          <activation>...</activation>
          <build>...</build>
          <modules>...</modules>
          <repositories>...</repositories>
          <pluginRepositories>...</pluginRepositories>
          <dependencies>...</dependencies>
          <reporting>...</reporting>
          <dependencyManagement>...</dependencyManagement>
          <distributionManagement>...</distributionManagement>
      </profile>
  </profiles>
</project>
```

### Maven Build Life Cycles, Phases And Goals

**Maven Build Lifecycle Phases:**
`prepare-resources:` This phase is used to can be customize the resource copying.
`validate:` Validate the project is correct and all necessary information is available.
`compile:` It compiles the source code of the project.
`Test:` Tests the compiled source code using a suitable testing framework.
`package:` This phase take the compiled code and creates the JAR/WAR package as mentioned in the packaging: in POM.xml.
`install:` This phase installs the package in local maven repository.
`Deploy:` This phase copies the final package to the remote repository.
`clean:` This phase cleans the target directory.
`verify:` This phase checks on the results of integration tests.
**Maven Clean Lifecycle Phases**
`Maven clean lifecycle handles everything related to removing temporary files from the output directory(target), including generated source files, compiled classes and previous JAR files etc.`
**Maven Site Lifecycle Phases**
`Maven site lifecycle handles everything related to generating documentation for your project.`

### Maven Build Profiles

Maven build profiles provides the facility to build project using different configurations. Instead of creating two separate POM files, we can just `specify a profile with the different build configuration` and build the project with this build profile when needed.

### Maven Plugin Types

1. Build Plugins
   Build plugins are executed at the build time. Build plugins should be declared inside the element.
2. Reporting Plugins
   Reporting plugins are executed at site generation time. Reporting plugins should be declared inside the element.

**Syntax to execute a plugin:**

> mvn [plugin-name]:[goal-name]

**Maven plugins can be used to:**

1. create jar file.
2. create war file.
3. compile code files.
4. unit testing of code.
5. create project documentation.
6. create project reports.

![Maven-Commands-Cheat-Sheet](https://journaldev.nyc3.digitaloceanspaces.com/2019/12/Maven-Commands-Cheat-Sheet.png)

**Commonly used maven plugins:**

- `clean` It is used to clean up the target after build.
- `compiler` It is used compile the java source files.
- `deploy` It is used to deploy the artifact to the remote repository.
- `failsafe` It is used to run the JUnit unit tests.
- `install` It is used to install the built artifact into the local repository.
- `resources` It is used to copy the resources to the output directory to include in the JAR.
- `site` It is used to generate the site for the current project.
- `surefire` It is used to run the JUnit unit tests.

### Maven repositories

Maven repositories are `directories of packaged JAR files` with extra meta-data. The meta-data is represented by POM files. A repository contains all the project jars, library jar, plugins and any other project specific artifacts.

**Types of maven repository:**

1. Local Repository

- Maven local repository is a directory on the developer’s machine.
- Default location of maven local repository is `user-home/.m2` directory.
- It is located in MAVEN_HOME/conf/settings.xml.

```xml
<settings>
    <localRepository>
        //Set desired location
    </localRepository>
</settings>
```

2. Central Repository

- Maven central repository is created by the apache maven community itself.
- It contains a lot of commonly used libraries.
- By default Maven looks in this central repository for any dependencies needed but not found in your local repository.

3. Remote Repository
   Maven remote repository is a repository on a web server.A remote repository can be located anywhere on the internet or inside a local network. We can configure a remote repository in the POM file. We have to put the following XML elements right after the element:

```xml
<repositories>
   <repository>
       <id>xxx</id>
       <url>xxx</url>
   </repository>
</repositories>
```

**Notes:**

1. `Maven repository search order : Local --> Central --> Remote`
1. `Maven stops processing and throws an error if dependency is not found in these repositories.`

### create a maven project

The `archetype:generate` command is used to create the simple maven java project.

**example:**

```
mvn archetype:generate "-DgroupId=com.companyname.bank" "-DartifactId=consumerBanking" "-DarchetypeArtifactId=maven-archetype-quickstart" "-DinteractiveMode=false"
```

**args:**

1. DgroupId
2. DartifactId
3. DarchetypeArtifactId

- `maven-archetype-quickstart` simple maven project
- `maven-archetype-webapp` simple web app project

4. DinteractiveMode 是否交互式创建

### check maven version

> mvn -version

### Build Maven Project Offline

1. Open the the project that you want to build offline.
2. `mvn dependency: go-offline`
3. `mvn -o clean package`

### Exclude Dependency In Maven

We can exclude dependency in maven by using the exclusion element.

```xml
<project>
  ...
  <dependencies>
    <dependency>
      <groupId>test.ProjectTest1</groupId>
      <artifactId>Project-Test1</artifactId>
      <version>1.0</version>
      <scope>compile</scope>
      <exclusions>
        //Declare the exclusion here
        <exclusion>
          <groupId>test.ProjectTest2</groupId>
          <artifactId>Project-Test2</artifactId>
        </exclusion>
      </exclusions>
    </dependency>
  </dependencies>
</project>
```
