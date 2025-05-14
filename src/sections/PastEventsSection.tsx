import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Define the data structure for featured work items
interface PastEventItem {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  link: string;
}

// Sample data for featured work items
const pastEvents: PastEventItem[] = [
  {
    id: 'party-people-01',
    title: 'PARTY PEOPLE at Those Who Dance',
    subtitle: 'CRAFTING A CINEMATIC UNIVERSE',
    imageUrl: 'https://storage.googleapis.com/partypeople.world/images/events/event1.jpg',
    link: '/events'
  },
  {
    id: 'electric-state',
    title: 'PARTY PEOPLE at Those Who Dance',
    subtitle: 'The Robots Are Coming',
    imageUrl: 'https://storage.googleapis.com/partypeople.world/images/events/event2.jpg',
    link: '/events'
  },
  {
    id: 'squid-game',
    title: 'PARTY PEOPLE at Those Who Dance',
    subtitle: 'The Game Will Not Stop',
    imageUrl: 'https://storage.googleapis.com/partypeople.world/images/events/event3.jpg',
    link: '/events'
  }
];

const PastEventsSection: React.FC = () => {
  return (
    <section className="bg-white py-10 relative">
      <div className="container mx-auto px-4 md:px-12">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl sm:text-5xl font-medium">Past Events</h2>
          <Link href="/events" className="xs:text-xl sm:text-2xl hover:underline">
            View all
          </Link>
        </div>

        {/* Featured Work Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pastEvents.map((event) => (
            <div key={event.id} className="group">
              <Link href={event.link} className="block">
                {/* Image Container */}
                <div className="relative aspect-[4/3] mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={event.imageUrl}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                
                {/* Event Title */}
                <h3 className="text-xl md:text-2xl font-medium mb-1">{event.title}</h3>
                
                {/* Event Subtitle */}
                <p className="text-sm">{event.subtitle}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastEventsSection;