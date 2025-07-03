import hero_img from '../assets/Hero.png'
import logo from '../assets/logo.png'
import google from '../assets/google.png'
import about_img from '../assets/aboutImg.jpg'
import testimonial from '../assets/testimonial.jpg'
import googleLogo from '../assets/Google_2015_logo.svg.png'
import indeed from '../assets/indeed-Logo-2004.png'
import slack from '../assets/Slack-logo.png'
import walmart from '../assets/walmart.png'
import upwork from '../assets/Upwork-logo.svg.png'
import logo_white from '../assets/logo-white.png'
import aboutImg from '../assets/aboutimages.jpg'
import applyjob from '../assets/applyjob.png'
import applyjob2 from '../assets/applyjob-72.png'
import jobsearch from '../assets/jobsearch.png'
import jobsearch2 from '../assets/jobsearch-50.png'
import creataccount from '../assets/createaccount.png'
import creataccount2 from '../assets/createaccount-50.png'
import contact from '../assets/contact.jpg'
import upworklogo from '../assets/upwork-roundedsquare-1.svg'
import loggingImg from '../assets/logingImage.jpg'
import githubLogo from '../assets/GitHublogo.png'
import linkedinlogo from '../assets/linkedinlogo.png'
 
import { Stethoscope } from 'lucide-react';
import { FolderCode } from 'lucide-react';
import { BadgeDollarSign } from 'lucide-react';
import { MapPinned } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';



export const assets = {
    hero_img,
    logo,
    google,
    about_img,
    testimonial,
    googleLogo,
    indeed,
    slack,
    walmart,
    upwork,
    logo_white,
    aboutImg,
    applyjob,
    applyjob2,
    jobsearch,
    jobsearch2,
    creataccount,
    creataccount2,
    contact,
    upworklogo,
    loggingImg,
    githubLogo,
    linkedinlogo
}


export const contact_data = [
    { 
        icon: <MapPinned />, 
        title: 'Location Here', 
        text: '71-75 Shelton Street, London, Greater London, United Kingdom'
    },
    { 
        icon: <Mail />, 
        title: 'Email Here', 
        text: '2ROZ9@example.com\n2ROZ9@example.com' 
    },
    { 
        icon: <Phone />, 
        title: 'Call Here', 
        text: '+44-20-7328-4499\n+44-20-7328-4499' 
    },
]

