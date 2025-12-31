import { TokenRow } from "./TokenRow";
import { Token, TokenTableProps } from "../../types/interface";
import { memo } from "react";


export const TokenTable = memo(({ tokens }: TokenTableProps) => {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-800 w-full bg-[#101114]">
      {tokens.map(token => (
        <TokenRow key={token.id} token={token} />
      ))}
    </div>
  );
});

