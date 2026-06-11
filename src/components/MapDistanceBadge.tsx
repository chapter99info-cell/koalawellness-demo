import { useEffect, useState } from 'react'

const SPA_LAT = -38.289
const SPA_LNG = 142.469

function haversineKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const toRad = (deg: number) => (deg * Math.PI) / 180
  const earthRadiusKm = 6371
  const dLat = toRad(lat2 - lat1)
  const dLon = toRad(lon2 - lon1)
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2

  return earthRadiusKm * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
}

function formatDistance(km: number): string {
  if (km < 1) return `${Math.round(km * 1000)} m away`
  return `${km.toFixed(1)} km away`
}

export function MapDistanceBadge() {
  const [distanceLabel, setDistanceLabel] = useState('12 km from Port Fairy')

  useEffect(() => {
    if (!navigator.geolocation) return

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const km = haversineKm(
          position.coords.latitude,
          position.coords.longitude,
          SPA_LAT,
          SPA_LNG,
        )
        setDistanceLabel(formatDistance(km))
      },
      () => {},
      { enableHighAccuracy: false, maximumAge: 300_000, timeout: 8_000 },
    )
  }, [])

  return (
    <div className="pointer-events-none absolute top-4 left-4 z-10 max-w-[min(100%-2rem,260px)] rounded-xl bg-white/95 p-4 shadow-lg backdrop-blur-sm">
      <div className="open-now-indicator mb-2 flex items-center gap-1.5">
        <span className="live-pulse-dot" aria-hidden="true" />
        <span className="open-now-text">Open Now</span>
      </div>
      <p className="text-sm font-semibold text-grey-dark">{distanceLabel}</p>
      <p className="mt-1 text-sm leading-snug text-grey">479 Toolong North Road</p>
      <p className="text-sm leading-snug text-grey">Kirkstall VIC 3283</p>
    </div>
  )
}
