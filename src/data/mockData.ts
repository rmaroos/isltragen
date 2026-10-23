import type { Package, Article, Faq, Inquiry } from '@/types';

export const mockPackages: Package[] = [
  {
    id: 'pkg-1',
    title: 'Premium Autumn Umrah Experience (5-Star)',
    slug: 'premium-autumn-umrah',
    category: 'umrah',
    short_description: 'An exceptional 10-night spiritual journey featuring luxury 5-star hotels facing the Haram in Makkah and Madinah.',
    long_description: 'Experience an unforgettable pilgrimage with premium accommodation just steps away from the Grand Mosque in Makkah and the Prophet’s Mosque in Madinah. This package includes direct return flights, private VIP ground transfers in air-conditioned GMC Yukon vehicles, comprehensive Ziyarat tours with certified multi-lingual guides, and round-the-clock dedicated on-site assistance.',
    hero_image: 'https://images.pexels.com/photos/4118038/pexels-photo-4118038.jpeg?auto=compress&cs=tinysrgb&w=1920',
    gallery: [
      'https://images.pexels.com/photos/4118038/pexels-photo-4118038.jpeg?auto=compress&cs=tinysrgb&w=1920',
      'https://images.pexels.com/photos/38546874/pexels-photo-38546874.jpeg?auto=compress&cs=tinysrgb&w=1920',
      'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1600&q=80'
    ],
    departure_city: 'London',
    start_date: '2026-11-15',
    end_date: '2026-11-25',
    duration_days: 10,
    price_from: 1850,
    price_basis: 'Per person, twin sharing',
    currency: 'GBP',
    hotel_category: '5 Star',
    hotel_name_makkah: 'Swissôtel Al Maqam Makkah',
    hotel_distance_makkah: 'Direct Haram courtyard access (0m)',
    hotel_name_madinah: 'Dar Al Taqwa Hotel Madinah',
    hotel_distance_madinah: '30m from the Ladies and Mens Haram Gate',
    inclusions: [
      'Direct return flights with British Airways or Saudia',
      '5 nights in Swissôtel Al Maqam Makkah with daily open buffet breakfast',
      '5 nights in Dar Al Taqwa Madinah with daily open buffet breakfast',
      'Private VIP airport and intercity transfers (Jeddah - Makkah - Madinah - Airport)',
      'Saudi Tourist or Umrah electronic visa processing fees included',
      'Guided historical Ziyarat in Makkah (Ghar Hira, Thawr, Mina, Muzdalifah, Arafat)',
      'Guided Ziyarat in Madinah (Masjid Quba, Mount Uhud, Seven Mosques, Masjid Qiblatain)',
      'Exclusive Umrah welcome kit with ihram/prayer mat/drawstring bag/dua cards',
      '24/7 dedicated bilingual tour manager and ground support team'
    ],
    exclusions: [
      'Lunch and evening meals not specified in the itinerary',
      'Personal laundry, telephone calls, and room incidentals',
      'Comprehensive personal travel and health insurance',
      'Optional private excursions outside standard itinerary'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Jeddah & Transfer to Makkah',
        description: 'Meet and assist service at King Abdulaziz International Airport in Jeddah. Board your private VIP transfer to your hotel in Makkah, check in, rest, and perform your Umrah under the guidance of our experienced group scholar.'
      },
      {
        day: 2,
        title: 'Spiritual Contemplation in Makkah',
        description: 'Spend the day performing prayers and Tawaf in the blessed precincts of Masjid al-Haram. Evening reflection circle and review of spiritual milestones.'
      },
      {
        day: 3,
        title: 'Comprehensive Makkah Historical Ziyarat',
        description: 'Guided morning tour visiting historical landmarks including Jabal al-Noor (Cave of Hira), Cave of Thawr, Mount Arafat (Jabal al-Rahmah), Muzdalifah, and Mina.'
      },
      {
        day: 4,
        title: 'Private Worship & Personal Time',
        description: 'Full day at leisure for personal prayers, Qur’an recitation, and optional visit to the Makkah Museum or Kiswah Factory (subject to permissions).'
      },
      {
        day: 5,
        title: 'Farewell Tawaf & Transfer to Madinah via High-Speed Haramain Train',
        description: 'Perform Tawaf al-Wada (Farewell Tawaf). Board the modern Haramain High-Speed Rail in business class to the illuminated city of Madinah. Check in to your hotel near the Prophet’s Mosque.'
      },
      {
        day: 6,
        title: 'Greeting the Prophet (pbuh) & Rawdah Visits',
        description: 'Guided visitation to the Rawdah ash-Sharifah (via pre-arranged Nusuk permits) and greeting the Messenger of Allah (peace be upon him) and his two noble companions.'
      },
      {
        day: 7,
        title: 'Sacred Madinah Historical Ziyarat',
        description: 'Morning historical tour including Masjid Quba (performing two raka’at for Umrah reward), the Martyrs of Mount Uhud and Archers’ Hill, and Masjid al-Qiblatain.'
      },
      {
        day: 8,
        title: 'Deep Reflection in the Prophet’s Mosque',
        description: 'Day devoted to worship, learning circles, and visiting the peaceful Date Market and King Fahd Holy Qur’an Printing Complex.'
      },
      {
        day: 9,
        title: 'Worship and Reflections in Madinah',
        description: 'Opportunity for additional voluntary prayers, contemplation in the courtyard umbrellas, and personal shopping.'
      },
      {
        day: 10,
        title: 'Departure to UK',
        description: 'Hotel check-out and private transfer to Prince Mohammad Bin Abdulaziz Airport in Madinah for your direct return flight home.'
      }
    ],
    availability_status: 'available',
    is_featured: true,
    is_published: true,
    meta_description: 'Book 5-star Autumn Umrah 2026 from London with Swissotel Makkah and Dar Al Taqwa Madinah. VIP transfers and full guide included.',
    last_reviewed_at: '2026-10-20T10:00:00Z',
    created_at: '2026-10-15T08:00:00Z',
    updated_at: '2026-10-20T10:00:00Z'
  },
  {
    id: 'pkg-2',
    title: 'Deluxe Ramadan Last 10 Nights Spiritual Retreat',
    slug: 'ramadan-last-10-days',
    category: 'ramadan-umrah',
    short_description: 'Spend the most blessed nights of the year in the Haram with Tahajjud, Laylatul Qadr, and Eid in Makkah.',
    long_description: 'Immerse your heart in the spiritual zenith of the Islamic year. Experience the 21st through 30th nights of Ramadan in the presence of the Holy Kaaba. Includes daily Suhoor buffet and Iftar arrangements, seamless ground transit, and dedicated accommodations facing the Haram plaza.',
    hero_image: 'https://images.pexels.com/photos/38546874/pexels-photo-38546874.jpeg?auto=compress&cs=tinysrgb&w=1920',
    gallery: [
      'https://images.pexels.com/photos/38546874/pexels-photo-38546874.jpeg?auto=compress&cs=tinysrgb&w=1920',
      'https://images.pexels.com/photos/4118038/pexels-photo-4118038.jpeg?auto=compress&cs=tinysrgb&w=1920',
      'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1600&q=80'
    ],
    departure_city: 'London',
    start_date: '2027-03-22',
    end_date: '2027-04-03',
    duration_days: 12,
    price_from: 3450,
    price_basis: 'Per person, sharing',
    currency: 'GBP',
    hotel_category: '5 Star',
    hotel_name_makkah: 'Fairmont Makkah Clock Royal Tower',
    hotel_distance_makkah: 'Direct Haram Courtyard Elevators',
    hotel_name_madinah: 'Pullman Zamzam Madinah',
    hotel_distance_madinah: '150m from Bab Al Salam',
    inclusions: [
      'Return scheduled flights with Saudi Arabian Airlines',
      '8 nights in Fairmont Makkah Clock Tower during the Last 10 Nights',
      '4 nights in Pullman Zamzam Madinah',
      'Daily lavish Suhoor buffet & designated Iftar banquet boxes',
      'Guaranteed Haramain bullet train tickets (business class)',
      'Dedicated Saudi visa acquisition and processing',
      'Round-the-clock scholar mentorship and nightly Taraweeh/Qiyam guidance'
    ],
    exclusions: [
      'Personal incidental room services',
      'Additional voluntary Umrah fees if applicable',
      'Travel and medical insurance'
    ],
    itinerary: [
      { day: 1, title: 'Arrival & Umrah Rituals', description: 'Arrive in Jeddah, luxury coach transfer to Makkah, check in, and group Umrah.' },
      { day: 2, title: 'First Night of Qiyam', description: 'Participate in Taraweeh and nightly Tahajjud prayers in the Grand Mosque.' },
      { day: 3, title: 'Day of Contemplation', description: 'Qur’an completion sessions and lectures before Iftar.' },
      { day: 4, title: 'Seeking Laylatul Qadr', description: 'Spiritual focus on the odd nights with guided supplication circles.' },
      { day: 5, title: 'Odd Night Devotions', description: 'Dedicated worship through the night at the Kaaba courtyard.' },
      { day: 6, title: 'Khatm al-Qur’an Night', description: 'Witness the emotional completion of the Qur’an recitation in the Haram.' },
      { day: 7, title: 'Eid al-Fitr in Makkah', description: 'Celebrate Eid Salah in the Grand Mosque among millions of worshippers.' },
      { day: 8, title: 'High-Speed Rail to Madinah', description: 'Journey to the Prophet’s Sanctuary aboard the Haramain High Speed Train.' },
      { day: 9, title: 'Salam on the Beloved Prophet (pbuh)', description: 'Visiting the Rawdah Sharif and offering greetings.' },
      { day: 10, title: 'Madinah Historic Ziyarat', description: 'Tour to Mount Uhud and Masjid Quba.' },
      { day: 11, title: 'Quiet Reflection in Madinah', description: 'Personal devotion and visiting local cultural landmarks.' },
      { day: 12, title: 'Departure for UK', description: 'Transfer to Madinah International Airport for flight home.' }
    ],
    availability_status: 'limited',
    is_featured: true,
    is_published: true,
    meta_description: 'Ramadan 2027 Last 10 Nights Umrah Package from UK with Fairmont Clock Tower Makkah and Pullman Zamzam Madinah.',
    last_reviewed_at: '2026-10-21T09:00:00Z',
    created_at: '2026-10-16T08:00:00Z',
    updated_at: '2026-10-21T09:00:00Z'
  },
  {
    id: 'pkg-3',
    title: 'Classic Family Umrah Package (Comfort 4-Star)',
    slug: 'classic-family-umrah',
    category: 'umrah',
    short_description: 'Affordable, family-friendly Umrah package with interconnected rooms, buffet meals, and child-safe arrangements.',
    long_description: 'Designed specifically with families, children, and elderly parents in mind. Enjoy short walking distances to the prayer halls, spacious accommodations, convenient shuttle services, and comprehensive assistance from arrival to departure.',
    hero_image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1600&q=80',
      'https://images.pexels.com/photos/4118038/pexels-photo-4118038.jpeg?auto=compress&cs=tinysrgb&w=1920'
    ],
    departure_city: 'Manchester',
    start_date: '2026-12-20',
    end_date: '2026-12-30',
    duration_days: 10,
    price_from: 1290,
    price_basis: 'Per person, quad sharing',
    currency: 'GBP',
    hotel_category: '4 Star',
    hotel_name_makkah: 'DoubleTree by Hilton Makkah Jabal Omar',
    hotel_distance_makkah: '350m easy flat stroll to Haram Plaza',
    hotel_name_madinah: 'Crowne Plaza Madinah',
    hotel_distance_madinah: '200m from the Central Southern Gate',
    inclusions: [
      'Return flights from Manchester with 2 checked bags per traveler',
      '5 nights in DoubleTree by Hilton Jabal Omar (Family Interconnecting available)',
      '5 nights in Crowne Plaza Madinah with daily buffet breakfast',
      'Comfortable private air-conditioned coach transfers throughout',
      'Full family Ziyarat in both holy cities with engaging stories for kids',
      'Electronic visa processing assistance',
      '24/7 on-site family support coordinator'
    ],
    exclusions: [
      'Lunch and dinner options',
      'Optional wheelchair or porter rental fees at Haram',
      'Travel insurance'
    ],
    itinerary: [
      { day: 1, title: 'Arrival & Welcome in Makkah', description: 'Arrival at Jeddah, smooth coach transfer, check in, and supported family Umrah.' },
      { day: 2, title: 'Rest & Haram Orientation', description: 'Acclimatization, family orientation tour around the Haram gates and facilities.' },
      { day: 3, title: 'Makkah Ziyarat Tour', description: 'Visit Jabal Al-Nour, Mina, Arafat, and Muzdalifah with historic narration.' },
      { day: 4, title: 'Family Worship Day', description: 'Free day for prayers, shopping at Abraj Al Bait, and personal reflection.' },
      { day: 5, title: 'Transfer to Madinah', description: 'Scenic coach ride or train to Madinah with refreshment stops.' },
      { day: 6, title: 'Prophet’s Mosque & Rawdah', description: 'Organized Rawdah appointments for both men and women.' },
      { day: 7, title: 'Historic Madinah Excursion', description: 'Masjid Quba, Mount Uhud, and the historic battlefield.' },
      { day: 8, title: 'Date Farm & Cultural Visit', description: 'Visit a traditional Madinah Ajwa date plantation and museum.' },
      { day: 9, title: 'Final Prayers in the Sanctuary', description: 'Spiritual farewell in the serene courtyards of the Prophet’s Mosque.' },
      { day: 10, title: 'Return Home', description: 'Transfer to Madinah Airport for your flight back to Manchester.' }
    ],
    availability_status: 'available',
    is_featured: true,
    is_published: true,
    meta_description: 'Family Umrah package December holidays 2026 from Manchester. 4-star hotels close to the Haram, ideal for children and seniors.',
    last_reviewed_at: '2026-10-22T08:00:00Z',
    created_at: '2026-10-18T08:00:00Z',
    updated_at: '2026-10-22T08:00:00Z'
  },
  {
    id: 'pkg-4',
    title: 'Executive Hajj 2027 Comprehensive Program',
    slug: 'executive-hajj-program',
    category: 'hajj',
    short_description: 'An all-inclusive, fully licensed Hajj journey with VIP air-conditioned Mina camps, 5-star hotels, and scholar guidance.',
    long_description: 'Fulfill the fifth pillar of Islam with utmost peace of mind. Our Executive Hajj program provides upgraded air-conditioned gypsum Mina tents, dedicated buffet catering, scholar-led briefings, private luxury coaches, and premium 5-star accommodations before and after the days of Tashreeq.',
    hero_image: 'https://images.pexels.com/photos/38546874/pexels-photo-38546874.jpeg?auto=compress&cs=tinysrgb&w=1920',
    gallery: [
      'https://images.pexels.com/photos/38546874/pexels-photo-38546874.jpeg?auto=compress&cs=tinysrgb&w=1920',
      'https://images.pexels.com/photos/4118038/pexels-photo-4118038.jpeg?auto=compress&cs=tinysrgb&w=1920'
    ],
    departure_city: 'London',
    start_date: '2027-05-18',
    end_date: '2027-06-03',
    duration_days: 17,
    price_from: 9800,
    price_basis: 'Per person, twin sharing',
    currency: 'GBP',
    hotel_category: '5 Star',
    hotel_name_makkah: 'Raffles Makkah Palace',
    hotel_distance_makkah: 'Zero steps — Haram King Abdulaziz Gate',
    hotel_name_madinah: 'The Oberoi Madinah',
    hotel_distance_madinah: '50m directly opposite Prophet’s Mosque',
    inclusions: [
      'Official Saudi Ministry of Hajj & Nusuk registration assistance',
      'Premium flights with direct airline routes',
      'Upgraded VIP Air-Conditioned Mina Tents (Zone A close to Jamarat)',
      'Full board gourmet catering during all 5 days of Manasik in Mina and Arafat',
      '5 nights luxury pre/post Hajj stay at Raffles Makkah Palace',
      '4 nights at The Oberoi Madinah',
      'Qurbani (Hady) included per pilgrim',
      'Private air-conditioned bus transfers reserved exclusively for our group',
      'Full scholarly delegation providing English, Arabic, and Urdu lectures daily'
    ],
    exclusions: [
      'Personal discretionary spending',
      'Excess baggage fees outside airline allowance'
    ],
    itinerary: [
      { day: 1, title: 'Departure UK to Madinah', description: 'Direct flight to Madinah, check-in at The Oberoi, initial orientation.' },
      { day: 2, title: 'Madinah Peace & Salam', description: 'Visits to the Rawdah and historical landmarks of Madinah.' },
      { day: 3, title: 'Preparation for Ihram', description: 'Scholarly seminar outlining the rituals of Hajj and spiritual readiness.' },
      { day: 4, title: 'Transfer to Makkah in Ihram', description: 'Enter Ihram at Dhul Hulayfah, journey to Makkah, and perform Umrah.' },
      { day: 5, title: 'Pre-Hajj Spiritual Retreat', description: 'Rest and contemplation in Makkah ahead of the days of pilgrimage.' },
      { day: 6, title: 'Day 1 of Hajj (8th Dhul Hijjah) — Tarwiyah in Mina', description: 'Move to our VIP air-conditioned Mina tents; day of prayer and introspection.' },
      { day: 7, title: 'Day 2 of Hajj (9th Dhul Hijjah) — The Day of Arafat', description: 'Standing at Arafat, heartfelt Dua until sunset; transition to Muzdalifah under the open sky.' },
      { day: 8, title: 'Day 3 of Hajj (10th Dhul Hijjah) — Eid, Rami, & Tawaf Ifadah', description: 'Stoning Jamarat al-Aqaba, Qurbani, shaving/trimming hair, and Tawaf al-Ifadah at Kaaba.' },
      { day: 9, title: 'Days 4 & 5 of Hajj (11th & 12th Dhul Hijjah) — Tashreeq in Mina', description: 'Stoning all three pillars daily, group lectures, and brotherhood.' },
      { day: 10, title: 'Completion of Manasik', description: 'Final Rami, departure from Mina back to luxury Makkah hotel.' },
      { day: 11, title: 'Tawaf al-Wada & Rest', description: 'Farewell Tawaf, relaxation, and celebratory group dinner.' },
      { day: 12, title: 'Return Flight to London', description: 'Transfer to Jeddah King Abdulaziz Airport for flight home.' }
    ],
    availability_status: 'limited',
    is_featured: true,
    is_published: true,
    meta_description: 'Register interest for Executive Hajj 2027 package. 5-star VIP Mina tents, scholar guides, Raffles Makkah and Oberoi Madinah.',
    last_reviewed_at: '2026-10-23T11:00:00Z',
    created_at: '2026-10-15T08:00:00Z',
    updated_at: '2026-10-23T11:00:00Z'
  },
  {
    id: 'pkg-5',
    title: 'Economy Umrah Budget Departure (3-Star)',
    slug: 'economy-umrah-group',
    category: 'umrah',
    short_description: 'Affordable, clean 3-star Umrah journey with frequent shuttle service to the Haram, perfect for budget-conscious pilgrims.',
    long_description: 'A pocket-friendly package offering great value without compromising on safety, cleanliness, and comfort. Includes scheduled return flights, 3-star hotel rooms, 24/7 dedicated shuttle bus to the Haram courtyard, and professional ground guidance.',
    hero_image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1600&q=80',
      'https://images.pexels.com/photos/4118038/pexels-photo-4118038.jpeg?auto=compress&cs=tinysrgb&w=1920'
    ],
    departure_city: 'Birmingham',
    start_date: '2026-11-28',
    end_date: '2026-12-05',
    duration_days: 7,
    price_from: 890,
    price_basis: 'Per person, quad sharing',
    currency: 'GBP',
    hotel_category: '3 Star',
    hotel_name_makkah: 'Al Kiswah Towers Hotel Makkah',
    hotel_distance_makkah: '1,200m (Frequent 24/7 continuous shuttle)',
    hotel_name_madinah: 'Emaar Elite Madinah',
    hotel_distance_madinah: '400m from Central Northern Area',
    inclusions: [
      'Return flights from Birmingham with luggage allowance',
      '4 nights in Makkah 3-star accommodation with continuous shuttle service',
      '3 nights in Madinah 3-star hotel within short walking distance',
      'Shared group coach transfers between cities',
      'Saudi Tourist/Umrah electronic visa issuance',
      'Dedicated group leader throughout the stay'
    ],
    exclusions: [
      'Meals not specified',
      'Personal incidental expenses'
    ],
    itinerary: [
      { day: 1, title: 'Arrival & Umrah', description: 'Flight to Jeddah, group transfer to Makkah, check in, perform Umrah.' },
      { day: 2, title: 'Worship in Makkah', description: 'Free day for prayers and Tawaf in the Grand Mosque.' },
      { day: 3, title: 'Makkah Ziyarat', description: 'Group bus tour visiting the holy sites in Mina and Arafat.' },
      { day: 4, title: 'Worship and Reflection', description: 'Spiritual day in Makkah.' },
      { day: 5, title: 'Travel to Madinah', description: 'Group coach journey to Madinah; evening prayers in the Prophet’s Mosque.' },
      { day: 6, title: 'Madinah Ziyarat', description: 'Visit Masjid Quba and Mount Uhud.' },
      { day: 7, title: 'Departure', description: 'Check out and transfer to Madinah Airport for flight back to Birmingham.' }
    ],
    availability_status: 'available',
    is_featured: false,
    is_published: true,
    meta_description: 'Affordable 7-night Umrah package from Birmingham starting at £890. Flights, visa, hotels and transfers included.',
    last_reviewed_at: '2026-10-21T09:00:00Z',
    created_at: '2026-10-17T08:00:00Z',
    updated_at: '2026-10-21T09:00:00Z'
  },
  {
    id: 'pkg-6',
    title: 'Historic Ziyarat & Blessed Umrah Dual Journey',
    slug: 'complete-ziyarat-tour',
    category: 'ziyarat',
    short_description: 'An enlightening 12-day journey tracing prophetic history across Makkah, Madinah, and historic sites of the Arabian peninsula.',
    long_description: 'Combine your Umrah pilgrimage with an immersive historical exploration. Led by renowned Islamic historians, this unique tour delves deep into the Battle sites of Badr and Uhud, the valley of Taif, the historic wells of Madinah, and the sacred topography of Makkah.',
    hero_image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1600&q=80',
      'https://images.pexels.com/photos/38546874/pexels-photo-38546874.jpeg?auto=compress&cs=tinysrgb&w=1920'
    ],
    departure_city: 'London',
    start_date: '2027-01-10',
    end_date: '2027-01-22',
    duration_days: 12,
    price_from: 1650,
    price_basis: 'Per person, twin sharing',
    currency: 'GBP',
    hotel_category: '4 Star',
    hotel_name_makkah: 'Makkah Towers Hotel',
    hotel_distance_makkah: 'Direct Haram Courtyard',
    hotel_name_madinah: 'Frontel Al Harithia Madinah',
    hotel_distance_madinah: '100m from Haram Northern Courtyard',
    inclusions: [
      'Scheduled international flights from London Heathrow',
      '5 nights in Makkah & 5 nights in Madinah with breakfast',
      'Full day excursion to historical Taif (Masjid Addas, Shubra Palace)',
      'Full day excursion to the Historic Battlefield of Badr and coastal wells',
      'In-depth Ziyarat of Makkah & Madinah with scholarly commentary',
      'Private modern air-conditioned transport with Wi-Fi onboard',
      'All visas, tourist tax, and guided permits included'
    ],
    exclusions: [
      'Personal gifts and non-itinerary meals'
    ],
    itinerary: [
      { day: 1, title: 'Arrival & Umrah', description: 'Arrive in Jeddah, transfer to Makkah, perform Umrah.' },
      { day: 2, title: 'Makkah Sanctuaries', description: 'Detailed tour of early prophetic homes, Dar al-Arqam history, and Jabal Thawr.' },
      { day: 3, title: 'Excursion to the Mountain City of Taif', description: 'Travel the scenic mountain road to Taif, visit Masjid Addas and historic orchards.' },
      { day: 4, title: 'Makkah Devotional Day', description: 'Personal contemplation and prayers in the Grand Mosque.' },
      { day: 5, title: 'Journey to the Plains of Badr', description: 'Trace the hijrah route and visit the historic battlefield of Badr.' },
      { day: 6, title: 'Arrival in Madinah', description: 'Check in to Madinah hotel, offer Salam at the Rawdah.' },
      { day: 7, title: 'The Prophet’s City Tour', description: 'Visit Masjid Quba, Bir Rumah (Well of Uthman), and Mount Uhud.' },
      { day: 8, title: 'Seven Mosques & Khandaq', description: 'Exploration of the Battle of the Trench site and historic masajid.' },
      { day: 9, title: 'Madinah Gardens & Agriculture', description: 'Walk through historic date palm gardens of the Ansar.' },
      { day: 10, title: 'Spiritual Night in the Haram', description: 'Evening prayers and supplications in the blessed courtyard.' },
      { day: 11, title: 'Final Ziyarat & Reflection', description: 'Closing lecture and reflective symposium with our lead guide.' },
      { day: 12, title: 'Return Flight to UK', description: 'Transfer to Madinah Airport for return flight to London.' }
    ],
    availability_status: 'available',
    is_featured: false,
    is_published: true,
    meta_description: 'Complete 12-day Ziyarat and Umrah tour including Taif, Badr, and the historical milestones of Makkah and Madinah.',
    last_reviewed_at: '2026-10-21T10:00:00Z',
    created_at: '2026-10-18T08:00:00Z',
    updated_at: '2026-10-21T10:00:00Z'
  }
];

