/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useRef, useEffect } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  ComposedChart,
  Bar,
} from "recharts";
import { DollarSign, Percent } from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

const locationData = [
  {
    country: "United States",
    savingsPercentage: 0,
    hourlyRate: 150,
    color: "bg-blue-400",
    gradient: "from-blue-400 to-blue-500",
  },
  {
    country: "Philippines",
    savingsPercentage: 70,
    hourlyRate: 85,
    color: "bg-blue-300",
    gradient: "from-blue-300 to-blue-400",
  },
  {
    country: "Ukraine",
    savingsPercentage: 75,
    hourlyRate: 37.5,
    color: "bg-indigo-300",
    gradient: "from-indigo-300 to-indigo-400",
  },
  {
    country: "India",
    savingsPercentage: 80,
    hourlyRate: 30,
    color: "bg-violet-300",
    gradient: "from-violet-300 to-violet-400",
  },
  {
    country: "Ethiopia",
    savingsPercentage: 85,
    hourlyRate: 22.5,
    color: "bg-purple-300",
    gradient: "from-purple-300 to-purple-400",
  },
];

const AnimatedBar = (props: any) => {
  const { fill, x, width, index, animationActive } = props;

  const barVariants = {
    hidden: { height: 0, y: props.y + props.height },
    visible: {
      height: props.height,
      y: props.y,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.rect
      x={x}
      width={width}
      fill={fill}
      rx={4}
      ry={4}
      initial="hidden"
      animate={animationActive ? "visible" : "hidden"}
      variants={barVariants}
    />
  );
};

function CostSaving() {
  const [view, setView] = useState<"rate" | "savings">("rate");
  const [animationActive, setAnimationActive] = useState(false);
  const chartRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(chartRef, { once: false, amount: 0.6 });

  useEffect(() => {
    if (isInView) {
      setAnimationActive(true);
    } else {
      setAnimationActive(false);
    }
  }, [isInView, view]);

  return (
    <div className="min-h-screen bg-gray-100 p-2 md:p-8 font-poppins">
      <div className="w-11/12 mx-auto">
        <div className="rounded-xl shadow-sm md:p-6">
          <div className="">
            <div className="text-center my-12 projects-heading">
              <motion.h1
                className="text-5xl font-poppins font-semibold"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                Save Up To 85% On Labor Costs
              </motion.h1>
              <motion.p
                className="text-xl max-w-3xl mx-auto font-railway text-gray-600 mt-3 italic"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                As a business process outsourcing (BPO) company with offices
                worldwide, we help clients reduce operating costs while
                maintaining excellence in service delivery.
              </motion.p>
            </div>
            <div className="flex justify-between items-center mb-8 flex-col gap-8 md:flex-row">
              <h1 className="text-2xl font-semibold">Location Cost Analysis</h1>
              <div className="flex items-center gap-4 md:gap-0 ">
                <div className=" flex gap-2 bg-gray-200 p-1 rounded-lg">
                  <button
                    onClick={() => setView("rate")}
                    className={cn(
                      "px-3 py-1 rounded-md relative flex items-center gap-2",
                      "transition-colors duration-200 w-full"
                    )}
                  >
                    {view === "rate" && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-white shadow-sm rounded-md"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                    <DollarSign className="w-4 h-4 relative z-10" />
                    <span className="relative z-10">Rate</span>
                  </button>
                  <button
                    onClick={() => setView("savings")}
                    className={cn(
                      "px-3 py-1 rounded-md relative flex items-center gap-2",
                      "transition-colors duration-200"
                    )}
                  >
                    {view === "savings" && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-white shadow-sm rounded-md"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                    <Percent className="w-4 h-4 relative z-10" />
                    <span className="relative z-10">Savings</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            <AnimatePresence mode="wait">
              {locationData.map((location, index) => (
                <motion.div
                  key={`${location.country}-${view}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card className="p-4">
                    <h3 className="text-gray-600 text-sm mb-2">
                      {location.country}
                    </h3>
                    <motion.div
                      key={view}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-baseline gap-3 "
                    >
                      {view === "rate" ? (
                        <>
                          <span className="text-2xl font-semibold">
                            ${location.hourlyRate}
                          </span>
                          <span className="text-sm text-gray-500">
                            per hour
                          </span>
                        </>
                      ) : (
                        <>
                          <span className="text-2xl font-semibold">
                            {location.savingsPercentage}%
                          </span>
                          <span className="text-sm text-gray-500">savings</span>
                        </>
                      )}
                    </motion.div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="h-[400px]" ref={chartRef}>
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={locationData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis
                  dataKey="country"
                  stroke="#9CA3AF"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                {view === "rate" ? (
                  <YAxis
                    yAxisId="left"
                    stroke="#3B82F6"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    domain={[0, 160]}
                    label={{
                      value: "Hourly Rate ($)",
                      angle: -90,
                      position: "insideLeft",
                      offset: 0,
                    }}
                  />
                ) : (
                  <YAxis
                    yAxisId="left"
                    orientation="left"
                    stroke="#10B981"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    domain={[0, 100]}
                    label={{
                      value: "Savings (%)",
                      angle: -90,
                      position: "insideLeft",
                      offset: 0,
                    }}
                  />
                )}
                <Tooltip />
                <Legend />
                {view === "rate" ? (
                  <Bar
                    yAxisId="left"
                    dataKey="hourlyRate"
                    name="Hourly Rate"
                    fill="#3B82F6"
                    radius={[4, 4, 0, 0]}
                    animationDuration={0} // Disable default animation
                    shape={<AnimatedBar animationActive={animationActive} />}
                  />
                ) : (
                  <Bar
                    yAxisId="left"
                    dataKey="savingsPercentage"
                    name="Savings Percentage"
                    fill="#10B981"
                    radius={[4, 4, 0, 0]}
                    animationDuration={0} // Disable default animation
                    shape={<AnimatedBar animationActive={animationActive} />}
                  />
                )}
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CostSaving;
