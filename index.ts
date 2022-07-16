/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

function initMap(): void {
  const map = new google.maps.Map(
    document.getElementById('map') as HTMLElement,
    {
      zoom: 11,
      center: { lat: 39.791, lng: -86.148003 },
    }
  );

  const ctaLayer = new google.maps.KmlLayer({
    url: 'https://raw.githubusercontent.com/imedwei/indy-map/580d11b02d9d4241b518a70c4ee6d7d34eb1abd6/Indianapolis%20Zones%20Map.kml',
    map: map,
  });
}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
export {};
