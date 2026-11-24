"use client";

import { NAV_LINKS } from "@/lib/constants";
import { motion } from "motion/react";
import { Button } from "@/components/Button";
import useDeviceSize from "@/hooks/useDeviceSize";

function Navbar() {
  const {isDesktop} = useDeviceSize();

  return (
    <header className="max-h-1/8 w-full fixed top-0 inset-x-0 mx-auto py-6 px-8 md:px-18 z-100">
      <nav className="container flex items-center justify-between">
        <motion.a
          href="/"
          className="text-xl md:text-2xl font-bold bg-blue-300/10 backdrop-blur-lg rounded-full p-2.5"
          whileHover={{
            color: "var(--color-primary)",
            scale: 1.17,
          }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
        >
          NS{/*<span className="text-primary">.</span>*/}
        </motion.a>

        {/* Navbar */}
        <div className="w-9/10 md:w-4/10 py-3 bg-blue-300/10 backdrop-blur-lg glass-strong rounded-full fixed md:relative bottom-5 md:top-2 z-50">
          <div className="container mx-auto flex justify-around gap-4">
            {NAV_LINKS.map((link) => (
              <motion.a
                href={link.href}
                key={link.id}
                className="text-md font-bold text-muted-foreground"
                whileHover={{
                  color: "var(--color-primary)",
                  scale: 1.17,
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
              >
                {isDesktop ? link.label : <link.icon size={20} />}
              </motion.a>
            ))}
            
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          whileHover={{
            scale: 1.17,
          }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
        >
          <Button href="/#contact">Contact Me</Button>
        </motion.div>
      </nav>
    </header>
  );
}

export default Navbar;