export const Jobss = [
        {
    id: 1,
    title: "Graphic, Editorial & Presentation Design",
    date_posted: "2025-06-13T22:55:33.037556Z",
    locations: {},
    url: "https://www.example.com/job/1",
    category: "Graphic, Editorial & Presentation Design",
    category_group: "Design & Creative",
    label: "More than 6 months",
    skills: [
      {
        id: 7411,
        name: "Infographic"
      },
      {
        id: 4723,
        name: "Presentation Design"
      },
      {
        id: 2391,
        name: "Branding"
      }
    ],
    project_budget_total: 2710,
    project_budget_hourly_min: null,
    project_budget_hourly_max: null,
    project_budget_currency: "USD",
    languages: {},
    additional_qualifications: "",
    type: "ANY",
    prefEnglishSkill: "ANY",
    number_of_positions_to_hire: 1,
    client_country: "NGA",
    client_city: "Cityname",
    client_timezone: "UTC+01:00",
    client_total_assignments: 7,
    client_active_assignments: 3,
    client_total_hours: null,
    client_total_charges: 1475.11,
    client_feedback_count: 2,
    client_score: 5,
    client_jobs_with_hires: 1,
    client_company_size: null,
    client_company_industry: null,
    client_open_jobs: 5,
    description_text: "Sample description for Graphic, Editorial & Presentation Design Project 1."
  },
  {
    id: 2,
    title: "Graphic, Editorial & Presentation Design",
    date_posted: "2025-05-26T22:55:33.037609Z",
    locations: {},
    url: "https://www.example.com/job/2",
    category: "Graphic, Editorial & Presentation Design",
    category_group: "Design & Creative",
      label: "1 to 3 months",
    skills: [
      {
        id: 8627,
        name: "Presentation Design"
      },
      {
        id: 8237,
        name: "Branding"
      },
      {
        id: 2572,
        name: "Infographic"
      }
    ],
    project_budget_total: 2499,
    project_budget_hourly_min: null,
    project_budget_hourly_max: null,
    project_budget_currency: "USD",
    languages: {},
    additional_qualifications: "",
    type: "ANY",
    prefEnglishSkill: "ANY",
    number_of_positions_to_hire: 1,
    client_country: "GBR",
    client_city: "Cityname",
    client_timezone: "UTC+01:00",
    client_total_assignments: 8,
    client_active_assignments: 4,
    client_total_hours: null,
    client_total_charges: 930.08,
    client_feedback_count: 8,
    client_score: 5,
    client_jobs_with_hires: 4,
    client_company_size: null,
    client_company_industry: null,
    client_open_jobs: 1,
    description_text: "Sample description for Graphic, Editorial & Presentation Design Project 2."
  },
  {
    id: 3,
    title: "Application Security",
    date_posted: "2025-06-03T22:55:33.037635Z",
    locations: {},
    url: "https://www.example.com/job/3",
    category: "Application Security",
    category_group: "Cybersecurity",
      label: "3 to 6 months",
    skills: [
      {
        id: 3310,
        name: "Security Auditing"
      },
      {
        id: 4528,
        name: "Penetration Testing"
      },
      {
        id: 6530,
        name: "Vulnerability Assessment"
      }
    ],
    project_budget_total: 2236,
    project_budget_hourly_min: null,
    project_budget_hourly_max: null,
    project_budget_currency: "USD",
    languages: {},
    additional_qualifications: "",
    type: "ANY",
    prefEnglishSkill: "ANY",
    number_of_positions_to_hire: 1,
    client_country: "USA",
    client_city: "Cityname",
    client_timezone: "UTC+01:00",
    client_total_assignments: 1,
    client_active_assignments: 2,
    client_total_hours: null,
    client_total_charges: 930.07,
    client_feedback_count: 5,
    client_score: 5,
    client_jobs_with_hires: 3,
    client_company_size: null,
    client_company_industry: null,
    client_open_jobs: 4,
    description_text: "Sample description for Application Security Project 3."
  },
  {
    id: 4,
    title: "Mobile Development",
    date_posted: "2025-06-12T22:55:33.037657Z",
    locations: {},
    url: "https://www.example.com/job/4",
    category: "Mobile Development",
    category_group: "Software Development",
      label: "3 to 6 months",
    skills: [
      {
        id: 6077,
        name: "RESTful API"
      },
      {
        id: 5891,
        name: "React.js"
      },
      {
        id: 9350,
        name: "API Integration"
      }
    ],
    project_budget_total: 864,
    project_budget_hourly_min: null,
    project_budget_hourly_max: null,
    project_budget_currency: "USD",
    languages: {},
    additional_qualifications: "",
    type: "ANY",
    prefEnglishSkill: "ANY",
    number_of_positions_to_hire: 1,
    client_country: "GBR",
    client_city: "Cityname",
    client_timezone: "UTC+01:00",
    client_total_assignments: 2,
    client_active_assignments: 1,
    client_total_hours: null,
    client_total_charges: 3254.0,
    client_feedback_count: 9,
    client_score: 5,
    client_jobs_with_hires: 3,
    client_company_size: null,
    client_company_industry: null,
    client_open_jobs: 2,
    description_text: "Sample description for Mobile Development Project 4."
  },
  {
    id: 5,
    title: "Network Security",
    date_posted: "2025-06-10T22:55:33.037679Z",
    locations: {},
    url: "https://www.example.com/job/5",
    category: "Network Security",
    category_group: "Cybersecurity",
      label: "More than 6 months",
    skills: [
      {
        id: 6637,
        name: "Vulnerability Assessment"
      },
      {
        id: 9135,
        name: "Network Security"
      },
      {
        id: 3080,
        name: "Penetration Testing"
      }
    ],
    project_budget_total: 481,
    project_budget_hourly_min: null,
    project_budget_hourly_max: null,
    project_budget_currency: "USD",
    languages: {},
    additional_qualifications: "",
    type: "ANY",
    prefEnglishSkill: "ANY",
    number_of_positions_to_hire: 1,
    client_country: "USA",
    client_city: "Cityname",
    client_timezone: "UTC+01:00",
    client_total_assignments: 6,
    client_active_assignments: 3,
    client_total_hours: null,
    client_total_charges: 4740.47,
    client_feedback_count: 3,
    client_score: 5,
    client_jobs_with_hires: 4,
    client_company_size: null,
    client_company_industry: null,
    client_open_jobs: 2,
    description_text: "Sample description for Network Security Project 5."
  },
  {
    id: 6,
    title: "UI/UX Design",
    date_posted: "2025-06-14T22:55:33.037722Z",
    locations: {},
    url: "https://www.example.com/job/6",
    category: "UI/UX Design",
    category_group: "Design & Creative",
      label: "1 to 3 months",
    skills: [
      {
        id: 9003,
        name: "Presentation Design"
      },
      {
        id: 2873,
        name: "Branding"
      },
      {
        id: 8507,
        name: "Infographic"
      }
    ],
    project_budget_total: 888,
    project_budget_hourly_min: null,
    project_budget_hourly_max: null,
    project_budget_currency: "USD",
    languages: {},
    additional_qualifications: "",
    type: "ANY",
    prefEnglishSkill: "ANY",
    number_of_positions_to_hire: 1,
    client_country: "GBR",
    client_city: "Cityname",
    client_timezone: "UTC+01:00",
    client_total_assignments: 2,
    client_active_assignments: 5,
    client_total_hours: null,
    client_total_charges: 2716.01,
    client_feedback_count: 2,
    client_score: 5,
    client_jobs_with_hires: 3,
    client_company_size: null,
    client_company_industry: null,
    client_open_jobs: 5,
    description_text: "Sample description for UI/UX Design Project 6."
  },
  {
    id: 7,
    title: "Network Security",
    date_posted: "2025-06-16T22:55:33.037753Z",
    locations: {},
    url: "https://www.example.com/job/7",
    category: "Network Security",
    category_group: "Cybersecurity",
      label: "Less than 1 month",
    skills: [
      {
        id: 7688,
        name: "Security Auditing"
      },
      {
        id: 7044,
        name: "Vulnerability Assessment"
      },
      {
        id: 2634,
        name: "Network Security"
      }
    ],
    project_budget_total: 966,
    project_budget_hourly_min: null,
    project_budget_hourly_max: null,
    project_budget_currency: "USD",
    languages: {},
    additional_qualifications: "",
    type: "ANY",
    prefEnglishSkill: "ANY",
    number_of_positions_to_hire: 1,
    client_country: "NGA",
    client_city: "Cityname",
    client_timezone: "UTC+01:00",
    client_total_assignments: 9,
    client_active_assignments: 1,
    client_total_hours: null,
    client_total_charges: 2169.93,
    client_feedback_count: 4,
    client_score: 5,
    client_jobs_with_hires: 4,
    client_company_size: null,
    client_company_industry: null,
    client_open_jobs: 4,
    description_text: "Sample description for Network Security Project 7."
  },
  {
    id: 8,
    title: "Application Security",
    date_posted: "2025-06-11T22:55:33.037778Z",
    locations: {},
    url: "https://www.example.com/job/8",
    category: "Application Security",
    category_group: "Cybersecurity",
    label: "More than 6 months",
    skills: [
      {
        id: 9740,
        name: "Network Security"
      },
      {
        id: 8848,
        name: "Penetration Testing"
      },
      {
        id: 5419,
        name: "Vulnerability Assessment"
      }
    ],
    project_budget_total: 2249,
    project_budget_hourly_min: null,
    project_budget_hourly_max: null,
    project_budget_currency: "USD",
    languages: {},
    additional_qualifications: "",
    type: "ANY",
    prefEnglishSkill: "ANY",
    number_of_positions_to_hire: 1,
    client_country: "NGA",
    client_city: "Cityname",
    client_timezone: "UTC+01:00",
    client_total_assignments: 5,
    client_active_assignments: 3,
    client_total_hours: null,
    client_total_charges: 3334.7,
    client_feedback_count: 9,
    client_score: 5,
    client_jobs_with_hires: 1,
    client_company_size: null,
    client_company_industry: null,
    client_open_jobs: 1,
    description_text: "Sample description for Application Security Project 8."
  },
  {
    id: 9,
    title: "Graphic, Editorial & Presentation Design",
    date_posted: "2025-06-14T22:55:33.037802Z",
    locations: {},
    url: "https://www.example.com/job/9",
    category: "Graphic, Editorial & Presentation Design",
    category_group: "Design & Creative",
      label: "More than 6 months",
    skills: [
      {
        id: 9634,
        name: "PowerPoint"
      },
      {
        id: 2728,
        name: "Infographic"
      },
      {
        id: 1011,
        name: "Graphic Design"
      }
    ],
    project_budget_total: 1057,
    project_budget_hourly_min: null,
    project_budget_hourly_max: null,
    project_budget_currency: "USD",
    languages: {},
    additional_qualifications: "",
    type: "ANY",
    prefEnglishSkill: "ANY",
    number_of_positions_to_hire: 1,
    client_country: "USA",
    client_city: "Cityname",
    client_timezone: "UTC+01:00",
    client_total_assignments: 9,
    client_active_assignments: 4,
    client_total_hours: null,
    client_total_charges: 2911.33,
    client_feedback_count: 9,
    client_score: 5,
    client_jobs_with_hires: 4,
    client_company_size: null,
    client_company_industry: null,
    client_open_jobs: 3,
    description_text: "Sample description for Graphic, Editorial & Presentation Design Project 9."
  },
  {
    id: 10,
    title: "Network Security",
    date_posted: "2025-06-20T22:55:33.037832Z",
    locations: {},
    url: "https://www.example.com/job/10",
    category: "Network Security",
    category_group: "Cybersecurity",
      label: "Less than 1 month",
    skills: [
      {
        id: 7222,
        name: "Vulnerability Assessment"
      },
      {
        id: 5077,
        name: "Security Auditing"
      },
      {
        id: 9252,
        name: "Penetration Testing"
      }
    ],
    project_budget_total: 525,
    project_budget_hourly_min: null,
    project_budget_hourly_max: null,
    project_budget_currency: "USD",
    languages: {},
    additional_qualifications: "",
    type: "ANY",
    prefEnglishSkill: "ANY",
    number_of_positions_to_hire: 1,
    client_country: "USA",
    client_city: "Cityname",
    client_timezone: "UTC+01:00",
    client_total_assignments: 4,
    client_active_assignments: 1,
    client_total_hours: null,
    client_total_charges: 1588.04,
    client_feedback_count: 3,
    client_score: 5,
    client_jobs_with_hires: 5,
    client_company_size: null,
    client_company_industry: null,
    client_open_jobs: 1,
    description_text: "Sample description for Network Security Project 10."
  },
  /*{
    id: 11,
    title: "Application Security",
    date_posted: "2025-06-11T22:55:33.037851Z",
    locations: {},
    url: "https://www.example.com/job/11",
    category: "Application Security",
    category_group: "Cybersecurity",
      label: "Less than 1 month"
    },
    skills: [
      {
        id: 3009,
        name: "Vulnerability Assessment"
      },
      {
        id: 6200,
        name: "Penetration Testing"
      },
      {
        id: 6007,
        name: "Network Security"
      }
    ],
    project_budget_total: 2797,
    project_budget_hourly_min: null,
    project_budget_hourly_max: null,
    project_budget_currency: "USD",
    languages: {},
    additional_qualifications: "",
    type: "ANY",
    prefEnglishSkill: "ANY",
    number_of_positions_to_hire: 1,
    client_country: "USA",
    client_city: "Cityname",
    client_timezone: "UTC+01:00",
    client_total_assignments: 10,
    client_active_assignments: 1,
    client_total_hours: null,
    client_total_charges: 3421.17,
    client_feedback_count: 2,
    client_score: 5,
    client_jobs_with_hires: 3,
    client_company_size: null,
    client_company_industry: null,
    client_open_jobs: 5,
    description_text: "Sample description for Application Security Project 11."
  },
  {
    id: 12,
    title: "Graphic, Editorial & Presentation Design",
    date_posted: "2025-06-21T22:55:33.037870Z",
    locations: {},
    url: "https://www.example.com/job/12",
    category: "Graphic, Editorial & Presentation Design",
    category_group: "Design & Creative",
      label: "Less than 1 month"
    },
    skills: [
      {
        id: 3029,
        name: "Infographic"
      },
      {
        id: 7979,
        name: "Graphic Design"
      },
      {
        id: 1791,
        name: "Branding"
      }
    ],
    project_budget_total: 1518,
    project_budget_hourly_min: null,
    project_budget_hourly_max: null,
    project_budget_currency: "USD",
    languages: {},
    additional_qualifications: "",
    type: "ANY",
    prefEnglishSkill: "ANY",
    number_of_positions_to_hire: 1,
    client_country: "GBR",
    client_city: "Cityname",
    client_timezone: "UTC+01:00",
    client_total_assignments: 6,
    client_active_assignments: 3,
    client_total_hours: null,
    client_total_charges: 1326.47,
    client_feedback_count: 1,
    client_score: 5,
    client_jobs_with_hires: 1,
    client_company_size: null,
    client_company_industry: null,
    client_open_jobs: 1,
    description_text: "Sample description for Graphic, Editorial & Presentation Design Project 12."
  },
  {
    id: 13,
    title: "UI/UX Design",
    date_posted: "2025-05-31T22:55:33.037888Z",
    locations: {},
    url: "https://www.example.com/job/13",
    category: "UI/UX Design",
    category_group: "Design & Creative",
      label: "More than 6 months"
    },
    skills: [
      {
        id: 8123,
        name: "Branding"
      },
      {
        id: 1759,
        name: "Graphic Design"
      },
      {
        id: 8928,
        name: "Infographic"
      }
    ],
    project_budget_total: 2897,
    project_budget_hourly_min: null,
    project_budget_hourly_max: null,
    project_budget_currency: "USD",
    languages: {},
    additional_qualifications: "",
    type: "ANY",
    prefEnglishSkill: "ANY",
    number_of_positions_to_hire: 1,
    client_country: "NGA",
    client_city: "Cityname",
    client_timezone: "UTC+01:00",
    client_total_assignments: 2,
    client_active_assignments: 4,
    client_total_hours: null,
    client_total_charges: 1859.07,
    client_feedback_count: 6,
    client_score: 5,
    client_jobs_with_hires: 4,
    client_company_size: null,
    client_company_industry: null,
    client_open_jobs: 3,
    description_text: "Sample description for UI/UX Design Project 13."
  },
  {
    id: 14,
    title: "UI/UX Design",
    date_posted: "2025-05-26T22:55:33.038023Z",
    locations: {},
    url: "https://www.example.com/job/14",
    category: "UI/UX Design",
    category_group: "Design & Creative",
      label: "3 to 6 months"
    },
    skills: [
      {
        id: 8474,
        name: "Presentation Design"
      },
      {
        id: 7676,
        name: "Infographic"
      },
      {
        id: 2040,
        name: "PowerPoint"
      }
    ],
    project_budget_total: 767,
    project_budget_hourly_min: null,
    project_budget_hourly_max: null,
    project_budget_currency: "USD",
    languages: {},
    additional_qualifications: "",
    type: "ANY",
    prefEnglishSkill: "ANY",
    number_of_positions_to_hire: 1,
    client_country: "USA",
    client_city: "Cityname",
    client_timezone: "UTC+01:00",
    client_total_assignments: 1,
    client_active_assignments: 4,
    client_total_hours: null,
    client_total_charges: 1921.77,
    client_feedback_count: 6,
    client_score: 5,
    client_jobs_with_hires: 3,
    client_company_size: null,
    client_company_industry: null,
    client_open_jobs: 4,
    description_text: "Sample description for UI/UX Design Project 14."
  },
  {
    id: 15,
    title: "Graphic, Editorial & Presentation Design",
    date_posted: "2025-06-15T22:55:33.038046Z",
    locations: {},
    url: "https://www.example.com/job/15",
    category: "Graphic, Editorial & Presentation Design",
    category_group: "Design & Creative",
      label: "Less than 1 month"
    },
    skills: [
      {
        id: 2664,
        name: "PowerPoint"
      },
      {
        id: 7813,
        name: "Infographic"
      },
      {
        id: 9876,
        name: "Graphic Design"
      }
    ],
    project_budget_total: 1394,
    project_budget_hourly_min: null,
    project_budget_hourly_max: null,
    project_budget_currency: "USD",
    languages: {},
    additional_qualifications: "",
    type: "ANY",
    prefEnglishSkill: "ANY",
    number_of_positions_to_hire: 1,
    client_country: "GBR",
    client_city: "Cityname",
    client_timezone: "UTC+01:00",
    client_total_assignments: 4,
    client_active_assignments: 3,
    client_total_hours: null,
    client_total_charges: 4198.16,
    client_feedback_count: 10,
    client_score: 5,
    client_jobs_with_hires: 1,
    client_company_size: null,
    client_company_industry: null,
    client_open_jobs: 4,
    description_text: "Sample description for Graphic, Editorial & Presentation Design Project 15."
  },
  {
    id: 16,
    title: "Graphic, Editorial & Presentation Design",
    date_posted: "2025-06-07T22:55:33.038064Z",
    locations: {},
    url: "https://www.example.com/job/16",
    category: "Graphic, Editorial & Presentation Design",
    category_group: "Design & Creative",
      label: "More than 6 months"
    },
    skills: [
      {
        id: 5368,
        name: "Infographic"
      },
      {
        id: 9300,
        name: "Graphic Design"
      },
      {
        id: 4831,
        name: "Branding"
      }
    ],
    project_budget_total: 2922,
    project_budget_hourly_min: null,
    project_budget_hourly_max: null,
    project_budget_currency: "USD",
    languages: {},
    additional_qualifications: "",
    type: "ANY",
    prefEnglishSkill: "ANY",
    number_of_positions_to_hire: 1,
    client_country: "USA",
    client_city: "Cityname",
    client_timezone: "UTC+01:00",
    client_total_assignments: 3,
    client_active_assignments: 2,
    client_total_hours: null,
    client_total_charges: 2072.77,
    client_feedback_count: 1,
    client_score: 5,
    client_jobs_with_hires: 2,
    client_company_size: null,
    client_company_industry: null,
    client_open_jobs: 4,
    description_text: "Sample description for Graphic, Editorial & Presentation Design Project 16."
  },
  {
    id: 17,
    title: "Application Security",
    date_posted: "2025-05-27T22:55:33.038081Z",
    locations: {},
    url: "https://www.example.com/job/17",
    category: "Application Security",
    category_group: "Cybersecurity",
      label: "1 to 3 months"
    },
    skills: [
      {
        id: 4563,
        name: "Security Auditing"
      },
      {
        id: 3360,
        name: "Vulnerability Assessment"
      },
      {
        id: 8766,
        name: "Penetration Testing"
      }
    ],
    project_budget_total: 1267,
    project_budget_hourly_min: null,
    project_budget_hourly_max: null,
    project_budget_currency: "USD",
    languages: {},
    additional_qualifications: "",
    type: "ANY",
    prefEnglishSkill: "ANY",
    number_of_positions_to_hire: 1,
    client_country: "GBR",
    client_city: "Cityname",
    client_timezone: "UTC+01:00",
    client_total_assignments: 2,
    client_active_assignments: 1,
    client_total_hours: null,
    client_total_charges: 3209.92,
    client_feedback_count: 9,
    client_score: 5,
    client_jobs_with_hires: 3,
    client_company_size: null,
    client_company_industry: null,
    client_open_jobs: 1,
    description_text: "Sample description for Application Security Project 17."
  },
  {
    id: 18,
    title: "Graphic, Editorial & Presentation Design",
    date_posted: "2025-06-09T22:55:33.038098Z",
    locations: {},
    url: "https://www.example.com/job/18",
    category: "Graphic, Editorial & Presentation Design",
    category_group: "Design & Creative",
      label: "3 to 6 months"
    },
    skills: [
      {
        id: 7617,
        name: "PowerPoint"
      },
      {
        id: 1264,
        name: "Infographic"
      },
      {
        id: 7477,
        name: "Branding"
      }
    ],
    project_budget_total: 328,
    project_budget_hourly_min: null,
    project_budget_hourly_max: null,
    project_budget_currency: "USD",
    languages: {},
    additional_qualifications: "",
    type: "ANY",
    prefEnglishSkill: "ANY",
    number_of_positions_to_hire: 1,
    client_country: "USA",
    client_city: "Cityname",
    client_timezone: "UTC+01:00",
    client_total_assignments: 1,
    client_active_assignments: 3,
    client_total_hours: null,
    client_total_charges: 3381.67,
    client_feedback_count: 2,
    client_score: 5,
    client_jobs_with_hires: 5,
    client_company_size: null,
    client_company_industry: null,
    client_open_jobs: 1,
    description_text: "Sample description for Graphic, Editorial & Presentation Design Project 18."
  },
  {
    id: 19,
    title: "Mobile Development",
    date_posted: "2025-06-24T22:55:33.038115Z",
    locations: {},
    url: "https://www.example.com/job/19",
    category: "Mobile Development",
    category_group: "Software Development",
      label: "More than 6 months"
    },
    skills: [
      {
        id: 7143,
        name: "API Integration"
      },
      {
        id: 6937,
        name: "RESTful API"
      },
      {
        id: 7481,
        name: "React.js"
      }
    ],
    project_budget_total: 2894,
    project_budget_hourly_min: null,
    project_budget_hourly_max: null,
    project_budget_currency: "USD",
    languages: {},
    additional_qualifications: "",
    type: "ANY",
    prefEnglishSkill: "ANY",
    number_of_positions_to_hire: 1,
    client_country: "USA",
    client_city: "Cityname",
    client_timezone: "UTC+01:00",
    client_total_assignments: 8,
    client_active_assignments: 1,
    client_total_hours: null,
    client_total_charges: 2988.42,
    client_feedback_count: 9,
    client_score: 5,
    client_jobs_with_hires: 4,
    client_company_size: null,
    client_company_industry: null,
    client_open_jobs: 5,
    description_text: "Sample description for Mobile Development Project 19."
  },
  {
    id: 20,
    title: "UI/UX Design",
    date_posted: "2025-06-17T22:55:33.038132Z",
    locations: {},
    url: "https://www.example.com/job/20",
    category: "UI/UX Design",
    category_group: "Design & Creative",
      label: "More than 6 months"
    },
    skills: [
      {
        id: 6140,
        name: "PowerPoint"
      },
      {
        id: 3514,
        name: "Infographic"
      },
      {
        id: 5449,
        name: "Presentation Design"
      }
    ],
    project_budget_total: 1079,
    project_budget_hourly_min: null,
    project_budget_hourly_max: null,
    project_budget_currency: "USD",
    languages: {},
    additional_qualifications: "",
    type: "ANY",
    prefEnglishSkill: "ANY",
    number_of_positions_to_hire: 1,
    client_country: "NGA",
    client_city: "Cityname",
    client_timezone: "UTC+01:00",
    client_total_assignments: 1,
    client_active_assignments: 4,
    client_total_hours: null,
    client_total_charges: 3058.67,
    client_feedback_count: 9,
    client_score: 5,
    client_jobs_with_hires: 1,
    client_company_size: null,
    client_company_industry: null,
    client_open_jobs: 4,
    description_text: "Sample description for UI/UX Design Project 20."
  },
  {
    id: 21,
    title: "Application Security",
    date_posted: "2025-06-09T22:55:33.038148Z",
    locations: {},
    url: "https://www.example.com/job/21",
    category: "Application Security",
    category_group: "Cybersecurity",
      label: "More than 6 months"
    },
    skills: [
      {
        id: 2320,
        name: "Penetration Testing"
      },
      {
        id: 4540,
        name: "Network Security"
      },
      {
        id: 9272,
        name: "Security Auditing"
      }
    ],
    project_budget_total: 717,
    project_budget_hourly_min: null,
    project_budget_hourly_max: null,
    project_budget_currency: "USD",
    languages: {},
    additional_qualifications: "",
    type: "ANY",
    prefEnglishSkill: "ANY",
    number_of_positions_to_hire: 1,
    client_country: "GBR",
    client_city: "Cityname",
    client_timezone: "UTC+01:00",
    client_total_assignments: 5,
    client_active_assignments: 1,
    client_total_hours: null,
    client_total_charges: 3633.11,
    client_feedback_count: 2,
    client_score: 5,
    client_jobs_with_hires: 5,
    client_company_size: null,
    client_company_industry: null,
    client_open_jobs: 5,
    description_text: "Sample description for Application Security Project 21."
  },
  {
    id: 22,
    title: "Mobile Development",
    date_posted: "2025-05-30T22:55:33.038166Z",
    locations: {},
    url: "https://www.example.com/job/22",
    category: "Mobile Development",
    category_group: "Software Development",
      label: "Less than 1 month"
    },
    skills: [
      {
        id: 1936,
        name: "React.js"
      },
      {
        id: 8900,
        name: "Node.js"
      },
      {
        id: 6348,
        name: "RESTful API"
      }
    ],
    project_budget_total: 2112,
    project_budget_hourly_min: null,
    project_budget_hourly_max: null,
    project_budget_currency: "USD",
    languages: {},
    additional_qualifications: "",
    type: "ANY",
    prefEnglishSkill: "ANY",
    number_of_positions_to_hire: 1,
    client_country: "NGA",
    client_city: "Cityname",
    client_timezone: "UTC+01:00",
    client_total_assignments: 2,
    client_active_assignments: 5,
    client_total_hours: null,
    client_total_charges: 3748.33,
    client_feedback_count: 10,
    client_score: 5,
    client_jobs_with_hires: 3,
    client_company_size: null,
    client_company_industry: null,
    client_open_jobs: 3,
    description_text: "Sample description for Mobile Development Project 22."
  },
  {
    id: 23,
    title: "Network Security",
    date_posted: "2025-05-31T22:55:33.038183Z",
    locations: {},
    url: "https://www.example.com/job/23",
    category: "Network Security",
    category_group: "Cybersecurity",
      label: "3 to 6 months"
    },
    skills: [
      {
        id: 7138,
        name: "Vulnerability Assessment"
      },
      {
        id: 5107,
        name: "Penetration Testing"
      },
      {
        id: 6318,
        name: "Security Auditing"
      }
    ],
    project_budget_total: 2231,
    project_budget_hourly_min: null,
    project_budget_hourly_max: null,
    project_budget_currency: "USD",
    languages: {},
    additional_qualifications: "",
    type: "ANY",
    prefEnglishSkill: "ANY",
    number_of_positions_to_hire: 1,
    client_country: "GBR",
    client_city: "Cityname",
    client_timezone: "UTC+01:00",
    client_total_assignments: 10,
    client_active_assignments: 2,
    client_total_hours: null,
    client_total_charges: 848.79,
    client_feedback_count: 1,
    client_score: 5,
    client_jobs_with_hires: 1,
    client_company_size: null,
    client_company_industry: null,
    client_open_jobs: 2,
    description_text: "Sample description for Network Security Project 23."
  },
  {
    id: 24,
    title: "Application Security",
    date_posted: "2025-05-28T22:55:33.038199Z",
    locations: {},
    url: "https://www.example.com/job/24",
    category: "Application Security",
    category_group: "Cybersecurity",
      label: "1 to 3 months"
    },
    skills: [
      {
        id: 2866,
        name: "Vulnerability Assessment"
      },
      {
        id: 5263,
        name: "Penetration Testing"
      },
      {
        id: 5632,
        name: "Network Security"
      }
    ],
    project_budget_total: 2731,
    project_budget_hourly_min: null,
    project_budget_hourly_max: null,
    project_budget_currency: "USD",
    languages: {},
    additional_qualifications: "",
    type: "ANY",
    prefEnglishSkill: "ANY",
    number_of_positions_to_hire: 1,
    client_country: "USA",
    client_city: "Cityname",
    client_timezone: "UTC+01:00",
    client_total_assignments: 9,
    client_active_assignments: 1,
    client_total_hours: null,
    client_total_charges: 3199.25,
    client_feedback_count: 5,
    client_score: 5,
    client_jobs_with_hires: 3,
    client_company_size: null,
    client_company_industry: null,
    client_open_jobs: 3,
    description_text: "Sample description for Application Security Project 24."
  },
  {
    id: 25,
    title: "Web Development",
    date_posted: "2025-06-12T22:55:33.038215Z",
    locations: {},
    url: "https://www.example.com/job/25",
    category: "Web Development",
    category_group: "Software Development",
      label: "More than 6 months"
    },
    skills: [
      {
        id: 6655,
        name: "Node.js"
      },
      {
        id: 3755,
        name: "API Integration"
      },
      {
        id: 4445,
        name: "MongoDB"
      }
    ],
    project_budget_total: 1621,
    project_budget_hourly_min: null,
    project_budget_hourly_max: null,
    project_budget_currency: "USD",
    languages: {},
    additional_qualifications: "",
    type: "ANY",
    prefEnglishSkill: "ANY",
    number_of_positions_to_hire: 1,
    client_country: "GBR",
    client_city: "Cityname",
    client_timezone: "UTC+01:00",
    client_total_assignments: 9,
    client_active_assignments: 3,
    client_total_hours: null,
    client_total_charges: 930.36,
    client_feedback_count: 3,
    client_score: 5,
    client_jobs_with_hires: 2,
    client_company_size: null,
    client_company_industry: null,
    client_open_jobs: 3,
    description_text: "Sample description for Web Development Project 25."
  },
  {
    id: 26,
    title: "Graphic, Editorial & Presentation Design",
    date_posted: "2025-06-20T22:55:33.038231Z",
    locations: {},
    url: "https://www.example.com/job/26",
    category: "Graphic, Editorial & Presentation Design",
    category_group: "Design & Creative",
      label: "Less than 1 month"
    },
    skills: [
      {
        id: 5899,
        name: "Branding"
      },
      {
        id: 9884,
        name: "PowerPoint"
      },
      {
        id: 9339,
        name: "Presentation Design"
      }
    ],
    project_budget_total: 1708,
    project_budget_hourly_min: null,
    project_budget_hourly_max: null,
    project_budget_currency: "USD",
    languages: {},
    additional_qualifications: "",
    type: "ANY",
    prefEnglishSkill: "ANY",
    number_of_positions_to_hire: 1,
    client_country: "NGA",
    client_city: "Cityname",
    client_timezone: "UTC+01:00",
    client_total_assignments: 2,
    client_active_assignments: 1,
    client_total_hours: null,
    client_total_charges: 3129.15,
    client_feedback_count: 8,
    client_score: 5,
    client_jobs_with_hires: 2,
    client_company_size: null,
    client_company_industry: null,
    client_open_jobs: 2,
    description_text: "Sample description for Graphic, Editorial & Presentation Design Project 26."
  },
  {
    id: 27,
    title: "Network Security",
    date_posted: "2025-06-04T22:55:33.038247Z",
    locations: {},
    url: "https://www.example.com/job/27",
    category: "Network Security",
    category_group: "Cybersecurity",
      label: "3 to 6 months"
    },
    skills: [
      {
        id: 2322,
        name: "Security Auditing"
      },
      {
        id: 3979,
        name: "Vulnerability Assessment"
      },
      {
        id: 7930,
        name: "Penetration Testing"
      }
    ],
    project_budget_total: 2046,
    project_budget_hourly_min: null,
    project_budget_hourly_max: null,
    project_budget_currency: "USD",
    languages: {},
    additional_qualifications: "",
    type: "ANY",
    prefEnglishSkill: "ANY",
    number_of_positions_to_hire: 1,
    client_country: "USA",
    client_city: "Cityname",
    client_timezone: "UTC+01:00",
    client_total_assignments: 4,
    client_active_assignments: 2,
    client_total_hours: null,
    client_total_charges: 1376.17,
    client_feedback_count: 10,
    client_score: 5,
    client_jobs_with_hires: 3,
    client_company_size: null,
    client_company_industry: null,
    client_open_jobs: 1,
    description_text: "Sample description for Network Security Project 27."
  },
  {
    id: 28,
    title: "Network Security",
    date_posted: "2025-06-05T22:55:33.038263Z",
    locations: {},
    url: "https://www.example.com/job/28",
    category: "Network Security",
    category_group: "Cybersecurity",
      label: "More than 6 months"
    },
    skills: [
      {
        id: 4818,
        name: "Penetration Testing"
      },
      {
        id: 4569,
        name: "Security Auditing"
      },
      {
        id: 7295,
        name: "Network Security"
      }
    ],
    project_budget_total: 497,
    project_budget_hourly_min: null,
    project_budget_hourly_max: null,
    project_budget_currency: "USD",
    languages: {},
    additional_qualifications: "",
    type: "ANY",
    prefEnglishSkill: "ANY",
    number_of_positions_to_hire: 1,
    client_country: "GBR",
    client_city: "Cityname",
    client_timezone: "UTC+01:00",
    client_total_assignments: 2,
    client_active_assignments: 4,
    client_total_hours: null,
    client_total_charges: 1041.02,
    client_feedback_count: 1,
    client_score: 5,
    client_jobs_with_hires: 5,
    client_company_size: null,
    client_company_industry: null,
    client_open_jobs: 2,
    description_text: "Sample description for Network Security Project 28."
  },
  {
    id: 29,
    title: "Mobile Development",
    date_posted: "2025-06-16T22:55:33.038279Z",
    locations: {},
    url: "https://www.example.com/job/29",
    category: "Mobile Development",
    category_group: "Software Development",
      label: "More than 6 months"
    },
    skills: [
      {
        id: 9216,
        name: "API Integration"
      },
      {
        id: 2331,
        name: "React.js"
      },
      {
        id: 1467,
        name: "Node.js"
      }
    ],
    project_budget_total: 2891,
    project_budget_hourly_min: null,
    project_budget_hourly_max: null,
    project_budget_currency: "USD",
    languages: {},
    additional_qualifications: "",
    type: "ANY",
    prefEnglishSkill: "ANY",
    number_of_positions_to_hire: 1,
    client_country: "GBR",
    client_city: "Cityname",
    client_timezone: "UTC+01:00",
    client_total_assignments: 5,
    client_active_assignments: 5,
    client_total_hours: null,
    client_total_charges: 4223.5,
    client_feedback_count: 7,
    client_score: 5,
    client_jobs_with_hires: 5,
    client_company_size: null,
    client_company_industry: null,
    client_open_jobs: 5,
    description_text: "Sample description for Mobile Development Project 29."
  },
  {
    id: 30,
    title: "Application Security",
    date_posted: "2025-06-15T22:55:33.038297Z",
    locations: {},
    url: "https://www.example.com/job/30",
    category: "Application Security",
    category_group: "Cybersecurity",
      label: "1 to 3 months"
    },
    skills: [
      {
        id: 4129,
        name: "Penetration Testing"
      },
      {
        id: 7916,
        name: "Vulnerability Assessment"
      },
      {
        id: 1433,
        name: "Security Auditing"
      }
    ],
    project_budget_total: 2190,
    project_budget_hourly_min: null,
    project_budget_hourly_max: null,
    project_budget_currency: "USD",
    languages: {},
    additional_qualifications: "",
    type: "ANY",
    prefEnglishSkill: "ANY",
    number_of_positions_to_hire: 1,
    client_country: "GBR",
    client_city: "Cityname",
    client_timezone: "UTC+01:00",
    client_total_assignments: 7,
    client_active_assignments: 1,
    client_total_hours: null,
    client_total_charges: 2854.7,
    client_feedback_count: 7,
    client_score: 5,
    client_jobs_with_hires: 2,
    client_company_size: null,
    client_company_industry: null,
    client_open_jobs: 4,
    description_text: "Sample description for Application Security Project 30."
  }*/
]
export const jobifly_howto_data = [
    {
        id: 1,
        Image: assets.creataccount,
        title: 'Create a Free Account',
        text: 'Consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit mollitia eum ipsum.',
    },
    {
        id: 2,
        Image: assets.jobsearch,
        title: 'Search for Jobs',
        text: 'Consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit mollitia eum ipsum.',
    },
    {
        id: 3,
        Image: assets.applyjob,
        title: 'Apply for Jobs',
        text: 'Consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit mollitia eum ipsum.'   
    },
]

