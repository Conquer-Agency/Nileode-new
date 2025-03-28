// import { ResponsiveLine } from "@nivo/line";

// const locationData = [
//   {
//     id: "japan",
//     color: "hsl(107, 70%, 50%)",
//     data: [
//       {
//         x: "Landing page",
//         y: 211,
//       },
//       {
//         x: "E commerce website",
//         y: 226,
//       },
//       {
//         x: "Custom Web App",
//         y: 207,
//       },
//       {
//         x: "Maintenance",
//         y: 215,
//       },
//       {
//         x: "Mobile App",
//         y: 244,
//       },
//       {
//         x: "Desktop App",
//         y: 243,
//       },
//       {
//         x: "Specialized Consulting",
//         y: 171,
//       },
//     ],
//   },
//   {
//     id: "france",
//     color: "hsl(232, 70%, 50%)",
//     data: [
//       {
//         x: "Landing page",
//         y: 232,
//       },
//       {
//         x: "E commerce website",
//         y: 166,
//       },
//       {
//         x: "Custom Web App",
//         y: 107,
//       },
//       {
//         x: "Maintenance",
//         y: 163,
//       },
//       {
//         x: "Mobile App",
//         y: 263,
//       },
//       {
//         x: "Desktop App",
//         y: 179,
//       },
//       {
//         x: "Specialized Consulting",
//         y: 109,
//       },
//     ],
//   },
//   {
//     id: "us",
//     color: "hsl(211, 70%, 50%)",
//     data: [
//       {
//         x: "Landing page",
//         y: 135,
//       },
//       {
//         x: "E commerce website",
//         y: 204,
//       },
//       {
//         x: "Custom Web App",
//         y: 158,
//       },
//       {
//         x: "Maintenance",
//         y: 4,
//       },
//       {
//         x: "Mobile App",
//         y: 63,
//       },
//       {
//         x: "Desktop App",
//         y: 162,
//       },
//       {
//         x: "Specialized Consulting",
//         y: 204,
//       },
//     ],
//   },
//   {
//     id: "germany",
//     color: "hsl(52, 70%, 50%)",
//     data: [
//       {
//         x: "Landing page",
//         y: 205,
//       },
//       {
//         x: "E commerce website",
//         y: 129,
//       },
//       {
//         x: "Custom Web App",
//         y: 14,
//       },
//       {
//         x: "Maintenance",
//         y: 219,
//       },
//       {
//         x: "Mobile App",
//         y: 66,
//       },
//       {
//         x: "Desktop App",
//         y: 207,
//       },
//       {
//         x: "Specialized Consulting",
//         y: 136,
//       },
//     ],
//   },
//   {
//     id: "norway",
//     color: "hsl(163, 70%, 50%)",
//     data: [
//       {
//         x: "Landing page",
//         y: 185,
//       },
//       {
//         x: "E commerce website",
//         y: 135,
//       },
//       {
//         x: "Custom Web App",
//         y: 11,
//       },
//       {
//         x: "Maintenance",
//         y: 210,
//       },
//       {
//         x: "Mobile App",
//         y: 256,
//       },
//       {
//         x: "Desktop App",
//         y: 143,
//       },
//       {
//         x: "Specialized Consulting",
//         y: 135,
//       },
//     ],
//   },
// ];


// const SavingsChart = () => {
//   return (
//     <div className="w-full h-[500px] bg-white shadow-lg p-4 rounded-lg">
//       <ResponsiveLine
//         data={locationData}
//         margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
//         xScale={{ type: "point" }}
//         yScale={{
//           type: "linear",
//           min: "auto",
//           max: "auto",
//           stacked: false,
//           reverse: false,
//         }}
//         yFormat=" >-.2f"
//         axisTop={null}
//         axisRight={null}
//         axisBottom={{
//           tickSize: 5,
//           tickPadding: 5,
//           tickRotation: 0,
//           legend: "Category",
//           legendOffset: 36,
//           legendPosition: "middle",
//         }}
//         axisLeft={{
//           tickSize: 5,
//           tickPadding: 5,
//           tickRotation: 0,
//           legend: "Value",
//           legendOffset: -40,
//           legendPosition: "middle",
//         }}
//         pointSize={10}
//         pointColor={{ theme: "background" }}
//         pointBorderWidth={2}
//         pointBorderColor={{ from: "serieColor" }}
//         pointLabel="data.yFormatted"
//         pointLabelYOffset={-12}
//         enableTouchCrosshair={true}
//         useMesh={true}
//         legends={[
//           {
//             anchor: "bottom-right",
//             direction: "column",
//             justify: false,
//             translateX: 100,
//             translateY: 0,
//             itemsSpacing: 0,
//             itemDirection: "left-to-right",
//             itemWidth: 80,
//             itemHeight: 20,
//             itemOpacity: 0.75,
//             symbolSize: 12,
//             symbolShape: "circle",
//             symbolBorderColor: "rgba(0, 0, 0, .5)",
//             effects: [
//               {
//                 on: "hover",
//                 style: {
//                   itemBackground: "rgba(0, 0, 0, .03)",
//                   itemOpacity: 1,
//                 },
//               },
//             ],
//           },
//         ]}
//       />
//     </div>
//   );
// };

// export default SavingsChart;
