
import React from 'react';
import { Program, Trainer, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Facility', href: '#gallery' },
  { label: 'Trainers', href: '#trainers' },
  { label: 'Contact', href: '#contact' },
];

export const PROGRAMS: Program[] = [
  {
    id: 'sweat',
    title: 'SWEAT',
    description: 'Elite weight loss training program designed to torch calories.',
    longDescription: 'Our SWEAT program combines High-Intensity Interval Training (HIIT) with metabolic conditioning to maximize fat loss while preserving lean muscle. Perfect for those looking for a transformation in record time.',
    benefits: ['Burn up to 800 calories per session', 'Boost resting metabolic rate', 'Improve cardiovascular endurance'],
    icon: 'Flame',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'fantastic-body',
    title: 'Fantastic Body',
    description: 'Specialized glutes workout program for shaping the lower body.',
    longDescription: 'Focused exclusively on lower body hypertrophy and core stability. We use a combination of heavy compounds and targeted isolation to build strength and aesthetic shape.',
    benefits: ['Targeted glute activation', 'Core strengthening', 'Improved posture and lower body power'],
    icon: 'Zap',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'strength-unleashed',
    title: 'Strength Unleashed',
    description: 'High-intensity bodybuilding program for maximizing muscle growth.',
    longDescription: 'For those who want to push the absolute limits of their strength. This program focuses on progressive overload across the big three lifts and advanced bodybuilding splits.',
    benefits: ['Maximum muscle hypertrophy', 'Significant strength gains', 'Professional technique coaching'],
    icon: 'Dumbbell',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'personal-training',
    title: 'Personal Training',
    description: 'One-on-one expert guidance tailored specifically to you.',
    longDescription: 'Get a customized roadmap to your goals. Our elite trainers provide 100% focus on your form, nutrition, and mental discipline to ensure you never plateau.',
    benefits: ['1-on-1 dedicated coaching', 'Customized nutrition plans', 'Flexible scheduling'],
    icon: 'User',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800',
  },
];

export const GALLERY_IMAGES = [
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1574673130244-c4b621450217?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1534367507873-d2d7e249a3ee?auto=format&fit=crop&q=80&w=800',
];

export const TRAINERS: Trainer[] = [
  {
    id: '1',
    name: 'Samuel Okafor',
    role: 'Head Trainer',
    specialty: 'Bodybuilding & Powerlifting',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fe?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '2',
    name: 'Blessing Adebayo',
    role: 'Senior Coach',
    specialty: 'Weight Loss & HIIT',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '3',
    name: 'Dr. Emeka Victor',
    role: 'Physiotherapist',
    specialty: 'Injury Recovery',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400',
  },
];

export const CONTACT_INFO = {
  phone: '+234 810 614 0000',
  whatsapp: '2348106140000',
  address: '52b, Ujoelen Road, 310101, Akahia, Nigeria',
  hours: 'Open 24 Hours',
};
