import { useEffect, useRef, useState } from "react";
import {
  Bodies,
  Body,
  Engine,
  Mouse,
  MouseConstraint,
  Render,
  Runner,
  World,
} from "matter-js";

type FooterPhysicsProps = {
  className?: string;
};

const SERVICES = [
  "Web Development",
  "App Development",
  "SEO",
  "Backoffice Development",
  "API Integration",
  "UI/UX Design",
];

export function TextPhysics({ className }: FooterPhysicsProps) {
  const scene = useRef<HTMLDivElement>(null);
  const engine = useRef(Engine.create());
  const [inView, setInView] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const isInitialized = useRef(false);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.matchMedia("(max-width: 768px)").matches);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const services = isMobile ? SERVICES.slice(0, 4) : SERVICES;

  useEffect(() => {
    const currentScene = scene.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (currentScene) observer.observe(currentScene);

    return () => {
      if (currentScene) observer.unobserve(currentScene);
    };
  }, []);

  useEffect(() => {
    if (!scene.current || !inView || isInitialized.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    isInitialized.current = true;
    const cw = scene.current.clientWidth;
    const ch = scene.current.clientHeight;

    // Configure engine
    engine.current = Engine.create({
      gravity: { x: 0, y: 0.5 },
      enableSleeping: false,
    });

    const render = Render.create({
      element: scene.current,
      engine: engine.current,
      options: {
        width: cw,
        height: ch,
        pixelRatio: window.devicePixelRatio,
        wireframes: false,
        background: "transparent",
      },
    });

const textBodies = services.map((text) => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d")!;

  canvas.width = 280; 
  canvas.height = 80; 

  // Set a black gradient background
  const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  bgGradient.addColorStop(0, "#1a1a1a"); 
  bgGradient.addColorStop(1, "#1a1a1a"); 
  ctx.fillStyle = bgGradient;

  const radius = 15;
  ctx.beginPath();
  ctx.moveTo(radius, 0);
  ctx.lineTo(canvas.width - radius, 0);
  ctx.quadraticCurveTo(canvas.width, 0, canvas.width, radius);
  ctx.lineTo(canvas.width, canvas.height - radius);
  ctx.quadraticCurveTo(
    canvas.width,
    canvas.height,
    canvas.width - radius,
    canvas.height
  );
  ctx.lineTo(radius, canvas.height);
  ctx.quadraticCurveTo(0, canvas.height, 0, canvas.height - radius);
  ctx.lineTo(0, radius);
  ctx.quadraticCurveTo(0, 0, radius, 0);
  ctx.closePath();
  ctx.fill();

  const textGradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
  textGradient.addColorStop(0, "#ffffff");
  textGradient.addColorStop(0.5, "#d1d5db");
  textGradient.addColorStop(1, "#ffffff");

  ctx.fillStyle = textGradient;
  ctx.font = "bold 24px Inter, system-ui, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, canvas.width / 2, canvas.height / 2);

  const x = Math.random() * (cw - 220) + 110;
  const y = Math.random() * (ch / 2) + 50;
  const rotation = ((Math.random() * 60 - 30) * Math.PI) / 180;

  return Bodies.rectangle(x, y, 220, 80, {
    render: {
      sprite: {
        texture: canvas.toDataURL(),
        xScale: 1,
        yScale: 1,
      },
    },
    angle: rotation,
    friction: 0.005,
    frictionAir: 0.02,
    restitution: 0.8,
    chamfer: { radius: 15 }, // Matches the canvas roundedness
    mass: 5,
    density: 0.001,
  });
});



    // Create boundaries
    const wallOptions = {
      isStatic: true,
      render: { fillStyle: "transparent" },
    };

    const boundaries = [
      Bodies.rectangle(cw / 2, -10, cw, 20, wallOptions), // Top
      Bodies.rectangle(-10, ch / 2, 20, ch, wallOptions), // Left
      Bodies.rectangle(cw / 2, ch + 10, cw, 20, wallOptions), // Bottom
      Bodies.rectangle(cw + 10, ch / 2, 20, ch, wallOptions), // Right
    ];

    World.add(engine.current.world, [...boundaries, ...textBodies]);

    // Add mouse control
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine.current, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });

    World.add(engine.current.world, mouseConstraint);

    // Keep mouse in sync with rendering
    render.mouse = mouse;

    // Handle window resize
    const handleResize = () => {
      if (!scene.current) return;

      const cw = scene.current.clientWidth;
      const ch = scene.current.clientHeight;

      render.canvas.width = cw;
      render.canvas.height = ch;
      render.options.width = cw;
      render.options.height = ch;

      Render.setPixelRatio(render, window.devicePixelRatio);

      // Update boundary positions
      boundaries.forEach((boundary, index) => {
        const x = index === 1 ? -10 : index === 3 ? cw + 10 : cw / 2;
        const y = index === 0 ? -10 : index === 2 ? ch + 10 : ch / 2;
        const width = index % 2 === 0 ? cw : 20;
        const height = index % 2 === 0 ? 20 : ch;

        Body.setPosition(boundary, { x, y });
        Body.setVertices(
          boundary,
          Bodies.rectangle(x, y, width, height).vertices
        );
      });
    };

    window.addEventListener("resize", handleResize);

    // Start the engine and renderer
    const runner = Runner.create();
    Runner.run(runner, engine.current);
    Render.run(render);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      Render.stop(render);
      Runner.stop(runner);
      World.clear(engine.current.world, false);
      Engine.clear(engine.current);
      render.canvas.remove();
      render.textures = {};
      isInitialized.current = false;
    };
  }, [inView, services]);

  return (
    <div
      ref={scene}
      className={`h-[300px] w-full  ${className}`}
    />
  );
}
