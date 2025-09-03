import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { marcoPoloLocations, silkRoadRoutes, timelineEvents, Location, TimelineEvent } from '@/data/marcoPoloData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { MapPin, Calendar, Route, Crown, Coins, Users } from 'lucide-react';

// Fix Leaflet default markers
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface MarcoPoloMapProps {
  selectedYear?: number;
  onLocationSelect: (location: Location | null) => void;
  selectedLocation: Location | null;
}

const MarcoPoloMap = ({ selectedYear, onLocationSelect, selectedLocation }: MarcoPoloMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.LayerGroup>(new L.LayerGroup());
  const routesRef = useRef<L.LayerGroup>(new L.LayerGroup());

  // Custom marker icons
  const createCustomIcon = (type: string, color: string) => {
    return L.divIcon({
      className: 'custom-marker',
      html: `<div class="w-6 h-6 rounded-full border-2 border-white shadow-lg flex items-center justify-center text-white text-xs font-bold" style="background-color: ${color}">
        ${type === 'city' ? '●' : type === 'court' ? '♔' : type === 'trade-center' ? '⬟' : '▲'}
      </div>`,
      iconSize: [24, 24],
      iconAnchor: [12, 12],
    });
  };

  const getMarkerColor = (type: string): string => {
    switch (type) {
      case 'city': return 'hsl(220, 40%, 25%)';
      case 'court': return 'hsl(45, 85%, 55%)';
      case 'trade-center': return 'hsl(200, 60%, 50%)';
      case 'region': return 'hsl(160, 40%, 45%)';
      default: return 'hsl(220, 40%, 25%)';
    }
  };

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Initialize map
    const map = L.map(mapRef.current, {
      center: [35, 75], // Central Asia
      zoom: 4,
      minZoom: 2,
      maxZoom: 10,
      zoomControl: true,
    });

    // Add tile layer with historical styling
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      opacity: 0.8,
    }).addTo(map);

    // Add layer groups
    markersRef.current.addTo(map);
    routesRef.current.addTo(map);

    mapInstanceRef.current = map;

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!mapInstanceRef.current) return;

    // Clear existing markers and routes
    markersRef.current.clearLayers();
    routesRef.current.clearLayers();

    // Filter locations by year if specified
    const filteredLocations = selectedYear 
      ? marcoPoloLocations.filter(loc => !loc.yearVisited || loc.yearVisited <= selectedYear)
      : marcoPoloLocations;

    // Add location markers
    filteredLocations.forEach(location => {
      const icon = createCustomIcon(location.type, getMarkerColor(location.type));
      const marker = L.marker(location.coordinates, { icon })
        .bindPopup(`
          <div class="p-2 max-w-xs">
            <h3 class="font-bold text-primary">${location.name}</h3>
            ${location.modernName ? `<p class="text-sm text-muted-foreground">(${location.modernName})</p>` : ''}
            <p class="text-sm mt-1">${location.significance}</p>
            ${location.yearVisited ? `<p class="text-xs text-accent font-medium mt-1">Visited: ${location.yearVisited}</p>` : ''}
          </div>
        `);

      marker.on('click', () => {
        onLocationSelect(location);
      });

      markersRef.current.addLayer(marker);
    });

    // Add routes
    silkRoadRoutes.forEach(route => {
      if (!selectedYear || route.yearActive <= selectedYear) {
        const polyline = L.polyline(route.coordinates, {
          color: route.type === 'silk-road' ? 'hsl(45, 85%, 55%)' : 'hsl(200, 60%, 50%)',
          weight: 3,
          opacity: 0.7,
          dashArray: route.type === 'sea-route' ? '5, 10' : undefined,
        }).bindPopup(`
          <div class="p-2">
            <h3 class="font-bold">${route.name}</h3>
            <p class="text-sm">${route.description}</p>
          </div>
        `);

        routesRef.current.addLayer(polyline);
      }
    });
  }, [selectedYear, onLocationSelect]);

  // Highlight selected location
  useEffect(() => {
    if (!mapInstanceRef.current || !selectedLocation) return;

    // Center map on selected location
    mapInstanceRef.current.setView(selectedLocation.coordinates, 6);
  }, [selectedLocation]);

  return (
    <div 
      ref={mapRef} 
      className="w-full h-full rounded-lg shadow-map"
      style={{ minHeight: '500px' }}
    />
  );
};

export default MarcoPoloMap;