export const nav_data = [
    {
        id: 1,
        title: 'Home',
        link: ''
    },
    {
        id: 2,
        title: 'Browse Jobs',
        link: '/joblist'
    },
    {
        id: 3,
        title: 'About',
        link: 'about'
    },
    {
        id: 4,
        title: 'Contact',
        link: 'contact'
    }
]

export const activities_data = [
    {
        id: 1,
        icon: <FolderCode />, 
        title: 'Software Engineer',
        text: 'lorem ipsum is simple dummy text of the printer' 
    },
    {
        id: 1,
        icon: <Stethoscope />, 
        title: 'Physician',
        text: 'lorem ipsum is simple dummy text of the printer' 
    },
    {
        id: 1,
        icon: <BadgeDollarSign />, 
        title: 'Marketing',
        text: 'lorem ipsum is simple dummy text of the printer' 
    }
]


export const Jobs_API = [
    {
        id:"1415858922",
        date_posted:"2025-02-17T10:51:08",
        title:"Operations Manager, Operations",
        organization:"Amazon",
        organization_url:"https://www.linkedin.com/company/amazon",
        date_validthrough:"2025-03-19T10:51:08",
        employment_type:"FULL_TIME",
        url:"https://in.linkedin.com/jobs/view/operations-manager-operations-at-amazon-4152738886",
        linkedin_org_description:"Amazon is guided by four principles: customer obsession rather than competitor focus, passion for invention, commitment to operational excellence, and long-term thinking. We are driven by the excitement of building technologies, inventing products, and providing services that change lives. We embrace new ways of doing things, make decisions quickly, and are not afraid to fail. We have the scope and capabilities of a large company, and the spirit and heart of a small one. Together, Amazonians research and develop new technologies from Amazon Web Services to Alexa on behalf of our customers: shoppers, sellers, content creators, and developers around the world. Our mission is to be Earth's most customer-centric company. Our actions, goals, projects, programs, and inventions begin and end with the customer top of mind. You'll also hear us say that at Amazon, it's always",
        seniority:"Mid-Senior level",
    },
    {
        id:"1415865917",
        date_posted:"2025-02-17T10:50:14",
        title:"Compliance Product Officer (VP) - Transaction Conflicts Advisory",
        organization:"Lensa",
        organization_url:"https://www.linkedin.com/company/lensa",
        date_validthrough:"2025-03-19T10:50:14",
        employment_type:"FULL_TIME",
    }
]

