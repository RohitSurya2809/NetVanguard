"use client";

import React from "react";

export default function BlockDiagram() {
  return (
    <div className="container py-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our <span className="gradient-text">Block Diagram</span>
        </h2>
        <p className="text-foreground/70">
          A visual representation of our AI-driven networking solutions.
        </p>
      </div>

      <div className="flex justify-center">
        <img
          src="https://i.ibb.co/chjfLQXt/block-diagram.png"
          alt="block-diagram"
          className="rounded-lg shadow-lg max-w-full h-auto"
          style={{ transform: 'scale(1.2)' }}
        />
      </div>
    </div>
  );
}
