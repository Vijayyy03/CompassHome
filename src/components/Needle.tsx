import React from 'react';
import Svg, { Path, Circle, G, Defs, LinearGradient, Stop } from 'react-native-svg';

interface NeedleProps {
    size: number;
}

export const Needle: React.FC<NeedleProps> = ({ size }) => {
    const center = size / 2;
    const length = size / 2 - 20;
    const width = 15;

    return (
        <Svg width={size} height={size} style={{ position: 'absolute' }}>
            <Defs>
                <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                    <Stop offset="0" stopColor="#ef4444" stopOpacity="1" />
                    <Stop offset="0.5" stopColor="#b91c1c" stopOpacity="1" />
                    <Stop offset="1" stopColor="#991b1b" stopOpacity="1" />
                </LinearGradient>
            </Defs>

            <G transform={`translate(${center}, ${center})`}>
                {/* North Tip (Red) */}
                <Path
                    d={`M0 ${-length} L${width / 2} 0 L${-width / 2} 0 Z`}
                    fill="url(#grad)"
                />

                {/* South Tip (White/Grey) */}
                <Path
                    d={`M0 ${length} L${width / 2} 0 L${-width / 2} 0 Z`}
                    fill="#e5e7eb"
                />

                {/* Center Pivot */}
                <Circle cx="0" cy="0" r="6" fill="#1f2937" stroke="#fff" strokeWidth="2" />
            </G>
        </Svg>
    );
};