export const jobs_data = [
    {
        id: 1,
        company: 'Google',
        company_logo: assets.google,
        title: 'Software Engineer',
        location: 'Lagos, Nigeria',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.',
        date: '3days ago',
    },
    {
        id: 2,
        company: 'Google',
        company_logo: assets.google,
        title: 'Software Engineer',
        location: 'Lagos, Nigeria',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.',
        date: '3days ago',
    },
    {
        id: 3,
        company: 'Google',
        company_logo: assets.google,
        title: 'Software Engineer',
        location: 'Lagos, Nigeria',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.',
        date: '3days ago',
    },
    {
        id: 4,
        company: 'Google',
        company_logo: assets.google,
        title: 'Software Engineer',
        location: 'Lagos, Nigeria',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.',
        date: '3days ago',
    },
    {
        id: 5,
        company: 'Google',
        company_logo: assets.google,
        title: 'Software Engineer',
        location: 'Lagos, Nigeria',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.',
        date: '3days ago',
    },
    {
        id: 6,
        company: 'Google',
        company_logo: assets.google,
        title: 'Software Engineer',
        location: 'Lagos, Nigeria',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.',
        date: '3days ago',
    },
    /*{
        id: 7,
        company: 'Google',
        company_logo: assets.google,
        title: 'Software Engineer',
        location: 'Lagos, Nigeria',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.',
        date: '3days ago',
    },
    {
        id: 8,
        company: 'Google',
        company_logo: assets.google,
        title: 'Software Engineer',
        location: 'Lagos, Nigeria',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.',
        date: '3days ago',
    },
    {
        id: 9,
        company: 'Google',
        company_logo: assets.google,
        title: 'Software Engineer',
        location: 'Lagos, Nigeria',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.',
        date: '3days ago',
    },
    {
        id: 10,
        company: 'Google',
        company_logo: assets.google,
        title: 'Software Engineer',
        location: 'Lagos, Nigeria',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.',
        date: '3days ago',
    },
    {
        id: 11,
        company: 'Google',
        company_logo: assets.google,
        title: 'Software Engineer',
        location: 'Lagos, Nigeria',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.',
        date: '3days ago',
    },
    {
        id: 12,
        company: 'Google',
        company_logo: assets.google,
        title: 'Software Engineer',
        location: 'Lagos, Nigeria',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.',
        date: '3days ago',
    }*/
]

export const jobs_data_list = [
    {
        id: 1,
        company: 'Google',
        company_logo: assets.google,
        title: 'Software Engineer',
        location: 'Lagos, Nigeria',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.',
        date: '3days ago',
        job_type: 'Full Time',
        job_location: 'San Francisco'
    },
    {
        id: 2,
        company: 'Google',
        company_logo: assets.google,
        title: 'Software Engineer',
        location: 'Lagos, Nigeria',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.',
        date: '3days ago',
    },
    {
        id: 3,
        company: 'Google',
        company_logo: assets.google,
        title: 'Software Engineer',
        location: 'Lagos, Nigeria',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.',
        date: '3days ago',
    },
    {
        id: 4,
        company: 'Google',
        company_logo: assets.google,
        title: 'Software Engineer',
        location: 'Lagos, Nigeria',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.',
        date: '3days ago',
    },
    {
        id: 5,
        company: 'Google',
        company_logo: assets.google,
        title: 'Software Engineer',
        location: 'Lagos, Nigeria',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.',
        date: '3days ago',
    },
    {
        id: 6,
        company: 'Google',
        company_logo: assets.google,
        title: 'Software Engineer',
        location: 'Lagos, Nigeria',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.',
        date: '3days ago',
    },
    {
        id: 7,
        company: 'Google',
        company_logo: assets.google,
        title: 'Software Engineer',
        location: 'Lagos, Nigeria',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.',
        date: '3days ago',
    },
    {
        id: 8,
        company: 'Google',
        company_logo: assets.google,
        title: 'Software Engineer',
        location: 'Lagos, Nigeria',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.',
        date: '3days ago',
    },
    {
        id: 9,
        company: 'Google',
        company_logo: assets.google,
        title: 'Software Engineer',
        location: 'Lagos, Nigeria',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.',
        date: '3days ago',
    },
    {
        id: 10,
        company: 'Google',
        company_logo: assets.google,
        title: 'Software Engineer',
        location: 'Lagos, Nigeria',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.',
        date: '3days ago',
    },
    {
        id: 11,
        company: 'Google',
        company_logo: assets.google,
        title: 'Software Engineer',
        location: 'Lagos, Nigeria',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.',
        date: '3days ago',
    },
    {
        id: 12,
        company: 'Google',
        company_logo: assets.google,
        title: 'Software Engineer',
        location: 'Lagos, Nigeria',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.',
        date: '3days ago',
    }
]