// import Image from "next/image";
// import { cn } from "@/utils/cn";
// import { Destination } from "../data";

// type DestinationCardProps = {
//   data: Destination;
//   isExpanded: boolean;
//   isCollapsed: boolean;
//   onToggle: () => void;
// };

// export function DestinationCard({ data, isExpanded, isCollapsed, onToggle }: DestinationCardProps) {
//   return (
//     <article 
//       onClick={onToggle}
//       className={cn(
//         "group relative flex flex-col overflow-hidden rounded-[1.5rem] bg-[#FAFAFA] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",
//         // Mobile Layout
//         isExpanded ? "w-full h-[400px] shadow-xl cursor-default" : "w-full h-[400px] cursor-pointer hover:-translate-y-1 hover:shadow-xl",
        
//         // Desktop Layout (Fixed glitch by using flex basis [0_0_100px] instead of width/flex-none)
//         isExpanded ? "lg:flex-[10_1_0%] lg:h-[400px] lg:hover:translate-y-0" : 
//         isCollapsed ? "hidden lg:flex lg:flex-[0_0_100px] lg:h-[400px] lg:cursor-pointer lg:hover:bg-gray-200 lg:hover:translate-y-0 lg:hover:shadow-none" : 
//         "lg:flex-[3_1_0%] lg:h-[400px]"
//       )}
//     >
//       {/* BACKGROUND IMAGE CONTAINER */}
//       <div className={cn(
//         "absolute top-0 left-0 w-full z-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",
//         isExpanded ? "h-[120px] lg:h-[100px]" : "h-full"
//       )}>
//         <Image
//           src={data.image}
//           alt={data.city}
//           fill
//           className={cn("object-cover transition-transform duration-700", !isExpanded && "group-hover:scale-105")}
//           sizes="(max-width: 768px) 100vw, 33vw"
//         />
//         {/* Dark overlay for expanded state image header */}
//         <div className={cn(
//           "absolute inset-0 bg-gradient-to-t from-navy/90 to-transparent transition-opacity duration-700",
//           isExpanded ? "opacity-100" : "opacity-0"
//         )} />
//       </div>

//       {/* TOP RIGHT CUTOUT (Always visible on top of image) */}
//       <div className="absolute -right-1 -top-1 z-30 rounded-bl-[1.25rem] bg-white p-2.5 sm:p-3">
//         <div className="absolute -bottom-4 right-0 h-4 w-4 rounded-tr-[1rem] bg-transparent shadow-[4px_-4px_0_0_#ffffff]" />
//         <div className="absolute -left-4 top-0 h-4 w-4 rounded-tr-[1rem] bg-transparent shadow-[4px_-4px_0_0_#ffffff]" />
//         <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold text-white transition-colors duration-300 group-hover:bg-gold-soft sm:h-9 sm:w-9">
//           {/* Arrow rotating 45deg on hover OR when expanded */}
//           <svg 
//             viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" 
//             className={cn(
//               "h-4 w-4 transition-transform duration-300",
//               isExpanded ? "rotate-45" : "group-hover:rotate-45"
//             )}
//           >
//             <path d="M5 12h14M12 5l7 7-7 7"/>
//           </svg>
//         </div>
//       </div>

//       {/* =======================================
//           1. NORMAL STATE CONTENT
//       ======================================== */}
//       <div className={cn(
//         "absolute inset-0 z-10 flex flex-col justify-end bg-gradient-to-t from-navy/90 via-navy/30 to-transparent p-5 sm:p-6 transition-opacity duration-500", 
//         (isExpanded || isCollapsed) ? "opacity-0 pointer-events-none" : "opacity-100 delay-300"
//       )}>
//         <p className="text-xs font-semibold uppercase tracking-wider text-white/80">{data.route}</p>
//         <h3 className="mt-1 font-serif text-2xl font-bold text-white sm:text-3xl">{data.city}</h3>
//         <div className="mt-3 flex w-fit items-center gap-1.5 rounded-full bg-white/20 px-3 py-1.5 backdrop-blur-md">
//           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 text-white"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
//           <span className="text-[11px] font-semibold text-white sm:text-xs">{data.timeline}</span>
//         </div>
//       </div>

