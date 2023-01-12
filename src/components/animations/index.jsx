/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

export function PageTransition({ children }) {
	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 5 }}
				exit={{ opacity: 0 }}
				transition={{
					duration: 2,
					ease: "easeIn",
					times: [0, 0.2, 0.8, 1],
					// repeat: Infinity,
					repeatDelay: 1,
				}}
			>
				{children}
			</motion.div>
		</AnimatePresence>
	);
}

export function AnimationMakerButton({ children }) {
	return (
		<motion.div
			className="box"
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.9 }}
			transition={{ type: "spring", stiffness: 400, damping: 17 }}
		>
			{children}
		</motion.div>
	);
}
