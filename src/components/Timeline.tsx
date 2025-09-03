import { useState } from 'react';
import { timelineEvents, TimelineEvent } from '@/data/marcoPoloData';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Calendar, MapPin, Crown, Users, Book, Plane } from 'lucide-react';

interface TimelineProps {
  selectedYear?: number;
  onYearSelect: (year: number | undefined) => void;
  onEventSelect: (event: TimelineEvent) => void;
}

const Timeline = ({ selectedYear, onYearSelect, onEventSelect }: TimelineProps) => {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'travel': return <Plane className="w-4 h-4" />;
      case 'political': return <Crown className="w-4 h-4" />;
      case 'biographical': return <Users className="w-4 h-4" />;
      case 'cultural': return <Book className="w-4 h-4" />;
      default: return <Calendar className="w-4 h-4" />;
    }
  };

  const getEventColor = (type: string) => {
    switch (type) {
      case 'travel': return 'route-silk';
      case 'political': return 'primary';
      case 'biographical': return 'accent';
      case 'cultural': return 'secondary';
      default: return 'muted';
    }
  };

  const sortedEvents = [...timelineEvents].sort((a, b) => a.year - b.year);

  return (
    <div className="h-full flex flex-col">
      <div className="p-4 bg-gradient-parchment border-b">
        <h2 className="text-xl font-bold text-primary flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          Historical Timeline
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          Marco Polo's era (1254-1324)
        </p>
        <div className="flex gap-2 mt-3">
          <Button 
            variant={selectedYear ? "outline" : "default"}
            size="sm"
            onClick={() => onYearSelect(undefined)}
          >
            All Years
          </Button>
          <Button 
            variant={selectedYear === 1271 ? "default" : "outline"}
            size="sm"
            onClick={() => onYearSelect(1271)}
          >
            Departure
          </Button>
          <Button 
            variant={selectedYear === 1275 ? "default" : "outline"}
            size="sm"
            onClick={() => onYearSelect(1275)}
          >
            Arrival
          </Button>
          <Button 
            variant={selectedYear === 1292 ? "default" : "outline"}
            size="sm"
            onClick={() => onYearSelect(1292)}
          >
            Return
          </Button>
        </div>
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {sortedEvents.map((event, index) => {
            const isVisible = !selectedYear || event.year <= selectedYear;
            const isSelected = selectedEvent === event.id;
            
            return (
              <Card 
                key={event.id}
                className={`transition-all duration-300 cursor-pointer hover:shadow-card ${
                  isVisible ? 'opacity-100' : 'opacity-30'
                } ${isSelected ? 'ring-2 ring-primary' : ''}`}
                onClick={() => {
                  setSelectedEvent(isSelected ? null : event.id);
                  onEventSelect(event);
                }}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-full bg-${getEventColor(event.type)} text-${getEventColor(event.type)}-foreground flex-shrink-0`}>
                      {getEventIcon(event.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs">
                          {event.year}
                        </Badge>
                        <Badge 
                          variant="secondary" 
                          className={`text-xs bg-${getEventColor(event.type)} text-${getEventColor(event.type)}-foreground`}
                        >
                          {event.type}
                        </Badge>
                      </div>
                      <h3 className="font-semibold text-primary text-sm leading-tight">
                        {event.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                        {event.description}
                      </p>
                      {event.location && (
                        <div className="flex items-center gap-1 mt-2 text-xs text-accent">
                          <MapPin className="w-3 h-3" />
                          {event.location}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </ScrollArea>

      <div className="p-4 bg-gradient-parchment border-t">
        <div className="text-xs text-muted-foreground text-center">
          Click events to explore • Use year filters to see historical progression
        </div>
      </div>
    </div>
  );
};

export default Timeline;