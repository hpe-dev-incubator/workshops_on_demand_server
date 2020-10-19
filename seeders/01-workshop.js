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
        range: [21, 74],
        reset: true,
        ldap: true,
        sessionType: "Workshops-on-Demand",
        location: "mougins",
        preRequisite: "",
        active: true,
        replayLink: "replays/0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Redfish API use with PowerShell, Python, & Bash/cURL",
        notebook: "WKSHP-RedfishOverview",
        description:
          "DMTF’s Redfish® is a standard designed to deliver simple and secure management for converged, hybrid IT and the Software Defined Data Center (SDDC). Today it is rapidly replacing proprietary protocols. In this hands-on workshop, you’ll get to explore the Redfish tree of an OpenBMC and HPE iLO 5 to understand its basic structure, and learn how to modify resources and perform simple actions. You’ll interact with the HTTP/JSON-based standard using your favorite language, whether it’s PowerShell, Python, or Bash/cURL. Beginners and experts welcome!",
        capacity: 54,
        range: [96, 149],
        reset: true,
        ldap: false,
        sessionType: "Workshops-on-Demand",
        location: "mougins",
        preRequisite: "",
        active: true,
        replayLink: "replays/10",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Introduction to the HPE OneView REST API",
        notebook: "WKSHP-OneView",
        description:
          "Get some practical experience with the HPE OneView REST API. Learn how to talk to an HPE OneView appliance by building a request in PowerShell, Python, or even implementing a raw request with cURL. In this hands-on workshop, we’ll teach you how to write your own infrastructure-as-code, step by step, in an interactive way. You’ll learn how to gather information from HPE OneView and even how to perform configuration tasks, such as provisioning a new server.",
        capacity: 40,
        range: [171, 210],
        reset: true,
        ldap: false,
        sessionType: "Workshops-on-Demand",
        location: "mougins",
        preRequisite: "",
        active: true,
        replayLink: "replays/8",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Using the Container Storage Interface in Kubernetes",
        notebook: "WKSHP-CSI",
        description:
          "Learn how to create persistent volume claims (PVC), snapshots and clones, resize volumes, attach raw block volumes, and understand the properties of StorageClass objects and working with PVC annotations to tweak behavior of the underlying storage to optimize performance for different workload types. Prior Kubernetes knowledge is helpful, but not necessary as the instructor will walk through different examples during the session.",
        capacity: 54,
        range: [246, 299],
        reset: true,
        ldap: true,
        sessionType: "Workshops-on-Demand",
        location: "mougins",
        preRequisite: "",
        active: true,
        replayLink: "replays/2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Simple automation script with HPE SimpliVity REST API",
        notebook: "WKSHP-SimpliVity-API",
        description:
          "HPE SimpliVity HCI (hyperconverged infrastructure) helps to simplifying complexity and to reduce your datacenter footprint. In this hands-on workshop, we’ll show you how to automate business processes by combining the HPE SimpliVity REST API with other tools. We’ll introduce you to several available modules, including PowerShell, Python, Go, Ansible, Terraform, and more. We’ll even walk through some examples of HPE SimpliVity and VMware using Jupyter Notebooks. No previous programming experience required.",
        capacity: 54,
        range: [321, 374],
        reset: true,
        ldap: false,
        sessionType: "Workshops-on-Demand",
        location: "mougins",
        preRequisite: "",
        active: false,
        replayLink: "replays/13",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "API 101 - API basics and the value they provide",
        notebook: "WKSHP-API101",
        description:
          "You may know that application programming interfaces (APIs) allow applications to talk to other apps, but have you ever used them? Today, APIs are available for most products and solutions. You can take advantage of them when writing automation scripts, integrating code, or defining infrastructure-as-code, as long as you understand the mechanisms used to consume an API. In this hands-on workshop, we’ll review all the jargon and technology used by REST APIs.",
        capacity: 54,
        range: [396, 449],
        reset: false,
        ldap: false,
        sessionType: "Workshops-on-Demand",
        location: "mougins",
        preRequisite: "",
        active: true,
        replayLink: "replays/9",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "GIT 101 – Get involved in the open source community",
        notebook: "WKSHP-GIT101",
        description:
          "Git, the most widely-used version control system, and its associated web-based repositories, Github and Gitlab, are critical elements of today’s DevOps practices. If you want to be an open source developer, being able to navigate your way through the Git command set is a must. In this hands-on workshop, we’ll review some of the most common use cases. You’ll create your own Github account and begin using it to collaborate with others. You’ll learn to access material from other members, contribute to projects, and even create your own project.",
        capacity: 54,
        range: [621, 674],
        reset: false,
        ldap: false,
        sessionType: "Workshops-on-Demand",
        location: "mougins",
        preRequisite: "",
        active: true,
        replayLink: "replays/13",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Streamline app development with open source Grommet",
        notebook: "WKSHP-Grommet",
        description:
          "Ever wanted to develop your own app in a easy way? Come and join us at this 101-level session on Grommet, an open source project led by HPE. Grommet is a React-based framework that provides accessibility, modularity, responsiveness, and theming in a tidy package. This session will allow you to discover the basics and deploy your first app on Netifly!",
        capacity: 54,
        range: [546, 599],
        reset: false,
        ldap: false,
        sessionType: "Workshops-on-Demand",
        location: "mougins",
        preRequisite: "",
        active: true,
        replayLink: "replays/14",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:
          "Python101 - A simple introduction to Python programming language",
        notebook: "WKSHP-Python101",
        description:
          "Python is an interpreted, high-level and general-purpose programming language. Created by Guido van Rossum and first released in 1991, Python's design philosophy emphasizes code readability with its notable use of significant whitespace. Its language constructs and object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects.",
        capacity: 54,
        range: [696, 749],
        reset: false,
        ldap: false,
        sessionType: "Workshops-on-Demand",
        location: "mougins",
        preRequisite: "",
        active: true,
        replayLink: "replays/13",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Workshops", null, {});
  }
};
