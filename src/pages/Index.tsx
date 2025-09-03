import { useState, useEffect } from 'react';
import { Location, TimelineEvent } from '@/data/marcoPoloData';
import MarcoPoloMap from '@/components/MarcoPoloMap';
import Timeline from '@/components/Timeline';
import LocationPanel from '@/components/LocationPanel';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { MapPin, Calendar, Route, BookOpen, Globe } from 'lucide-react';

const Index = () => {
  const [selectedYear, setSelectedYear] = useState<number | undefined>(undefined);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);

  // Update the page title
  useEffect(() => {
    document.title = "Marco Polo's Travels - Interactive Historical Map";
  }, []);

  const handleYearSelect = (year: number | undefined) => {
    setSelectedYear(year);
  };

  const handleLocationSelect = (location: Location | null) => {
    setSelectedLocation(location);
  };

  const handleEventSelect = (event: TimelineEvent) => {
    setSelectedEvent(event);
    if (event.coordinates) {
      // Find location matching the event coordinates
      // This could be enhanced to create temporary location objects for events
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-royal text-primary-foreground shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/10 rounded-full">
                <Globe className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Marco Polo's Travels</h1>
                <p className="text-sm opacity-90">
                  Interactive Map of 13th Century Trade Routes & Historical Context
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Calendar className="w-4 h-4 mr-1" />
                1254-1324
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Route className="w-4 h-4 mr-1" />
                Silk Road Era
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-12 gap-6 h-[calc(100vh-12rem)]">
          {/* Timeline Sidebar */}
          <div className="col-span-3">
            <Timeline 
              selectedYear={selectedYear}
              onYearSelect={handleYearSelect}
              onEventSelect={handleEventSelect}
            />
          </div>

          {/* Map Area */}
          <div className="col-span-6">
            <Card className="h-full shadow-map">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <MapPin className="w-5 h-5" />
                    Historical Map
                  </CardTitle>
                  <div className="flex gap-2">
                    {selectedYear && (
                      <Badge variant="outline" className="text-accent border-accent">
                        Filtered to {selectedYear}
                      </Badge>
                    )}
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setSelectedYear(undefined)}
                    >
                      Show All
                    </Button>
                  </div>
                </div>
                <Separator />
              </CardHeader>
              <CardContent className="p-0 h-[calc(100%-5rem)]">
                <MarcoPoloMap 
                  selectedYear={selectedYear}
                  onLocationSelect={handleLocationSelect}
                  selectedLocation={selectedLocation}
                />
              </CardContent>
            </Card>
          </div>

          {/* Location Details */}
          <div className="col-span-3">
            {selectedLocation ? (
              <LocationPanel 
                location={selectedLocation}
                onClose={() => setSelectedLocation(null)}
              />
            ) : (
              <Card className="h-full shadow-card bg-gradient-parchment">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <BookOpen className="w-5 h-5" />
                    About This Map
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-primary text-sm mb-2">
                      Educational Purpose
                    </h3>
                    <p className="text-sm text-foreground leading-relaxed">
                      This interactive map explores Marco Polo's legendary journey (1271-1295) and the rich historical context of the 13th century Mongol Empire and Silk Road trade networks.
                    </p>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="font-semibold text-primary text-sm mb-2">
                      How to Explore
                    </h3>
                    <ul className="text-sm text-foreground space-y-1">
                      <li>• Click timeline events to filter by year</li>
                      <li>• Click map markers for detailed information</li>
                      <li>• Explore trade routes and political context</li>
                      <li>• Discover the multicultural medieval world</li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold text-primary text-sm mb-2">
                      Legend
                    </h3>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center text-white">●</div>
                        <span>Major Cities</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-accent flex items-center justify-center text-white">♔</div>
                        <span>Imperial Courts</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-route-sea flex items-center justify-center text-white">⬟</div>
                        <span>Trade Centers</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-1 bg-route-silk"></div>
                        <span>Silk Road (Overland)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-1 bg-route-sea" style={{backgroundImage: 'repeating-linear-gradient(to right, currentColor 0, currentColor 2px, transparent 2px, transparent 6px)'}}></div>
                        <span>Sea Routes</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
