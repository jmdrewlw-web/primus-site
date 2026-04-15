export interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
  location: string;
  category: 'results' | 'process' | 'trust';
}

export const testimonials: Testimonial[] = [
  {
    quote: "We've grown super fast. We're at 10,000 patients doing over $4 million a year.",
    author: 'Dr. Kyle Skjei',
    title: 'Owner',
    company: 'Lake Dental Care',
    location: 'Big Lake, MN',
    category: 'results',
  },
  {
    quote: "Production was up 50 to 60 percent after we moved in.",
    author: 'Dr. Dan Gleason',
    title: 'Owner',
    company: 'Gleason Dental Clinic',
    location: 'Beatrice, NE',
    category: 'results',
  },
  {
    quote: "New patient flow increased approximately three times what it was in my prior location.",
    author: 'Dr. Jonathan Titus',
    title: 'Owner',
    company: 'Titus Dentistry',
    location: 'Middletown, IN',
    category: 'results',
  },
  {
    quote: 'I am asked over and over again, "Who did your construction?" The building does the marketing.',
    author: 'Dr. Stephen Huber',
    title: 'Owner',
    company: 'Stephen Huber, DDS',
    location: 'Leawood, KS',
    category: 'results',
  },
  {
    quote: "They were really straightforward and blunt about what they thought was possible. Didn't feel like there was a lot of selling.",
    author: 'Dr. Jonathan Titus',
    title: 'Owner',
    company: 'Titus Dentistry',
    location: 'Middletown, IN',
    category: 'process',
  },
  {
    quote: "They came with everything — the architect, the interior designer. It just seemed like a really easy way to go.",
    author: 'Dr. Ken Moore',
    title: 'Owner',
    company: 'Create A Smile',
    location: 'Bloomington, IN',
    category: 'process',
  },
  {
    quote: "Made it easy, made it affordable, and exceeded my expectations.",
    author: 'Dr. Laura Fauchier',
    title: 'Owner',
    company: 'Marion Dental',
    location: 'Marion, IA',
    category: 'process',
  },
  {
    quote: "Closed Thursday, opened Monday. Haven't worked this hard in 25 years, but it's a lot less stressful.",
    author: 'Dr. Dan Gleason',
    title: 'Owner',
    company: 'Gleason Dental Clinic',
    location: 'Beatrice, NE',
    category: 'process',
  },
  {
    quote: "No one has more dental project know-how than Primus Companies. After 14 years, they still exceed expectations on every build.",
    author: 'Eric Nuss',
    title: 'CEO',
    company: 'Ssun Health',
    location: '',
    category: 'trust',
  },
  {
    quote: "They held my hand through the whole thing. Made it not nearly as painful as I thought.",
    author: 'Dr. Jonathan Titus',
    title: 'Owner',
    company: 'Titus Dentistry',
    location: 'Middletown, IN',
    category: 'trust',
  },
];
