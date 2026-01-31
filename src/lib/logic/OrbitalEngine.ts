export interface OrbitalObject {
	radius: number;
	speed: number;
	angle: number;
	yOffset: number;
}

export function calculateOrbit(obj: OrbitalObject, delta: number, boost: number = 1) {
	obj.angle += obj.speed * delta * boost; // Apply velocity multiplier
	return {
		x: Math.cos(obj.angle) * obj.radius,
		y: obj.yOffset,
		z: Math.sin(obj.angle) * obj.radius
	};
}
