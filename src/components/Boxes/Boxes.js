import React, { useState } from 'react';
import { animated, useTrail } from 'react-spring';

const Boxes = () => {
  const [on, toggle] = useState(false);
  const trail = useTrail(5, {
    opacity: on ? 0 : 1,
    transform: on ? 'scale(0.3)' : 'scale(1)'

    // from: {
    //   opacity: 0
    // },
    // to: {
    //   opacity: 1
    // }
  });
  return (
    <>
      <button onClick={() => toggle(!on)}>Toggle</button>

      <div className="boxes-grid">
        {trail.map((animation, i) => (
          <animated.div key={i} className="box" style={animation} />
        ))}
      </div>
    </>
  );
};

export default Boxes;

// import React from 'react';
// import { animated, useSprings } from 'react-spring';

// const items = [0.5, 0.3, 0.2, 0.7, 1];

// const Boxes = () => {
//   const springs = useSprings(
//     items.length,
//     items.map(item => ({
//       from: {
//         opacity: 0
//       },
//       to: {
//         opacity: item
//       }
//     }))
//   );
//   return (
//     <div className="boxes-grid">
//       {springs.map((animation, i) => (
//         <animated.div key={i} className="box" style={animation} />
//       ))}
//     </div>
//   );
// };

// export default Boxes;
