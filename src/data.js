export const IMG = '/hero.png';
export const IMG2 = '/museum-photo.png';
export const AD = 'Sacred Heart College, Shembaganur, Kodaikanal – 624 101';
export const MAP =
  'https://www.google.com/maps/search/?api=1&query=Sacred+Heart+College+Shembaganur+Kodaikanal';

export const U = {
  museum: {
    t: 'The Museum of Natural Science History of Palni Hills',
    d: 'The century-old collection of rare Palni Hills flora and fauna.',
    p: [
      'The Shembaganur Museum is a unique venture of the Jesuits spearheaded by Rev. Fr. Anglade. The century-old collection includes the rare flora and fauna of Palni Hills. A colourful collection of birds, butterflies and moths is a special attraction.',
      'Models of dolmens inhabited by and funeral urns used by the prehistoric inhabitants of the hills are still preserved in the archeological section of this museum.',
    ],
    dir: ['Fr. Anglade'],
    g: [
      'The Museum entrance',
      'A stag trophy in the exhibit hall',
      'The main display hall',
      'Diorama of Palni Hills wildlife',
    ],
    ad: 'The Director, The Museum of Natural Science History, Sacred Heart College, Shembaganur. 624 101',
  },
  archives: {
    t: 'Jesuit Madurai Province Archives',
    d: 'Historical documents from the mid 16th century onwards.',
    p: [
      'Historical documents from mid 16th century onwards are preserved here on palm leaves, paper, and digitized soft copies.',
      'The documents bear on the four successive periods in the history of the Jesuit Missions in the Indian Peninsula: The Jesuit Goa Province from 1542 when St. Francis Xavier landed in Goa, the Malabar Province, the Old Madura Mission and the New Madura Mission from 1838 onwards.',
    ],
  },
  anglade: {
    t: 'Anglade Institute of Natural History',
    d: 'Environmental awareness and education for all.',
    p: [
      'Anglade Institute of Natural History is an environmental awareness and education programme for school children, college students and grassroots level leaders.',
    ],
  },
  schools: {
    t: 'Shembaganur Social Service Schools',
    d: 'Village schools opened in 1950 for indigenous and marginalized people.',
    p: [
      'Along with the spiritual and intellectual formation, the Jesuits in 1950 established primary schools in Vellakavi, Puthur, Adukkam and Pallangi. All these village schools were opened in remote areas for the benefit of the indigenous and marginalized people.',
    ],
  },
  peak: {
    t: 'PEAK',
    d: 'People’s Education and Action in Kodaikanal.',
    p: [
      'People’s Education and Action in Kodaikanal is a movement to bring social justice to Kodai Hills and education to tribal and madhari children.',
      'Around 500 children are in our Inigo Children’s Home and Inigo Boys’ Hostel and in other schools. PEAK serves the downtrodden people of the Upper and Lower Palni Hills.',
    ],
  },
  grihini: {
    t: 'Grihini Community College',
    d: 'Technical, vocational and soft skills for young women.',
    p: [
      'This project is carried out with the collaboration of the Kodai Grihini Trust and Australian Lutheran World Service to impart technical, vocational and soft skills to young Dalit and Tribal women from the villages of the Palni Hills.',
    ],
  },
  tertianship: {
    t: 'Tertianship',
    d: 'The final stage of Jesuit formation.',
    p: [
      'The final stage of Jesuit formation called Tertianship is conducted here for six months which includes one month of Spiritual Exercises known as the Long Retreat.',
      'Jesuits from the Indian subcontinent and abroad enjoy their stay and enrich their lives through various courses on spirituality and rereading of Jesuit sources such as the Constitutions. This is a preparation for their Final Vows.',
    ],
  },
  listen: {
    t: 'Loyola Institute of Spiritual Training [LISTEN]',
    d: 'A house of prayer and spiritual activities since 1980.',
    p: [
      'We, as Jesuits, run this Eco Sanctuary and Heritage Center as a house of prayer and spiritual activities. The programs of LISTEN, started in 1980 and intensified in 1982 with counseling and other psychological programs, are now focused on spirituality.',
      'Spirituality is an inner path enabling humans to discover the essence of their being or the “deepest values and meanings by which people live.” It emphasizes humanistic qualities such as love, compassion, patience, tolerance, forgiveness, contentment, responsibility, harmony, and a concern for the other. Spiritual practices, including meditation, prayer, mindfulness and contemplation, are intended to develop an individual’s inner life, coping skills and social support, foster feelings of optimism and hope, promote healthy behaviour, reduce feelings of depression and anxiety and encourage a sense of relaxation.',
      'Our retreat programme is based on the Spiritual Exercises of St. Ignatius, the Buddhist tradition of mindfulness, Movement meditation, Psycho-social realities, counseling and Eco spirituality. It leads to connectedness with self, right relationship with fellow human beings, with nature, the cosmos and with the divine.',
      'Our retreat center can cater to the needs of 30 to 40 religious and priests for one month, 8-day or 5-day retreats at any time of the year except in May. The center is also available for seminars for the religious throughout the year except in May and July.',
      'To live and love like Jesus is the fundamental principle and essence of our retreat programme. The Universal Master reveals through his teachings, his way of life, parables and stories the secrets of life. In retreat, in total solitude you discover a way of life that leads to life’s fullness.',
      'Q:A disciple once complained to his Master: “You tell us stories but you never reveal their meaning to us.” In response, the Master asked: “How would you like it if someone offered you fruit but chewed it up before giving it to you?” No one can find your meaning for you. Not even the Master. If you are ready to take up the challenge, you are welcome!',
    ],
  },
};

export const G = [
  ['', ['museum', 'archives', 'anglade']],
  ['4. Educational and Social Activities', ['schools', 'peak', 'grihini']],
  ['5. Spirituality Centre', ['tertianship', 'listen']],
];

export const N = {
  museum: '1',
  archives: '2',
  anglade: '3',
  schools: '4.1',
  peak: '4.2',
  grihini: '4.3',
  tertianship: '5.1',
  listen: '5.2',
};

export const ORD = G.flatMap((g) => g[1]);

export const SL = [
  [
    'Message',
    'Contemplatives in action: stewards of the Palni Hills and of the Creator’s earth.',
  ],
  [
    'Since 1895',
    'The Jesuit formation house of Kodaikanal, a heartland for Novitiate, Juniorate and Philosophy.',
  ],
  [
    'Eco Spirituality',
    'A spectacular creation and joint enterprise of Nature and Humans working together.',
  ],
];