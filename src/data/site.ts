// src/data/site.ts
// Everything the site says that changes: contact details, plans and prices, features, FAQs.
// Edit here, not in the pages.

export const SITE = {
  name: 'CareConnect',
  tagline: 'Church management for every member and every visitor',
  description:
    'CareConnect helps churches know every member, follow up every visitor and reach everyone by SMS and email. Members and groups, first-timers and visitation, attendance, events and programmes in one simple system.',
  email: 'hello@careconnect.com',
  phone: '+233 00 000 0000',
  /** Where churches sign in: <their web name>.<appDomain> */
  appDomain: 'careconnect.com',
  /** The backend's public URL, for the request-access form. */
  apiUrl: import.meta.env.PUBLIC_API_URL || 'http://localhost:4000',
};

export const NAV = [
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/security', label: 'Security' },
];

export type Plan = {
  id: string;
  name: string;
  forWho: string;
  /** US dollars per month; null = talk to us */
  monthly: number | null;
  members: string;
  highlight?: boolean;
  includes: string[];
};

/** Launch prices in US dollars — placeholders to confirm before going public. Annual = 10 months. */
export const PLANS: Plan[] = [
  {
    id: 'free',
    name: 'Starter',
    forWho: 'Small churches and new plants',
    monthly: 0,
    members: 'Up to 100 members',
    includes: ['Members, groups and chapels', 'Attendance and headcounts', 'First-timer registration', '1 admin'],
  },
  {
    id: 'growth',
    name: 'Growth',
    forWho: 'Growing churches',
    monthly: 39,
    members: 'Up to 500 members',
    includes: ['Everything in Starter', 'Visitation and follow-up', 'Forms, events and registrations', 'Groups and ministries', 'SMS and email', '5 admins'],
  },
  {
    id: 'church',
    name: 'Church',
    forWho: 'Established congregations',
    monthly: 89,
    members: 'Up to 2,000 members',
    highlight: true,
    includes: ['Everything in Growth', 'Programmes and certificates', 'Outreach campaigns', 'Lobby kiosk check-in', 'AI assistant and analytics', 'Your own domain', 'Unlimited admins'],
  },
  {
    id: 'network',
    name: 'Network',
    forWho: 'Large churches and church networks',
    monthly: null,
    members: '2,000+ members or several branches',
    includes: ['Everything in Church', 'Help moving your data in', 'Priority support', 'Invoicing'],
  },
];

export type Feature = { id: string; title: string; summary: string; points: string[] };

export const FEATURES: Feature[] = [
  {
    id: 'members',
    title: 'Members, groups and chapels',
    summary: 'Every member in the right group, cell or chapel, with a member ID your church recognises. Leaders see only their own people.',
    points: ['Groups, cells, ministries and chapels', 'Leaders see only their own people', 'Import from Excel, with columns matched for you', 'Family, ministries, groups and life events'],
  },
  {
    id: 'visitors',
    title: 'First-timers and visitation',
    summary: 'First-timers register from a QR code. A second visit makes them a second-timer, and the visitation team sees who is due a visit.',
    points: ['One person across many visits, recognised by phone', 'Automatic membership when they say yes', 'Visits, reports and prayer requests in one place', 'Drifting members flagged before they are lost'],
  },
  {
    id: 'attendance',
    title: 'Attendance and check-in',
    summary: 'Self check-in on phones and the lobby kiosk, shepherd registers after service, and door headcounts.',
    points: ['QR check-in that opens before service', 'Late arrivals measured fairly', 'Chapel and service reports', 'Multi-service Sundays and recurring events'],
  },
  {
    id: 'messages',
    title: 'SMS and email',
    summary: 'SMS and email to members, chapels, ministries or visitors, with delivery reports and birthday greetings.',
    points: ['Local SMS, priced per unit', 'Templates and scheduled sends', 'See who it reached, resend to who it missed', 'Birthday greetings sent for you'],
  },
  {
    id: 'programmes',
    title: 'Programmes and certificates',
    summary: 'Run membership classes and courses: registration, classes, weekly sessions, points and certificates people can verify.',
    points: ['Online applications', 'Session check-in and registers', 'Points and completion rules', 'Certificates with a verification page'],
  },
  {
    id: 'outreach',
    title: 'Outreach and follow-up',
    summary: 'Campus and community outreaches with breakout groups, facilitator links and follow-up of everyone you met.',
    points: ['Check-in at the outreach', 'Breakout groups with private facilitator links', 'Contacts followed up by your team', 'Know who later came to church'],
  },
  {
    id: 'insight',
    title: 'Reports and an AI assistant',
    summary: 'Dashboards for every chapel and service, and an AI assistant you can simply ask.',
    points: ['Growth, attendance and engagement trends', 'Members map by area', '"How many first-timers came back this month?"', 'Activity log of every change'],
  },
];

export const STEPS = [
  { title: 'Request access', body: 'Tell us about your church. We reply within a working day.' },
  { title: 'Your church is set up', body: 'Your name, logo and colours, at yourchurch.careconnect.com.' },
  { title: 'Bring your members', body: 'Import your list from Excel. We help you with it on the Church and Network plans.' },
  { title: 'Invite your team', body: 'Pastors, shepherds and administrators each see what their role needs.' },
];

export const FAQS = [
  { q: 'Is our data separate from other churches?', a: 'Yes. Every church has its own address, its own people and its own data. No church can see another church\'s members, messages or reports — this is enforced on every request, and tested.' },
  { q: 'Can we use our own domain?', a: 'Yes. Every church gets yourchurch.careconnect.com straight away, and on the Church plan you can also use your own domain, like app.yourchurch.org.' },
  { q: 'How do we pay?', a: 'Monthly by card, or by bank transfer or mobile money for 3, 6 or 12 months ahead. Paying for a year costs the price of 10 months.' },
  { q: 'How does SMS work?', a: 'You buy SMS credit as you need it and every message is counted against your church. SMS is live in Ghana today, with more countries on the way. Email works everywhere, at no extra cost.' },
  { q: 'Can we move our existing records in?', a: 'Yes. Upload your member list from Excel or CSV and CareConnect matches the columns for you. On the Church and Network plans we do it with you.' },
  { q: 'What happens if we leave?', a: 'You can export everything your church owns at any time. When you close your account, your data is deleted for good.' },
];
