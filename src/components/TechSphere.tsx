import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Billboard, Image, Text } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useRef, useMemo, useState } from 'react';
import * as THREE from 'three';

// Technology data with logos and individual scales
const technologies = [
    { name: 'Python', imgUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', scale: 1 },
    { name: 'React', imgUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', scale: 1 },
    { name: 'MongoDB', imgUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', scale: 1 },
    { name: 'PostgreSQL', imgUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', scale: 1 },
    { name: 'Gemini', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg', scale: 0.5 },
    { name: 'Hugging Face', imgUrl: 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg', scale: 1 },
    { name: 'LangChain', imgUrl: 'https://avatars.githubusercontent.com/u/126733545?s=200&v=4', scale: 1 },
    { name: 'FFmpeg', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/FFmpeg_Logo_new.svg', scale: 0.4 },
    { name: 'Whisper', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg', scale: 0.5 },
    { name: 'Streamlit', imgUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg', scale: 1 },
    { name: 'Flask', imgUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg', scale: 1 },
];

// Generate random position on sphere surface
const generateSpherePoint = (radius: number, index: number, total: number) => {
    const phi = Math.acos(-1 + (2 * index) / total);
    const theta = Math.sqrt(total * Math.PI) * phi;

    return {
        x: radius * Math.cos(theta) * Math.sin(phi),
        y: radius * Math.sin(theta) * Math.sin(phi),
        z: radius * Math.cos(phi),
    };
};

// Individual tech logo component
const TechLogo = ({ position, name, imgUrl, baseScale }: { position: [number, number, number]; name: string; imgUrl: string; baseScale: number }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <group position={position}>
            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                <Billboard>
                    <Image
                        url={imgUrl}
                        transparent
                        scale={hovered ? baseScale * 1.2 : baseScale * 0.8}
                        onPointerOver={() => setHovered(true)}
                        onPointerOut={() => setHovered(false)}
                    />
                    {hovered && (
                        <Text
                            position={[0, -0.6, 0]}
                            fontSize={0.2}
                            color="white"
                            anchorX="center"
                            anchorY="middle"
                            outlineWidth={0.02}
                            outlineColor="#000000"
                        >
                            {name}
                        </Text>
                    )}
                </Billboard>
            </Float>
        </group>
    );
};

// Rotating sphere with glow
const GlowingSphere = () => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.001;
        }
    });

    return (
        <group rotation={[0, 0, 0]}>
            {/* Main sphere with wireframe */}
            <mesh ref={meshRef}>
                <sphereGeometry args={[2, 32, 32]} />
                <meshStandardMaterial
                    color="#4a5568"
                    wireframe
                    transparent
                    opacity={0.1}
                />
            </mesh>

            {/* Glowing inner sphere */}
            <mesh>
                <sphereGeometry args={[1.95, 32, 32]} />
                <meshStandardMaterial
                    color="#667eea"
                    emissive="#667eea"
                    emissiveIntensity={0.5}
                    transparent
                    opacity={0.1}
                />
            </mesh>

            {/* Technology logos */}
            {technologies.map((tech, index) => {
                const pos = generateSpherePoint(2.5, index, technologies.length);
                return (
                    <TechLogo
                        key={tech.name}
                        position={[pos.x, pos.y, pos.z]}
                        name={tech.name}
                        imgUrl={tech.imgUrl}
                        baseScale={tech.scale}
                    />
                );
            })}
        </group>
    );
};

// Floating particles/stars
const Particles = () => {
    const particlesRef = useRef<THREE.Points>(null);

    const particles = useMemo(() => {
        const count = 300;
        const positions = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 25;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 25;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 25;
        }

        return positions;
    }, []);

    useFrame((state) => {
        if (particlesRef.current) {
            particlesRef.current.rotation.y += 0.0005;
        }
    });

    return (
        <points ref={particlesRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particles.length / 3}
                    array={particles}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.08}
                color="#667eea"
                transparent
                opacity={0.6}
                sizeAttenuation
            />
        </points>
    );
};

// Main 3D Scene
const Scene = () => {
    return (
        <>
            {/* Lighting */}
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1.5} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />

            {/* Particles */}
            <Particles />

            {/* Main sphere */}
            <GlowingSphere />

            {/* Controls */}
            <OrbitControls
                enableZoom={false}
                enablePan={false}
                autoRotate
                autoRotateSpeed={0.8}
                maxPolarAngle={Math.PI / 1.5}
                minPolarAngle={Math.PI / 3}
            />
        </>
    );
};

// Main component
const TechSphere = () => {
    return (
        <section id="tech-sphere" className="py-20 relative">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                        My Tech <span className="text-accent">Universe</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary rounded-full" />
                    <p className="mt-6 text-center max-w-2xl text-muted-foreground">
                        A visual map of all the tools and technologies I use
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-full h-[600px] glass rounded-2xl border border-white/5 overflow-hidden"
                >
                    <Canvas
                        camera={{ position: [0, 0, 9], fov: 50 }}
                        gl={{ alpha: true, antialias: true }}
                        dpr={[1, 2]}
                    >
                        <Scene />
                    </Canvas>
                </motion.div>
            </div>
        </section>
    );
};

export default TechSphere;
