export const certifications = [
  {
    id: 1,
    certName: "AWS Certified Solutions Architect",
    issuingOrg: "Amazon Web Services",
    orgLogo: "/assets/certifications/aws-logo.jpg",
    issueDate: "Feb 2024",
    endDate: "Feb 2027",
    credentialId: "AWS-12345678",
    credentialUrl: "https://aws.amazon.com/certification",
    skills: ["Cloud Architecture", "AWS", "Security"],
    media: [
      { type: "image", url: "/assets/certifications/aws-cert.jpg" }
    ]
  },
  {
    id: 2,
    certName: "Google UX Design Professional Certificate",
    issuingOrg: "Google (via Coursera)",
    orgLogo: "",
    issueDate: "Sep 2023",
    endDate: "",
    credentialId: "G-98765432",
    credentialUrl: "https://coursera.org",
    skills: ["Wireframing", "Figma", "User Research", "Prototyping"],
    media: [] // Testing empty media robustness
  },
  {
    id: 3,
    certName: "Responsive Web Design",
    issuingOrg: "freeCodeCamp",
    orgLogo: "",
    issueDate: "Jul 2021",
    endDate: "",
    credentialUrl: "https://freecodecamp.org",
    skills: ["HTML5", "CSS3", "Responsive Design"],
    media: [
      { type: "image", url: "/assets/certifications/fcc-cert.jpg" }
    ]
  }
];
