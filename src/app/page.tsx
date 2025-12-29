"use client";

import { useSelector } from "react-redux";
import { TokenTable } from "./components/organisms/TokenTable";
import { RootState } from "./store";
import { useWebSocketMock } from "./hooks/useWebSocketMock";
import { FaBolt } from "react-icons/fa";
import { useState } from "react";
import { CommonModal } from "./components/atom/Model";
import { FaApple, FaAndroid, FaWindows, FaLinux } from "react-icons/fa";

type PType = "P1" | "P2" | "P3";

export default function Page() {
  useWebSocketMock();


  const dropList = [
    { label: "20%", icon: <FaApple /> },
    { label: "0.001", icon: <FaAndroid /> },
    { label: "0.01", icon: <FaWindows /> },
    { label: "off", icon: <FaLinux /> },
  ] as const;


  const tokensA = useSelector((state: RootState) =>
    Object.values(state.tokens.tokensA)
  );
  const tokensB = useSelector((state: RootState) =>
    Object.values(state.tokens.tokensB)
  );
  const tokensC = useSelector((state: RootState) =>
    Object.values(state.tokens.tokensC)
  );

  const columns = [
    { title: "New Pair", tokens: tokensA },
    { title: "Final Stretch", tokens: tokensB },
    { title: "Migrated", tokens: tokensC },
  ] as const;

  const [selectedByColumn, setSelectedByColumn] = useState<
    Record<string, PType>
  >({
    "New Pair": "P1",
    "Final Stretch": "P1",
    "Migrated": "P1",
  });

  const [modalColumn, setModalColumn] = useState<string | null>(null);
console.log(tokensA,'tokensA')
  return (
    <div className="max-w-full mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {columns.map((col) => (
          <div
            key={col.title}
            className="w-full rounded-lg border border-gray-800 bg-[#101114]"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-1 border-b border-gray-800">
              <h2 className="text-lg font-semibold text-white">
                {col.title}
              </h2>

              {/* Right Controls */}
              <div className="relative group">
                <div className="flex items-center gap-4 rounded-full border border-gray-700 py-0.5 px-4 text-xs text-gray-400">
                  <div className="flex items-center gap-1">
                    <FaBolt />
                    <span>0</span>
                  </div>

                  {(["P1", "P2", "P3"] as const).map((p) => (
                    <span
                      key={p}
                      onMouseEnter={() =>
                        setSelectedByColumn((prev) => ({
                          ...prev,
                          [col.title]: p,
                        }))
                      }
                      onClick={() => setModalColumn(col.title)}
                      className={`cursor-pointer font-semibold transition-colors
                        ${selectedByColumn[col.title] === p
                          ? "text-blue-500"
                          : "text-white"
                        }
                        hover:text-blue-400`}
                    >
                      {p}
                    </span>
                  ))}
                </div>

                {/* Dropdown */}
                <div
                  className="absolute right-0 mt-2 w-24 rounded-md border border-gray-700
                  bg-[#0e0f11] text-xs shadow-lg z-50
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible
                  transition-all duration-150"
                >
                  {dropList.map((d, index) => (
                    <div
                      key={d.label}
                      className={`flex items-center gap-2 px-2 py-1.5 cursor-pointer hover:bg-gray-800 ${index === 1 ? "text-yellow-400 font-semibold" : "text-gray-400"}`}
                    >
                      {d.icon}
                      <span>{d.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Table */}
            <TokenTable tokens={col.tokens} />
          </div>
        ))}
      </div>

      {/* ✅ Modal */}
      {modalColumn && <CommonModal
        isOpen={!!modalColumn}
        title={"Trade Settings"}
        onClose={() => setModalColumn(null)}
      />}
    </div>
  );
}
