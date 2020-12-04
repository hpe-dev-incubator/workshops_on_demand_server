"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("workshops", [
      {
        name: "Intro to the HPE Ezmeral Container Platform REST API",
        notebook: "WKSHP-HPECP-API",
        description:
          "Calling all developers, data analysts, and IT architects! Learn how to interact with the HPE Ezmeral Container Platform programmatically through its REST API. In this hands-on workshop, you’ll learn how to perform authentication, deploy distributed multi-mode applications for AI/ML and data analytics, and interpret/respond to REST API calls. We’ll walk you through, step by step, and, by the end of the session you’ll be deploying a TensorFlow application framework and other simple applications. No previous programming experience required.",
        capacity: 54,
        priority: 1,
        range: [21, 74],
        reset: true,
        ldap: true,
        sessionType: "Workshops-on-Demand",
        location: "mougins",
        preRequisite: "",
        active: true,
        replayLink: "replays/0",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Using the Container Storage Interface in Kubernetes",
        notebook: "WKSHP-CSI",
        description:
          "Learn how to create persistent volume claims (PVC), snapshots and clones, resize volumes, attach raw block volumes, and understand the properties of StorageClass objects and working with PVC annotations to tweak behavior of the underlying storage to optimize performance for different workload types. Prior Kubernetes knowledge is helpful, but not necessary as the instructor will walk through different examples during the session.",
        capacity: 54,
        priority: 2,
        range: [321, 374],
        reset: true,
        ldap: true,
        sessionType: "Workshops-on-Demand",
        location: "mougins",
        preRequisite: "",
        active: true,
        replayLink: "replays/2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name:
          "Python101 - A simple introduction to Python programming language",
        notebook: "WKSHP-Python101",
        description:
          "Are you interested in learning more about Python, the high-level, general-purpose programming language? This basic 101-level course will get you started. Begin with a simple Hello World example and move to loops, dict and tuples concepts. Learn to use Python language constructs and an object-oriented approach to write clear, logical code for small and large-scale projects.",
        capacity: 54,
        priority: 3,
        range: [696, 749],
        reset: false,
        ldap: false,
        sessionType: "Workshops-on-Demand",
        location: "mougins",
        preRequisite: "",
        active: true,
        replayLink: "replays/15",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "RUST 101 Introduction to the Rust programming language",
        notebook: "WKSHP-RUST101",
        description:
          "Hundreds of companies around the world are using Rust in production today for fast, low-resource, cross-platform solutions. Software you know and love, like Firefox, Dropbox, and Cloudflare, uses Rust. From startups to large corporations, from embedded devices to scalable web services, Rust is a great fit. In this session we will introduce the audience to Rust programming. A language empowering everyone to build reliable and efficient software.",
        capacity: 74,
        priority: 4,
        range: [1126, 1200],
        reset: false,
        ldap: false,
        sessionType: "Workshops-on-Demand",
        location: "mougins",
        preRequisite: "",
        active: true,
        replayLink: "replays/16",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "API 101 - API basics and the value they provide",
        notebook: "WKSHP-API101",
        description:
          "You may know that application programming interfaces (APIs) allow applications to talk to other apps, but have you ever used them? Today, APIs are available for most products and solutions. You can take advantage of them when writing automation scripts, integrating code, or defining infrastructure-as-code, as long as you understand the mechanisms used to consume an API. In this hands-on workshop, we’ll review all the jargon and technology used by REST APIs.",
        capacity: 54,
        priority: 5,
        range: [396, 449],
        reset: false,
        ldap: false,
        sessionType: "Workshops-on-Demand",
        location: "mougins",
        preRequisite: "",
        active: true,
        replayLink: "replays/9",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Introduction to the HPE OneView REST API",
        notebook: "WKSHP-OneView",
        description:
          "Get some practical experience with the HPE OneView REST API. Learn how to talk to an HPE OneView appliance by building a request in PowerShell, Python, or even implementing a raw request with cURL. In this hands-on workshop, we’ll teach you how to write your own infrastructure-as-code, step by step, in an interactive way. You’ll learn how to gather information from HPE OneView and even how to perform configuration tasks, such as provisioning a new server.",
        capacity: 40,
        priority: 6,
        range: [171, 224],
        reset: true,
        ldap: false,
        sessionType: "Workshops-on-Demand",
        location: "mougins",
        preRequisite: "",
        active: true,
        replayLink: "replays/8",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Streamline app development with open source Grommet",
        notebook: "WKSHP-Grommet",
        description:
          "Ever wanted to develop your own app in a easy way? Come and join us at this 101-level session on Grommet, an open source project led by HPE. Grommet is a React-based framework that provides accessibility, modularity, responsiveness, and theming in a tidy package. This session will allow you to discover the basics and deploy your first app on Netifly!",
        capacity: 54,
        priority: 7,
        range: [546, 599],
        reset: false,
        ldap: false,
        sessionType: "Workshops-on-Demand",
        location: "mougins",
        preRequisite: "",
        active: true,
        replayLink: "replays/14",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Deploy a front-end app on a Kubernetes cluster",
        notebook: "CHLG-HPECP-API",
        description:
          "Take our challenge and compete for prizes! In this coding challenge, you will be tasked with deploying a front-end application of your choice on a CNCF certified Kubernetes cluster using API calls. This simple challenge takes what you learned in the Workshops-on-Demand: Introduction to the HPE Ezmeral Container Platform - REST API workshop and puts it to the test. Simply click on the “Challenge me” button to start.",
        capacity: 20,
        priority: 1,
        range: [1, 20],
        reset: true,
        ldap: true,
        sessionType: "Coding Challenge",
        location: "mougins",
        preRequisite: "",
        active: true,
        replayLink: "replays/0",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "GIT 101 – Get involved in the open source community",
        notebook: "WKSHP-GIT101",
        description:
          "Git, the most widely-used version control system, and its associated web-based repositories, Github and Gitlab, are critical elements of today’s DevOps practices. If you want to be an open source developer, being able to navigate your way through the Git command set is a must. In this hands-on workshop, we’ll review some of the most common use cases. You’ll create your own Github account and begin using it to collaborate with others. You’ll learn to access material from other members, contribute to projects, and even create your own project.",
        capacity: 54,
        priority: 8,
        range: [1076, 1124],
        reset: false,
        ldap: false,
        sessionType: "Workshops-on-Demand",
        location: "mougins",
        preRequisite: "",
        active: true,
        replayLink: "replays/17",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Automate apps with the HPE Container Platform",
        notebook: "WKSHP-HPECP-Automate-Apps",
        description:
          "IT Administrators are frequently challenged to stand-up hardware and software environments. These requests can be time consuming and confusing for non-technical teams to deploy. By implementing the HPE Container Platform with its easy-to-use APIs, new clusters and software applications can be created automatically with specified resources. Join this hands-on workshop to learn how the HPE Container Platform APIs make it easier to configure apps and compute resources, along with how to pull detailed usage reports for Chargeback/Showback.",
        capacity: 54,
        priority: 9,
        range: [921, 974],
        reset: true,
        ldap: true,
        sessionType: "Workshops-on-Demand",
        location: "mougins",
        preRequisite: "",
        active: false,
        replayLink: "replays/1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name:
          "Redfish API 101 - An introduction to Redfish programming through the use of PowerShell and Python",
        notebook: "WKSHP-RedfishOverview",
        description:
          "DMTF’s Redfish® is a standard designed to deliver simple and secure management for converged, hybrid IT and the Software Defined Data Center (SDDC). Today it is rapidly replacing proprietary protocols. In this hands-on workshop, you’ll get to explore the Redfish tree of an OpenBMC and HPE iLO 5 to understand its basic structure, and learn how to modify resources and perform simple actions. You’ll interact with the HTTP/JSON-based standard using your favorite language, whether it’s PowerShell, Python, or Bash/cURL. Beginners and experts welcome!",
        capacity: 54,
        priority: 10,
        range: [96, 149],
        reset: false,
        ldap: false,
        sessionType: "Workshops-on-Demand",
        location: "mougins",
        preRequisite: "",
        active: false,
        replayLink: "replays/10",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name:
          "Deploying end-to-end machine learning workflows​ With HPE Ezmeral MLOPS​",
        notebook: "WKSHP-ML-KUB",
        description:
          "Join this hands-on workshop and learn some fundamentals of the HPE Ezmeral Container Platform’s ability to manage, deploy, and work with models in a notebook oriented around machine learning, model development, and management. You will understand how to securely deploy and update your models in a containerized workload using data in the global data fabric and applications loaded on the HPE Ezmeral Container Platform.",
        capacity: 54,
        priority: 11,
        range: [826, 900],
        reset: true,
        ldap: true,
        sessionType: "Workshops-on-Demand",
        location: "mougins",
        preRequisite: "",
        active: false,
        replayLink: "replays/3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Building a dynamic Machine Learning pipeline with KubeDirector​",
        notebook: "WKSHP-MLKUB",
        description:
          "Looking for a quick introduction to Machine Learning pipeline with open source application called KubeDirector? Take this free hands-on workshop to learn the steps to create an end-to-end machine learning (ML) pipeline, from data preparation to model deployment through model training and registry. You will discover how the key use of KubeDirector and its capabilities enable a dynamic ML pipeline on a CNCF-certified Kubernetes cluster managed by HPE Ezmeral Container Platform.",
        capacity: 54,
        priority: 12,
        range: [996, 1049],
        reset: true,
        ldap: false,
        sessionType: "Workshops-on-Demand",
        location: "mougins",
        preRequisite: "",
        active: false,
        replayLink: "replays/0",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "HPE iLOrest overview",
        notebook: "WKSHP-iloREST",
        description:
          "The HPE RESTful Interface Tool (iLOrest) is a powerful command-line Redfish client that allows you to manage Hewlett Packard Enterprise iLO 4 and iLO 5 based servers. After a brief description of the tool capabilities, you will be able to perform several simple and complex management operations against an iLO 5 Redfish simulator. In addition, this workshop introduces the concept of resource data types and methodologies to get or set resources using the API Reference document. Lastly it explains how to use the debug mode to troubleshoot your Bash, Python or PowerShell scripts.",
        capacity: 54,
        priority: 13,
        range: [601, 675],
        reset: true,
        ldap: true,
        sessionType: "Workshops-on-Demand",
        location: "mougins",
        preRequisite: "",
        active: false,
        replayLink: "replays/1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "AI 101 - Convolutional neural network (CNN) for MNIST​",
        notebook: "WKSHP-AI101CNN",
        description:
          "Whether its facial recognition or self-driving cars, CNNs are used everywhere. Join this hands-on workshop to learn how to implement a simple CNN for Modified National Institute of Standards and Technology database (MNIST). Using a MNIST dataset (70 000 pictures of hand-written digits) you’ll learn how to build a simple CNN and train it to solve a real problem with Keras (a deep learning library for Python.) On completion, you’ll be able to predict a digit, given a picture of hand-written digits with 99% accuracy.",
        capacity: 54,
        priority: 14,
        range: [451, 525],
        reset: false,
        ldap: false,
        sessionType: "Workshops-on-Demand",
        location: "mougins",
        preRequisite: "",
        active: false,
        replayLink: "replays/12",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name:
          "Stackstorm 101 Introduction to the Stackstorm automation features",
        notebook: "WKSHP-StackStorm101",
        description:
          "StackStorm: A Robust Automation Engine: From simple if/then rules to complicated workflows, it lets you automate DevOps your way.",
        capacity: 54,
        priority: 15,
        range: [1276, 1350],
        reset: false,
        ldap: false,
        sessionType: "Workshops-on-Demand",
        location: "mougins",
        preRequisite: "",
        active: false,
        replayLink: "replays/1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Aruba 101 - API yourself!",
        notebook: "WKSHP-Aruba-API",
        description:
          "Get your automation game on with Aruba APIs in this hands-on lab session. In this workshop, you’ll learn to manage, configure, and automate Aruba‘s game-changing network operating system, AOS-CX, using its REST APIs, and move away from slow error-prone CLI (command line interface) work. We’ve got something for coding new-comers to hardcore Pythonistas, and everyone in-between. No experience required!",
        capacity: 54,
        priority: 16,
        range: [1326, 1400],
        reset: false,
        ldap: false,
        sessionType: "Workshops-on-Demand",
        location: "mougins",
        preRequisite: "",
        active: false,
        replayLink: "replays/11",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Simple automation script with HPE SimpliVity REST API",
        notebook: "WKSHP-SimpliVity-API",
        description:
          "HPE SimpliVity HCI (hyperconverged infrastructure) helps to simplifying complexity and to reduce your datacenter footprint. In this hands-on workshop, we’ll show you how to automate business processes by combining the HPE SimpliVity REST API with other tools. We’ll introduce you to several available modules, including PowerShell, Python, Go, Ansible, Terraform, and more. We’ll even walk through some examples of HPE SimpliVity and VMware using Jupyter Notebooks. No previous programming experience required.",
        capacity: 54,
        priority: 11,
        range: [321, 374],
        reset: true,
        ldap: false,
        sessionType: "Workshops-on-Demand",
        location: "mougins",
        preRequisite: "",
        active: false,
        replayLink: "replays/13",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Workshops", null, {});
  },
};