export const mockArticles: Article[] = [
  {
    id: 'art-1',
    title: 'First-Time Umrah: Complete Step-by-Step Practical & Spiritual Guide',
    slug: 'first-time-umrah-guide',
    category: 'getting-started',
    summary: 'Everything a first-time pilgrim needs to know: from making your intention and wearing Ihram to completing your Tawaf and Sa’i with confidence.',
    content: `Performing Umrah is one of the most spiritually transformative journeys a believer can undertake. For those embarking on this pilgrimage for the first time, careful preparation can transform unfamiliarity into profound tranquility.

### 1. Preparation Before Leaving Home
Your journey begins long before boarding your flight. Spiritual readiness requires sincere repentance (Tawbah), settling personal debts, and seeking forgiveness from relatives and friends.

Physical preparations include:
- Packing lightweight Ihram garments (two unstitched white towels for brothers; modest clothing for sisters).
- Choosing comfortable footwear that has already been broken in (you will walk upwards of 15,000 steps daily on marble floors).
- Ensuring your passport has at least 6 months validity from departure date.

### 2. Entering the State of Ihram
The Miqat is the geographical boundary past which a pilgrim must not pass without being in the state of Ihram. If flying directly to Jeddah on a flight destined for Makkah, you will cross the Miqat approximately 30 minutes before landing.
Make your Ghusl before boarding, put on your Ihram garments at the airport or onboard, and formulate your intention (Niyyah) when the airline announces the approach to the Miqat:
> *"Labbayk Allahumma Umrah"* (Here I am, O Allah, for Umrah).

Immediately begin reciting the Talbiyah frequently:
> *"Labbayk Allahumma Labbayk, Labbayk La Shareeka Laka Labbayk..."*

### 3. Arrival in Makkah & Entering the Grand Mosque
Upon settling your luggage in your hotel, proceed to Masjid al-Haram with humility and reverence. Enter with your right foot and recite the supplication for entering a mosque. When your eyes first gaze upon the Holy Kaaba, pause and make heartfelt Dua, for this is a time when supplications are answered.

### 4. Performing Tawaf (7 Circuits)
1. Start at the corner of the Black Stone (Hajar al-Aswad), signaled by the green light on the Haram wall.
2. For men: Idtiba’ (uncovering the right shoulder) is observed during Tawaf.
3. Walk with the Kaaba on your left side in a counter-clockwise direction for seven complete circuits.
4. Supplicate freely in any language you know best; there are no mandatory scripts for specific circuits.
5. After completing seven rounds, cover your right shoulder, pray two raka'at behind Maqam Ibrahim (or anywhere in the Haram), and drink Zamzam water.

### 5. Performing Sa’i (Between Safa & Marwah)
Proceed to Mount Safa to begin your seven laps of Sa'i. 
- Walking from Safa to Marwah counts as 1 lap.
- Walking from Marwah back to Safa counts as lap 2.
- Lap 7 concludes at Marwah.
Between the two green markers, men are encouraged to hasten their pace modestly.

### 6. Halq or Taqsir (Concluding Umrah)
Once Sa’i is complete, men shave (Halq, which carries greater reward) or trim their hair uniformly (Taqsir). Sisters trim a fingertip’s length from the ends of their hair gathered together.
With this ritual completed, your Umrah is accomplished and all Ihram restrictions are lifted. Alhamdulillah!`,
    hero_image: 'https://images.pexels.com/photos/4118038/pexels-photo-4118038.jpeg?auto=compress&cs=tinysrgb&w=1920',
    reading_time_minutes: 8,
    author: 'Sheikh Farhan Ahmed',
    is_published: true,
    published_at: '2026-10-15T10:00:00Z',
    last_reviewed_at: '2026-10-22T10:00:00Z',
    created_at: '2026-10-15T10:00:00Z',
    updated_at: '2026-10-22T10:00:00Z'
  },
  {
    id: 'art-2',
    title: 'Hajj Readiness: Essential Physical, Financial & Spiritual Checklist',
    slug: 'hajj-preparation-checklist',
    category: 'hajj-preparation',
    summary: 'A comprehensive guide to preparing mind, body, and spirit for the immense journey of the fifth pillar of Islam.',
    content: `Preparing for Hajj is unlike packing for any conventional holiday. It requires endurance, patience, deep spiritual focus, and meticulous physical readiness.

### Physical Fitness
During the five days of Hajj (Tarwiyah in Mina, Arafat, Muzdalifah, and the days of Tashreeq), pilgrims typically walk between 12 to 20 kilometers a day in high desert temperatures. 
- Begin a daily walking regimen at least 8 to 12 weeks before departure.
- Practice walking in the sandals you intend to wear during the pilgrimage.
- Stay hydrated and acclimate your body to prolonged standing.

### Understanding Nusuk & Regulatory Steps
The Ministry of Hajj and Umrah manages registrations through the official Nusuk platform. It is vital to:
- Verify your account profile and passport details well in advance.
- Keep digital and physical copies of your vaccination certificates (Meningococcal ACWY and recommended COVID-19 booster vaccines).
- Ensure your emergency contact and medical records are easily accessible.

### Spiritual Character & The Power of Patience (Sabr)
Hajj tests human resolve amidst immense crowds. Small delays, crowded transit, and varied climate are part of the trial. The Qur'an counsels: *"And whoever undertakes the Hajj therein, there is no intimacy, no misconduct, and no quarreling during the Hajj."* Focus on maintaining composure and assisting fellow pilgrims whenever possible.`,
    hero_image: 'https://images.pexels.com/photos/38546874/pexels-photo-38546874.jpeg?auto=compress&cs=tinysrgb&w=1920',
    reading_time_minutes: 10,
    author: 'Dr. Tariq Al-Madani',
    is_published: true,
    published_at: '2026-10-10T10:00:00Z',
    last_reviewed_at: '2026-10-21T10:00:00Z',
    created_at: '2026-10-10T10:00:00Z',
    updated_at: '2026-10-21T10:00:00Z'
  },
  {
    id: 'art-3',
    title: 'Ihram Rules, Prohibitions & Common Questions Answered',
    slug: 'ihram-rules-and-etiquette',
    category: 'ihram',
    summary: 'Clarity on what is permissible and prohibited while in the state of Ihram, with clear practical examples.',
    content: `Entering the sacred state of Ihram is a covenant of peace and equality before our Creator. All distinctions of wealth, status, and worldly fashion are shed.

### What is Prohibited in Ihram?
1. **Scented Products**: Using scented soaps, shampoos, deodorants, perfumes, or wet wipes. Always pack fragrance-free toiletries.
2. **Hair & Nail Grooming**: Cutting nails or removing any body hair.
3. **Head Coverings (for Men)**: Wearing hats, caps, or wrapping the upper cloth over the head.
4. **Stitched Clothing (for Men)**: Wearing tailored garments that contour the limbs (shirts, trousers, underwear, stitched socks).
5. **Facial Veils (for Women)**: Niqab that fits tightly against the face; however, loose coverings are permitted according to scholars.
6. **Hunting & Harming Animals**: Even stepping on insects intentionally is forbidden.
7. **Marital Intimacy**: Sins of speech, anger, arguing, and physical intimacy are strictly barred.

### What IS Permitted in Ihram?
- Wearing a money belt, waist pouch, backpack, or wristwatch.
- Using an umbrella to shield yourself from the sun.
- Showering for hygiene, provided no scented soap is used.
- Wearing prescription glasses or sunglasses.
- Changing into a fresh, clean set of Ihram towels if soiled.`,
    hero_image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1600&q=80',
    reading_time_minutes: 6,
    author: 'Ustadh Omar Qasim',
    is_published: true,
    published_at: '2026-10-12T10:00:00Z',
    last_reviewed_at: '2026-10-20T10:00:00Z',
    created_at: '2026-10-12T10:00:00Z',
    updated_at: '2026-10-20T10:00:00Z'
  },
  {
    id: 'art-4',
    title: 'The Ultimate Pilgrim Packing Checklist: What to Bring & What to Leave',
    slug: 'complete-packing-checklist',
    category: 'packing',
    summary: 'A curated list of travel essentials for Makkah and Madinah to keep your luggage light and practical.',
    content: `When traveling for pilgrimage, packing light yet thoughtfully ensures you stay focused on your devotions without unneeded luggage burdens.

### Core Essentials
- Two sets of 100% cotton Ihram towels (for men).
- Safety pins or an Ihram belt to secure your lower garment firmly.
- Fragrance-free soap, shampoo, and sunscreen (SPF 50+).
- Lightweight drawstring bag for your shoes when entering the mosques.
- Power bank (at least 10,000mAh) to keep your phone charged for the Nusuk app and family contact.
- Travel adapters (Saudi Arabia predominantly uses British 3-pin Type G plugs).
- Small pocket Dua book or prayer app with offline reading capability.
- Reusable collapsible water bottle for Zamzam.

### What to Leave Behind
- Heavy winter coats or bulky formal footwear.
- Excessive jewelry or unnecessary valuables.
- Bulky bottles of liquids that exceed baggage regulations.`,
    hero_image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1600&q=80',
    reading_time_minutes: 5,
    author: 'Antigravity Travel Team',
    is_published: true,
    published_at: '2026-10-05T10:00:00Z',
    last_reviewed_at: '2026-10-19T10:00:00Z',
    created_at: '2026-10-05T10:00:00Z',
    updated_at: '2026-10-19T10:00:00Z'
  }
];

