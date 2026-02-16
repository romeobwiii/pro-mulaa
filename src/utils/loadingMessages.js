
export const loadingMessages = {
  '/': 'Awakening the soul of Mulaa...',
  '/about': 'Unfolding our story...',
  '/about#story': 'Reading our beginnings...',
  '/about#muse': 'Honoring the inspiration...',
  '/about#mission': 'Aligning with our purpose...',
  
  '/team': 'Gathering the minds...',
  '/team#amantle': 'Connecting with the founder...',
  '/team#emmanuel': 'Organizing operations...',
  '/team#lex': 'Building the backbone...',
  '/team#iddi': 'Designing experiences...',
  '/team#phemelo': 'Amplifying our voice...',
  '/team#realeboa': 'Scanning the future...',
  
  '/products': 'Infusing emotions into products...',
  '/products#sigil-xmd': 'Loading emotional WhatsApp...',
  '/products#sigil-ai': 'Awakening neural networks...',
  '/products#learn': 'Preparing cinematic education...',
  '/products#stream': 'Curating emotional content...',
  '/products#consulting': 'Designing mythic systems...',
  
  '/philosophy': 'Decoding our wisdom...',
  '/philosophy#pillars': 'Raising the pillars...',
  '/philosophy#framework': 'Building the framework...',
  '/philosophy#layers': 'Weaving the layers...',
  '/philosophy#manifesto': 'Proclaiming our beliefs...',
  
  '/case-studies': 'Loading success stories...',
  '/blog': 'Preparing insights...',
  '/contact': 'Opening channels...',
};

export const getLoadingMessage = (path) => {
  // Check for exact match first
  if (loadingMessages[path]) return loadingMessages[path];
  
  // Check for base path match
  const basePath = '/' + path.split('/')[1];
  if (loadingMessages[basePath]) return loadingMessages[basePath];
  
  // Default messages by category
  if (path.includes('products')) return 'Preparing products...';
  if (path.includes('team')) return 'Meeting the team...';
  if (path.includes('about')) return 'Discovering our story...';
  
  return 'Building legacy...';
};