import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { PointerLockControls, Image, Text, Box } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';

interface Achievement {
    id: number;
    title: string;
    description: string;
    image: string;
    date: string;
    category: string;
}

interface VirtualGalleryProps {
    achievements: Achievement[];
}

// First-person character controller
const PlayerController = () => {
    const { camera } = useThree();
    const velocity = useRef(new THREE.Vector3());
    const direction = useRef(new THREE.Vector3());
    const moveForward = useRef(false);
    const moveBackward = useRef(false);
    const moveLeft = useRef(false);
    const moveRight = useRef(false);

    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            switch (event.code) {
                case 'ArrowUp':
                case 'KeyW':
                    moveForward.current = true;
                    break;
                case 'ArrowLeft':
                case 'KeyA':
                    moveLeft.current = true;
                    break;
                case 'ArrowDown':
                case 'KeyS':
                    moveBackward.current = true;
                    break;
                case 'ArrowRight':
                case 'KeyD':
                    moveRight.current = true;
                    break;
            }
        };

        const onKeyUp = (event: KeyboardEvent) => {
            switch (event.code) {
                case 'ArrowUp':
                case 'KeyW':
                    moveForward.current = false;
                    break;
                case 'ArrowLeft':
                case 'KeyA':
                    moveLeft.current = false;
                    break;
                case 'ArrowDown':
                case 'KeyS':
                    moveBackward.current = false;
                    break;
                case 'ArrowRight':
                case 'KeyD':
                    moveRight.current = false;
                    break;
            }
        };

        document.addEventListener('keydown', onKeyDown);
        document.addEventListener('keyup', onKeyUp);

        return () => {
            document.removeEventListener('keydown', onKeyDown);
            document.removeEventListener('keyup', onKeyUp);
        };
    }, []);

    useFrame((state, delta) => {
        // Movement speed
        const speed = 5.0;

        velocity.current.x -= velocity.current.x * 10.0 * delta;
        velocity.current.z -= velocity.current.z * 10.0 * delta;

        direction.current.z = Number(moveForward.current) - Number(moveBackward.current);
        direction.current.x = Number(moveRight.current) - Number(moveLeft.current);
        direction.current.normalize();

        if (moveForward.current || moveBackward.current) {
            velocity.current.z -= direction.current.z * speed * delta;
        }
        if (moveLeft.current || moveRight.current) {
            velocity.current.x -= direction.current.x * speed * delta;
        }

        // Get camera direction
        const cameraDirection = new THREE.Vector3();
        camera.getWorldDirection(cameraDirection);
        cameraDirection.y = 0;
        cameraDirection.normalize();

        const cameraRight = new THREE.Vector3();
        cameraRight.crossVectors(camera.up, cameraDirection).normalize();

        // Apply movement
        const moveVector = new THREE.Vector3();
        moveVector.addScaledVector(cameraDirection, -velocity.current.z);
        moveVector.addScaledVector(cameraRight, -velocity.current.x);

        // Collision boundaries (keep player inside gallery)
        const newX = camera.position.x + moveVector.x;
        const newZ = camera.position.z + moveVector.z;

        // Gallery bounds: -9 to 9 in X, -4 to 4 in Z
        if (newX > -8.5 && newX < 8.5) {
            camera.position.x = newX;
        }
        if (newZ > -3.5 && newZ < 3.5) {
            camera.position.z = newZ;
        }

        // Keep camera at eye level
        camera.position.y = 1.7;
    });

    return null;
};

// Individual artwork frame on wall
const ArtworkFrame = ({
    position,
    achievement,
    rotation = [0, 0, 0]
}: {
    position: [number, number, number];
    achievement: Achievement;
    rotation?: [number, number, number];
}) => {
    const [hovered, setHovered] = useState(false);
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (groupRef.current && hovered) {
            groupRef.current.scale.lerp(new THREE.Vector3(1.05, 1.05, 1.05), 0.1);
        } else if (groupRef.current) {
            groupRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
        }
    });

    return (
        <group ref={groupRef} position={position} rotation={rotation}>
            {/* Frame */}
            <Box args={[2.2, 1.5, 0.1]} position={[0, 0, -0.05]}>
                <meshStandardMaterial color="#1a1a1a" />
            </Box>

            {/* Artwork */}
            <Image
                url={achievement.image}
                scale={[2, 1.3]}
                position={[0, 0, 0.01]}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
            />

            {/* Info panel (appears on hover) */}
            {hovered && (
                <group position={[0, -1.2, 0.1]}>
                    <Box args={[2.2, 0.6, 0.05]} position={[0, 0, -0.025]}>
                        <meshStandardMaterial color="#000000" opacity={0.8} transparent />
                    </Box>
                    <Text
                        position={[0, 0.15, 0.01]}
                        fontSize={0.12}
                        color="white"
                        anchorX="center"
                        anchorY="middle"
                        maxWidth={2}
                        font="/fonts/Inter-Bold.woff"
                    >
                        {achievement.title}
                    </Text>
                    <Text
                        position={[0, -0.1, 0.01]}
                        fontSize={0.08}
                        color="#aaaaaa"
                        anchorX="center"
                        anchorY="middle"
                        maxWidth={2}
                        font="/fonts/Inter-Regular.woff"
                    >
                        {achievement.category} • {achievement.date}
                    </Text>
                </group>
            )}

            {/* Spotlight on artwork */}
            <spotLight
                position={[0, 2, 1]}
                angle={0.3}
                penumbra={0.5}
                intensity={0.5}
                castShadow
                target-position={position}
            />
        </group>
    );
};

