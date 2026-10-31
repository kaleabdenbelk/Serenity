import type { Highlight, ServiceItem, Person } from "./types"

export const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Team", href: "#our-team" },
  { label: "Research", href: "#research" },
  { label: "Contact", href: "#contact" },
]

export const highlights: Highlight[] = [
  {
    icon: "4eed7.svg",
    primary: "48",
    secondary: "healthcare professionals",
  },
  {
    icon: "2266e.svg",
    secondary: "In collaboration with",
    primary: "Farmamundi and WE-Action",
  },
  {
    icon: "5c21c.svg",
    primary: "Dessie & Mekelle",
    secondary: "training locations",
  },
  {
    icon: "511ba.svg",
    secondary: "Supported by",
    primary: "AECID",
  },
]

export const services: ServiceItem[] = [
  {
    number: "01",
    audience: "Individuals",
    title: "Clinical care",
    description:
      "Evidence-based psychological support for people experiencing mental-health challenges.",
    items: ["Diagnostic consultations", "Psychotherapy", "Tele-consultations"],
    link: "Explore clinical services",
    image: "822a8.png",
    imageAlt: "Calm therapy room",
  },
  {
    number: "02",
    audience: "Organisations",
    title: "Consultancy & training",
    description:
      "Practical expertise to help organisations respond to mental-health needs.",
    items: [
      "Intervention design",
      "Training and adaptation",
      "Technical support and evaluation",
    ],
    link: "Explore organisational work",
    image: "5ef88.png",
    imageAlt: "Mental-health training session with a group",
  },
]

export const people: Person[] = [
  {
    name: "Dr. Benyam Worku Dubale",
    role: "Psychiatrist",
    image: "99157.png",
    summary:
      "Clinical lead focused on trauma-informed care and program development.",
    biography:
      "Dr. Benyam Worku Dubale is a clinical lead focused on trauma-informed care and program development.",
  },
  {
    name: "Dr. Engida Girma",
    role: "Psychiatrist",
    image: "a2864.png",
    summary:
      "Psychiatrist with a focus on trauma and mental health interventions.",
    biography:
      "Dr. Engida Girma is a psychiatrist whose work centres on trauma and mental health interventions. She combines careful diagnostic practice with warm, collaborative care, and supports colleagues through supervision and case consultation.",
  },
  {
    name: "Tesfaye Alemu",
    role: "Clinical psychologist",
    image: "e7b08.png",
    summary:
      "Clinical psychologist specializing in evidence-based therapies and community mental health.",
    biography:
      "Tesfaye Alemu is a clinical psychologist specializing in evidence-based therapies and community mental health.",
  },
  {
    name: "Selamawit Assefa",
    role: "Research & programs",
    image: "4d9ac.png",
    summary:
      "Researcher and program manager with experience in mental health research and training.",
    biography:
      "Selamawit Assefa is a researcher and program manager with experience in mental health research and training.",
  },
]
