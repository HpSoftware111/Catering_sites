export function Map() {
  // Using a simple iframe embed from Google Maps which doesn't require an API key.
  // To generate this, go to Google Maps, find the location, click "Share", then "Embed a map".
  const mapEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3033.906758334434!2d-74.41427498459958!3d40.5212789793532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3c7a91c3d4a2b%3A0x1e3b2e519276296b!2sEdison%2C%20NJ%2008817!5e0!3m2!1sen!2sus!4v1683401292595!5m2!1sen!2sus`;

  return (
    <div className="w-full h-full rounded-lg overflow-hidden shadow-lg">
      <iframe
        src={mapEmbedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Bistro Bytes Location Map"
      ></iframe>
    </div>
  );
}
