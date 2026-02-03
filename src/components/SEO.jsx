export default function SEO({ title, description }) {
  // Simple SEO implementation without external library
  // In production, you'd use react-helmet-async, but since it has peer dependency issues with React 19,
  // we'll use a simple effect-based approach
  
  if (typeof document !== 'undefined') {
    document.title = title ? `${title} | JD Sols` : 'JD Sols - Web Design for Local Businesses';
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description || 'JD Sols helps local businesses generate real leads through modern websites and local visibility optimization.');
  }
  
  return null;
}
