import { Location } from '@/data/marcoPoloData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MapPin, Calendar, Crown, Coins, Users, Book, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LocationPanelProps {
  location: Location | null;
  onClose: () => void;
}

const LocationPanel = ({ location, onClose }: LocationPanelProps) => {
  if (!location) return null;

  const getLocationIcon = (type: string) => {
    switch (type) {
      case 'city': return <MapPin className="w-5 h-5" />;
      case 'court': return <Crown className="w-5 h-5" />;
      case 'trade-center': return <Coins className="w-5 h-5" />;
      case 'region': return <Users className="w-5 h-5" />;
      default: return <MapPin className="w-5 h-5" />;
    }
  };

  const formatType = (type: string) => {
    return type.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  return (
    <Card className="h-full shadow-card bg-gradient-parchment">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-primary text-primary-foreground">
              {getLocationIcon(location.type)}
            </div>
            <div>
              <CardTitle className="text-lg text-primary">
                {location.name}
              </CardTitle>
              {location.modernName && (
                <p className="text-sm text-muted-foreground">
                  Modern: {location.modernName}
                </p>
              )}
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="flex gap-2 mt-3">
          <Badge variant="secondary">
            {formatType(location.type)}
          </Badge>
          {location.yearVisited && (
            <Badge variant="outline" className="text-accent border-accent">
              <Calendar className="w-3 h-3 mr-1" />
              {location.yearVisited}
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <ScrollArea className="h-[calc(100vh-12rem)]">
          <div className="space-y-4">
            {/* Significance */}
            <div>
              <h3 className="font-semibold text-primary text-sm mb-2 flex items-center gap-2">
                <Book className="w-4 h-4" />
                Historical Significance
              </h3>
              <p className="text-sm text-foreground leading-relaxed">
                {location.significance}
              </p>
            </div>

            <Separator />

            {/* Description */}
            <div>
              <h3 className="font-semibold text-primary text-sm mb-2">
                Description
              </h3>
              <p className="text-sm text-foreground leading-relaxed">
                {location.description}
              </p>
            </div>

            <Separator />

            {/* Historical Context */}
            <div>
              <h3 className="font-semibold text-primary text-sm mb-2 flex items-center gap-2">
                <Crown className="w-4 h-4" />
                Historical Context
              </h3>
              <p className="text-sm text-foreground leading-relaxed">
                {location.historicalContext}
              </p>
            </div>

            {location.economicImportance && (
              <>
                <Separator />
                <div>
                  <h3 className="font-semibold text-primary text-sm mb-2 flex items-center gap-2">
                    <Coins className="w-4 h-4" />
                    Economic Importance
                  </h3>
                  <p className="text-sm text-foreground leading-relaxed">
                    {location.economicImportance}
                  </p>
                </div>
              </>
            )}

            {location.culturalNotes && (
              <>
                <Separator />
                <div>
                  <h3 className="font-semibold text-primary text-sm mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Cultural Notes
                  </h3>
                  <p className="text-sm text-foreground leading-relaxed">
                    {location.culturalNotes}
                  </p>
                </div>
              </>
            )}

            <Separator />

            {/* Coordinates */}
            <div>
              <h3 className="font-semibold text-primary text-sm mb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Coordinates
              </h3>
              <p className="text-sm text-muted-foreground font-mono">
                {location.coordinates[0].toFixed(4)}°N, {location.coordinates[1].toFixed(4)}°E
              </p>
            </div>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default LocationPanel;