//       {/* =======================================
//           2. COLLAPSED STATE CONTENT (Vertical)
//       ======================================== */}
//       {/* Moved hidden to base class to allow fade animation to work properly */}
//       <div className={cn(
//         "absolute inset-0 z-10 hidden lg:flex flex-col items-center justify-between pb-6 pt-20 bg-black/40 transition-opacity duration-500", 
//         isCollapsed ? "opacity-100 delay-300" : "opacity-0 pointer-events-none"
//       )}>
//         <span 
//           className="text-white font-serif text-3xl font-bold tracking-widest whitespace-nowrap" 
//           style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
//         >
//           {data.city}
//         </span>
//         <div className="flex w-fit items-center gap-1.5 rounded-full bg-white/20 px-2 py-3 backdrop-blur-md" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
//           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 text-white rotate-90"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
//           <span className="text-[11px] font-semibold text-white mt-1">{data.timeline}</span>
//         </div>
//       </div>

//       {/* =======================================
//           3. EXPANDED STATE CONTENT
//       ======================================== */}
//       {/* Changed to absolute inset-0 so content stays perfectly still while the card width grows */}
//       <div className={cn(
//         "absolute inset-0 z-20 flex flex-col w-full h-full transition-opacity duration-500",
//         isExpanded ? "opacity-100 delay-300" : "opacity-0 pointer-events-none"
//       )}>
        
//         {/* Expanded Header (Over Image) */}
//         <div className="h-[120px] lg:h-[100px] shrink-0 p-5 sm:p-6 lg:px-8 flex items-end pb-4">
//           <div className="flex flex-wrap items-center gap-3 lg:gap-4">
//             <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white">{data.city}</h3>
//             <div className="flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1.5 backdrop-blur-md">
//               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 text-white"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
//               <span className="text-[11px] font-medium text-white sm:text-xs">{data.timeline}</span>
//             </div>
//           </div>
//         </div>

//         {/* Expanded Body (White Area - Exact Image Layout) */}
//         <div className="flex-1 bg-white p-5 sm:p-6 lg:px-8 lg:py-5 overflow-y-auto min-w-[300px] lg:min-w-[600px] custom-scrollbar">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 h-full">
            
//             {/* Left Column (Requirements & Included Services) */}
//             <div className="flex flex-col gap-4 lg:gap-5">
//               <div>
//                 <h4 className="text-[15px] font-medium text-navy mb-3">Requirements</h4>
//                 <ul className="space-y-1 text-[14px] text-navy font-medium">
//                   {data.requirements.map((req, idx) => (
//                     <li key={idx} className="flex items-start gap-1.5">
//                       <span className="text-navy font-semibold text-base leading-tight">✓</span> 
//                       <span className="leading-tight">{req}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
              
//               <div>
//                 <h4 className="text-[15px] font-medium text-navy mb-3">Included Services</h4>
//                 <ul className="space-y-1 text-[14px] text-navy font-medium">
//                   {data.includedServices.map((srv, idx) => (
//                     <li key={idx} className="flex items-start gap-1.5">
//                       <span className="text-navy font-bold text-lg leading-[14px] mt-0.5">•</span> 
//                       <span className="leading-tight">{srv}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>

//             {/* Right Column (Need-to-Know) */}
//             <div className="flex flex-col gap-4 lg:gap-5">
//               <div>
//                 <h4 className="text-[15px] font-medium text-navy mb-3 lg:mb-4">Need-to-Know</h4>
                
//                 <div className="mb-4 lg:mb-5">
//                   <p className="text-[14px] text-navy font-medium leading-tight">Quarantine</p>
//                   <p className="text-[14px] text-navy/80 font-normal leading-tight mt-0.5">{data.quarantine}</p>
//                 </div>
                
