import React from "react";
import { motion } from "framer-motion";
import {GitHubCalendar} from "react-github-calendar";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { 
  FaGithub, 
  FaStar, 
  FaCode, 
  FaGitAlt 
} from "react-icons/fa";
import { 
  MdOutlineCollectionsBookmark, 
  MdAutoGraph 
} from "react-icons/md";

const GITHUB_USERNAME = "Mohit-Sahu1494"; // Replace with your actual GitHub username

const stats = [
  {
    title: "Repositories",
    value: "25+",
    icon: MdOutlineCollectionsBookmark,
    color: "text-cyan-400",
  },
  {
    title: "Commits",
    value: "1000+",
    icon: FaGitAlt,
    color: "text-purple-400",
  },
  {
    title: "Stars",
    value: "50+",
    icon: FaStar,
    color: "text-yellow-400",
  },
];

const languageData = [
  { name: "JavaScript", value: 40, color: "#f7df1e" },
  { name: "React", value: 30, color: "#61dafb" },
  { name: "Node.js", value: 15, color: "#339933" },
  { name: "TypeScript", value: 10, color: "#3178c6" },
  { name: "Others", value: 5, color: "#8884d8" },
];

function GitHubActivity() {
  const theme = {
    light: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };

  return (
    <section
      id="github"
      className="relative min-h-screen py-24 px-3 sm:px-6 lg:px-8 overflow-hidden"
    >

      <div className="max-w-7xl sm:px-8 mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-400 mb-6 backdrop-blur-xl">
            <FaGithub size={18} />
            <span className="text-sm font-medium">Open Source Journey</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            GitHub <span className="text-cyan-400">Activity</span>
          </h2>

          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            My coding consistency, open source contributions
            and development activity on GitHub.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
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
          {/* Contribution Calendar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)" }}
            className="
              lg:col-span-2
              rounded-3xl
              p-8
              bg-white/5
              border border-white/10
              backdrop-blur-xl
              flex flex-col
              overflow-scroll
            "
          >
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-green-500/10 text-green-400 backdrop-blur-md">
                  <MdAutoGraph size={20} />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Contribution Activity
                </h3>
              </div>
            </div>

            <div className="flex-1 flex items-center justify-center overflow-x-auto pb-4 custom-scrollbar">
              <GitHubCalendar
                username={GITHUB_USERNAME}
                theme={theme}
                fontSize={14}
                blockSize={12}
                blockMargin={4}
                colorScheme="dark"
              />
            </div>
          </motion.div>

          {/* Language Distribution */}
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
              <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 backdrop-blur-md">
                <FaCode size={20} />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Top Languages
              </h3>
            </div>

            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={languageData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {languageData.map((entry, index) => (
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
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noreferrer"
            className="
              group
              flex items-center gap-3
              px-8 py-4
              rounded-2xl
              bg-white text-black
              font-bold
              hover:bg-cyan-400
              hover:scale-105
              transition-all duration-300
            "
          >
            <FaGithub size={20} />
            Visit Full Profile
          </a>
          <p className="mt-6 text-white/40 text-sm flex items-center gap-2">
            Updated via GitHub API • <span className="text-cyan-400/60">@{GITHUB_USERNAME}</span>
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

export default GitHubActivity;