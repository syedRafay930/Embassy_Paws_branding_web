// import { Container } from "@/components/ui";
// import { DestinationCard } from "./DestinationCard";
// import { DESTINATIONS } from "../data";

// export function DestinationGrid() {
//   return (
//     <section className="bg-[#FAFAFA] pb-16 pt-16 sm:pb-20 sm:pt-20">
//       <Container>
//         {/* Grid Section */}
//         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
//           {DESTINATIONS.map((dest) => (
//             <DestinationCard
//               key={dest.id}
//               id={dest.id}
//               route={dest.route}
//               city={dest.city}
//               timeline={dest.timeline}
//               image={dest.image}
//             />
//           ))}
//         </div>
//       </Container>
//     </section>
//   );
// }







'use client'; 

import { useState, useRef, useEffect } from "react";
import { Container } from "@/components/ui";
import { DestinationCard } from "./DestinationCard";
import { DESTINATIONS } from "../data";

function chunkArray<T>(array: T[], size: number): T[][] {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

export function DestinationGrid() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const rows = chunkArray(DESTINATIONS, 3);
  const gridRef = useRef<HTMLDivElement>(null);

  // Bahar click karne par card band karne ka logic
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (gridRef.current && !gridRef.current.contains(event.target as Node)) {
        setExpandedId(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="bg-[#FAFAFA] pb-16 pt-16 sm:pb-20 sm:pt-20">
      <Container>
        <div ref={gridRef} className="flex flex-col gap-6 lg:gap-8">
          
          {rows.map((row, rowIndex) => {
            const hasExpandedInRow = row.some(d => d.id === expandedId);

            return (
              <div 
                key={rowIndex} 
                className="flex flex-col lg:flex-row gap-6 lg:gap-8 w-full"
              >
                {row.map((dest) => (
                  <DestinationCard
                    key={dest.id}
                    data={dest}
                    isExpanded={expandedId === dest.id}
                    isCollapsed={hasExpandedInRow && expandedId !== dest.id}
                    // Jab card expand ho jaye, tab khud ko click karne se band nahi hoga
                    onToggle={() => {
                      if (expandedId !== dest.id) setExpandedId(dest.id);
                    }}
                  />
                ))}
              </div>
            );
          })}
          
        </div>
      </Container>
    </section>
  );
}