export const mockFaqs: Faq[] = [
  {
    id: 'faq-1',
    question: 'How do I submit a booking inquiry for an Umrah or Hajj package?',
    answer: 'You can explore our package listings, select your preferred dates and travel style, and click "Submit Inquiry" or "Request a Custom Quote". Our dedicated travel advisors will contact you by phone or WhatsApp within 24 hours to confirm availability and discuss flight details.',
    category: 'booking',
    sort_order: 1,
    is_published: true
  },
  {
    id: 'faq-2',
    question: 'What visas are required for Umrah, and do you handle the application?',
    answer: 'Yes! We manage all electronic Saudi Tourist or Umrah visa applications on your behalf. Most UK, EU, US, and Canadian passport holders are eligible for multiple-entry e-visas valid for 1 full year, which allow stays of up to 90 days.',
    category: 'documents',
    sort_order: 2,
    is_published: true
  },
  {
    id: 'faq-3',
    question: 'What is included in the package prices shown?',
    answer: 'Our published prices typically include return international flights, hotel accommodation with daily breakfast, VIP private or luxury coach ground transfers, Ziyarat guided tours, and full ground assistance. Detailed inclusions and exclusions are listed transparently on each package page.',
    category: 'packages',
    sort_order: 3,
    is_published: true
  },
  {
    id: 'faq-4',
    question: 'What payment terms and deposit options are available?',
    answer: 'We offer flexible payment terms. You can secure any Umrah package with an initial deposit per passenger, with the remaining balance spread in monthly instalments or settled 4 weeks prior to departure. We accept bank transfers, major credit cards, and debit cards.',
    category: 'payments',
    sort_order: 4,
    is_published: true
  },
  {
    id: 'faq-5',
    question: 'Can you arrange wheelchair assistance and accessible accommodation?',
    answer: 'Absolutely. We specialize in accessible pilgrimage travel. We arrange wheelchair assistance at airports, ground transport with hydraulic lifts or step-free access, and accessible rooms adjacent to Haram elevators.',
    category: 'travel',
    sort_order: 5,
    is_published: true
  },
  {
    id: 'faq-6',
    question: 'What is the Nusuk app and when do I need to use it?',
    answer: 'Nusuk is the official Saudi Ministry mobile application used to issue official permits for Umrah rituals and for visiting the blessed Rawdah ash-Sharifah in Madinah. Our ground team assists you in setting up the app and booking convenient prayer slots.',
    category: 'documents',
    sort_order: 6,
    is_published: true
  },
  {
    id: 'faq-7',
    question: 'Are group departures escorted by a scholar or tour leader?',
    answer: 'Yes, all our scheduled group departures and Ramadan packages are accompanied by experienced bilingual scholars and dedicated tour coordinators who conduct briefings and offer guidance throughout.',
    category: 'general',
    sort_order: 7,
    is_published: true
  }
];
