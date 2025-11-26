import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle, Line, G, Text as SvgText, Path } from 'react-native-svg';
import { ZONES_16, ZONES_32 } from '../constants/vastuData';
import { describeArc, describeRingSector } from '../utils/svgUtils';

interface CompassFaceProps {
    mode: 'NORMAL' | 'VASTU_16' | 'VASTU_32' | 'CHAKRA';
    size: number;
}

export const CompassFace: React.FC<CompassFaceProps> = ({ mode, size }) => {
    const center = size / 2;
    const radius = (size / 2) - 20;

    const renderTicks = () => {
        const ticks = [];
        for (let i = 0; i < 360; i += 2) {
            const isMajor = i % 30 === 0;
            const isMinor = i % 10 === 0;
            const length = isMajor ? 15 : isMinor ? 10 : 5;
            const strokeWidth = isMajor ? 2 : 1;
            const color = isMajor ? '#fff' : 'rgba(255,255,255,0.5)';

            const angleRad = (i - 90) * Math.PI / 180;
            const x1 = center + (radius - length) * Math.cos(angleRad);
            const y1 = center + (radius - length) * Math.sin(angleRad);
            const x2 = center + radius * Math.cos(angleRad);
            const y2 = center + radius * Math.sin(angleRad);

            ticks.push(
                <Line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke={color}
                    strokeWidth={strokeWidth}
                />
            );

            if (isMajor) {
                const textRadius = radius - 30;
                const tx = center + textRadius * Math.cos(angleRad);
                const ty = center + textRadius * Math.sin(angleRad);
                // Add text labels for N, E, S, W
                let label = '';
                if (i === 0) label = 'N';
                else if (i === 90) label = 'E';
                else if (i === 180) label = 'S';
                else if (i === 270) label = 'W';

                if (label) {
                    ticks.push(
                        <SvgText
                            key={`t-${i}`}
                            x={tx}
                            y={ty}
                            fill="#fff"
                            fontSize="16"
                            fontWeight="bold"
                            textAnchor="middle"
                            alignmentBaseline="middle"
                            transform={`rotate(${i + 90}, ${tx}, ${ty})`} // Rotate text to be readable? Or keep it upright?
                        // Actually for fixed dial, text should be upright relative to screen if possible, but usually it rotates with dial.
                        // If this component rotates, the text rotates with it.
                        >
                            {label}
                        </SvgText>
                    )
                }
            }
        }
        return ticks;
    };

    const renderZones = (zones: typeof ZONES_16) => {
        return zones.map((zone, index) => {
            // Vastu zones are defined by start/end degrees.
            // We need to draw an arc.
            const d = describeRingSector(center, center, radius * 0.4, radius, zone.startDegree, zone.endDegree);

            // Calculate label position
            const midAngle = (zone.startDegree + zone.endDegree) / 2;
            const labelRadius = radius * 0.7;
            const labelRad = (midAngle - 90) * Math.PI / 180;
            const lx = center + labelRadius * Math.cos(labelRad);
            const ly = center + labelRadius * Math.sin(labelRad);

            return (
                <G key={zone.id}>
                    <Path d={d} fill={zone.color} opacity={0.8} stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
                    <SvgText
                        x={lx}
                        y={ly}
                        fill="#000"
                        fontSize={mode === 'VASTU_32' ? "8" : "10"}
                        fontWeight="bold"
                        textAnchor="middle"
                        alignmentBaseline="middle"
                        transform={`rotate(${midAngle + 90}, ${lx}, ${ly})`}
                    >
                        {zone.id}
                    </SvgText>
                </G>
            );
        });
    };

    const renderChakra = () => {
        // Concentric rings
        // Outer: 32 Zones
        // Middle: 16 Zones
        // Inner: 8 Directions

        // We can reuse renderZones logic but with different radii
        const r32 = radius;
        const r16 = radius * 0.8;
        const r8 = radius * 0.6;
        const r4 = radius * 0.4;

        return (
            <G>
                {/* 32 Zones Ring */}
                {ZONES_32.map(z => (
                    <Path
                        key={`c32-${z.id}`}
                        d={describeRingSector(center, center, r16, r32, z.startDegree, z.endDegree)}
                        fill={z.color}
                        stroke="#fff"
                        strokeWidth="0.5"
                    />
                ))}

                {/* 16 Zones Ring */}
                {ZONES_16.map(z => (
                    <Path
                        key={`c16-${z.id}`}
                        d={describeRingSector(center, center, r8, r16, z.startDegree, z.endDegree)}
                        fill={z.color}
                        opacity={0.9}
                        stroke="#fff"
                        strokeWidth="0.5"
                    />
                ))}

                {/* Center Decoration */}
                <Circle cx={center} cy={center} r={r4} fill="#222" />
                <SvgText x={center} y={center} fill="#fff" textAnchor="middle" alignmentBaseline="middle" fontSize="12">VASTU</SvgText>
            </G>
        )
    }

    return (
        <Svg width={size} height={size}>
            <Circle cx={center} cy={center} r={radius} fill="#1f2937" stroke="#374151" strokeWidth="4" />

            {mode === 'NORMAL' && renderTicks()}
            {mode === 'VASTU_16' && renderZones(ZONES_16)}
            {mode === 'VASTU_32' && renderZones(ZONES_32)}
            {mode === 'CHAKRA' && renderChakra()}

        </Svg>
    );
};
