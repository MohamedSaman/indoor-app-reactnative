import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, Search, Filter, MapPin, Star, X, Calendar, List, Home, User } from "lucide-react";

export default function SearchResults() {
  const [searchQuery, setSearchQuery] = useState("Thihariya");

  const recentSearches = ["Nittambuwa", "Kahtowita", "Yakkala"];

  const venues = [
    {
      id: 1,
      name: "Kanzul Sport Complex",
      rating: 4.5,
      address: "6315 N. Warana Road Thihariya",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F9182c3ca263146469688dd4c08fe07e2%2Facf91b9d57e64a92b0af763ffa7de4af?format=webp&width=800",
    },
    {
      id: 2,
      name: "Thansar Futsal",
      rating: 4.2,
      address: "7009 Kandy Road thihariya",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F9182c3ca263146469688dd4c08fe07e2%2F346236e223bd4bddb7217ef84f427303?format=webp&width=800",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-green-600 text-white p-4">
        <div className="flex items-center justify-between">
          <div>
        <p className="text-sm opacity-80">Your Location</p>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span className="text-sm font-medium">
            Alijinna Mawatha Thihariya
          </span>
        </div>
          </div>
          <Button
        size="sm"
        variant="ghost"
        className="bg-green-700 text-white"
          >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
        </svg>
          </Button>
        </div>
      </div>

      <div className="pb-20">
        {/* Search Bar */}
        <div className="bg-white p-4 border-b">
          <div className="flex items-center gap-3">
            <Link to="/dashboard">
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </Link>
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search Complex, Sports etc"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-12 h-12 border-gray-200 rounded-xl"
              />
              {searchQuery && (
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-10 top-1/2 transform -translate-y-1/2"
                >
                  <X className="w-4 h-4 text-gray-400" />
                </Button>
              )}
            </div>
            <Button size="sm" variant="ghost" className="p-2">
              <Filter className="w-5 h-5 text-primary" />
            </Button>
          </div>
        </div>

        {/* Recent Searches */}
        <div className="bg-white px-4 py-3">
          <p className="text-sm font-medium text-gray-900 mb-3">
            Recently Search
          </p>
          <div className="flex gap-2">
            {recentSearches.map((search) => (
              <Badge
                key={search}
                variant="secondary"
                className="bg-gray-100 text-primary px-3 py-2 rounded-full cursor-pointer hover:bg-green-100"
                onClick={() => setSearchQuery(search)}
              >
                {search}
              </Badge>
            ))}
          </div>
        </div>

        {/* Map View */}
        <div className="relative h-64 bg-blue-200 mx-4 mt-4 rounded-2xl overflow-hidden">
          {/* Google Map iframe for Kanzul Sport Complex */}
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.1162743628!2d80.026436!3d7.144993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2f8b7e2d7b8b1%3A0x8b2e8e8e8e8e8e8e!2sKanzul%20Sport%20Complex!5e0!3m2!1sen!2slk!4v1710000000000!5m2!1sen!2slk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full"
          />
          {/* Overlay for pin and label */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center text-white drop-shadow-lg">
              <MapPin className="w-8 h-8 mx-auto mb-2" />
              <p className="text-sm font-medium">Kanzul Sport Complex</p>
              <p className="text-xs">Nittambuwa, Sri Lanka</p>
            </div>
          </div>
        </div>

        {/* Results List */}
        <div className="mx-4 mt-6">
          <div className="flex items-center gap-2 mb-4">
            <svg
              className="w-5 h-5 text-gray-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z" />
            </svg>
            <h2 className="text-lg font-semibold text-gray-900">
              Indoor Complex
            </h2>
          </div>
          <p className="text-sm text-gray-500 mb-4">
            {venues.length} locations near this area
          </p>

          <div className="space-y-4">
            {venues.map((venue) => (
              <Link
                key={venue.id}
                to={`/venue/${venue.id}`}
                className="block bg-white rounded-2xl p-4 shadow-sm border"
              >
                <div className="flex gap-3">
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="w-14 h-14 rounded-xl object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {venue.name}
                    </h3>
                    <p className="text-xs text-gray-500 mb-2">
                      {venue.address}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{venue.rating}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Button
              variant="outline"
              className="text-primary border-primary hover:bg-primary/10"
            >
              See More
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-green-600 text-white p-4">
        <div className="flex items-center justify-around">
          <Link to="/booking-history" className="text-center text-white">
            <Calendar className="h-6 w-6 mx-auto mb-1" />
            <span className="text-xs">History</span>
          </Link>
          <Link to="/feed" className="text-center text-white">
            <List className="h-6 w-6 mx-auto mb-1" />
            <span className="text-xs">Feed</span>
          </Link>
          <div className="text-center text-white">
            <Link
              to="/dashboard"
              className="bg-white text-green-600 rounded-full p-3 inline-block"
            >
              <Home className="h-6 w-6" />
            </Link>
          </div>
          <Link to="/search" className="text-center text-white">
            <Search className="h-6 w-6 mx-auto mb-1" />
            <span className="text-xs">Search</span>
          </Link>
          <Link to="/profile" className="text-center text-white">
            <User className="h-6 w-6 mx-auto mb-1" />
            <span className="text-xs">Profile</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
