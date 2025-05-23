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
    contact
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