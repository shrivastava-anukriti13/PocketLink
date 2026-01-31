import React from "react";
import { motion } from "framer-motion";
const Card = ({ title, desc }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 120 }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative"
        >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-200 to-orange-200 rounded-lg blur-md opacity-20 group-hover:opacity-30 transition-opacity"></div>

            {/* Card Content */}
            <div className="relative shadow-md shadow-slate-400 border flex flex-col px-4 py-8 gap-3 rounded-sm bg-white">
                <h1 className="text-slate-900 text-xl font-bold ">{title}</h1>
                <p className="text-slate-700 text-sm"> {desc}</p>
            </div>
        </motion.div>
    );
};

export default Card;