//                 <div>
//                   <p className="text-[14px] text-navy font-medium leading-tight">Best Time to Start</p>
//                   <p className="text-[14px] text-navy/80 font-normal leading-tight mt-0.5">{data.bestTime}</p>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>

//       </div>
//     </article>
//   );
// }

import Image from "next/image";
import { cn } from "@/utils/cn";
import { Destination } from "../data";

type DestinationCardProps = {
  data: Destination;
  isExpanded: boolean;
  isCollapsed: boolean;
  onToggle: () => void;
};

export function DestinationCard({ data, isExpanded, isCollapsed, onToggle }: DestinationCardProps) {
  return (
    <article 
      onClick={onToggle}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-[1.5rem] bg-[#FAFAFA] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",
        
        // Strictly Fixed Height for all states to prevent vertical jumping
        "h-[400px]",

        // Mobile Layout
        isExpanded ? "w-full shadow-xl cursor-default" : "w-full cursor-pointer hover:-translate-y-1 hover:shadow-xl",
        
        // Desktop Layout (Flexbox flex-grow magic fixed at 400px)
        isExpanded ? "lg:flex-[10_1_0%] lg:hover:translate-y-0" : 
        isCollapsed ? "hidden lg:flex lg:flex-[0_0_100px] lg:cursor-pointer lg:hover:bg-gray-200 lg:hover:translate-y-0 lg:hover:shadow-none" : 
        "lg:flex-[3_1_0%]"
      )}
    >
      {/* =======================================
          BACKGROUND IMAGE (Expands Top to Bottom)
      ======================================== */}
      <div className={cn(
        "absolute top-0 left-0 w-full z-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",
        isExpanded ? "h-[120px] lg:h-[100px]" : "h-full"
      )}>
        <Image
          src={data.image}
          alt={data.city}
          fill
          className={cn("object-cover transition-transform duration-700", !isExpanded && "group-hover:scale-105")}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {/* Dark overlay for expanded state image header */}
        <div className={cn(
          "absolute inset-0 bg-gradient-to-t from-navy/90 to-transparent transition-opacity duration-700",
          isExpanded ? "opacity-100" : "opacity-0"
        )} />
      </div>

      {/* =======================================
          TOP RIGHT CUTOUT ARROW
      ======================================== */}
      <div className="absolute -right-1 -top-1 z-30 rounded-bl-[1.25rem] bg-white p-2.5 sm:p-3">
        <div className="absolute -bottom-4 right-0 h-4 w-4 rounded-tr-[1rem] bg-transparent shadow-[4px_-4px_0_0_#ffffff]" />
        <div className="absolute -left-4 top-0 h-4 w-4 rounded-tr-[1rem] bg-transparent shadow-[4px_-4px_0_0_#ffffff]" />
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold text-white transition-colors duration-300 group-hover:bg-gold-soft sm:h-9 sm:w-9">
          {/* Arrow rotating 45deg on hover OR when expanded */}
          <svg 
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" 
            className={cn(
              "h-4 w-4 transition-transform duration-300",
              isExpanded ? "rotate-45" : "group-hover:rotate-45"
            )}
          >
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>
      </div>

      {/* =======================================
          1. NORMAL STATE CONTENT
      ======================================== */}
      {/* Slides down gracefully when expanding to avoid overlaps */}
      <div className={cn(
        "absolute inset-0 z-10 flex flex-col justify-end bg-gradient-to-t from-navy/90 via-navy/30 to-transparent p-5 sm:p-6 transition-all duration-500", 
        (isExpanded || isCollapsed) ? "opacity-0 translate-y-8 pointer-events-none" : "opacity-100 translate-y-0 delay-300"
      )}>
        <p className="text-xs font-semibold uppercase tracking-wider text-white/80">{data.route}</p>
        <h3 className="mt-1 font-serif text-2xl font-bold text-white sm:text-3xl">{data.city}</h3>
        <div className="mt-3 flex w-fit items-center gap-1.5 rounded-full bg-white/20 px-3 py-1.5 backdrop-blur-md">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 text-white"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
          <span className="text-[11px] font-semibold text-white sm:text-xs">{data.timeline}</span>
        </div>
      </div>

      {/* =======================================
          2. COLLAPSED STATE CONTENT (Vertical)
      ======================================== */}
      <div className={cn(
        "absolute inset-0 z-10 flex-col items-center justify-between pb-6 pt-20 bg-black/40 transition-all duration-500", 
        isCollapsed ? "opacity-100 translate-y-0 delay-300 hidden lg:flex" : "opacity-0 translate-y-8 pointer-events-none hidden"
      )}>
        <span 
          className="text-white font-serif text-3xl font-bold tracking-widest whitespace-nowrap" 
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          {data.city}
        </span>
        <div className="flex w-fit items-center gap-1.5 rounded-full bg-white/20 px-2 py-3 backdrop-blur-md" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 text-white rotate-90"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
          <span className="text-[11px] font-semibold text-white mt-1">{data.timeline}</span>
        </div>
      </div>

      {/* =======================================
          3. EXPANDED HEADER (Over Image)
      ======================================== */}
      <div className={cn(
        "absolute top-0 left-0 w-full h-[120px] lg:h-[100px] z-20 flex items-end p-5 sm:p-6 lg:px-8 pb-4 transition-all duration-500",
        isExpanded ? "opacity-100 translate-y-0 delay-300" : "opacity-0 -translate-y-4 pointer-events-none"
      )}>
        <div className="flex flex-wrap items-center gap-3 lg:gap-4">
          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white">{data.city}</h3>
          <div className="flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1.5 backdrop-blur-md">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 text-white"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            <span className="text-[11px] font-medium text-white sm:text-xs">{data.timeline}</span>
          </div>
        </div>
      </div>

      {/* =======================================
          4. EXPANDED BODY (White Area - Slides Down)
      ======================================== */}
      {/* Yeh box hamesha neechay attach rehta hai.
        Jab close hoga toh translate-y-full ke zariye neeche slide hoke gayab ho jayega!
      */}
      <div className={cn(
        "absolute bottom-0 left-0 w-full z-20 bg-white transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",
        "h-[calc(100%-120px)] lg:h-[calc(100%-100px)]",
        isExpanded ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
      )}>
        <div className="h-full w-full p-5 sm:p-6 lg:px-8 lg:py-5 overflow-y-auto min-w-[300px] lg:min-w-[600px] custom-scrollbar">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 h-full">
            
            {/* Left Column (Requirements & Included Services) */}
            <div className="flex flex-col gap-4 lg:gap-5">
              <div>
                <h4 className="text-[15px] font-medium text-navy mb-3">Requirements</h4>
                <ul className="space-y-1 text-[14px] text-navy font-medium">
                  {data.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-navy font-semibold text-base leading-tight">✓</span> 
                      <span className="leading-tight">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-[15px] font-medium text-navy mb-3">Included Services</h4>
                <ul className="space-y-1 text-[14px] text-navy font-medium">
                  {data.includedServices.map((srv, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-navy font-bold text-lg leading-[14px] mt-0.5">•</span> 
                      <span className="leading-tight">{srv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column (Need-to-Know) */}
            <div className="flex flex-col gap-4 lg:gap-5">
              <div>
                <h4 className="text-[15px] font-medium text-navy mb-3 lg:mb-4">Need-to-Know</h4>
                
                <div className="mb-4 lg:mb-5">
                  <p className="text-[14px] text-navy font-medium leading-tight">Quarantine</p>
                  <p className="text-[14px] text-navy/80 font-normal leading-tight mt-0.5">{data.quarantine}</p>
                </div>
                
                <div>
                  <p className="text-[14px] text-navy font-medium leading-tight">Best Time to Start</p>
                  <p className="text-[14px] text-navy/80 font-normal leading-tight mt-0.5">{data.bestTime}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </article>
  );
}