// Gallery scene
const GalleryScene = ({ achievements }: { achievements: Achievement[] }) => {
    return (
        <>
            {/* Lighting */}
            <ambientLight intensity={0.3} />
            <pointLight position={[0, 4, 0]} intensity={0.5} />

            {/* Floor */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
                <planeGeometry args={[20, 10]} />
                <meshStandardMaterial color="#1a1a1a" roughness={0.8} metalness={0.2} />
            </mesh>

            {/* Ceiling */}
            <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 5, 0]}>
                <planeGeometry args={[20, 10]} />
                <meshStandardMaterial color="#2a2a2a" />
            </mesh>

            {/* Back wall */}
            <mesh position={[0, 2.5, -4]} receiveShadow>
                <planeGeometry args={[20, 5]} />
                <meshStandardMaterial color="#f5f5f5" />
            </mesh>

            {/* Front wall */}
            <mesh position={[0, 2.5, 4]} rotation={[0, Math.PI, 0]} receiveShadow>
                <planeGeometry args={[20, 5]} />
                <meshStandardMaterial color="#f5f5f5" />
            </mesh>

            {/* Left wall */}
            <mesh position={[-9, 2.5, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
                <planeGeometry args={[10, 5]} />
                <meshStandardMaterial color="#f5f5f5" />
            </mesh>

            {/* Right wall */}
            <mesh position={[9, 2.5, 0]} rotation={[0, -Math.PI / 2, 0]} receiveShadow>
                <planeGeometry args={[10, 5]} />
                <meshStandardMaterial color="#f5f5f5" />
            </mesh>

            {/* Display achievements on walls */}
            {achievements.map((achievement, index) => {
                const totalAchievements = achievements.length;

                // Distribute artworks on left and right walls
                if (index % 2 === 0) {
                    // Left wall
                    const zPosition = -3 + (index / totalAchievements) * 6;
                    return (
                        <ArtworkFrame
                            key={achievement.id}
                            position={[-8.9, 2.5, zPosition]}
                            achievement={achievement}
                            rotation={[0, Math.PI / 2, 0]}
                        />
                    );
                } else {
                    // Right wall
                    const zPosition = -3 + (index / totalAchievements) * 6;
                    return (
                        <ArtworkFrame
                            key={achievement.id}
                            position={[8.9, 2.5, zPosition]}
                            achievement={achievement}
                            rotation={[0, -Math.PI / 2, 0]}
                        />
                    );
                }
            })}

            {/* Player controller */}
            <PlayerController />

            {/* Pointer lock controls for mouse look */}
            <PointerLockControls />
        </>
    );
};

// Instructions overlay
const InstructionsOverlay = ({ show }: { show: boolean }) => {
    if (!show) return null;

    return (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-20 pointer-events-none">
            <div className="glass p-8 rounded-2xl border border-white/10 max-w-md text-center">
                <h3 className="text-2xl font-bold mb-4 text-white">Welcome to the Gallery</h3>
                <div className="space-y-3 text-gray-300">
                    <p className="flex items-center justify-center gap-2">
                        <kbd className="px-2 py-1 bg-white/10 rounded text-sm">W A S D</kbd>
                        <span>or</span>
                        <kbd className="px-2 py-1 bg-white/10 rounded text-sm">Arrow Keys</kbd>
                        <span>to move</span>
                    </p>
                    <p className="flex items-center justify-center gap-2">
                        <span>🖱️ Mouse to look around</span>
                    </p>
                    <p className="text-sm text-gray-400 mt-4">Click anywhere to start exploring</p>
                </div>
            </div>
        </div>
    );
};

// Main component
const VirtualGallery: React.FC<VirtualGalleryProps> = ({ achievements }) => {
    const [showInstructions, setShowInstructions] = useState(true);
    const [isLocked, setIsLocked] = useState(false);

    useEffect(() => {
        const handlePointerLockChange = () => {
            setIsLocked(document.pointerLockElement !== null);
            if (document.pointerLockElement) {
                setShowInstructions(false);
            }
        };

        document.addEventListener('pointerlockchange', handlePointerLockChange);
        return () => document.removeEventListener('pointerlockchange', handlePointerLockChange);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full h-[600px] glass rounded-2xl border border-white/5 overflow-hidden"
        >
            <Canvas
                camera={{ position: [0, 1.7, 3], fov: 75 }}
                shadows
            >
                <GalleryScene achievements={achievements} />
            </Canvas>

            <InstructionsOverlay show={showInstructions && !isLocked} />

            {/* Exit button */}
            {isLocked && (
                <button
                    onClick={() => document.exitPointerLock()}
                    className="absolute top-4 right-4 px-4 py-2 glass border border-white/10 rounded-lg hover:bg-white/10 transition-all z-10"
                >
                    Press ESC to exit
                </button>
            )}
        </motion.div>
    );
};

export default VirtualGallery;
