// interface Props {
//   category: string;
// }

// const TileContainer2: React.FC<Props> = (Props) => {
//   return (
//     <div className="container">
//       <h2>{Props.category} projects</h2>
//       stringy
//       <div className="row justify-content-center no-wrap">
//         {info2.map((item) =>
//           item.featured ? (
//             <div className="col col-lg-4">
//               <ProjectTile
//                 id={item.id}
//                 title={item.title}
//                 description={item.description}
//                 image={item.image}
//               />
//             </div>
//           ) : null
//         )}
//       </div>
//     </div>
//   );
// };

function test() {
  return <h2>test works</h2>;
}

const numberman = (a: number) => {
  return a + 1;
};

console.log(numberman(524));
