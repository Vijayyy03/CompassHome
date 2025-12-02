export interface VastuTip {
    id: string;
    title: string;
    description: string;
    category: 'room' | 'direction' | 'element' | 'general' | 'remedy';
    subcategory?: string;
    direction?: string;
    icon: string; // emoji for now
    importance: 'high' | 'medium' | 'low';
}

export const vastuTips: VastuTip[] = [
    // Room-wise Tips
    {
        id: 'room-1',
        title: 'Kitchen Direction',
        description: 'The ideal location for a kitchen is the South-East corner, as it is governed by the fire element. If not possible, North-West can be an alternative.',
        category: 'room',
        subcategory: 'Kitchen',
        direction: 'SE',
        icon: '🍳',
        importance: 'high',
    },
    {
        id: 'room-2',
        title: 'Master Bedroom Placement',
        description: 'The master bedroom should be in the South-West direction for stability, prosperity, and good health. Avoid North-East for master bedroom.',
        category: 'room',
        subcategory: 'Bedroom',
        direction: 'SW',
        icon: '🛏️',
        importance: 'high',
    },
    {
        id: 'room-3',
        title: 'Pooja Room Location',
        description: 'The prayer or pooja room should be in the North-East direction for spiritual growth and peace. Ensure it faces East or North.',
        category: 'room',
        subcategory: 'Pooja Room',
        direction: 'NE',
        icon: '🕉️',
        importance: 'high',
    },
    {
        id: 'room-4',
        title: 'Living Room Direction',
        description: 'The living room should be in the North or East direction. This brings positive energy and prosperity to the home.',
        category: 'room',
        subcategory: 'Living Room',
        direction: 'N',
        icon: '🛋️',
        importance: 'medium',
    },
    {
        id: 'room-5',
        title: 'Bathroom Placement',
        description: 'Bathrooms should be in the North-West or West directions. Avoid South-East and North-East for toilets/bathrooms.',
        category: 'room',
        subcategory: 'Bathroom',
        direction: 'NW',
        icon: '🚿',
        importance: 'high',
    },
    {
        id: 'room-6',
        title: 'Study Room Direction',
        description: 'Place the study room in the North-East, North, or East for better concentration and academic success.',
        category: 'room',
        subcategory: 'Study Room',
        direction: 'NE',
        icon: '📚',
        importance: 'medium',
    },
    {
        id: 'room-7',
        title: 'Store Room Location',
        description: 'Store rooms work best in the South-West direction. Heavy items should be stored in the South or West.',
        category: 'room',
        subcategory: 'Store Room',
        direction: 'SW',
        icon: '📦',
        importance: 'low',
    },

    // Direction-wise Tips
    {
        id: 'dir-1',
        title: 'North Direction - Wealth',
        description: 'The North is governed by Lord Kubera (God of Wealth). Keep this direction open and clutter-free. Use blue or green colors here.',
        category: 'direction',
        direction: 'N',
        icon: '💰',
        importance: 'high',
    },
    {
        id: 'dir-2',
        title: 'North-East - Divine Energy',
        description: 'The most sacred direction, ruled by water element. Keep it clean, light, and open. Ideal for prayer, meditation, and water features.',
        category: 'direction',
        direction: 'NE',
        icon: '✨',
        importance: 'high',
    },
    {
        id: 'dir-3',
        title: 'East - Health & Growth',
        description: 'Governed by the Sun (Surya). This direction brings health, vitality, and growth. Keep windows open in the East for morning sunlight.',
        category: 'direction',
        direction: 'E',
        icon: '🌅',
        importance: 'high',
    },
    {
        id: 'dir-4',
        title: 'South-East - Fire Element',
        description: 'Ruled by Agni (Fire). Ideal for kitchen, electrical equipment, and transformers. Avoid water elements here.',
        category: 'direction',
        direction: 'SE',
        icon: '🔥',
        importance: 'high',
    },
    {
        id: 'dir-5',
        title: 'South - Strength & Fame',
        description: 'Governed by Yama (Lord of Death). This direction provides strength and recognition. Keep it heavy with tall furniture or walls.',
        category: 'direction',
        direction: 'S',
        icon: '💪',
        importance: 'medium',
    },
    {
        id: 'dir-6',
        title: 'South-West - Stability',
        description: 'The earth element direction. Provides stability and grounding. Ideal for master bedroom, heavy storage, and foundation.',
        category: 'direction',
        direction: 'SW',
        icon: '🏔️',
        importance: 'high',
    },
    {
        id: 'dir-7',
        title: 'West - Prosperity',
        description: 'Ruled by Varuna (Water God). Good for children\'s rooms and study areas. Associated with gains and prosperity.',
        category: 'direction',
        direction: 'W',
        icon: '🌊',
        importance: 'medium',
    },
    {
        id: 'dir-8',
        title: 'North-West - Air Element',
        description: 'Governed by Vayu (Wind). Suitable for guest rooms, bathrooms, and changing rooms. Represents movement and change.',
        category: 'direction',
        direction: 'NW',
        icon: '💨',
        importance: 'medium',
    },

    // Element-wise Tips
    {
        id: 'elem-1',
        title: 'Water Element Balance',
        description: 'Place water features (fountains, aquariums) in the North, East, or North-East. Avoid South and South-East. Water brings prosperity.',
        category: 'element',
        subcategory: 'Water',
        icon: '💧',
        importance: 'high',
    },
    {
        id: 'elem-2',
        title: 'Fire Element Usage',
        description: 'Fire elements (stoves, heaters) belong in South-East. Avoid North-East and North. Red and orange colors enhance fire energy.',
        category: 'element',
        subcategory: 'Fire',
        icon: '🔥',
        importance: 'high',
    },
    {
        id: 'elem-3',
        title: 'Earth Element Grounding',
        description: 'Earth elements (clay, ceramics, crystals) work best in South-West. Yellow and earthy colors strengthen this element.',
        category: 'element',
        subcategory: 'Earth',
        icon: '🌍',
        importance: 'medium',
    },
    {
        id: 'elem-4',
        title: 'Air Element Flow',
        description: 'Ensure proper ventilation in North-West. Wind chimes and moving objects enhance air element. Keep this area light.',
        category: 'element',
        subcategory: 'Air',
        icon: '🌬️',
        importance: 'medium',
    },
    {
        id: 'elem-5',
        title: 'Space Element Balance',
        description: 'The center (Brahmasthan) should be kept open and clutter-free. Avoid heavy furniture, pillars, or toilets in the center.',
        category: 'element',
        subcategory: 'Space',
        icon: '⭐',
        importance: 'high',
    },

    // General Tips
    {
        id: 'gen-1',
        title: 'Main Entrance Direction',
        description: 'The main entrance should ideally face North, East, or North-East for maximum positive energy flow into the home.',
        category: 'general',
        icon: '🚪',
        importance: 'high',
    },
    {
        id: 'gen-2',
        title: 'Clutter-Free Spaces',
        description: 'Keep all areas, especially North-East, clean and clutter-free. Clutter blocks positive energy and creates stagnation.',
        category: 'general',
        icon: '✨',
        importance: 'medium',
    },
    {
        id: 'gen-3',
        title: 'Natural Light',
        description: 'Maximize natural light, especially from East and North. Sunlight purifies the space and brings positive vibrations.',
        category: 'general',
        icon: '☀️',
        importance: 'medium',
    },
    {
        id: 'gen-4',
        title: 'Heavy Objects Placement',
        description: 'Place heavy furniture, safes, and storage in South and West directions for stability and security.',
        category: 'general',
        icon: '📦',
        importance: 'medium',
    },
    {
        id: 'gen-5',
        title: 'Mirrors Placement',
        description: 'Place mirrors on North or East walls. Avoid mirrors in bedrooms facing the bed, and never in South.',
        category: 'general',
        icon: '🪞',
        importance: 'low',
    },
    {
        id: 'gen-6',
        title: 'Plant Placement',
        description: 'Keep plants in North, East, or North-East. Avoid thorny plants like cactus inside the house. Tulsi is auspicious in North-East.',
        category: 'general',
        icon: '🌿',
        importance: 'low',
    },
    {
        id: 'gen-7',
        title: 'Color Usage',
        description: 'Use light, soothing colors for North and East. Use warm colors for South and West. Avoid dark colors in North-East.',
        category: 'general',
        icon: '🎨',
        importance: 'low',
    },

    // Remedies
    {
        id: 'rem-1',
        title: 'North-East Blocked Remedy',
        description: 'If North-East is blocked: Place a crystal or light lamp, use white/cream colors, keep it extremely clean, and place a water feature if possible.',
        category: 'remedy',
        icon: '💎',
        importance: 'high',
    },
    {
        id: 'rem-2',
        title: 'South-West Defect Remedy',
        description: 'For South-West defects: Use heavy furniture, place a Ganesha idol, use yellow/earthy colors, and ensure this corner is well-maintained.',
        category: 'remedy',
        icon: '🙏',
        importance: 'high',
    },
    {
        id: 'rem-3',
        title: 'Wrong Kitchen Direction',
        description: 'If kitchen is not in South-East: Ensure cooking is done facing East, use red/orange colors, keep it extremely clean, and use proper ventilation.',
        category: 'remedy',
        icon: '🔧',
        importance: 'medium',
    },
    {
        id: 'rem-4',
        title: 'Center Blockage Solution',
        description: 'If center (Brahmasthan) is blocked: Use light colors, ensure good lighting, keep it clutter-free, and consider using mirrors to create space.',
        category: 'remedy',
        icon: '⚡',
        importance: 'high',
    },
    {
        id: 'rem-5',
        title: 'Toilet in Wrong Direction',
        description: 'For wrongly placed toilets: Keep door closed, use sea salt for negativity absorption, ensure excellent ventilation, and keep it very clean.',
        category: 'remedy',
        icon: '🧂',
        importance: 'medium',
    },
];

export const getTipsByCategory = (category: VastuTip['category']) => {
    return vastuTips.filter(tip => tip.category === category);
};

export const getTipsByDirection = (direction: string) => {
    return vastuTips.filter(tip => tip.direction === direction);
};

export const getHighPriorityTips = () => {
    return vastuTips.filter(tip => tip.importance === 'high');
};
