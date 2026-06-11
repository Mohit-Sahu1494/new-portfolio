import React from "react";
import { motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { 
  SiLeetcode 
} from "react-icons/si";
import { 
  FaTrophy, 
  FaFire, 
  FaBrain, 
  FaBullseye,
  FaExternalLinkAlt 
} from "react-icons/fa";
import { 
  MdStackedLineChart,
  MdAutoGraph 
} from "react-icons/md";

const LEETCODE_USERNAME = "sahumohit1494"; // Replace with your actual LeetCode username

const stats = [
  {
    title: "Problems Solved",
    value: "200+",
    icon: FaBrain,
    color: "text-yellow-400",
  },
  {
    title: "Current Streak",
    value: "50+",
    icon: FaFire,
    color: "text-orange-500",
  },
  {
    title: "Contest Rating",
    value: "1500+",
    icon: FaTrophy,
    color: "text-cyan-400",
  },
  {
    title: "Global Rank",
    value: "Top 10%",
    icon: FaBullseye,
    color: "text-purple-400",
  },
];

const difficultyData = [
  { name: "Easy", value: 100, color: "#4ade80", total: 150 },
  { name: "Medium", value: 80, color: "#fbbf24", total: 200 },
  { name: "Hard", value: 20, color: "#f87171", total: 100 },
];

function LeetCode() {
  return (
    <section
      id="leetcode"
      className="relative min-h-screen py-24 px-3 sm:px-6 lg:px-8 overflow-hidden"
    >

      <div className="max-w-7xl sm:px-8  mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-yellow-500 mb-6 backdrop-blur-xl">
            <SiLeetcode size={18} />
            <span className="text-sm font-medium">DSA Journey</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            LeetCode <span className="text-yellow-500">Progress</span>
          </h2>

          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Consistently improving problem-solving skills
            through Data Structures, Algorithms and
            coding challenges.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -5,
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                }}
                style={{ backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)" }}
                className="
                  p-8
                  rounded-3xl
                  bg-white/5
                  border border-white/10
                  backdrop-blur-xl
                  transition-all
                "
              >
                <div className={`p-3 rounded-2xl bg-white/5 w-fit mb-6 backdrop-blur-md ${item.color}`}>
                  <Icon size={28} />
                </div>
                <h3 className="text-4xl font-bold text-white mb-2">
                  {item.value}
                </h3>
                <p className="text-white/60 font-medium tracking-wide uppercase text-xs">
                  {item.title}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Daily Activity */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)" }}
            className="
              lg:col-span-2
              rounded-3xl
              px-4 py-6
              sm:p-8

              bg-white/5
              border border-white/10
              backdrop-blur-xl
              flex flex-col
              overflow-hidden
            "
          >
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-yellow-500/10 text-yellow-500 backdrop-blur-md">
                  <MdAutoGraph size={20} />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Daily Activity
                </h3>
              </div>
            </div>

            <div className="flex-1 flex items-center justify-start lg:justify-center overflow-x-auto pb-4 custom-scrollbar">
              <img
                src={`https://leetcard.jacoblin.cool/${LEETCODE_USERNAME}?ext=heatmap&theme=dark`}
                alt="LeetCode Activity"
                className="min-w-[600px] h-auto"
                onError={(e) => {
                  e.target.src = `https://leetcode-contribution-calendar-server.vercel.app/svg?username=${LEETCODE_USERNAME}`;
                }}
              />
            </div>
          </motion.div>

          {/* Distribution Chart */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)" }}
            className="
              rounded-3xl
              p-8
              bg-white/5
              border border-white/10
              backdrop-blur-xl
            "
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-yellow-500/10 text-yellow-500 backdrop-blur-md">
                <MdStackedLineChart size={20} />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Solved Ratio
              </h3>
            </div>

            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={difficultyData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {difficultyData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(15, 23, 42, 0.9)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "12px",
                      color: "#fff",
                    }}
                    itemStyle={{ color: "#fff" }}
                  />
                  <Legend 
                    verticalAlign="bottom" 
                    height={36}
                    content={({ payload }) => (
                      <ul className="flex flex-wrap justify-center gap-4 mt-4">
                        {payload.map((entry, index) => (
                          <li key={`item-${index}`} className="flex items-center gap-2">
                            <div 
                              className="w-3 h-3 rounded-full" 
                              style={{ backgroundColor: entry.color }}
                            />
                            <span className="text-white/70 text-sm">{entry.value}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* Footer Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center mt-16"
        >
          <a
            href={`https://leetcode.com/${LEETCODE_USERNAME}`}
            target="_blank"
            rel="noreferrer"
            className="
              group
              flex items-center gap-3
              px-8 py-4
              rounded-2xl
              bg-white text-black
              font-bold
              hover:bg-yellow-500
              hover:scale-105
              transition-all duration-300
            "
          >
            <SiLeetcode size={20} />
            View LeetCode Profile
            <FaExternalLinkAlt size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
          <p className="mt-6 text-white/40 text-sm flex items-center gap-2">
            Practice makes perfect • <span className="text-yellow-500/60">@{LEETCODE_USERNAME}</span>
          </p>
        </motion.div>
      </div>
      <style jsx="true">{`
        .custom-scrollbar::-webkit-scrollbar {
          height: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </section>
  );
}

export default LeetCode;