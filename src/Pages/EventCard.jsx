import React from 'react';
import { Link, useLoaderData } from 'react-router';

const EventCard = () => {
  const data = useLoaderData()
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-6">
      {data.map(event => (
        <div
          key={event.id}
          className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group"
        >
          {/* ইমেজ সেকশন */}
          <div className="relative overflow-hidden h-56">
            <img
              src={event.thumbnail}
              alt={event.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* ব্যাজ */}
            <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
              {event.category}
            </div>
            {/* প্রাইস ট্যাগ */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-gray-800 font-bold px-3 py-2 rounded-lg shadow-sm">
              ${event.entryFee}
            </div>
          </div>

          {/* কন্টেন্ট সেকশন */}
          <div className="p-6 space-y-3">
            <div className="flex items-start justify-between">
              <h2 className="text-xl font-bold text-gray-800 line-clamp-1">{event.name}</h2>
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                ⭐ {event.rating || "4.5"}
              </span>
            </div>

            <div className="flex items-center text-gray-500">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm">{event.location}</span>
            </div>

            <div className="flex items-center text-gray-500">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-sm">{event.date}</span>
            </div>

            <div className="pt-4">
              <Link
                to={event.viewMore}
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-gray-800 to-black text-white rounded-lg hover:from-gray-900 hover:to-gray-800 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                View Details
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventCard;