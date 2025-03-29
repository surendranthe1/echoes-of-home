// src/components/ar/ARScene.tsx
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Story } from '@/types';
import './ARScene.css';

interface ARSceneProps {
  story: Story;
  currentSegment: number;
}

const ARScene: React.FC<ARSceneProps> = ({ story, currentSegment }) => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const modelRef = useRef<THREE.Group | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneObjectRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);

  // Create a human-like geometry
  const createHumanGeometry = (): THREE.Group => {
    // Create a group to combine different body parts
    const humanGroup = new THREE.Group();

    // Head (sphere)
    const head = new THREE.Mesh(
      new THREE.SphereGeometry(0.5, 32, 32),
      new THREE.MeshStandardMaterial({ 
        color: 0x1a1a25, // Darker, more solemn color
        transparent: true,
        opacity: 0.9,
        roughness: 0.8, // More matte finish
        metalness: 0.1
      })
    );
    head.position.y = 1.7; // Position at top of body

    // Torso (cylinder)
    const torso = new THREE.Mesh(
      new THREE.CylinderGeometry(0.5, 0.7, 1.5, 32),
      new THREE.MeshStandardMaterial({ 
        color: 0x00000, 
        transparent: true,
        opacity: 1,
        roughness: 0.7,
        metalness: 0.2
      })
    );
    torso.position.y = 0.75; // Position below head

    // Arms (capsule-like shapes)
    const createArm = (side: number) => {
      const arm = new THREE.Mesh(
        new THREE.CylinderGeometry(0.2, 0.2, 1, 32),
        new THREE.MeshStandardMaterial({ 
          color: 0x00000,
          transparent: true,
          opacity: 1
        })
      );
      arm.position.y = 1; // Middle of torso
      arm.position.x = side * 0.6; // Left or right side
      arm.rotation.z = side * Math.PI / 4; // Slight angle
      return arm;
    };

    // Legs (cylinder shapes)
    const createLeg = (side: number) => {
      const leg = new THREE.Mesh(
        new THREE.CylinderGeometry(0.3, 0.3, 1.5, 32),
        new THREE.MeshStandardMaterial({ 
          color: 0x000000,
          transparent: true,
          opacity: 0.8
        })
      );
      leg.position.y = -0.75; // Bottom of torso
      leg.position.x = side * 0.3; // Left or right side
      return leg;
    };

    // Add parts to group
    humanGroup.add(head);
    humanGroup.add(torso);
    humanGroup.add(createArm(1));  // Right arm
    humanGroup.add(createArm(-1)); // Left arm
    humanGroup.add(createLeg(1));  // Right leg
    humanGroup.add(createLeg(-1)); // Left leg

    return humanGroup;
  };

  

  useEffect(() => {
    if (!sceneRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneObjectRef.current = scene;
    scene.background = null; // Ensure transparent background

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    cameraRef.current = camera;
    camera.position.z = 5;
    camera.position.y = 1; // Raise camera slightly

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,  // Allow transparent background
      antialias: true 
    });
    rendererRef.current = renderer;
    renderer.setSize(window.innerWidth, window.innerHeight);
    sceneRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Optional: Orbit controls for interaction
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;
    controls.maxPolarAngle = Math.PI / 2;

    controls.enableZoom = true;
    controls.minDistance = 2; // Minimum zoom distance
    controls.maxDistance = 10; // Maximum zoom distance

    // Create human model
    const humanModel = createHumanGeometry();
    scene.add(humanModel);
    modelRef.current = humanModel;

    // Add axes helper
    const axesHelper = new THREE.AxesHelper(5);
    //scene.add(axesHelper);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate the human model
      if (humanModel) {
        humanModel.rotation.y += 0.05;
      }
      
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      if (camera && renderer) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      
      // Dispose of resources
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
      
      // Remove renderer from DOM
      if (sceneRef.current && renderer.domElement) {
        sceneRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Update model animation when segment changes
  useEffect(() => {
    if (modelRef.current) {
      // Example segment-based animation
      switch (currentSegment % 4) {
        case 0:
          modelRef.current.rotation.y = 0;
          break;
        case 1:
          modelRef.current.rotation.y = Math.PI / 4;
          break;
        case 2:
          modelRef.current.rotation.y = -Math.PI / 4;
          break;
        case 3:
          modelRef.current.rotation.y = 0;
          break;
      }
    }
  }, [currentSegment]);

  return (
    <div className="ar-overlay">
      <div ref={sceneRef} className="three-js-scene" />
      
      {/* Location marker 
      <div className="ar-location-marker">
        <div className="ar-location-pulse"></div>
        <div className="ar-location-pin"></div>
        <div className="ar-location-label">{story.locationDescription}</div>
      </div> */}
    </div>
  );
};

export default ARScene;